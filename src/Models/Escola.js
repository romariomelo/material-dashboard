import Api from 'src/services/Api';
import React from 'react';

export const EscolaContext = React.createContext({});

export async function getEscola() {
  try {
    const response = await Api.get();
    localStorage.setItem('escola', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
