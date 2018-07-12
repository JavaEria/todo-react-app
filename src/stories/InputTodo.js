import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "../index";
import InputTodo from "../InputTodo";


const inputTodo = storiesOf("InputTodo", module);
inputTodo.add("Add a Todo Item", () => (
  <InputTodo recieveTodo={action("clicked")} />
));
