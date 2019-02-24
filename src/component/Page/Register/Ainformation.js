import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';


class Ainformation extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            columnDefs2: [
                {headerName: "คำนำหน้า", field: "title", width: 100, suppressSizeToFit: true},
                {headerName: "ชื่อ", field: "name" , width: 130},
                {headerName: "สกุล", field: "lname", width: 130},
                {headerName: "ที่อยู่", field: "ads", width: 130},
                {headerName: "ความสัมพันธ์", field: "rels", width: 120},
                {headerName: "เบอร์มือถือ", field: "monum" , width: 110},
                {headerName: "เบอร์บ้าน", field: "honum", width: 110},
                {headerName: "เบอร์ที่ทำงาน", field: "wonum", width: 120},
                {headerName: "Priority", field: "priority", width: 80}
            ],
            rowData2: [
              {title: "", name: "", lname: "", ads: "", rels: "", monum: "", honum: "", wonum: "", priority: ""}
            ]
        }
    }




  render() {
    return (
        <div className="card">
        <div className="card-header">
            <div className="form-row">
              <div className="col-md-8">
              <h4>ข้อมูลที่อยู่</h4>
            </div>
              <div className="col-md-4">
                <button className="btn btn-secondary collapsed float-right" type="button" data-toggle="collapse" data-target="#AinfoR" aria-expanded="false" aria-controls="AinfoR">
                  <i className="fas fa-plus" aria-hidden="true"></i>
                </button>
              </div>
          </div>
        </div>
        <div className="collapse" id="AinfoR">
        <div className="card-body">

          <div className="card">
            <div className="card-header">
              <h5>ข้อมูลที่อยู่ตามทะเบียนบ้าน</h5>
            </div>
              <div className="card-body">
                <div className="form-row">
                  <div className="form-group col-md-2">
                    <label>บ้านเลขที่</label>
                    <input type='text' className="form-control"  />
                  </div>

                  <div className="form-group col-md-1">
                    <label>หมู่ที่</label>
                    <input type='text' className="form-control"  />
                  </div>

                  <div className="form-group col-md-4">
                    <label>ถนน / ซอย / หมู่บ้าน</label>
                    <input type='text' className="form-control"  />
                  </div>

                </div>

                <div className="form-row">
                  <div className="form-group col-md-1">
                    <label>จังหวัด</label>
                    <select className="form-control">
                      <option></option>
                      <option>30</option>
                    </select>
                  </div>

                  <div className="form-group col-md-3">
                    <fieldset disabled>
                      <label><br /></label>
                      <input type='text' className="form-control"  />
                    </fieldset>
                  </div>

                  <div className="form-group col-md-1">
                    <label>อำเภอ</label>
                    <select className="form-control">
                      <option></option>
                      <option>04</option>
                    </select>
                  </div>

                  <div className="form-group col-md-3">
                    <fieldset disabled>
                      <label><br /></label>
                      <input type='text' className="form-control"  />
                    </fieldset>
                  </div>

                </div>

                <div className="form-row">
                  <div className="form-group col-md-1">
                    <label>ตำบล/เขต</label>
                    <select className="form-control">
                      <option></option>
                      <option>03</option>
                    </select>
                  </div>

                  <div className="form-group col-md-3">
                    <fieldset disabled>
                      <label><br /></label>
                      <input type='text' className="form-control"  />
                    </fieldset>
                  </div>

                  <div className="form-group col-md-2">
                    <label>รหัสไปรษณีย์</label>
                    <input type='text' className="form-control"  />
                  </div>

                </div>

              </div>
            </div>

            <div className="card">
            
              <div className="card-header">
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <h5>ที่อยู่ที่สามารถติดต่อได้</h5>
                  </div>
                  <div className="form-group col-md-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="adds"/>
                      <label className="custom-control-label" for="adds">หน่วยงาน</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="form-row">
                  <div className="form-group col-md-2">
                    <label>บ้านเลขที่</label>
                    <input type='text' className="form-control"  />
                  </div>

                  <div className="form-group col-md-1">
                    <label>หมู่ที่</label>
                    <input type='text' className="form-control"  />
                  </div>

                  <div className="form-group col-md-4">
                    <label>ถนน / ซอย / หมู่บ้าน</label>
                    <input type='text' className="form-control"  />
                  </div>

                </div>

                <div className="form-row">
                  <div className="form-group col-md-1">
                    <label>จังหวัด</label>
                    <select className="form-control">
                      <option></option>
                      <option>30</option>
                    </select>
                  </div>

                  <div className="form-group col-md-3">
                    <fieldset disabled>
                      <label><br /></label>
                      <input type='text' className="form-control"  />
                    </fieldset>
                  </div>

                  <div className="form-group col-md-1">
                    <label>อำเภอ</label>
                    <select className="form-control">
                      <option></option>
                      <option>04</option>
                    </select>
                  </div>

                  <div className="form-group col-md-3">
                    <fieldset disabled>
                      <label><br /></label>
                      <input type='text' className="form-control"  />
                    </fieldset>
                  </div>

                </div>

                <div className="form-row">
                  <div className="form-group col-md-1">
                    <label>ตำบล/เขต</label>
                    <select className="form-control">
                      <option></option>
                      <option>03</option>
                    </select>
                  </div>

                  <div className="form-group col-md-3">
                    <fieldset disabled>
                      <label><br /></label>
                      <input type='text' className="form-control"  />
                    </fieldset>
                  </div>

                  <div className="form-group col-md-2">
                    <label>รหัสไปรษณีย์</label>
                    <input type='text' className="form-control"  />
                  </div>

                </div>

              </div>

            </div>

            <div className="card">
              <div className="card-body">
                <div className="form-row">
                  <div className="form-group col-md-5">
                    <label>สถานะบุคคล</label>
                    <select className="form-control">
                      <option></option>
                      <option>test</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <form>
              <div className="card">
              <div className="card-header">
                  <div className="form-row">
                    <div className="form-group col-md-2">
                      <h5>ญาติที่ติดต่อ</h5>
                    </div>
                    <div className="form-group col-md-3">
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="addsp"/>
                        <label className="custom-control-label" for="addsp">ที่อยู่ตามทะเบียนบ้านผู้ป่วย</label>
                      </div>
                    </div>
                    <div className="form-group col-md-3">
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="addspp"/>
                        <label className="custom-control-label" for="addspp">ที่อยู่ที่สามารถติดต่อได้ของผู้ป่วย</label>
                      </div>
                    </div>
                    <div className="form-group col-md-2">
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="addsppn"/>
                        <label className="custom-control-label" for="addsppn">ไม่มีญาติติดต่อ</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-row">
                    <div className="form-group col-auto">
                      <label>คำนำหน้า</label>
                      <select className="form-control">
                        <option></option>
                        <option>นาย</option>
                        <option>นาง</option>
                        <option>นางสาว</option>
                      </select>
                    </div>

                    <div className="form-group col-md-2">
                      <label>ชื่อ</label>
                      <input type='text' className="form-control"  />
                    </div>

                    <div className="form-group col-md-2">
                      <label>นามสกุล</label>
                      <input type='text' className="form-control"  />
                    </div>

                    <div className="form-group col-auto">
                      <label>ความสัมพันธ์กับผู้ป่วย</label>
                      <select className="form-control">
                        <option></option>
                        <option>พ่อ</option>
                        <option>แม่</option>
                        <option>สามี</option>
                        <option>ภรรยา</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-2">
                      <label>เบอร์มือถือ</label>
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

                    <div className="form-group col-auto">
                      <label>ลำดับความสำคัญ</label>
                      <select className="form-control">
                        <option></option>
                        <option>??</option>
                        <option>??</option>
                      </select>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-2">
                        <label>บ้านเลขที่</label>
                        <input type='text' className="form-control"  />
                      </div>

                      <div className="form-group col-md-2">
                        <label>หมู่ที่</label>
                        <input type='text' className="form-control"  />
                      </div>

                      <div className="form-group col-md-5">
                        <label>ถนน / ซอย / หมู่บ้าน</label>
                        <input type='text' className="form-control"  />
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-auto">
                      <label>จังหวัด</label>
                      <select className="form-control">
                        <option></option>
                        <option>03</option>
                        <option>04</option>
                      </select>
                    </div>

                    <div className="form-group col-md-3">
                      <fieldset disabled>
                        <label><br /></label>
                        <input type='text' className="form-control"  />
                      </fieldset>
                    </div>

                    <div className="form-group col-auto">
                      <label>อำเภอ/เขต</label>
                      <select className="form-control">
                        <option></option>
                        <option>01</option>
                        <option>02</option>
                      </select>
                    </div>

                    <div className="form-group col-md-3">
                      <fieldset disabled>
                        <label><br /></label>
                        <input type='text' className="form-control"  />
                      </fieldset>
                    </div>
                  </div>

                  <div className="form-row">
                     <div className="form-group col-auto">
                      <label>ตำบล/เขต</label>
                      <select className="form-control">
                        <option></option>
                        <option>01</option>
                        <option>02</option>
                      </select>
                    </div>

                    <div className="form-group col-md-3">
                      <fieldset disabled>
                        <label><br /></label>
                        <input type='text' className="form-control"  />
                      </fieldset>
                    </div>

                    <div className="form-group col-md-2">
                      <label>รหัสไปรษณีย์</label>
                      <input type='text' className="form-control"  />
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
                  
                    <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                      <AgGridReact
                          enableColResize={true}
                          rowSelection="multiple"
                          enableSorting={true}
                          suppressResize={true}
                          columnDefs={this.state.columnDefs2}
                          rowData={this.state.rowData2}>
                      </AgGridReact>
                    </div> 

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

export default Ainformation;
