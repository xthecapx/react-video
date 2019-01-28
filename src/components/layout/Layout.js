import React from 'react';
import classes from './Layout.module.scss';

import NavigationItems from '../NavigationItems/NavigationItems';

function Layout(props) {
  return (
    <>
      <header className={classes.Header}>
        <NavigationItems />
      </header>
      <main className={classes.Content}>{props.children}</main>
    </>
  );
}

export default Layout;
