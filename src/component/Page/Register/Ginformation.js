import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AvField } from 'availity-reactstrap-validation';



class Ginformation extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          TITLEUIDTH:'',
          FornameTH: '',
          LastnameTH:'',
          TITLEUIDEN:'',
          FornameEN: '',
          LastnameEN:'',
          
            columnDefs: [
                {headerName: "ประเภทบัตร", field: "tcard", width: 310, suppressSizeToFit: true},
                {headerName: "เลขที่บัตร", field: "idcard" , width: 320},
                {headerName: "วันที่เริ่ม", field: "sdate", width: 200},
                {headerName: "วันที่สิ้นสุด", field: "edate", width: 200}
    
            ],
            rowData: [
                {tcard: "Visa", idcard: "1112", sdate: "12/12/2561", edate: "12/12/2562"},
                {tcard: "Paypal", idcard: "1150", sdate: "12/12/2561", edate: "12/12/2562"},
                {tcard: "30Bath", idcard: "7777", sdate: "12/12/2561", edate: "12/12/2562"},
                {tcard: "Hack!", idcard: "7777", sdate: "12/12/2561", edate: "12/12/2662"}
            ]
        }
        this.handleChangeTITLEUIDTH = this.handleChangeTITLEUIDTH.bind(this);
        this.handleChangeFornameTH = this.handleChangeFornameTH.bind(this);
        this.handleChangeLastnameTH = this.handleChangeLastnameTH.bind(this);
        this.handleChangeTITLEUIDEN = this.handleChangeTITLEUIDEN.bind(this);
        this.handleChangeFornameEN = this.handleChangeFornameEN.bind(this);
        this.handleChangeLastnameEN = this.handleChangeLastnameEN.bind(this);
    }
    
    handleChangeTITLEUIDTH = (e,TITLEUIDTH) => {
      this.setState({ TITLEUIDTH });
      localStorage.setItem("นาย", TITLEUIDTH);
      console.log("มาแล้ว :" , TITLEUIDTH)
    }

    handleChangeFornameTH = (e,FornameTH) => {
      localStorage.setItem("nop", FornameTH);
      this.setState({ FornameTH });
      console.log("มาแล้ว :" , FornameTH)
    }
    handleChangeLastnameTH = (e,LastnameTH) => {
      this.setState({ LastnameTH });
      localStorage.setItem("za", LastnameTH);
      console.log("มาแล้ว :" , LastnameTH)
    }

    handleChangeTITLEUIDEN = (e,TITLEUIDEN) => {
      localStorage.setItem("Mr.", TITLEUIDEN);
      this.setState({ TITLEUIDEN });
      console.log("มาแล้ว :" , TITLEUIDEN)
    }

    handleChangeFornameEN = (e,FornameEN) => {
      this.setState({ FornameEN });
      localStorage.setItem("nop", FornameEN);
      console.log("มาแล้ว :" , FornameEN)
    }

    handleChangeLastnameEN = (e,LastnameEN) => {
      localStorage.setItem("za", LastnameEN);
      this.setState({ LastnameEN });
      console.log("มาแล้ว :" , LastnameEN)
    }




  render() {
    return (
        <div className="card">
        <div className="card-header">
          <div className="form-row">
          <div className="col-md-8">
            <h4>ข้อมูลทั่วไป</h4>
          </div>
           <div className="col-md-4">
            <button className="btn btn-secondary float-right" type="button" data-toggle="collapse" data-target="#infoR" aria-expanded="true" aria-controls="infoR">
              <i className="fas fa-plus" aria-hidden="true"></i>
            </button>
            </div>
          </div>
        </div>
        
        <div className="collapse show" id="infoR">
        <div className="card-body">

        <div className="card">
          <div className="card-body">
            <div className="form-row ">
              <div className=" form-group col-md-2">
                <AvField name="title" label="คำนำหน้า" type="select" errorMessage="กรุณาเลือกคำนำหน้า" onChange={this.handleChangeTitleTH} value={this.state.TITLEUIDTH} validate={{
                  required: {value: true} 
                }}><option value=""></option>
                <option value="1">นาย</option>
                <option value="2">นาง</option>
                <option value="3">นางสาว</option>
                </AvField>
              </div>
              <div className="form-group col-md-3">
                <AvField name="name" label="ชื่อ" type="text" errorMessage="กรุณากรอกชื่อ" onChange={this.handleChangeFornameTH} value={this.state.FornameTH} validate={{
                required: {value: true}
              }} />
              </div>
              <div className="form-group col-md-3">
              <AvField name="lastname" label="นามสกุล" type="text" errorMessage="กรุณากรอกนามสกุล" onChange={this.handleChangeLastnameTH} value={this.state.LastnameTH} validate={{
                required: {value: true}
              }} /> 
              </div>
              <div className="form-group col-md-2">
                <label>ชื่อกลาง</label>
                <input type='text' className="form-control" />
              </div>
                <div className="form-group col-md-2">
                <label>ชื่อเล่น</label>
                <input type='text' className="form-control"/>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="form-row ">
              <div className=" form-group col-md-2">
                <AvField name="titleE" label="Title" type="select" errorMessage="กรุณาเลือกคำนำหน้า" onChange={this.handleChangeTitleEN} value={this.state.TITLEUIDEN} validate={{
                  required: {value: true}
                }}>
                <option></option>
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Miss</option>
                </AvField>
              </div>
              <div className="form-group col-md-3">
                <AvField name="nameE" label="Name" type="text" errorMessage="กรุณากรอกชื่อ" onChange={this.handleChangeFornameEN} value={this.state.FornameEN} validate={{
                required: {value: true}
              }} />
              </div>
                <div className="form-group col-md-3">
                <AvField name="lastnameE" label="Lastname" type="text" errorMessage="กรุณากรอกนามสกุล" onChange={this.handleChangeLastnameEN} value={this.state.LastnameEN} validate={{
                required: {value: true}
              }} />
              </div>
              <div className="form-group col-md-2">
                <label>Middlename</label>
                <input type='text' className="form-control" />
              </div>
              <div className="form-group col-md-2">
                <label>Nickname</label>
                <input type='text' className="form-control" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="form-row">
              <div className="form-group col-md-5">
                <label>เลขบัตรประชาชน</label>
                <input type='text' className="form-control"  />
              </div>
              <div className="form-group col-md-2">
                <label>วันที่เริ่ม</label>
                <input type='text' className="form-control"  />
              </div> 
              <div className="form-group col-md-2">
                <label>วันที่สิ้นสุด</label>
                <input type='text' className="form-control"  />
              </div>
              <div className="form-inline">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                  <label className="custom-control-label" for="customCheck1">หน่วยงาน</label>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-2">
                  <label>วัน/เดือน/ปี เกิด</label>
                  <input type='text' className="form-control"  />
              </div>
              <div className="form-group col-md-1">
                <fieldset disabled>
                  <label>อายุ</label>
                  <input type='text' className="form-control"  />
                </fieldset>
              </div>
              <div className=" form-group col-auto">
                <label>เพศ</label>
                  <select className="form-control">
                    <option></option>
                    <option>ชาย</option>
                    <option>หญิง</option>
                  </select>
              </div>
              <div className="form-group col-md-3">
                <label>สภาพสมรส</label>
                <input type='text' className="form-control"  />
              </div>
            
            </div>

            <div className="form-row">
              <div className="form-group col-md-2">
                <label>อาชีพ</label>
                <select className="form-control">
                    <option></option>
                    <option>ข้าราชการ</option>
                  </select>
              </div>
              <div className="form-group col-md-7">
                <fieldset disabled>
                  <label><br /></label>
                  <input type='text' className="form-control"  />
                </fieldset>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-auto">
                <label>สัญชาติ</label>
                <select className="form-control">
                    <option></option>
                    <option>ไทย</option>
                  </select>
              </div>
              <div className="form-group col-md-3">
                <fieldset disabled>
                  <label><br /></label>
                  <input type='text' className="form-control"  />
                </fieldset>
              </div>
              <div className="form-group col-md-1">
                <label>เชื้อชาติ</label>
                <select className="form-control">
                    <option></option>
                    <option>ไทย</option>
                  </select>
              </div>
              <div className="form-group col-md-3">
                <fieldset disabled>
                  <label><br /></label>
                  <input type='text' className="form-control"  />
                </fieldset>
              </div>
              <div className="form-group col-md-3">
                <label>ศาสนา</label>
                <select className="form-control">
                    <option></option>
                    <option>พุทธ</option>
                  </select>
              </div>                  
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label>หมู่เลือด</label>
                <select className="form-control">
                    <option></option>
                    <option>A</option>
                    <option>AB</option>
                    <option>B</option>
                    <option>O</option>
                  </select>
              </div>
              <div className="form-group col-md-1">
                <label>RH</label>
                <select className="form-control">
                    <option></option>
                    <option>+</option>
                  </select>
              </div>                  
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label>เบอร์มือถือ 1</label>
                <input type='text' className="form-control"  />
              </div>

              <div className="form-group col-md-2">
                <label>เบอร์มือถือ 2</label>
                <input type='text' className="form-control"  />
              </div>

              <div className="form-group col-md-2">
                <label>เบอร์มือถือ 3</label>
                <input type='text' className="form-control"  />
              </div>

              <div className="form-group col-md-2">
                <label>เบอร์บ้าน</label>
                <input type='text' className="form-control"  />
              </div>

              <div className="form-group col-md-2">
                <label>เบอร์ที่ทำงาน</label>
                <input type='text' className="form-control"  />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label>E-mail</label>
                <input type='text' className="form-control"  />
              </div>

              <div className="form-group col-md-4">
                <label>ID Line</label>
                <input type='text' className="form-control"  />
              </div>
            </div>

            </div>            
          </div>

          <div className="card">
            <div className="card-body">
              <div className="form-row">
                <div className="form-group col-md-2">                      
                  <div className="form-inline">
                  <label>ประเภทผู้ป่วย</label>&nbsp;&nbsp;&nbsp;
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="vip"/>
                      <label className="custom-control-label" for="vip">VIP</label>
                    </div>
                    
                  </div>
                </div>

                <div className="form-group col-md-3">
                  <fieldset disabled>
                    <input type='text' className="form-control"  />
                  </fieldset>
                </div>

                <div className="form-group col-md-2">                      
                  <div className="form-inline">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="special"/>
                      <label className="custom-control-label" for="special">Special Care</label>
                    </div>
                    
                  </div>
                </div>

                <div className="form-group col-md-3">
                  <fieldset disabled>
                    <input type='text' className="form-control"  />
                  </fieldset>
                </div>

                <div className="form-group col-md-2">
                  <div className="form-inline">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="anonymous"/>
                      <label className="custom-control-label" for="anonymous">Anonymous</label>
                    </div>
                    
                  </div>
                </div>
              </div>     
            </div>
          </div>

          <form className="card">
            <div className="card-body">
              <div className="form-row">   
                <div className="form-group col-md-2">
                  <label>ประเภทบัตร</label>
                  <select className="form-control">
                      <option></option>
                      <option>????????</option>
                    </select>
                </div>
                <div className="form-group col-md-3">
                  <label>เลขที่บัตร</label>
                  <input type='text' className="form-control" />                          
                </div>                 
              </div>

              <div className="form-row">
                <div className="form-group col-md-2">
                  <label>วันที่เริ่ม</label>
                  <input type='text' className="form-control" />                          
                </div>  
                <div className="form-group col-md-2">
                  <label>วันที่สิ้นสุด</label>
                  <input type='text' className="form-control" />                          
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-7">
                  <button type="button" className="btn btn-success ">เพิ่ม</button>&nbsp;
                  <button type="button" className="btn btn-warning ">แก้ไข</button>&nbsp;
                  <button type="button" className="btn btn-primary ">ปิดการใช้งาน</button>&nbsp;
                  <button type="button" className="btn btn-danger ">ลบ</button>                  
                </div>
                
              </div>

              <div className="form-row">
              <div>

              </div>

                <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                  <AgGridReact
                      enableColResize={true}
                      rowSelection="multiple"
                      enableSorting={true}
                      enableFilter={true}
                      suppressResize={true}
                      columnDefs={this.state.columnDefs}
                      rowData={this.state.rowData}>
                  </AgGridReact>
                </div>                 


              </div>
            </div>
          </form>

        </div>
        </div>
      </div>
    );
  }
}

export default Ginformation;
