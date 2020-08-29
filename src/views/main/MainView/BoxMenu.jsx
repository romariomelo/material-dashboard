import React from 'react';

import {
  Grid,
  makeStyles,
  CardHeader,
  Card,
  Divider,
  CardContent
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  box: {
    padding: theme.spacing(1)
  },
  boxTitle: {
    width: '100%',
    padding: theme.spacing(1)
  }
}));

const BoxMenu = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Card style={{marginBottom: 25}}>
      <CardHeader title={title} />
      <Divider />
      <CardContent>
      <Grid container spacing={3} className={classes.box}>
      {children}
    </Grid>
      </CardContent>
    </Card>
  );
};

export default BoxMenu;
