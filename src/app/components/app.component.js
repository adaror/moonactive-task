import React from 'react';
import { Header } from './header/header.component';
import Generator from './generator/generator.component';
import Promotions from './promotions/promotions.component';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="content">
          <Generator />
          <Promotions />
        </div>
      </div>
    );
  }
}

export default App;
