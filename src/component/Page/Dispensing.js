import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../Page/Page.css'
import '../css/style4.css';
import Navheader from '../Header/Navheader';
import PanelGroup from 'react-panelgroup';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';


const columns = [{
  dataField: 'id',
  text: 'No.',
  sort: true
}, {
  dataField: 'piority',
  text: 'Piority',
  sort: true
}, {
  dataField: 'date',
  text: 'Date-Time',
  sort: true
}, {
  dataField: 'name',
  text: 'Name',
  sort: true
}];

const columns2 = [{
  dataField: 'id',
  text: 'No.',
  sort: true
}, {
  dataField: 'piority',
  text: 'Piority',
  sort: true
}, {
  dataField: 'date',
  text: 'Date-Time',
  sort: true
}, {
  dataField: 'name',
  text: 'Name',
  sort: true
}];

const columns3 = [{
  dataField: 'id',
  text: 'No.',
  sort: true
}, {
  dataField: 'piority',
  text: 'Piority',
  sort: true
}, {
  dataField: 'date',
  text: 'Date-Time',
  sort: true
}, {
  dataField: 'name',
  text: 'Name',
  sort: true
}];

const { SearchBar } = Search;

const rows = [{ id: 1, piority: 'test test', date: '102', name: 'TEst' },
{ id: 2, piority: 'Nopza', date: '999', name: 'TEst' },
{ id: 3, piority: 'Tanya', date: '999', name: 'TEst' }];


const rows2 = [{ id: 1, piority: 'eiei', date: '102', name: 'TEst' },
{ id: 2, piority: 'Chiao eiei', date: '000', name: 'TEst' },
{ id: 3, piority: 'Mystoryme', date: '555', name: 'TEst' }];

const rows3 = [{ id: 1, piority: 'eiei', date: '102', name: 'TEst' },
{ id: 2, piority: 'Chiao eiei', date: '000', name: 'TEst' },
{ id: 3, piority: 'Mystoryme', date: '555', name: 'TEst' }];

class Dispensing extends Component {
  render() {
    return (
      <div class="wrapper">
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
                        data={rows}
                        columns={columns}
                        search
                      >
                        {
                          props => (
                            <div>
                              <SearchBar {...props.searchProps} />
                              <hr />
                              <BootstrapTable
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
                        data={rows}
                        columns={columns}
                        search
                      >
                        {
                          props => (
                            <div>
                              <SearchBar {...props.searchProps} />
                              <hr />
                              <BootstrapTable
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
                        data={rows}
                        columns={columns}
                        search
                      >
                        {
                          props => (
                            <div>
                              <SearchBar {...props.searchProps} />
                              <hr />
                              <BootstrapTable
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
                          <SearchBar className="searchtbl" {...props.searchProps} />
                          <hr />
                          <BootstrapTable
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
                    data={rows3}
                    columns={columns3}
                    search
                  >
                    {
                      props => (
                        <div>
                          <SearchBar className="searchtbl" {...props.searchProps} />
                          <hr />
                          <BootstrapTable
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

export default Dispensing;
