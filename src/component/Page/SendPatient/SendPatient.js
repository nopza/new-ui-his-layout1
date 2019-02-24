import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Navheader from '../../Header/Navheader';
import { Row, Col,Button,Card, CardHeader, CardBody,Modal, 
          ModalHeader, ModalBody, ModalFooter, Input,Form,FormGroup,Label,CardTitle } from 'reactstrap';
import { AvField,AvForm ,AvCheckboxGroup,AvCheckbox,AvRadioGroup,AvRadio} from 'availity-reactstrap-validation';
import CameraGG from './CameraGG';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import swal from 'sweetalert';




const columns1 = [{
  dataField: 'date',
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

const rows1 = [{ date: '01/01/2562 16:00', symptom: 'Tanya', authority: '999', doctor: 'TEst', location: 'TEst' }];

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

const options1 = {
  paginationSize: 4,
  pageStartIndex: 1,
  // alwaysShowAllBtns: true, // Always show next and previous button
  // withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: rows1.length
  }] // A numeric array is also available. the purpose of above example is custom the text
};

const options2 = {
  paginationSize: 4,
  pageStartIndex: 1,
  alwaysShowAllBtns: true, 
  withFirstAndLast: false, 
  hideSizePerPage: true, 
  hidePageListOnlyOnePage: true, 
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: rows2.length
  }] 
};


const options3 = {
  paginationSize: 4,
  pageStartIndex: 1,
  alwaysShowAllBtns: true, 
  withFirstAndLast: false, 
  hideSizePerPage: true, 
  hidePageListOnlyOnePage: true, 
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: rows3.length
  }] 
};




class SendPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.state = {
                    Search:"",
                    PatientFullName: '' , //ชื่อภาษาไทย
                    PatientFullNameEN: '' , //ชื่อภาษาอังกฤษ
                    Birthdate: '' , //วันเกิด
                    Age: '' , //อายุ
                    PhoneNumber: '' , //เบอร์โทร
                    Address: '' , //ที่อยู่
                    RaceUID: '' , //เชื่อชาติ
                    NALTYUID: '' , //สัญชาติ
                    RELGNUID: '' , //ศาสนา
                    NationalID: '' , //เลขบัตรประชาชน
                    Symptom: '' , //อาการ
                    SendTo: '' , //ส่งไปที่
                    SendToO: '' , //ส่งไปที่2
                    Doctor: '' , //แพทย์
                    Service: '' , //บริการ
                    Amount: '', //จำนวน
                    Amount2: '', //จำนวน2
                    SB: '', //เบิกค่ารักษา
                    NoteOfLeave:'', //ใบลา
                    SBNL: '', //เบิกค่ารักษาเเละใบลา
                    COMA :'', //ใบรับรองยานอกบัญชี  
                    ClaimSlip: '',  //ใบเคลม
                    Other:'', //อื่นๆ
                    Specify:'', //ระบุ
                    Mark:'', //หมายเหตุ
                    PrintVisitSlip:'', //พิมพ์ใบvisit
                    Thai:'' ,//ภาษไทย
                    Eng: '' ,//ภาษาอังกฤษ
                    modal: false,

    };
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1(event) {
    this.setState({ PatientFullName: event.target.value });
  }

  handleChange2(event) {
    this.setState({ PatientFullNameEN: event.target.value });

  }
  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  async handleClick(event) {
    if(this.state.PatientFullName==="chiao" && this.state.PatientFullNameEN==="chiao"){
      await swal({
        title: "Good job!",
        text: " Saveing...!",
        icon: "success",
        button: "OK",
      });
      window.location.assign("sendpatient");
    }
    else{
      swal({
        title: "Sorry!",
        text: "Invalid Data",
        icon: "error",
        button: "OK",
      });;
    }
  }

  render() {
    return (
      <div className="wrapper">
       <Header />
              <div className = "container-fluid">
              <Navheader />
                <Row>
                  <Col md="12" >
                  <AvForm>
                    <Card >
                      <CardHeader tag="h5" body className="text-left"> ส่งตรวจผู้ป่วย </CardHeader> 
                        <CardBody>
                          {/* ค้นหา */}
                          <Card>
                            <CardBody> 
                              <Form >
                                <Row >
                                  <Col md={8}>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                      <Label> ค้นหา </Label><br/>
                                      <Input type="text" name="Search" bsSize="sm" />
                                    </FormGroup>
                                    <br/>
                                    <Button color = "success" ><i class="fas fa-search"></i></Button>{' '}
                                    <Button color = "primary" ><i class="fas fa-user-tie"></i> อ่านบัตรประชาชน</Button>{' '}
                                  </Col>
                                  <Col md={1}>
                                    <Label className="mt-3"><br/><br/><br/></Label><br/>
                                    <Button color="primary" onClick={this.toggle}><i class="fas fa-camera"></i></Button>{' '}
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
                                      <ModalHeader> Picture Capture </ModalHeader>
                                        <ModalBody>
                                          <CameraGG />
                                        </ModalBody>
                                        <ModalFooter>
                                          <Button color="success" onClick={this.toggle}> OK </Button>{' '}
                                          </ModalFooter>
                                    </Modal>
                                  </Col>
                                  <Col md={3}>
                                    <div className="imgPreview">
                                       
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </CardBody>
                          </Card>

                          {/* ประวัติ */}

                          <Card >
                            <CardBody>
                              <FormGroup>
                                <Label>ชื่อ-สกุล</Label>
                                <Input type="text" name = "PatientFullName" value={this.state.PatientFullName} 
                                onChange={this.handleChange1} bsSize="sm" />
                              </FormGroup>
                              <FormGroup>
                                <Label >Name</Label>
                                <Input type="text" name = "PatientFullNameEN" value={this.state.PatientFullNameEN} 
                                onChange={this.handleChange2}  bsSize="sm"/>
                              </FormGroup>
                              <Row form>
                                <Col md={5}>
                                  <FormGroup>
                                    <Label >ว ด ป เกิด </Label>
                                    <Input type="text" name = "Birthdate" bsSize="sm"/>
                                  </FormGroup>
                                </Col>
                                <Col md={3}>
                                  <FormGroup>
                                    <Label >อายุ</Label>
                                    <Input type="number" name = "Age" bsSize="sm"/>
                                  </FormGroup>
                                </Col>
                                <Col md={4}>
                                  <FormGroup>
                                    <Label >เบอร์โทร</Label>
                                    <Input type="text" name = "PhoneNumber" bsSize="sm"/>
                                  </FormGroup>  
                                </Col>
                              </Row>
                              <FormGroup>
                                <Label >ที่อยู่</Label>
                                <Input type="text" name = "Address" bsSize="sm"/>
                              </FormGroup>
                              <Row form>
                                <Col md={4}>
                                  <FormGroup>
                                    <Label >เชื้อชาติ</Label>
                                    <Input type="text" name = "RaceUID" bsSize="sm"/>
                                  </FormGroup>
                                </Col>
                                <Col md={4}>
                                  <FormGroup>
                                    <Label >สัญชาติ</Label>
                                    <Input type="text" name = "NALTYUID" bsSize="sm"/>
                                  </FormGroup>
                                </Col>
                                <Col md={4}>
                                  <FormGroup>
                                    <Label >ศาสนา</Label>
                                    <Input type="text" name = "RELGNUID" bsSize="sm"/>
                                  </FormGroup>  
                                </Col>
                              </Row>
                              <FormGroup>
                                <Label>เลขบัตรประจำตัวประชาชน</Label>
                                <Input type="number" name = "NationalID" bsSize="sm" />
                              </FormGroup>
                              <FormGroup className = " text-right">
                                <Button color = "success"><i class="fas fa-user-plus"></i> ทะเบียนผู้ป่วยใหม่</Button>{' '}
                                <Button color = "danger"><i class="fas fa-user-edit"></i> แก้ไขรายการ</Button>{' '}
                              </FormGroup>
                            </CardBody>
                          </Card>

                          {/* ประวัติการรับบริการ */}

                          <Card  body className="text-center">
                            <CardTitle tag="h5" body className="text-left">ประวัติการรับบริการ</CardTitle>
                              <ToolkitProvider
                                keyField="id"
                                data={rows1}
                                columns={columns1}
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
                          </Card>

                          {/* อาการ */}

                          <Card >
                            <CardBody>
                              <FormGroup>
                              <AvField name="Symptom" bsSize="sm" label="อาการ" type="text" errorMessage="กรุณากรอกอาการ" validate={{
                        required: {value: true}}} />
                              </FormGroup>
                              <Row form>
                                <Col md={3}>
                                  <FormGroup>
                                    <Label >ส่งไปตรวจที่ </Label>
                                    <Input type="text" name="city" id="exampleCity" bsSize="sm"/>
                                  </FormGroup>
                                </Col>
                                <Col md={9}>
                                  <FormGroup>
                                    <Label > <br/></Label>
                                    <Input type="text" name="state" id="exampleState" bsSize="sm"/>
                                  </FormGroup>
                                </Col>
                              </Row>
                              <FormGroup>
                              <AvField name="Doctor" label="แพทย์" type="select" errorMessage="กรุณาเลือกแพทย์" bsSize="sm" validate={{
                            required: {value: true}
                            }}><option></option>
                            <option>นาย</option>
                            <option>นาง</option>
                            <option>นางสาว</option>
                          </AvField>
                              </FormGroup>
                              <FormGroup>
                                <Button >ระบุเเพทย์อื่น</Button>
                              </FormGroup>
                              <Row form>
                                <Col md={4}>
                                  <FormGroup>
                                  <AvField name="Service" label="การมารับบริการ" type="select" errorMessage="กรุณาเลือกการมารับบริการ" bsSize="sm" validate={{
                          required: {value: true}
                          }}><option></option>
                          <option>มารับบริการเอง</option>
                        </AvField>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>

                          {/* สิทธิรักษาพยาบาลที่ใช้ Visit นี้ */}

                          <Card  body className="text-center">
                            <CardTitle tag="h5" body className="text-left">สิทธิรักษาพยาบาลที่ใช้ Visit นี้</CardTitle>
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
                          </Card>

                          {/* ประวัติการนัดหมาย */}

                          <Card  body className="text-center">
                            <CardTitle tag="h5" body className="text-left">ประวัติการนัดหมาย</CardTitle>
                            <ToolkitProvider
                                keyField="id"
                                data={rows3}
                                columns={columns3}
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
                          </Card>
                          
                          {/* เอกสาร */}

                          <Card >
                            <CardBody>
                              <CardTitle tag="h5" body className="text-left">เอกสาร</CardTitle>
                              <Row>
                                <Col md={4}>
                                  <Label>ใบรับรองเเพทย์</Label>
                                  <AvRadioGroup name="radioCustomInputExample1" required>
                                    <AvRadio customInput label="เบิกค่ารักษา" value="เบิกค่ารักษา" name="SB "/>
                                    <AvRadio customInput label="ลา" value="ลา" name="NoteOfLeave"/>
                                    <AvRadio customInput label="เบิกค่ารักษาเเละลา" value="เบิกค่ารักษาเเละลา" name="SBNL" />
                                  </AvRadioGroup>
                                  <Col md={12}>
                                    <Col md={5}>
                                      <AvField name="Amount" label="จำนวน" type="select" errorMessage="กรุณากรอกจำนวนที่ต้องการ" bsSize="sm" validate={{required: {value: true}
                                        }}><option></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                      </AvField>
                                    </Col>
                                    <Col md={12}>
                                      <FormGroup>
                                        <Label >หมายเหตุ </Label>
                                        <Input type="text" name="Mark" bsSize="sm" />
                                      </FormGroup>
                                    </Col>
                                  </Col>
                                </Col>
                                <Col  md={4}>
                                  <AvCheckboxGroup name="checkboxCustomInputExample1" required>
                                    <AvCheckbox customInput label="ใบรับรองยานอกบัญชี" name = "COMA" value="ใบรับรองยานอกบัญชี" />
                                    <AvCheckbox customInput label="ใบเคลม" name = "ClaimSlip" value="ใบเคลม" />
                                  </AvCheckboxGroup>
                                </Col>
                                <Col  md={4}>
                                  <AvCheckboxGroup inline name="checkboxCustomInputExample2" >
                                    <AvCheckbox customInput label="อื่นๆ ระบุ" name = "Other" value="อื่นๆ ระบุ" />
                                  </AvCheckboxGroup>
                                  <AvField name="Specify" bsSize="sm"/>
                                  <Col md={12}>
                                    <Col md={5}>
                                      <AvField name="Amount2" label="จำนวน" type="select" errorMessage="กรุณากรอกจำนวนที่ต้องการ" bsSize="sm" validate={{required: {value: true}
                                        }}><option></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                      </AvField>
                                    </Col>
                                  </Col>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>

                          {/* พิมพ์ใบvisit */}

                          <Card >
                            <CardBody>
                              <Row form>
                                <Col md= {4}>
                                  <AvCheckboxGroup inline  name="checkboxCustomInputExample3" required>
                                    <AvCheckbox customInput label="พิมพ์ใบ Visit Slip" value="พิมพ์ใบ Visit Slip" name = "PrintVisitSlip" />
                                  </AvCheckboxGroup>
                                </Col>
                                <Col md= {8}>
                                  <AvRadioGroup inline name="radioCustomInputExample2" required>
                                    <AvRadio customInput label="ภาษาไทย" value="ภาษาไทย" name = "Thai"/>
                                    <AvRadio customInput label="ภาษาอังกฤษ" value="ภาษาอังกฤษ" name = "Eng"/>
                                  </AvRadioGroup>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card><br/>
                          <FormGroup className = " text-right"> 
                            <Button color = "success" onClick={this.handleClick.bind(this)}><i class="fas fa-save"></i> บันทึก</Button>{' '}
                            <Button color = "danger"><i class="fas fa-trash-alt"></i> ลบรายการ</Button>{' '}
                          </FormGroup>
                        </CardBody>
                    </Card>
                    </AvForm>
                  </Col>
                </Row>
                <Footer />
              </div>
      </div>
    );
  }
}

export default SendPatient;
  