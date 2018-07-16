import React from "react";
import { storiesOf } from "@storybook/react";
import {
    withKnobs,
    text,
    boolean,
    number,
    select
  } from "@storybook/addon-knobs";
import "../index";
import TodoItem from "../components/App/TodoList/TodoItem/TodoItem";



const todoItem = storiesOf("TodoItem", module);
todoItem
.addDecorator(withKnobs)
.add('Single Todo Item', ()=>(
  <TodoItem 
    key='1'
    todoItem=
      {{
        id: 1,
        name: text("Task Name","Todo1"),
        isChecked: boolean("Task 1 Complete?"),
      }}
      />
));
