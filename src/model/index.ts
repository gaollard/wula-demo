import { UserInfoStore } from "./userInfo.store";

export { UserInfoStore }

export class RootStore {
  userInfoStore: UserInfoStore;

  constructor () {
    this.userInfoStore = new UserInfoStore(this);
  }
}

const rootStore =  new RootStore();

export default rootStore;