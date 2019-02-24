import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import InputMask from 'react-input-mask';


class Binformation extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            columnDefs4: [
                {headerName: "สังกัด", field: "bemp", width: 170, suppressSizeToFit: true},
                {headerName: "ส่วนงาน", field: "jemp" , width: 170},
                {headerName: "รหัสพนักงาน", field: "empid", width: 170},
                {headerName: "ชื่อพนักงาน", field: "empname", width: 170},
                {headerName: "ส่วนงานย่อย", field: "sjemp", width: 170},
                {headerName: "Comment", field: "comment", width: 170}

            ],
            rowData4: [
                {bemp: "", jemp: "", empid: "", empname: "", sjemp: "", comment: ""}
            ]
        }
    }

  render() {
    return (

        <div className="card">
        <div className="card-header">
            <div className="form-row">
              <div className="col-md-8">
              <h4>สังกัดหน่วยงานและสวัสดิการ</h4>
            </div>
              <div className="col-md-4">
                <button className="btn btn-secondary collapsed float-right" type="button" data-toggle="collapse" data-target="#BinfoR" aria-expanded="false" aria-controls="BinfoR">
                  <i className="fas fa-plus" aria-hidden="true"></i>
                </button>
              </div>
          </div>
        </div>
        <div className="collapse" id="BinfoR">
        <div className="card-body">
          <div className="card">
            <div className="card-header">
              <h5>ข้อมูลบุคลากร/นักศึกษา</h5>
            </div>
            <div className="card-body">
              <div className="form-row">
              <div className="form-group col-md-4">
                <label>สำนัก/สังกัด</label>
                <select className="form-control">
                  <option></option>
                  <option>01</option>
                  <option>02</option>
                </select>
              </div>

              <div className="form-group col-md-4">
                <label>ส่วนงาน/สาขาวิชา</label>
                <select className="form-control">
                  <option></option>
                  <option>01</option>
                  <option>02</option>
                </select>
              </div>

              <div className="form-group col-md-4">
                <label>ส่วนงานย่อย</label>
                <select className="form-control">
                  <option></option>
                  <option>01</option>
                  <option>02</option>
                </select>
              </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>รหัส นศ./พนง.</label>
                  <input type="text" className="form-control" />
                </div>

                  <div className="form-inline">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="student"/>
                      <label className="custom-control-label" for="student">นักศึกษา</label>
                    </div>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="form-inline">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="emp"/>
                      <label className="custom-control-label" for="emp">พนักงาน</label>
                    </div>
                  </div>
                
              </div>

            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5>สวัสดิการครอบครัวพนักงาน</h5>
            </div>

            <form>
            <div className="card-body">
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>สังกัด</label>
                  <select className="form-control">
                    <option></option>
                    <option>01</option>
                    <option>02</option>
                  </select>
                </div>

                <div className="form-group col-md-4">
                  <label>ส่วนงาน</label>
                  <select className="form-control">
                    <option></option>
                    <option>01</option>
                    <option>02</option>
                  </select>
                </div>

                <div className="form-group col-md-4">
                  <label>ส่วนงานย่อย</label>
                  <select className="form-control">
                    <option></option>
                    <option>01</option>
                    <option>02</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>รหัส พนง.</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group col-md-4">
                  <label>Comment</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group col-md-4">
                  <label>คนไข้เป็น</label>
                  <select className="form-control">
                    <option></option>
                    <option>01</option>
                    <option>02</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-2">
                  <label>วันที่ออกบัตร</label>
                  <InputMask type="text" className="form-control" mask="99-99-9999" placeholder="dd-mm-yyyy" />
                </div>

                <div className="form-group col-md-2">
                  <label>วันบัตรหมดอายุ</label>
                  <InputMask type="text" className="form-control" mask="99-99-9999" placeholder="dd-mm-yyyy" />
                </div>

                <div className="form-inline">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="act"/>
                    <label className="custom-control-label" for="act">Active</label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-5">
                  <button type="button" className="btn btn-success ">เพิ่ม</button>&nbsp;&nbsp;&nbsp;
                  <button type="button" className="btn btn-warning ">แก้ไข</button>&nbsp;&nbsp;&nbsp;
                  <button type="button" className="btn btn-danger ">ลบ</button>                  
                </div>  
              </div>

            <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
            <AgGridReact
              enableColResize={true}
              rowSelection="multiple"
              enableSorting={true}
              suppressResize={true}
              columnDefs={this.state.columnDefs4}
              rowData={this.state.rowData4}>
            </AgGridReact>
          </div> 
            </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Binformation;
