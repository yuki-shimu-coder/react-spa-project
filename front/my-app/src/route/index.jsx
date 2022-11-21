import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** トップページ */
import { Index } from '../screens';
/** ログインページ */
import { Login } from '../screens/login';
/** プロフィールページ */
import { Profile } from '../screens/profile';


/** ルーター */
export const RouterComponent = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );

}