import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';

import BoxMenu from './BoxMenu';
import BoxItem from './BoxItem';
import AppBreadcrumbs from 'src/components/AppBreadcrumbs';

import Menu from 'src/menu';

import { ImportContacts as ImportContactsIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: 0,
    paddingTop: theme.spacing(3)
  },
  content: {
    paddingBottom: 25
  }
}));
const BreadcrumbsContent = [
  {
    title: 'Início',
    to: '/'
  },
  {
    title: 'Acadêmico',
    to: '/'
  },
  {
    title: 'Diário de Turma',
    to: '/',
    icon: ImportContactsIcon
  }
];

const Main = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Início">
      <Container maxWidth={false} className={classes.content}>
        <AppBreadcrumbs data={BreadcrumbsContent} />
        {Menu.map(item =>
          item.submenu ? (
            <BoxMenu title={item.title} key={item.title}>
              {item.submenu &&
                item.submenu.map(btn => (
                  <BoxItem
                    title={btn.title}
                    icon={btn.icon}
                    bgColor={item.buttonsColor}
                    textColor={item.textColor}
                    key={btn.title}
                    href={btn.href}
                  />
                ))}
            </BoxMenu>
          ) : null
        )}
      </Container>
      
    </Page>
  );
};

export default Main;
