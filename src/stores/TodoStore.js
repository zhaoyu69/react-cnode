import { observable, action, computed } from "mobx";

export default class TodoStore{
    @observable todoItems = [];

    @action add = (title) => {
        this.todoItems.push(title);
    };

    @computed get count(){
        return this.todoItems.length;
    }
}

export const todoStore = new TodoStore();