import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function ParcelUploadInstructions() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#0c1a1e] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Gray wrapper that contains everything and provides contrast */}
        <div className="rounded-2xl bg-slate-800/70 p-6 shadow-lg ring-1 ring-white/10">
          {/* Centered title block in my voice */}
          <div className="mb-8 flex flex-col items-center text-center">
            <Link to="/">
              <div className="border-1 border-gray-300 mb-2 mt-1 h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-200 flex items-center justify-center">
                <img src="/favicon.png" alt="logo" />
              </div>
            </Link>
            <h1 className="text-3xl font-bold md:text-4xl tracking-wide">
              Pain Forge GPT
            </h1>
            <p className="text-lg text-slate-300 tracking-tight">
              — Parcel Data Upload Instructions —
            </p>
            <p className="mt-1 max-w-2xl text-slate-300 tracking-tight">
              The fast path used to turn county GIS shapefiles & lists into
              filtered and actionable data.
            </p>
          </div>

          {/* Intro grid: 50/50 */}
          <div className="grid gap-4 md:grid-cols-2">
            <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <h2 className="font-serif text-2xl font-bold tracking-wide">
                What You’re Sending to Pain Forge
              </h2>
              <p className="mt-2 border-l-4 border-amber-300/80 pl-3 tracking-tight">
                A single <strong>CSV</strong> produced and exported from your
                original, zipped county <strong>shapefile</strong>. Pain Forge
                GPT then handles the rest near effortlessly: filtering vacant vs
                improved while joining soon to be downloaded lists to
                potentially stack distress signals, and produce ranked hotlists.
              </p>
              <h3 className="mt-6 font-serif text-xl font-semibold tracking-wide">
                Shapefile basics (why multiple files?)
              </h3>
              <ul className="ml-5 list-disc space-y-1 tracking-tight">
                <li>
                  <code className="rounded border border-white/15 bg-white/10 px-1">
                    .shp
                  </code>{" "}
                  = geometry (outlines)
                </li>
                <li>
                  <code className="rounded border border-white/15 bg-white/10 px-1">
                    .dbf
                  </code>{" "}
                  = attributes (APN, owner, acreage, use, values)
                </li>
                <li>
                  <code className="rounded border border-white/15 bg-white/10 px-1">
                    .shx
                  </code>{" "}
                  = index •{" "}
                  <code className="rounded border border-white/15 bg-white/10 px-1">
                    .prj
                  </code>{" "}
                  = projection
                </li>
              </ul>
              <p className="mt-2 text-sm text-slate-400">
                Keep these together; the{" "}
                <code className="rounded border border-white/15 bg-white/10 px-1">
                  .dbf
                </code>{" "}
                is big because it holds every parcel’s attributes.
              </p>
            </section>

            <aside className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <h2 className="font-serif text-2xl font-bold tracking-wide">
                Process At a Glance
              </h2>
              <ul className="ml-5 mt-2 list-disc space-y-1 tracking-tight">
                <li>
                  First try uploading the <code>.zip</code>ped shapefile
                  directly to PF GPT. If it's under 500mb, you will succeed.
                </li>
                <li>
                  If <code>.zip</code> is larger than the 500mb cut off, when
                  uploading to{" "}
                  <a
                    href="https://Mapshaper.org/"
                    target="_blank"
                    className="text-white"
                  >
                    <strong>
                      <u>https://Mapshaper.org</u>
                    </strong>
                  </a>
                  , the export typically lands around{" "}
                  <strong>~100–200&nbsp;MB</strong> for a full county. This is
                  because map related parcel data will be removed, and only the
                  property attribute and owner data remains.
                </li>
                <li>
                  This shapefile attribute data will be used to link multiple
                  lists together like a master key; unlocking potential
                  distress-signal overlaps: exposing your most prime targets for
                  acquisition. It also provides a wealth of parcel related info
                  without needing to check Zillow: allowing list filtration by
                  attributes like room count, total bathrooms, acreage, & more.
                </li>
                <li>
                  If it’s small enough, upload the resulting CSV directly and
                  along with your Pain Forge GPT filtration request.
                </li>
                <li>
                  If larger, share a Dropbox/Google Drive link in the chat for
                  similar usage. It will download and process it end-to-end
                  automatically.
                </li>
              </ul>
            </aside>
          </div>

          <section className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            {" "}
            {/* A WARNING TO USERS */}
            <h2 className="font-serif text-2xl font-bold tracking-wide flex items-center">
              <AlertTriangle className="mr-1" /> Warning! Important!
            </h2>
            <p className="mt-2 border-l-4 border-amber-300/80 pl-3 tracking-tight underline">
              This is <em>NOT</em> a fully automated tool; not a virtual VA
              (yet). It is instead 95% automated. What this means for protocol:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-1 tracking-tight">
              <li>
                <strong>Download and look at your list's data/format:</strong>{" "}
                Make sure all of your lists have the data you expect, or expect
                silent errors to arise later. <br />
                For example, how can you link the parcel info to an address and
                other details if the address or details aren't there? It is
                saving you from having to manually link the data on thousand of
                rows/properties- but it still ultimately must be linkable to
                begin with.
              </li>
              <li>
                <strong>
                  Some counties have multiple formats for their lists:
                </strong>{" "}
                For example, probate may be truncated in one form, and yet in
                another contains useful, related petitioner addresses and so
                forth in terms of otherwise missing details. Look at the
                suggested links for the list, and make sure your find is
                sufficient.
              </li>
              <li>
                <strong>Take screenshots / cut and paste when lost:</strong>{" "}
                Confused and don't know what to do? Use the windows snipping
                tool to take a screenshot, or cut and paste the screen text
                directly into PF GPT. It will advise your next steps.
              </li>
            </ul>
            <p className="mt-2 text-sm text-slate-400">
              Don't assume — make sure you verify the data exists before
              referencing it or instructions related to it.
            </p>
          </section>

          {/* Minimal Steps */}
          <section className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <h2 className="font-serif text-2xl font-bold tracking-wide">
              Minimal Steps (Download ZIP ➜ Mapshaper ➜ CSV ➜ Send)
            </h2>

            <div className="mt-3 flex items-start gap-3 tracking-tight">
              <div className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-300 text-base font-semibold text-slate-900 leading-none tabular-nums lining-nums select-none ring-1 ring-white/30 shadow-sm">
                1
              </div>
              <p className="m-0 leading-relaxed">
                Let Pain Forge GPT guide you to the relevant county shapefile
                for your chosen county. Download it to your computer. Note this
                file will include{" "}
                <code className="rounded border border-white/15 bg-white/10 px-1">
                  .shp
                </code>
                ,{" "}
                <code className="rounded border border-white/15 bg-white/10 px-1">
                  .shx
                </code>
                ,{" "}
                <code className="rounded border border-white/15 bg-white/10 px-1">
                  .dbf
                </code>
                , and ideally{" "}
                <code className="rounded border border-white/15 bg-white/10 px-1">
                  .prj
                </code>{" "}
                files, as aforementioned. Try uploading it directly to PF GPT
                first along with any filtering instructions. If successful, you
                will be guided to download your first list.
              </p>
            </div>

            <div className="mt-3 flex items-start gap-3">
              <div className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-300 text-base font-semibold text-slate-900 leading-none tabular-nums lining-nums select-none ring-1 ring-white/30 shadow-sm">
                2
              </div>
              <p className="m-0 leading-relaxed">
                Only if too large to upload, go to{" "}
                <a
                  href="https://mapshaper.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-sky-300 hover:underline"
                >
                  mapshaper.org
                </a>{" "}
                and <strong>drag the ZIP</strong> onto the page. When it loads,
                choose <strong>Export → CSV</strong> (attributes only). That’s
                the file you want.
              </p>
            </div>

            <div className="mt-3 flex items-start gap-3">
              <div className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-300 text-base font-semibold text-slate-900 leading-none tabular-nums lining-nums select-none ring-1 ring-white/30 shadow-sm">
                3
              </div>
              <p className="m-0 leading-relaxed">
                Download it. If the CSV is under 500&nbsp;MB (typical), upload
                it directly with your request to Pain Forge GPT. If it’s heavier
                than the ~500mb limit still, drop it in Dropbox/Google Drive and
                paste the share link into PF GPT along with your request.
              </p>
            </div>

            <div className="mt-3 flex items-start gap-3">
              <div className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-300 text-base font-semibold text-slate-900 leading-none tabular-nums lining-nums select-none ring-1 ring-white/30 shadow-sm">
                4
              </div>
              <p className="m-0 leading-relaxed">
                With your <code>.CSV</code> file now presently loaded in the UI,
                state exactly what you want it to run in{" "}
                <strong>Pain Forge GPT</strong> and press enter to begin
                filtering. Examples below.
              </p>
            </div>
          </section>

          {/* INSTRUCTION DETAILS */}
          <section className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <h2 className="font-serif text-2xl font-bold tracking-wide flex items-center">
              How To: Process Each List Optimally
            </h2>

            <p className="mt-2 border-l-4 border-amber-300/80 pl-3 tracking-tight underline">
              Here are some suggestions for using PF GPT to process your county
              lists:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-1 tracking-tight">
              <li>
                <strong>Probate:</strong> Speed kills. Pull 2 weeks back only.
                Process this against the county shapefile to determine which
                decedents owned property. Call PR, but send mail to "Est. of
                ...", at the decedent's listed address.
              </li>
              <li>
                <strong>Tax Delinquency:</strong> Must figure out the time
                period in each county; for how long it takes from delinquency to
                tax certificate issuance, though the GPT will try to figure this
                much out automatically. <br />
                Filter by property type and details, and will automatically look
                for repeat delinquencies and/or larger amounts, among other
                signs.
              </li>
              <li>
                <strong>Code Violations:</strong> GPT will read through and
                parse the violations for you. It searches this for addresses and
                looks for severity and relevance via descriptions. If it doesn't
                find an address, it notes the language infers a house is
                attached to the violation and provides the case information to
                look up. Output creates 30 day retrospective, plus a
                30d.-to-6mo. repeat offender list in order to find higher tier
                prospects.
              </li>
              <li>
                <strong>Evictions:</strong> This is best used to search back up
                to a year. In doing so, the GPT will find repeat offenders.
                These are potential tired landlords; especially if they are
                found to overlap with Code Violations.
              </li>
              <li>
                <strong>Lis Pendens (Foreclosure):</strong> Pull the last 30
                days, and the last 6 months (ie high pain list vs. <b>very</b>{" "}
                high pain list). Cross data rows against the parcel shapefile to
                find related addresses to mail linked regarding recent
                foreclosures.
              </li>
              <li>
                <strong>Master Pain Report:</strong> List of properties and pain
                sources; stacked from highest and most overlapping to least. And
                an outreach file deduped with addresses and other details.
              </li>
            </ul>
          </section>

          {/* Filters */}
          <section className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <h2 className="font-serif text-2xl font-bold tracking-wide">
              Vacant vs Houses (Optional Filter)
            </h2>
            <p className="mt-2 border-l-4 border-amber-300/80 pl-3 tracking-tight underline">
              Default includes both. It will pre-filter on it's end only if you
              tell it which you want:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-1 tracking-tight">
              <li>
                <strong>Vacant only</strong> (e.g., uses improvement value = 0
                or <code>property-use</code> contains “Vacant”).
              </li>
              <li>
                <strong>Houses only</strong> (e.g., uses improvement value &gt;
                0 or property-use contains “Residential”).
              </li>
            </ul>
            <p className="mt-2 text-sm text-slate-400">
              Field names vary by county — it reads your column header to
              automagically apply the right rule.
            </p>
          </section>

          {/* Explicit request examples (your instruction) */}
          <section className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <h2 className="font-serif text-2xl font-bold tracking-wide">
              Tell It What You Need
            </h2>
            <p className="mt-2 border-l-4 border-amber-300/80 pl-3 tracking-tight underline">
              Be explicit so it runs the right workflow. More detail means more
              specific results. Examples:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-1 tracking-tight">
              <li>
                “<strong>Filter list to vacant land only</strong> and export
                APN, acreage, land-use, and situs address with owner info in a
                new <code>.csv</code>.”
              </li>
              <li>
                “<strong>Give me a hotlist</strong> where PAIN_SCORE ≥ 2, with
                sources.”
              </li>
              <li>
                “<strong>Pull only houses</strong> situated on under 1 acre and
                include owner mailing address.”
              </li>
              <li>
                <strong>“Give me only 2/2/1 houses.”</strong> → filter: Beds =
                2, Baths = 2, GarageSpaces ≥ 1
              </li>
              <li>
                <strong>“Give me only 3/2 houses.”</strong> → filter: Beds = 3,
                Baths = 2 (garage optional)
              </li>
              <li>
                <strong>"Give me SFR and manufactured houses only."</strong> →
                filter: property-use contains “Residential”, and type is equal
                to "SFR" or "manufactured" and similar keywords to be processed,
                understood and filtered out.
              </li>
            </ul>
            <p className="mt-2">
              <i>
                Note: Stating no preference will link all properties to related
                property attributes and owner mailing information.
              </i>
            </p>
          </section>

          {/* Troubleshooting: detailed, not dumbed down */}
          <section className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <h2 className="font-serif text-2xl font-bold tracking-wide">
              Troubleshooting
            </h2>
            <ul className="ml-5 mt-2 list-disc space-y-2 tracking-tight">
              <li>
                <strong>Your output file only has like 12 rows or so?:</strong>{" "}
                If you're not getting back thousands or at least HUNDREDS of
                rows from your list depending on circumstance, the AI made a
                mistake. Everyone makes them sometimes. Start over, and point
                out what happened to the AI, so it can learn. Note that this is
                a lot less common in single-list mode; where complexity is
                lesser.
              </li>
              <li>
                <strong>Don't allow the AI to get lazy:</strong> If it ever
                tries to get you to manually do any of the work, just push back.
                Tell it to do it for you. It will.
              </li>
              <li>
                <strong>Shapefile or list page is broken or missing?:</strong>{" "}
                Load the desired page, and then cut and paste its text or take
                screenshot(s) as needed. Specifically, come back over to PF GPT
                and after you state what page it was (ie "Code Violations list
                page"), and what you saw, cut and paste in the page text or take
                screenshots with snipping tool in windows. The AI will tell you
                what to do from there to either get your list or find the right
                page. If ever you're lost, show your screen or screen text to
                the AI.
              </li>
              <li>
                <strong>Big ZIP won’t load in Mapshaper:</strong> Zip only the
                shapefile layer you need (don’t include tiles or extra layers).
                If it still chokes, export “attributes only” from desktop GIS
                (ie via{" "}
                <a href="https://qgis.org/download/">
                  <strong>
                    <u>QGIS.exe</u>
                  </strong>
                </a>
                ) and try uploading again.
              </li>
              <li>
                <strong>Missing attributes after export:</strong> Make sure the
                ZIP contained the matching <code>.shp</code>/<code>.shx</code>/
                <code>.dbf</code>/<code>.prj</code>. If columns still look
                truncated or renamed, re-export and keep the default field
                names.
              </li>
              <li>
                <strong>Weird characters (°, ñ, accents) in CSV:</strong> That’s
                encoding. It is normalized on ingest; no action needed — just
                send it.
              </li>
              <li>
                <strong>Row count sanity check:</strong> Your county CSVs
                typically land in the few-hundred-thousand rows. If your result
                is orders of magnitude smaller, you probably exported a subset
                or dropped geometry/attributes accidentally.
              </li>
            </ul>
          </section>

          {/* Footer */}
          <footer className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <div className="text-slate-400">
              © {year} Covered Bridge Properties™
            </div>
            <a
              href="#top"
              className="inline-block rounded-xl border border-white/15 bg-white/10 px-4 py-2 font-semibold hover:-translate-y-0.5 hover:underline"
            >
              Back to top
            </a>
          </footer>
        </div>
      </div>
    </main>
  );
}
