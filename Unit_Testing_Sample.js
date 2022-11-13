const toggleTodoCompletion = (todoItem) => {
  return todoItem;
};
/*
const toggleTodoCompletion = (todoItem) => {
  todoItem.completed = !todoItem.completed;
  return todoItem;
};
*/

const getToggleTodo = () => {
  let item = {
    title: "To submit assigment",
    completed: false,
  };
  item = toggleTodoCompletion(item);
  console.assert(
    item.completed === true,
    "Todo item's completion should be toggled!"
  );
  // console.log("Todo item is toggled as: ", item);
};

getToggleTodo();
