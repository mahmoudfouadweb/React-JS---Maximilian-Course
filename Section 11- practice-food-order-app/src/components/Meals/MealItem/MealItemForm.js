import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = props => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: 0,
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
