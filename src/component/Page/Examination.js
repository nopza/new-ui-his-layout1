import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../Page/Page.css'
import '../css/style4.css';
import Navheader from '../Header/Navheader';
import PanelGroup from 'react-panelgroup';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';


const columns1 = [{
  dataField: 'id',
  text: 'วันที่รับบริการ',
  sort: true
  
}, {
  dataField: 'symptom',
  text: 'อาการสำคัญ',
  sort: true
}, {
  dataField: 'authority',
  text: 'สิทธิรักษา',
  sort: true
}, {
  dataField: 'doctor',
  text: 'Doctor',
  sort: true
} ,{
  dataField: 'location',
  text: 'Location',
  sort: true
}];


const columns2 = [{
  dataField: 'id',
  text: 'ลำดับ',
  sort: true
  
}, {
  dataField: 'authority',
  text: 'สิทธิ',
  sort: true
}, {
  dataField: 'tutelage',
  text: 'ความคุ้มครอง',
  sort: true
}, {
  dataField: 'contact',
  text: 'Contact',
  sort: true
}];

const columns3 = [{
  dataField: 'id',
  text: '',
  sort: true
  
}, {
  dataField: '2',
  text: '',
  sort: true
}, {
  dataField: '3',
  text: '',
  sort: true
}
, {
  dataField: '4',
  text: '',
  sort: true}
  , {
  dataField: '5',
  text: '',
  sort: true
}];


const { SearchBar } = Search;

const rows1 = [{ id: '01/01/2562 16:00', symptom: 'Tanya', authority: '999', doctor: 'TEst', location: 'TEst' }];


const rows2 = [{ id: 1, authority: 'test test', tutelage: '102', contact: 'TEst' },
              { id: 2, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
              { id: 3, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
              { id: 4, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
              { id: 5, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
              { id: 6, authority: 'Tanya', tutelage: '999', contact: 'TEst' },
              { id: 7, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
              { id: 8, authority: 'Tanya', tutelage: '999', contact: 'TEst' },
              { id: 9, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
              { id: 10, authority: 'Tanya', tutelage: '999', contact: 'TEst' },
              { id: 11, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
              { id: 12, authority: 'Tanya', tutelage: '999', contact: 'TEst' },
              { id: 13, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
              { id: 14, authority: 'Tanya', tutelage: '999', contact: 'TEst' }];

const rows3 = [{ id: ' ', piority: '', date: '', name: '' }];


const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  selected: []
};

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total"> &nbsp;
    Showing { from } to { to } of { size } Results
  </span>
);




class Examination extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container-fluid">
          <Navheader />
          <div className="card">
              Location: TEst
          </div>
            <div className="card2">
              <PanelGroup borderColor="grey" panelWidths={[
                { size: 600, minSize: 500, resize: "dynamic" },
                { minSize:500, resize: "streach" },
                { size: 600, minSize: 500, resize: "dynamic" }
              ]}>
                <div>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="xray-tab" data-toggle="tab" href="#xray" role="tab" aria-controls="xray" aria-selected="true">X-Ray Worklist</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="appointment-tab" data-toggle="tab" href="#appointment" role="tab" aria-controls="appointment" aria-selected="false">Appointment</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="false">All Patient</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade" id="appointment" role="tabpanel" aria-labelledby="appointment-tab">
                    <br />
                    <ToolkitProvider
                                                keyField="id"
                                                data={rows2}
                                                columns={columns2}
                                                search
                                            >
                                                {
                                                props => (
                                                    <div>
                                                    <SearchBar {...props.searchProps} />
                                                    <hr />
                                                    <BootstrapTable
                                                    selectRow={ selectRow }
                                                    hover={true}
                                                    
                                                        {...props.baseProps}
                                                    />
                                                    </div>
                                                )
                                                }
                                            </ToolkitProvider>
                    </div>
                    <div className="tab-pane fade" id="all" role="tabpanel" aria-labelledby="all-tab">
                    <br />
                    <ToolkitProvider
                                                keyField="id"
                                                data={rows2}
                                                columns={columns2}
                                                search
                                            >
                                                {
                                                props => (
                                                    <div>
                                                    <SearchBar {...props.searchProps} />
                                                    <hr />
                                                    <BootstrapTable
                                                    selectRow={ selectRow }
                                                    hover={true}
                                                   
                                                        {...props.baseProps}
                                                    />
                                                    </div>
                                                )
                                                }
                                            </ToolkitProvider>
                    </div>

                    <div className="tab-pane fade show active" id="xray" role="tabpanel" aria-labelledby="xray-tab">
                      <br />
                      <ToolkitProvider
                                                keyField="id"
                                                data={rows2}
                                                columns={columns2}
                                                search
                                            >
                                                {
                                                props => (
                                                    <div>
                                                    <SearchBar {...props.searchProps} />
                                                    <hr />
                                                    <BootstrapTable
                                                    selectRow={ selectRow }
                                                    hover={true}
                                                    
                                                        {...props.baseProps}
                                                    />
                                                    </div>
                                                )
                                                }
                                            </ToolkitProvider>
                    </div>
                  </div>
                </div>

                <div>
                <ToolkitProvider
                                                keyField="id"
                                                data={rows2}
                                                columns={columns2}
                                                search
                                            >
                                                {
                                                props => (
                                                    <div>
                                                    <SearchBar {...props.searchProps} />
                                                    <hr />
                                                    <BootstrapTable
                                                    selectRow={ selectRow }
                                                    hover={true}
                                                    
                                                        {...props.baseProps}
                                                    />
                                                    </div>
                                                )
                                                }
                                            </ToolkitProvider>
                </div>
                <div>
                <ToolkitProvider
                                                keyField="id"
                                                data={rows2}
                                                columns={columns2}
                                                search
                                            >
                                                {
                                                props => (
                                                    <div>
                                                    <SearchBar {...props.searchProps} />
                                                    <hr />
                                                    <BootstrapTable
                                                    selectRow={ selectRow }
                                                    hover={true}
                                                   
                                                        {...props.baseProps}
                                                    />
                                                    </div>
                                                )
                                                }
                                            </ToolkitProvider>
              </div>
              </PanelGroup>

            </div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default Examination;
