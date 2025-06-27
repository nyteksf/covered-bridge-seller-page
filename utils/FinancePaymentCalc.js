export const DEFAULT_DEPOSIT_RATIO = 0.13;

export function calculateDeposit(
  totalPrice,
  depositRatio = DEFAULT_DEPOSIT_RATIO
) {
  return Math.round(totalPrice * depositRatio);
}

export function calculateMonthlyPayment(totalPrice, deposit, termMonths) {
  return Math.round((totalPrice - deposit) / termMonths);
}

export function generateAmortizationSchedule(principal, term, apr) {
  const monthlyRate = apr / 100 / 12;
  const monthlyPayment =
    (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));

  let balance = principal;
  const schedule = [];

  for (let i = 1; i <= term; i++) {
    const interest = balance * monthlyRate;
    const principalPaid = monthlyPayment - interest;
    balance -= principalPaid;

    schedule.push({
      month: i,
      principal: Math.round(principalPaid),
      interest: Math.round(interest),
      balance: Math.max(0, Math.round(balance)),
    });
  }

  return {
    monthlyPayment: Math.round(monthlyPayment),
    schedule,
  };
}

/**
 * @param {Object} options
 * @param {number} options.totalPrice - The full property price
 * @param {number} options.term - Total months for loan
 * @param {number} [options.depositRatio] - Percent down (0.13 = 13%)
 * @param {boolean} [options.useAmortized] - If true, use amortized calc
 * @param {number} [options.apr] - Annual interest rate in percent (only used if amortized)
 * @returns {Object} { deposit, monthly, warnings[] }
 */
export function calculateFinancingBreakdown({
  totalPrice = 0,
  term = 36,
  depositRatio = DEFAULT_DEPOSIT_RATIO,
  useAmortized = false,
  apr = 12,
}) {
  const warnings = [];

  const cleanTotal = parseFloat(totalPrice) || 0;
  const cleanTerm = parseInt(term) || 36;

  if (cleanTotal < 500) warnings.push("Price seems too low.");
  if (cleanTerm < 6) warnings.push("Term is unusually short.");

  const deposit = Math.round(cleanTotal * depositRatio);
  const principal = cleanTotal - deposit;

  let monthly;

  if (useAmortized && apr > 0) {
    const monthlyRate = apr / 100 / 12;
    monthly = Math.round(
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -cleanTerm))
    );
  } else {
    monthly = Math.round(principal / cleanTerm);
  }

  return {
    deposit,
    monthly,
    warnings,
  };
}
