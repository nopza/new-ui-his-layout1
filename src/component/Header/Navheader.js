import React, { Component } from 'react';
import '../css/style4.css'
import sicon from '../../iconBS/build/svg/search.svg';

class Navheader extends Component {
    render() {
      return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i className="fas fa-align-left"></i> 
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" 
                    data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Master</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Report</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Setting</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Log out</a>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-0 mr-sm-2" type="search" placeholder="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><img src={sicon} alt="sicon" /></button>
                        </form>                        
                    </div>
                </div>
            </nav>
        </div>
      );
    }
}

export default Navheader;