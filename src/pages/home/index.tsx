import React from 'react';
import { observer, inject } from "mobx-react";
import { UserInfoStore } from '@/model';

const Home: React.FC<{
  userInfoStore: UserInfoStore;
}> = (props) => {
  const { userInfoStore } = props;
  return (
    <div>
      <div>home</div>
      <div>{userInfoStore.loading ? "Loading" : ""}</div>
      <div>{userInfoStore.userInfo?.name}</div>
      <div>{userInfoStore.userInfo?.user_id}</div>
      <button onClick={() => userInfoStore.getUserInfo()}>getUserInfo</button>
      <button onClick={() => userInfoStore.logout()}>logout</button>
    </div>
  );
};

export default inject(UserInfoStore.storeName)(observer(Home));