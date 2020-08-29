import React from "react";
import { NavLink as RouterLink } from 'react-router-dom';

import {
  Button,
  ListItem,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  title: {
    
  }
}));

const NavSubItem = ({ icon: Icon, title, href }) => {

  const classes = useStyles();


  return (
    <ListItem>
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        {Icon && (
          <Icon
            className={classes.icon}
            size="20"
          />
        )}
        <span className={classes.title}>
          {title}
        </span>
      </Button>
      { /*
      <ListItemIcon>
        {Icon && (<Icon size="20" className={classes.icon} />)}
      </ListItemIcon>
      <ListItemText primary={title} />
      */ }
    </ListItem>
  );
}

export default NavSubItem;
