import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  makeStyles,
  Collapse,
  List
} from '@material-ui/core';

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import NavSubItem from "./NavSubItem";

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
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
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  submenu,
  ...rest
}) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      { submenu ?
        <Button
          onClick={handleClick}
          className={classes.button}
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
          { open ? <ExpandLess /> : <ExpandMore /> }
        </Button>

      :

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
      }
      
    </ListItem>
    { submenu ?

      submenu.map((item) => (
        <Collapse in={open} timeout="auto" unmountOnExit key={item.title}>
          <List component="div" disablePadding>
            <NavSubItem
              opened={open}
              title={item.title}
              icon={item.icon}
              href={item.href}
            />
          </List>
        </Collapse>
        
      ))
      : null }
    </>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
