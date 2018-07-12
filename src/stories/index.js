import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';
import '../index'
import InputTodo from '../InputTodo';
import TodoList from '../TodoList';

storiesOf('InputTodo', module).add('Add a Todo Item', () => 
<InputTodo recieveTodo={action('clicked')}/>);

storiesOf('TodoList', module).add('Show a Todo List', () => 
<TodoList todosList = {
  [{id: 1, name: 'todoDescription', isChecked: false, isEditable: true}, 
  {id: 2, name: 'todoDescription2', isChecked: false, isEditable: false}]}
  filterName = 'filter-all'/>
);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={linkTo('button','TodoList')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
      ));
// storiesOf('Button', module)
//   .add('First', () => (
//     <button onClick={linkTo('Button', 'Second')}>Go to "Second"</button>
//   ))
//   .add('Second', () => (
//     <button onClick={linkTo('Button', 'First')}>Go to "First"</button>
//   ));
