import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 0,
          value: 1,
          step: "1",
          defaultValue: "1",
          onChange: (e) => console.log(e.target.value),
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
