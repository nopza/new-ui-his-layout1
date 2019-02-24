import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';


class Pinformation extends Component {

    constructor(props) {
        super(props);
    
        this.state = {

            columnDefs5: [
                {headerName: "", field: "" , width: 40 , checkboxSelection: true},
                {headerName: "สิทธิ", field: "privilege", width: 140, suppressSizeToFit: true},
                {headerName: "ความคุ้มครอง", field: "protect" , width: 140},
                {headerName: "Contact", field: "pcontact", width: 140},
                {headerName: "รพ. ใช้สิทธิ", field: "hpprivilege", width: 140},
                {headerName: "เลขที่บัตร", field: "pidcard", width: 140},
                {headerName: "วันที่เริ่ม", field: "psdate", width: 140},
                {headerName: "วันที่สิ้นสุด", field: "pedate", width: 140}
        
              ],
              rowData5: [
                {privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""},
                {privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""},
                {privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""}
              ],
              columnDefs6: [
                {headerName: "ลำดับที่", field: "number" , width: 80, suppressSizeToFit: true },
                {headerName: "สิทธิ", field: "privilege", width: 140},
                {headerName: "ความคุ้มครอง", field: "protect" , width: 140},
                {headerName: "Contact", field: "pcontact", width: 140},
                {headerName: "รพ. ใช้สิทธิ", field: "hpprivilege", width: 140},
                {headerName: "เลขที่บัตร", field: "pidcard", width: 140},
                {headerName: "วันที่เริ่ม", field: "psdate", width: 119},
                {headerName: "วันที่สิ้นสุด", field: "pedate", width: 119}
        
              ],
              rowData6: [
                {number: "", privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""},
                {number: "",privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""},
                {number: "",privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""}
              ],
              columnDefs7: [
                {headerName: "", field: "tprivilege", width: 920, suppressSizeToFit: true}
              ],
              rowData7: [
                {tprivilege: "กองทุนเงินทดแทน" },
                {tprivilege: "พรบ." }
              ],
              columnDefs8: [
                {headerName: "", field: "tprivilege", width: 80, suppressSizeToFit: true},
                {headerName: "Contact", field: "ncontact", width: 500},
                {headerName: "ความคุ้มครอง", field: "nprotect", width: 340}
              ],
              rowData8: [
                {tprivilege: "", ncontact:"", nprotect:"" }
              ],
              columnDefs9: [
                {headerName: "ลำดับที่", field: "number2" , width: 80, suppressSizeToFit: true },
                {headerName: "สิทธิ", field: "privilege2", width: 120},
                {headerName: "ความคุ้มครอง", field: "protect2" , width: 120},
                {headerName: "Contact", field: "pcontact2", width: 120},
                {headerName: "รพ. ใช้สิทธิ", field: "hpprivilege2", width: 120},
                {headerName: "เลขที่บัตร", field: "pidcard2", width: 120},
                {headerName: "วันที่เริ่ม", field: "psdate2", width: 120},
                {headerName: "วันที่สิ้นสุด", field: "pedate2", width: 120}
              ],
              rowData9: [
                {number2: "", privilege2: "", protect2: "", pcontact2: "", emphpprivilegename2: "", pidcard2: "", psdate2: "", pedate2: ""},
                {number2: "", privilege2: "", protect2: "", pcontact2: "", emphpprivilegename2: "", pidcard2: "", psdate2: "", pedate2: ""}
              ]

        }
    }

  render() {
    return (
        <div className="card">
          <div className="card-header">
            <div className="form-row">
              <div className="col-md-8">
              <h4>ข้อมูลสิทธิรักษา</h4>
            </div>
              <div className="col-md-4">
                <button className="btn btn-secondary collapsed float-right" type="button" data-toggle="collapse" data-target="#PinfoR" aria-expanded="false" aria-controls="PinfoR">
                  <i className="fas fa-plus" aria-hidden="true"></i>
                </button>
              </div>
          </div>
        </div>
        <div className="collapse" id="PinfoR">
        <div className="card-body">
          <div className="card">
            <div className="card-header">
              <h5>สิทธิรักษาพยาบาลทั้งหมด</h5>
            </div>
            <form>
                <div className="card-body">
                  <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                    <AgGridReact
                      enableColResize={true}
                      rowSelection="multiple"
                      enableSorting={true}
                      suppressResize={true}
                      columnDefs={this.state.columnDefs5}
                      rowData={this.state.rowData5}>
                    </AgGridReact>
                  </div> 
                  <br />
                  <button type="button" className="btn btn-success " data-toggle="modal" data-target="#myModal">เพิ่ม</button>&nbsp;
                  <button type="button" className="btn btn-danger ">ลบ</button>&nbsp;
                </div>

                <div className="modal fade" id="myModal">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    
                      <div className="modal-header">
                        <h4 className="modal-title">สิทธิรักษาพยาบาล</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                     
                      <div className="modal-body">                            
                      <div className="card">
                        <div className="card-header">
                          <h5>ประเภทสิทธิ</h5>
                          
                        </div>
                        <div style={{ height: '300px', width: '100%' }} className="ag-theme-balham">
                        
                          <AgGridReact
                            enableFilter={true}
                            enableColResize={true}
                            rowSelection="multiple"
                            enableSorting={true}
                            suppressResize={true}
                            suppressRowClickSelection={true}
                            columnDefs={this.state.columnDefs7}
                            rowData={this.state.rowData7}>
                          </AgGridReact>
                        </div> 

                        </div>
                        <div className="card">
                        <div className="card-header">
                          <h5>สิทธิรักษาพยาบาลทั้งหมด</h5>
                        </div>
                        <div style={{ height: '300px', width: '100%' }} className="ag-theme-balham">
                          <AgGridReact
                            enableColResize={true}
                            rowSelection="multiple"
                            enableSorting={true}
                            suppressResize={true}
                            columnDefs={this.state.columnDefs8}
                            rowData={this.state.rowData8}>
                          </AgGridReact>
                        </div> 

                        </div>
                        <div className="card">
                        <div className="card-header">
                          <h5>สิทธิคนไข้ทั้งหมด</h5>
                        </div>
                        <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                          <AgGridReact
                            enableColResize={true}
                            rowSelection="multiple"
                            enableSorting={true}
                            suppressResize={true}
                            columnDefs={this.state.columnDefs9}
                            rowData={this.state.rowData9}>
                          </AgGridReact>
                        </div> 

                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" class="btn btn-success" >เพิ่ม</button>
                      </div>
                    </div>

                  </div>
                </div>
            </form>
          </div>

          <div className="card">
            <div className="card-header">
              <h5>สิทธิรักษาพยาบาลหลัก</h5>
            </div>
            <form>
              <div className="card-body">
                <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                  <AgGridReact
                    enableColResize={true}
                    rowSelection="multiple"
                    enableSorting={true}
                    suppressResize={true}
                    columnDefs={this.state.columnDefs6}
                    rowData={this.state.rowData6}>
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

export default Pinformation;
