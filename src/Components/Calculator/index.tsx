import React, { useState } from "react";
import Checkbox from "../Forms/Checkbox";
import Input from "../Forms/Input";

const Calculator = () => {
  const [income, setIncome] = useState("");
  const [studentFinance, setStudentFinance] = useState(false);

  const handleIncomeChange = (e: any) => {
    setIncome(e.target.value);
  };

  const handleStudentFinanceChange = (e: any) => {
    setStudentFinance(e.target.checked);
  };

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
        checked={studentFinance}
        onChange={handleStudentFinanceChange}
      />
    </>
  );
};

export default Calculator;
