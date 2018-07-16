import React from "react";
import { storiesOf } from "@storybook/react";
import FilterTodo from "../FilterTodo";



const filterButtons = storiesOf('FilterTodo', module);
filterButtons
.add('Filters', ()=>(
  <FilterTodo/>

));
