import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Grid,
  makeStyles,
  Box,
  Typography,
  Card
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  boxItemTitle: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avatar: {
    width: 48,
    height: 48
  }
}));

const BoxItem = ({ title, icon: Icon, bgColor, textColor, href }) => {
  const classes = useStyles();
  return (
    <Grid item lg={3} md={6} xs={12}>

      <Card
        elevation={1}
        component={RouterLink}
        to={href}
        square={false}
        className={classes.boxItemTitle}
        style={{ backgroundColor: bgColor }}
      >
        <Box>
          <Typography
            variant="overline"
            component="h4"
            gutterBottom
            style={{ color: textColor, margin: 0 }}
          >
            {title}
          </Typography>
        </Box>
          {Icon && <Icon fontSize="large" style={{color: "white"}} />}
      </Card>

    </Grid>
  );
};

export default BoxItem;
