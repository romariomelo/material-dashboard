import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { ConfirmProvider } from 'material-ui-confirm';
import { EscolaContext, getEscola } from 'src/Models/Escola';

const App = () => {
  const routing = useRoutes(routes);
  const [escola, setEscola] = React.useState({});

  React.useEffect(() => {
    const init = async () => {
      const response = await getEscola();
      setEscola(response[0]);
    };
    init();
  }, [escola]);

  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        <EscolaContext.Provider value={escola}>
          <GlobalStyles />
          {routing}
        </EscolaContext.Provider>
      </ConfirmProvider>
    </ThemeProvider>
  );
};

export default App;
