import React from 'react';
import {
  Grid,
  Link,
  makeStyles,
  Typography,
  Breadcrumbs
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
    fontSize: '0.8rem'
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  },
  breadcrumbs: {
    marginBottom: 50
  }
}));

const AppBreadcrumbs = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
        {data.map((item, index, arr) =>
          arr.length - 1 !== index ? (
            <Link
              color="inherit"
              href={item.to}
              onClick={() => {}}
              className={classes.link}
              key={item.title}
            >
              {item.title}
            </Link>
          ) : (
            <Typography
              color="textPrimary"
              className={classes.link}
              key={item.title}
            >
              <item.icon className={classes.icon} />
              {item.title}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Grid>
  );
};

export default AppBreadcrumbs;
