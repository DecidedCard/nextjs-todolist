export type companyInfoType = {
  companyInfo: {
    name: string;
    desctiption: string;
    image: string;
  };
};

export type TodoType = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

export type TodoListType = {
  todoList: [TodoType];
  totalTodoList: number;
  working: number;
  done: number;
};