import React from 'react';

import Button from '../../UI/Button/Button';
import classes from './Controls.module.scss';

function Controls(props) {
  return (
    <div className={classes.Controls}>
      <Button btnType='Success' clicked={props.prevVideo}>
        PREV VIDEO
      </Button>
      <Button btnType='Success' clicked={props.nextVideo}>
        NEXT VIDEO
      </Button>
    </div>
  );
}

export default Controls;
