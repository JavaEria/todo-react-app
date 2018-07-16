import React from "react";
import { storiesOf } from "@storybook/react";
import {
    withKnobs,
    text,
    boolean,
    number,
    select
  } from "@storybook/addon-knobs";
  
import EditTodoItem from "../EditTodoItem";



const editTodoItem = storiesOf("EditTodoItem", module);

editTodoItem
.addDecorator(withKnobs)
.add('Edit a Todo',()=>(
  <EditTodoItem 
    todoItem={{
      id: 1,
      name: text("Task Name","Todo1"),
      isChecked: false,
    }}
    />
));