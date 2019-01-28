import React from 'react';
import classes from './Layout.module.scss';

import NavigationItems from '../NavigationItems/NavigationItems';

function Layout(props) {
  console.log(props);
  return (
    <>
      <header>
        <NavigationItems />
      </header>
      <main className={classes.Content}>{props.children}</main>
    </>
  );
}

export default Layout;
