import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { App } from './containers/App';

const client = new ApolloClient({
  uri: 'https://petgram-server-dramirez.cdavidramirezg24.now.sh/graphql',
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App></App>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
