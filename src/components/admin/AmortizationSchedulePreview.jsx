import React from "react";
import { generateAmortizationSchedule } from "../../../utils/FinancePaymentCalc";

const AmortizationSchedulePreview = ({
  totalPrice = 0,
  term = 36,
  depositRatio = 0.13,
  apr = 12,
  useAmortized = false,
}) => {
  if (!useAmortized || !totalPrice || !term) return null;

  const deposit = Math.round(totalPrice * depositRatio);
  const principal = totalPrice - deposit;

  const { schedule, monthlyPayment } = generateAmortizationSchedule(
    principal,
    term,
    apr
  );

  return (
    <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md my-6">
      <h2 className="text-lg font-bold text-gray-800 mb-2">
        Amortization Schedule (Admin Preview)
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Showing first 12 months of amortized owner financing based on {apr}% APR
        over {term} months. Monthly payment estimated at{" "}
        <span className="font-semibold">${monthlyPayment}</span>.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-t border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-3 py-2">Month</th>
              <th className="px-3 py-2">Principal</th>
              <th className="px-3 py-2">Interest</th>
              <th className="px-3 py-2">Remaining Balance</th>
            </tr>
          </thead>
          <tbody>
            {schedule.slice(0, 12).map((row) => (
              <tr key={row.month} className="border-b hover:bg-gray-50">
                <td className="px-3 py-2">{row.month}</td>
                <td className="px-3 py-2">${row.principal}</td>
                <td className="px-3 py-2">${row.interest}</td>
                <td className="px-3 py-2">${row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 italic mt-2">
        * Estimates only. Rounded to whole dollars. Actual terms may vary.
      </p>
    </div>
  );
};

export default AmortizationSchedulePreview;
