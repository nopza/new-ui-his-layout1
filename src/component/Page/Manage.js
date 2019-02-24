import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../css/style4.css'
import Navheader from '../Header/Navheader';

class Manage extends Component {
  render() {
    return (
      <div class="wrapper">
        <Header />
        <div className="container-fluid">
        <Navheader />
        <div className="card">
          <div className="card-header">
            <h3>Manage</h3>
          </div>
          <div class="card-body">

          </div>
        </div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default Manage;
