import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { APPRoute } from '../../const';
import Main from '../../pages/Main/main';
import './App.scss';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={APPRoute.Main}
          element={<Main />}
        />
      </Routes>
    </BrowserRouter>
  );
}
