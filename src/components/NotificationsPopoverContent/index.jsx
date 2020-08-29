import React from 'react';
import clsx from 'clsx';

import {
  Typography,
  makeStyles,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  },
  notRead: {
    backgroundColor: "rgba(0, 0, 0, 0.04)"
  },
  textName: {
    textTransform: "capitalize"
  }
}));

const NotificationsPopoverContent = props => {
  const classes = useStyles();

  const { data } = props;

  const handleClick = (notification) => {
    alert("me clicou... " + notification.alerta.codigo);
  }

  return (
    <Box style={{ width: 320 }}>
      <Typography variant="h5" component="h5" className={classes.typography}>
        Notificações
      </Typography>
      <List>
        {data.notifications.length > 0 ? (
          <>
            {data.notifications.map(item => (
              <React.Fragment
                key={item.alerta.codigo.toString()}
              >
                <ListItem button onClick={() => {handleClick(item)}} className={clsx(item.read_at === null ? classes.notRead : null)}>
                  <ListItemIcon>
                    <Avatar
                      src={item.alerta.user.foto}
                      style={{ width: 40, height: 40 }}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="subtitle1" display="block" className={classes.textName}>
                      {item.alerta.user.name.toLowerCase()}
                    </Typography>
                    <Typography variant="caption" display="block">
                      {item.alerta.titulo}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
              <Typography className={classes.typography} component={Button}>
                Marcas todas como lidas
              </Typography>
          </>
        ) : (
          <Typography
            variant="caption"
            component="p"
            className={classes.typography}
          >
            Nenhuma notificação
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default NotificationsPopoverContent;
