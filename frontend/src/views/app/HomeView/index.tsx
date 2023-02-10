import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useAuth from '../../../hooks/useAuth';
import { IRegister } from '../../../interfaces';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 0),
    textAlign: 'center',
  },
}));

function HomeView() : ReactElement {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <main>
      <div className={classes.heroContent}>
        <h1>Hey {(user as IRegister).first_name + ' ' + (user as IRegister).last_name}</h1>
      </div>
    </main>
  );
}

export default HomeView;
