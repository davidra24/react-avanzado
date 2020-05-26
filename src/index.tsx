import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { App } from './containers/App';
import Context from './Context';

const client = new ApolloClient({
  uri: 'https://petgram-server-dramirez.cdavidramirezg24.now.sh/graphql',
  request: (operation) => {
    const token = sessionStorage.getItem('token');
    const authorization = token ? `bearer ${token}` : '';
    operation.setContext({
      headers: {
        authorization,
      },
    });
  },
  onError: (error) => {
    console.log('error', error);
    const { networkError } = error;
    if (networkError && networkError.result.code == 'invalid_token') {
      sessionStorage.removeItem('token');
      window.location.href = '/';
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
      <ApolloProvider client={client}>
        <App></App>
      </ApolloProvider>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
