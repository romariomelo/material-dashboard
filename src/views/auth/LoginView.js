import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from '@material-ui/core';
import Page from 'src/components/Page';
import Login from 'src/services/Login';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [mensagem, setMensagem] = React.useState("");

  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .max(255)
                .required('E-mail ou CPF obrigatório'),
              password: Yup.string()
                .max(255)
                .required('Senha obrigatória')
            })}
            onSubmit={async (values) => {
              const response = await Login(values.email, values.password);
              if (response.status === 500) {
                setMensagem(response.data.message);
                setOpen(true);
              }
              if (response.status === 401) {
                setMensagem(response.data.message);
                setOpen(true);
                return;
              }
              if (response.status === 200) {
                navigate('/', { replace: true });
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Login
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Faça login para ter acesso ao sistema
                  </Typography>
                </Box>
                <Grid container spacing={3}></Grid>
                <Box mt={3} mb={1}></Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="CPF ou E-mail"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Senha"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Acessar
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  <Link component={RouterLink} to="/register" variant="h6">
                    Esqueceu a senha?
                  </Link>
                </Typography>
                <Typography color="textSecondary" variant="body1">
                  <Link component={RouterLink} to="/register" variant="h6">
                    Primeiro acesso.
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>


      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Não foi possível entrar no sistema.</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {mensagem}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
};

export default LoginView;
