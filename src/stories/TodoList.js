import React from "react";
import { storiesOf } from "@storybook/react";
import {
    withKnobs,
    text,
    boolean,
    number,
    select
  } from "@storybook/addon-knobs";
  
import TodoList from "../TodoList";
import "../index";

const filterTypes = ["filter-all", "filter-complete", "filter-incomplete"];

const todoList = storiesOf("TodoList", module);
todoList
  .addDecorator(withKnobs)
  .add("Show a todo List with filters", () => (
    <TodoList
      todosList={[
        {
          id: 1,
          name: "Todo 1",
          isChecked: boolean("Task 1 Complete?"),
        },
        {
          id: 2,
          name: "Todo 2",
          isChecked: boolean("Task 2 Complete?"),
        }
      ]}
      filterName={select("FilterName", filterTypes)}
    />
  ));
