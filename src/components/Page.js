import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import {EscolaContext} from "src/Models/Escola"

const Page = forwardRef(({
  children,
  title = '',
  ...rest
}, ref) => {
  const Escola = React.useContext(EscolaContext);
  const newTitle = `${title} - ${Escola.nome}`;
  return (
    <div
      ref={ref}
      {...rest}
    >
      <Helmet>
        <title>{newTitle}</title>
      </Helmet>
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
