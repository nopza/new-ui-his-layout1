import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../css/style4.css'
import '../../Page/Page.scss'
import Navheader from '../../Header/Navheader';
import ScrollUpButton from "react-scroll-up-button";
// import ScrollToTop from "react-scroll-up";
import { AvForm } from 'availity-reactstrap-validation';
// import PicP from '../../img/no-image.jpg';
import axios from 'axios';
import swal from 'sweetalert';

// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../../css/table.scss'
import 'ag-grid-enterprise';
import Ginformation from './Ginformation';
import Ainformation from './Ainformation';
import Pinformation from './Pinformation';
import Cinformation from './Cinformation';
import Binformation from './Binformation';



class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: null,
      TITLEUIDTH: null,
      FornameTH: "",
      SurnameTH: "",
      TITLEUIDEN: null,
      ForenameEN: "",
      SurnameEN: ""

    }
    this.handlesubmit = this.handlesubmit.bind(this)
  }

  async handlesubmit(e) {

    this.state.TITLEUID = localStorage.getItem("TITLEUID");
    this.state.Forname = localStorage.getItem("Forname");
    this.state.Lastname = localStorage.getItem("Lastname");

    await axios.post('http://localhost:3001/patient', {
      id: this.state.count,
      TITLEUID: localStorage.getItem("TITLEUID"),
      Forname: localStorage.getItem("Forname"),
      Lastname: localStorage.getItem("Lastname")
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    this.state.count++;
    localStorage.clear();
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container-fluid">
          <Navheader />

          <AvForm>

            <div className="card">
              <div className="card-body">

                <div className="form-row">
                  <div className=" form-group col-md-">
                    <label><br /><br /></label>
                    <h3>Hospital Number</h3>
                  </div>
                  <div className=" form-group col-md-3">
                    <label><br /><br /></label>
                    <fieldset disabled>
                      <input type='text' className="form-control" placeholder="00000000" />
                    </fieldset>
                  </div>
                  <div className=" form-group col-md-3">

                  </div>
                  <div className=" form-group col text-right">
                    <div className="imgPreview picimg">
                      {/* <img src={PicP} /> */}
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div data-spy="scroll" data-target="#test" data-offset="0">
              <div id="item-1">
                <Ginformation />
              </div>

              <div id="item-2">
                <Ainformation />
              </div>

              <div id="item-3">
                <Pinformation />
              </div>

              <div id="item-4">
                <Cinformation />
              </div>

              <div id="item-5">
                <Binformation />
              </div>

            </div>

            <div className="form-row">
              <div className="form-group col-md-9">
                <button type="button" className="btn btn-success ">อ่านข้อมูลจากบัตรประชาชน</button>
              </div>
              <div className="form-group col-md-3">
                <button type="button" className="btn btn-danger ">ลบรายการ</button>&nbsp;&nbsp;&nbsp;
                <button type="submit" className="btn btn-primary " type="submit" onClick={this.handlesubmit}>บันทึก</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-second ">ยกเลิก</button>
              </div>
            </div>
          </AvForm>
          <ScrollUpButton
            StopPosition={0}
            ShowAtPosition={150}
            EasingType='easeOutCubic'
            AnimationDuration={500}
            ContainerClassName='ScrollUpButton__Container'
            TransitionClassName='ScrollUpButton__Toggled'
            style={{}}
            ToggledStyle={{}} />
          {/* <ScrollToTop showUnder={160}>
            <span>UP</span>
            </ScrollToTop> */}
          <Footer />

        </div>

        <div className="testsidebar">
          <nav id="test" className="nav nav-pills flex-column">
            <a className="nav-link" href="#item-1">ข้อมูลทั่วไป</a>
            <a className="nav-link" href="#item-2">ข้อมูลที่อยู่</a>
            <a className="nav-link" href="#item-3">ข้อมูลสิทธิรักษา</a>
            <a className="nav-link" href="#item-4">ข้อมูลการเปลี่ยนชื่อ-สกุล</a>
            <a className="nav-link" href="#item-5">สังกัดหน่วยงานและสวัสดิการ</a>
          </nav>
        </div>


      </div>
    );
  }
}

export default Register;
