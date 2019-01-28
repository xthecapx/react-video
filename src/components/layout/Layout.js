import React, { Component } from 'react';
import classes from './Layout.module.scss';

class Layout extends Component {
  render() {
    return (
      <>
        <div>Menu</div>
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
