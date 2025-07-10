import { toast } from "sonner";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  setDoc,
  runTransaction,
  increment,
} from "firebase/firestore";

import BasicInfoForm from "@/components/forms/createListing/BasicInfoForm";
import GPSCoordsForm from "@/components/forms/createListing/GPSCoordsForm";
import MiscItemsForm from "@/components/forms/createListing/MiscItemsForm";
import ImageUploadForm from "@/components/forms/createListing/ImageUploadForm";
import NearbyPointsForm from "@/components/forms/createListing/NearbyPointsForm";
import VisitDetailsForm from "@/components/forms/createListing/VisitDetailsForm";
import PropertySpecsForm from "@/components/forms/createListing/PropertySpecsForm";
import PageTitleBlockForm from "@/components/forms/createListing/PageTitleBlockForm";
import AmortizationSchedulePreview from "../components/admin/AmortizationSchedulePreview";
import DescriptionSectionForm from "@/components/forms/createListing/DescriptionSectionForm";
import PropertyStatusForm from "@/components/forms/createListing/PropertyStatusForm";

import coveredBridgeLogo from "/logo-sm-4.png";
import generateIncrementalId from "../../utils/idHelpers";

const CreateListing = () => {
  const [manualIdLookup, setManualIdLookup] = useState(false);
  const [manualPropertyId, setManualPropertyId] = useState("");

  const handleManualFetch = async () => {
    setIsLoading(true);
    try {
      const snap = await getDoc(
        doc(db, "properties", manualPropertyId.toLowerCase())
      );
      if (snap.exists()) {
        setFormState(snap.data());
        toast.success("Property loaded.");
      } else {
        toast.error("Property not found.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error loading document.");
    } finally {
      setIsLoading(false);
    }
  };

  const { propertyId } = useParams();
  const isEditMode = !!propertyId;

  const [formState, setFormState] = useState({ miscItems: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isEditMode) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const snap = await getDoc(doc(db, "properties", propertyId));
        if (snap.exists()) setFormState(snap.data());
      } catch (err) {
        console.error("Failed to fetch property:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isEditMode, propertyId]);

  const handleFormUpdate = (key, value) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    let newId = propertyId || formState.propertyId;

    if (
      !newId &&
      formState.PTBContent?.stateName &&
      formState.PTBContent?.countyName
    ) {
      newId = await generateIncrementalId(
        formState.PTBContent.stateName.toLowerCase(),
        formState.PTBContent.countyName.toLowerCase()
      );
    }

    const fullForm = {
      ...formState,
      propertyId: newId,
      miscItems: (formState.miscItems || [])
        .filter((m) => typeof m === "object" && m.text?.trim())
        .map((m) => ({
          ...m,
          text: m.text.trim(),
          type: m.type?.trim() || "",
          url: m.url?.trim() || "",
        })),
    };

    try {
      await setDoc(doc(db, "properties", newId), fullForm, { merge: true });

      const state = formState.PTBContent?.stateName?.toLowerCase();
      const county = formState.PTBContent?.countyName;
      const stateAbbr = getStateAbbreviation(state);

      if (state && county) {
        const counterId = `${stateAbbr}_${county.replace(/\s+/g, "_")}`;
        const counterRef = doc(db, "counters", counterId);

        await runTransaction(db, async (transaction) => {
          const snap = await transaction.get(counterRef);
          if (!snap.exists()) {
            transaction.set(counterRef, { value: 1 });
          } else {
            transaction.update(counterRef, { value: increment(1) });
          }
        });
      }

      setFormState(fullForm);
      toast.success("Listing saved successfully!");
    } catch (err) {
      console.error("Save failed:", err);
      toast.error("Error saving document");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStateAbbreviation = (state) => {
    const states = {
      alabama: "AL",
      alaska: "AK",
      arizona: "AZ",
      arkansas: "AR",
      california: "CA",
      colorado: "CO",
      connecticut: "CT",
      delaware: "DE",
      florida: "FL",
      georgia: "GA",
      hawaii: "HI",
      idaho: "ID",
      illinois: "IL",
      indiana: "IN",
      iowa: "IA",
      kansas: "KS",
      kentucky: "KY",
      louisiana: "LA",
      maine: "ME",
      maryland: "MD",
      massachusetts: "MA",
      michigan: "MI",
      minnesota: "MN",
      mississippi: "MS",
      missouri: "MO",
      montana: "MT",
      nebraska: "NE",
      nevada: "NV",
      new_hampshire: "NH",
      new_jersey: "NJ",
      new_mexico: "NM",
      new_york: "NY",
      north_carolina: "NC",
      north_dakota: "ND",
      ohio: "OH",
      oklahoma: "OK",
      oregon: "OR",
      pennsylvania: "PA",
      rhode_island: "RI",
      south_carolina: "SC",
      south_dakota: "SD",
      tennessee: "TN",
      texas: "TX",
      utah: "UT",
      vermont: "VT",
      virginia: "VA",
      washington: "WA",
      west_virginia: "WV",
      wisconsin: "WI",
      wyoming: "WY",
    };

    return states[state] || state.toUpperCase();
  };

  if (isLoading) return <p className="text-center py-10">Loading...</p>;

  useEffect(() => {
    const isAmortized = formState?.PTBContent?.useAmortized;
    const apr = parseFloat(formState?.PTBContent?.apr);

    if (isAmortized && (!apr || apr <= 0)) {
      toast.warning(
        "APR must be greater than 0 for amortized payment calculation."
      );
    }
  }, [formState?.PTBContent?.useAmortized, formState?.PTBContent?.apr]);

  return (
    <div className="bg-cyan-50 px-6 pt-4 pb-8 max-w-7xl mx-auto rounded-xl relative -top-[0rem] shadow-md">
      <img
        src={coveredBridgeLogo}
        className="w-full relative top-[0.5rem] max-w-[477px] mr-auto mb-3"
      />
      <h1 className="font-bold text-4xl text-gray-800 mb-2">
        {isEditMode ? "Edit Listing" : "Create New Property Listing"}
      </h1>
      <div className="h-[2px] w-1/3 bg-cyan-700 mb-4"></div>

      <div className="flex items-center justify-between gap-4 mb-4">
        <label className="font-semibold text-sm text-gray-700">
          Manual Document Lookup By propertyId?
        </label>
        <input
          type="checkbox"
          checked={manualIdLookup}
          className="relative mr-auto mt-1"
          onChange={(e) => setManualIdLookup(e.target.checked)}
        />
      </div>

      {manualIdLookup && (
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            className="border px-3 py-2 w-80 text-[#333]"
            placeholder="Enter propertyId"
            value={manualPropertyId}
            onChange={(e) => setManualPropertyId(e.target.value)}
          />
          <button
            className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-800 hover:translate-y-[1px] transition-all duration-[350ms]"
            onClick={handleManualFetch}
          >
            Load Document
          </button>
        </div>
      )}

      <BasicInfoForm formState={formState} onUpdate={handleFormUpdate} />
      <PageTitleBlockForm
        formState={formState}
        onUpdate={handleFormUpdate}
        generateIncrementalId={generateIncrementalId}
      />
      {formState?.PTBContent?.canOwnerFinance && (
        <AmortizationSchedulePreview
          totalPrice={formState.PTBContent.totalPrice}
          term={formState.PTBContent.term}
          depositRatio={0.13}
          apr={formState.PTBContent.apr}
          useAmortized={formState.PTBContent.useAmortized}
        />
      )}
      <PropertyStatusForm formState={formState} onUpdate={handleFormUpdate} />
      <GPSCoordsForm formState={formState} onUpdate={handleFormUpdate} />
      <ImageUploadForm formState={formState} onUpdate={handleFormUpdate} />
      <PropertySpecsForm formState={formState} onUpdate={handleFormUpdate} />
      <DescriptionSectionForm
        formState={formState}
        onUpdate={handleFormUpdate}
      />
      <NearbyPointsForm formState={formState} onUpdate={handleFormUpdate} />
      <VisitDetailsForm formState={formState} onUpdate={handleFormUpdate} />
      <MiscItemsForm formState={formState} onUpdate={handleFormUpdate} />

      <div className="flex justify-end mt-8 gap-4">
        <button
          disabled={isSubmitting}
          className="border-2 border-gray-700 bg-red-400 text-white px-6 py-2 rounded font-semibold hover:bg-white hover:text-gray-700 transition-all"
        >
          Clear Form
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="border-2 border-gray-800 800 text-white px-6 py-2 rounded font-bold hover:bg-cyan-600 transition-all"
        >
          {isSubmitting
            ? "Submitting..."
            : isEditMode
            ? "Update Listing"
            : "Publish Listing"}
        </button>
      </div>
    </div>
  );
};

export default CreateListing;
