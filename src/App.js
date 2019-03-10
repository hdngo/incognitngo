import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Incognitngo</title>
          <meta http-equiv='X-UA-Compatible' content='IE=edge'></meta>
          <meta name='description' content='Sh.'></meta>
          <meta name='theme-color' content='#ffffff'></meta>
          <meta name='twitter:card' content='summary'></meta>
          <meta name='twitter:site' content='Incognitngo'></meta>
          <meta name='twitter:title' content='Incognitngo'></meta>
          <meta name='twitter:description' content='Sh.'></meta>
          <meta name='twitter:creator' content='@harveydngo'></meta>
          <meta property='og:title' content='Incognitngo' />
          <meta property='og:type' content='website' />
          {/* <meta property='og:url' content='https://www.harveydngo.com/' /> */}
          <meta property='og:locale' content='en_US'></meta>
          <meta property='og:description' content='Sh.' />
          <meta property='og:site_name' content='Incognitngo' />
          <meta property='fb:admins' content='1212893460' />
        </Helmet>
        <header className="App-header">
          <p>incognito</p>
        </header>
      </div>
    );
  }
}

export default App;
