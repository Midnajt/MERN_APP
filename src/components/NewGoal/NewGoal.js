import React, { useState } from "react";
import "./newGoal.css";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    props.onAddGoal(newGoal);

    setEnteredText("");
  };

  const textChangehandler = (e) => {
    setEnteredText(e.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangehandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
