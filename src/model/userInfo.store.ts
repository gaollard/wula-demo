import { observable, action, runInAction } from "mobx";
import { RootStore } from ".";

const callback = (data: {}|null) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
};

const getUserInfo = () => {
  return callback({
    name: "tony",
    user_id: 1,
  });
};

const logout = () => {
  return callback(null);
};

export interface UserInfo {
  name: string;
  user_id: number;
}

export class UserInfoStore {
  static storeName = 'userInfoStore';
  public rootStore: RootStore;

  constructor(store: RootStore) {
    this.rootStore = store;
  }

  @observable userInfo: UserInfo | null = null;
  @observable loading = false;

  @action
  getUserInfo() {
    this.loading = true;
    getUserInfo().then((data: any) => {
      runInAction(() => {
        this.userInfo = data;
        this.loading = false;
      });
    });
  }

  @action
  logout() {
    this.loading = true;
    logout().then(() => {
      runInAction(() => {
        this.loading = false;
        this.userInfo = null;
      });
    });
  }
}