const STUDENT_FINANCE_LIMIT = 26576;
const STUDENT_FINANCE_PERCENTAGE = 0.09;

const TAX_LOWER_LIMIT = 12500;
const TAX_LOWER_PERCENTAGE = 0.2;

const TAX_MID_LIMIT = 50000;
const TAX_MID_PERCENTAGE = 0.4;

const NI_LOWER_LIMIT = 9500;
const NI_LOWER_PERCENTAGE = 0.09;

const NI_ADDITIONAL = 158.6;

const NI_MID_LIMIT = 50000;
const NI_MID_PERCENTAGE = 0.02;

export function calculateStudentFinance(income: number): number {
  const studentFinanceTaxable = income * 12 - STUDENT_FINANCE_LIMIT;
  if (studentFinanceTaxable <= 0) {
    return 0;
  }
  const incomeAfterStudentFinanceAllowance =
    studentFinanceTaxable * STUDENT_FINANCE_PERCENTAGE;
  return incomeAfterStudentFinanceAllowance;
}

export function calculateTax(income: number): number {
  const yearlyIncome = income * 12;
  let taxable = 0;
  if (yearlyIncome > TAX_MID_LIMIT) {
    const midTaxable = yearlyIncome - TAX_MID_LIMIT;
    taxable += midTaxable * TAX_MID_PERCENTAGE;
  }

  if (yearlyIncome > TAX_LOWER_LIMIT) {
    const lowerTaxable = TAX_MID_LIMIT - TAX_LOWER_LIMIT;
    taxable += lowerTaxable * TAX_LOWER_PERCENTAGE;
  }
  return taxable;
}

export function calculateNationalInsurance(income: number): number {
  const yearlyIncome = income * 12;
  let taxable = 0;
  if (yearlyIncome > NI_MID_LIMIT) {
    const midTaxable = yearlyIncome - NI_MID_LIMIT;
    taxable += midTaxable * NI_MID_PERCENTAGE;
  }

  if (yearlyIncome > NI_LOWER_LIMIT) {
    const lowerTaxable = NI_MID_LIMIT - NI_LOWER_LIMIT;
    taxable += lowerTaxable * NI_LOWER_PERCENTAGE;
  }
  taxable += NI_ADDITIONAL;
  return taxable;
}
