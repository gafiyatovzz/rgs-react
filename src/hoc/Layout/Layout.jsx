import React, { Component } from 'react';

import Header from '../../components/Header/Header.jsx';
import logo from '../../assets/svg/logo.svg';
import client from '../../content/client.js'
import copyrignt from '../../content/copyrignt.js'
import Footer from '../../components/Footer/Footer.jsx';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header 
          logo={logo} 
        />
        <main className="main">{this.props.children}</main>
        <Footer 
          logo={logo}
          client={client}
          copyrignt={copyrignt}
        />
      </React.Fragment>
    );
  }
}

export default Layout;