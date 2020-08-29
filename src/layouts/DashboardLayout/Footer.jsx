import React from 'react';

import { Box, Typography, makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  boxFooter: {
    position: 'relative',
    bottom: 0,
    right: 0,
    left: 0,
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: -35,
    backgroundColor: colors.common.white,
    borderTop: 'thin solid #ddd'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.boxFooter}>
      <Typography variant="body2">Desenvolvido por <a href="https://www.romariomelo.com" target="_blank" rel="noopener noreferrer">Ricardo</a></Typography>
    </Box>
  );
};

export default Footer;
