import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Popover,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';
import NotificationsPopoverContent from 'src/components/NotificationsPopoverContent';
import { EscolaContext } from 'src/Models/Escola';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    marginLeft: 10,
    color: theme.palette.text.white
  }
}));

const not = {
  qtd_nao_lidas: 0,
  notifications: [
    {
      notifiable_id: 3,
      data: '657',
      read_at: null,
      created_at: '2020-06-13 09:36:22',
      deleted_at: null,
      alerta: {
        codigo: 657,
        titulo: '.',
        texto: 'oi',
        link: null,
        autor: 165,
        mensagem_pai: null,
        tipo: 'MENSAGEM',
        deleted_at_autor: null,
        created_at: '2020-06-13 09:36:20',
        updated_at: '2020-06-13 09:36:20',
        user: { id: 165, name: 'DARLLANY VASCONCELOS SOARES', foto: null }
      }
    },
    {
      notifiable_id: 3,
      data: '646',
      read_at: '2020-06-13 08:23:49',
      created_at: '2020-06-12 21:49:19',
      deleted_at: null,
      alerta: {
        codigo: 646,
        titulo: 'RE: Bem vindo',
        texto: 'rr',
        link: null,
        autor: 1,
        mensagem_pai: 643,
        tipo: 'MENSAGEM',
        deleted_at_autor: null,
        created_at: '2020-06-12 21:49:15',
        updated_at: '2020-06-12 21:49:15',
        user: { id: 1, name: 'Administrador', foto: null }
      }
    },
    {
      notifiable_id: 3,
      data: '644',
      read_at: '2020-06-13 09:32:49',
      created_at: '2020-06-12 17:27:18',
      deleted_at: null,
      alerta: {
        codigo: 644,
        titulo: 'Bom dia! Estou fazendo um teste',
        texto: 'Bom dia!Informativo de volta a (...)',
        link: null,
        autor: 1,
        mensagem_pai: null,
        tipo: 'MENSAGEM',
        deleted_at_autor: null,
        created_at: '2020-06-12 17:27:17',
        updated_at: '2020-06-12 17:27:17',
        user: { id: 1, name: 'Administrador', foto: null }
      }
    },
    {
      notifiable_id: 3,
      data: '636',
      read_at: '2019-09-11 15:15:53',
      created_at: '2019-09-10 20:56:23',
      deleted_at: null,
      alerta: {
        codigo: 636,
        titulo: 'Bem vindo',
        texto: 'Ol\u00e1. Seja bem-vindo.',
        link: null,
        autor: 1,
        mensagem_pai: null,
        tipo: 'MENSAGEM',
        deleted_at_autor: null,
        created_at: '2019-09-10 20:56:22',
        updated_at: '2019-09-10 20:56:22',
        user: { id: 1, name: 'Administrador', foto: null }
      }
    },
    {
      notifiable_id: 3,
      data: '628',
      read_at: '2019-09-10 17:06:44',
      created_at: '2019-08-17 09:05:53',
      deleted_at: null,
      alerta: {
        codigo: 628,
        titulo: 'MENSAGEM TESTE',
        texto: 'BOM DIA',
        link: null,
        autor: 1,
        mensagem_pai: null,
        tipo: 'MENSAGEM',
        deleted_at_autor: null,
        created_at: '2019-08-17 09:05:52',
        updated_at: '2019-08-17 09:05:52',
        user: { id: 1, name: 'Administrador', foto: null }
      }
    },
    {
      notifiable_id: 3,
      data: '626',
      read_at: '2019-09-10 17:06:45',
      created_at: '2019-08-15 17:57:45',
      deleted_at: null,
      alerta: {
        codigo: 626,
        titulo: 'RE: teste',
        texto: 'Teste, recebeste o e-mail dest (...)',
        link: null,
        autor: 1,
        mensagem_pai: 625,
        tipo: 'MENSAGEM',
        deleted_at_autor: null,
        created_at: '2019-08-15 17:57:44',
        updated_at: '2019-08-15 17:57:44',
        user: { id: 1, name: 'Administrador', foto: null }
      }
    },
    {
      notifiable_id: 3,
      data: '624',
      read_at: '2019-09-10 17:06:46',
      created_at: '2019-08-15 14:13:28',
      deleted_at: null,
      alerta: {
        codigo: 624,
        titulo: 'teste',
        texto: 'teste',
        link: null,
        autor: 1,
        mensagem_pai: null,
        tipo: 'MENSAGEM',
        deleted_at_autor: null,
        created_at: '2019-08-15 14:13:27',
        updated_at: '2019-08-15 14:13:27',
        user: { id: 1, name: 'Administrador', foto: null }
      }
    }
  ]
};

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const Escola = React.useContext(EscolaContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleCloseNotificationPopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Box className={classes.header}>
            <Logo />
            <Typography
              variant="h4"
              component="h1"
              className={classes.headerText}
            >
              {Escola.nome}
            </Typography>
          </Box>
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton
            color="inherit"
            onClick={e => setAnchorEl(e.currentTarget)}
          >
            <Badge
              badgeContent={not.notifications.length}
              color="secondary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleCloseNotificationPopover}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <NotificationsPopoverContent data={not} />
          </Popover>

          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
