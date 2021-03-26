import React, { useEffect, useState } from "react";
import { numberFormat } from "../../Utils";
import {
  calculateNationalInsurance,
  calculateStudentFinance,
  calculateTax,
} from "../../Utils/taxCalculations";
import Checkbox from "../Forms/Checkbox";
import Input from "../Forms/Input";

const Calculator = () => {
  const initialTaxState = {
    tax: 0,
    nationalInsurance: 0,
    studentFinance: 0,
  };
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState(initialTaxState);
  const [useStudentFinance, setUseStudentFinance] = useState(false);

  const handleIncomeChange = (e: any) => {
    setIncome(e.target.value);
  };

  const handleStudentFinanceChange = (e: any) => {
    setUseStudentFinance(e.target.checked);
  };

  useEffect(() => {
    setTax({
      tax: calculateTax(parseFloat(income)),
      nationalInsurance: calculateNationalInsurance(parseFloat(income)),
      studentFinance: calculateStudentFinance(parseFloat(income)),
    });
  }, [income, useStudentFinance]);

  return (
    <>
      <Input
        name="income"
        id="income"
        placeholder="Income"
        label="Income Per Month"
        value={income}
        onChange={handleIncomeChange}
      />
      <Checkbox
        name="student_finance"
        id="student_finance"
        label="Student Finance? "
        checked={useStudentFinance}
        onChange={handleStudentFinanceChange}
      />
      {tax.tax && tax.nationalInsurance ? (
        <div className="mt-4">
          <h3>Tax</h3>
          <p>£{numberFormat(tax.tax / 12)} per month</p>
          <p>£{numberFormat(tax.tax)} per year</p>

          <h3 className="mt-6">National Insurance</h3>
          <p>£{numberFormat(tax.nationalInsurance / 12)} per month</p>
          <p>£{numberFormat(tax.nationalInsurance)} per year</p>

          {useStudentFinance ? (
            <>
              <h3 className="mt-6">Student Finance</h3>
              <p>£{numberFormat(tax.studentFinance / 12)} per month</p>
              <p>£{numberFormat(tax.studentFinance)} per year</p>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Calculator;
