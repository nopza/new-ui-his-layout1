import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';


class Cinformation extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            columnDefs3: [
                {headerName: "วัน/เวลาที่แก้ไข", field: "tchange", width: 150, suppressSizeToFit: true},
                {headerName: "ชื่อ-สกุลเดิม", field: "oldname" , width: 330},
                {headerName: "ชื่อ-สกุลใหม่", field: "newname", width: 330},
                {headerName: "ผู้รับแจ้ง", field: "uchange", width: 250}
      
            ],
            rowData3: [
              {tchange: "", oldname: "", newname: "", uchange: ""}
            ]
        }
    }




  render() {
    return (
        <div className="card">
          <div className="card-header">
            <div className="form-row">
              <div className="col-md-8">
              <h4>ข้อมูลการเปลี่ยนชื่อ-สกุล</h4>
            </div>
              <div className="col-md-4">
                <button className="btn btn-secondary collapsed float-right" type="button" data-toggle="collapse" data-target="#CinfoR" aria-expanded="false" aria-controls="CinfoR">
                  <i className="fas fa-plus" aria-hidden="true"></i>
                </button>
              </div>
          </div>
        </div>
        <div className="collapse" id="CinfoR">
        <div className="card-body">
        <div className="card">
          <div className="card-header">
            <h5>เปลียนชื่อ-สกุล</h5>
          </div>
          <form>
          <div className="card-body">
            <div className="form-row"> 
              <div className="form-group col-md-3">
                <input type="text" className="form-control" placeholder="ธนกร" />
              </div>
              <div className="form-group col-md-3">
                <input type="text" className="form-control" placeholder="กิตติภิวัฒกุล" />
              </div>
              <div className="form-group col-md-2">
                <button type="button" className="btn btn-success ">ยืนยันการเปลี่ยนชื่อ-สกุล</button>
              </div>

            </div>
          </div>
          </form>
          
        </div>

        <div className="card">
          <div className="card-header">
            <h5>ประวัติการเปลี่ยนชื่อ-สกุล</h5>
          </div>
          <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
            <AgGridReact
              enableColResize={true}
              rowSelection="multiple"
              enableSorting={true}
              suppressResize={true}
              columnDefs={this.state.columnDefs3}
              rowData={this.state.rowData3}>
            </AgGridReact>
          </div> 

          
        </div>
        </div>

        </div>
      </div>
    );
  }
}

export default Cinformation;
