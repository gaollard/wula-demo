/*
 * @Author: your name
 * @Date: 2022-02-19 10:52:50
 * @LastEditTime: 2022-02-19 14:58:51
 * @LastEditors: your name
 * @Description: 路由配置
 * @FilePath: wula-demo/src/routes/index.tsx
 */

import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Me from '../pages/me';
import Layout from '../layout';

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: Me },
];

export function renderRouter() {
  return <HashRouter>{renderRoutes()}</HashRouter>;
}

export function renderRoutes() {
  const list = routes.map((it) => {
    const { component, ...rest } = it;
    const PathComponent = component as any;
    const element = (
      <Layout>
        <PathComponent />
      </Layout>
    );
    return <Route {...rest} element={element} />;
  });
  return <Routes>{list}</Routes>;
}