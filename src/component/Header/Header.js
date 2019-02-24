import React, { Component } from 'react';
// import '../Header/Header.css'
import '../css/style4.css'


class Header extends Component {
  render() {
    return (
        
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <a href='/home'><h3>SUTH HIS</h3></a>
              <strong>SH</strong>
            </div>

            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-home"></i>&nbsp;
                        Register
                    </a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="/register">ทะเบียนผู้ป่วย</a>
                        </li>
                        <li>
                            <a href="/sendpatient">ส่งตรวจผู้ป่วย</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#OPDSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-copy"></i>&nbsp;
                        OPD
                    </a>
                    <ul className="collapse list-unstyled" id="OPDSubmenu">
                        <li>
                            <a href="examination">งานหน้าห้องตรวจ</a>
                        </li>
                        <li>
                            <a href="/examdoctor">ห้องตรวจแพทย์</a>
                        </li>
                        <li>
                            <a href="/dispensing">งานห้องจ่ายยา</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/xray">
                        <i className="fas fa-x-ray"></i>&nbsp;
                        งานหน้าห้อง X-ray
                    </a>
                </li>
                <li>
                    <a href="/finance">
                        <i className="fas fa-dollar-sign"></i>&nbsp;
                        งานห้องการเงิน
                    </a>
                </li>
                <li>
                    <a href="/manage">
                        <i className="fas fa-calendar-alt"></i>&nbsp;
                        Manage Session
                    </a>
                </li>
            </ul>
        </nav>
      </div>

    );
  }
}


export default Header;
