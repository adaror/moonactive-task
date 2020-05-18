import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './header.style.scss';

export const Header = () => (
  <div className="header-container">
    <AppBar
      position="static"
      className="header-bar"
    >
      <Toolbar>
        <Typography variant="h6">
          Promotions
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);
