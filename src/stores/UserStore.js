import { observable, action, computed } from "mobx";
import UserService from 'services/UserService';

export default class UserStore{
    @observable users = [];

    @action getUsers = async() => {
        this.users = await UserService.getUsers();
    };
}

export const userStore = new UserStore();