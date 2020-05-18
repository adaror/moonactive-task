import React from 'react';
import { Header } from './header/header.component';
import Generator from './generator/generator.component';
import Promotions from './promotions/promotions.component';
import './app.scss';

export const App = () => (

  <div className="app-container">
    <Header />
    <div className="content">
      <Generator />
      <Promotions />
    </div>
  </div>
);
