export type companyInfoType = {
  name: string;
  desctiption: string;
  image: string;
};

export type TodoType = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

export type TodoListType = {
  todoList: [TodoType];
};
