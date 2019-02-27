import React, { Component } from 'react';
import Select from 'react-select'
import { Container, Row, Col, Button, Card, CardBody, FormGroup, CardGroup, Label, CustomInput } from 'reactstrap';
import '../login/login.css';

const noclinicoption = [
  { value: 'แผนกฉุกเฉินและอุบัติเหตุ (Emergency Room)', label: 'แผนกฉุกเฉินและอุบัติเหตุ (Emergency Room)' },
  { value: 'แผนกผู้ป่วยนอก (Outpatient Department)', label: 'แผนกผู้ป่วยนอก (Outpatient Department)' },
  { value: 'แผนกผู้ป่วยใน (Inpatient Department)', label: 'แผนกผู้ป่วยใน (Inpatient Department)' },
  { value: 'แผนกผู้ป่วยหนัก (Intensive Care Unit)', label: 'แผนกผู้ป่วยหนัก (Intensive Care Unit)' },
  { value: 'แผนกรังสีกรรม (Radiology Department)', label: 'แผนกรังสีกรรม (Radiology Department)' },
  { value: 'แผนกห้องปฏิบัติการทางการแพทย์ (Laboratory Department)', label: 'แผนกห้องปฏิบัติการทางการแพทย์ (Laboratory Department)' },
  { value: 'แผนกศัลยกรรม (Surgical Department)', label: 'แผนกศัลยกรรม (Surgical Department)' },
  { value: 'แผนกวิสัญญี (Department of Anaesthesia)', label: 'แผนกวิสัญญี (Department of Anaesthesia)' },
  { value: 'แผนกกุมารเวชกรรม (Pediatrics Department)', label: 'แผนกกุมารเวชกรรม (Pediatrics Department)' },
  { value: 'แผนกสูตินรีเวชกรรม (Obstretic - Gynecology Department)', label: 'แผนกสูตินรีเวชกรรม (Obstretic - Gynecology Department)' },
  { value: 'แผนกเวชศาสตร์ฟื้นฟู (Physical Therapy Department)', label: 'แผนกเวชศาสตร์ฟื้นฟู (Physical Therapy Department)' },
  { value: 'แผนกอายุรกรรม (Medicine Department)', label: 'แผนกอายุรกรรม (Medicine Department)' },
  { value: 'แผนกจักษุ (Ophthalmology Department)', label: 'แผนกจักษุ (Ophthalmology Department)' },
  { value: 'แผนกหู คอ จมูก (Ear nose and throat Department)', label: 'แผนกหู คอ จมูก (Ear nose and throat Department)' },
  { value: 'แผนกเภสัชกรรม (Phamarceutical Department)', label: 'แผนกเภสัชกรรม (Phamarceutical Department)' },
  { value: 'แผนกจิตเวช (Psychology Department)', label: 'แผนกจิตเวช (Psychology Department)' },
  { value: 'ห้องผ่าตัด ทำการรักษาผู้ป่วยจากโรคต่างที่ต้องใช้วิธีผ่าตัด (OPERATING ROOM)', label: 'ห้องผ่าตัด ทำการรักษาผู้ป่วยจากโรคต่างที่ต้องใช้วิธีผ่าตัด (OPERATING ROOM)' },
  { value: 'ห้องคลอด (LABOR ROOM)', label: 'ห้องคลอด (LABOR ROOM)' },
  { value: 'หออภิบาลผู้ป่วยหนักเฉพาะโรคหัวใจ (Coronary Care Unit) ', label: 'หออภิบาลผู้ป่วยหนักเฉพาะโรคหัวใจ (Coronary Care Unit) ' },
  { value: 'ศูนย์ทันตกรรม (Dental Center)', label: 'ศูนย์ทันตกรรม (Dental Center)' },
  { value: 'ศูนย์รักษ์เต้านม  (Breast Care Center)', label: 'ศูนย์รักษ์เต้านม  (Breast Care Center)' },
  { value: 'ศูนย์สมองและระบบประสาท  (Neurological Center)', label: 'ศูนย์สมองและระบบประสาท  (Neurological Center)' },
  { value: 'ศูนย์เนื้องอก / มะเร็ง   (Oncology / Cancer Center)', label: 'ศูนย์เนื้องอก / มะเร็ง   (Oncology / Cancer Center)' },
  { value: 'หน่วยงานห้องยา/คลังยา  (Pharmacy)', label: 'หน่วยงานห้องยา/คลังยา  (Pharmacy)' },
  { value: 'ศูนย์รังสีวินิจฉัย  (Medical Imaging Center)', label: 'ศูนย์รังสีวินิจฉัย  (Medical Imaging Center)' },
  { value: 'ศูนย์โรคระบบทางเดินอาหาร   (GI Center)', label: 'ศูนย์โรคระบบทางเดินอาหาร   (GI Center)' },
  { value: 'ศูนย์หัวใจและหลอดเลือด  (Heart / Cardiovascular Center)', label: 'ศูนย์หัวใจและหลอดเลือด  (Heart / Cardiovascular Center)' },
  { value: 'ศูนย์ผู้มีบุตรยาก  (Infertility Center)', label: 'ศูนย์ผู้มีบุตรยาก  (Infertility Center)' },
  { value: 'ศูนย์โรคไต  (Kidney Disease Clinic)', label: 'ศูนย์โรคไต  (Kidney Disease Clinic)' }
];

const clinicoption = [
  { value: 'คลินิกวัยทอง  (Golden Age Clinic)', label: 'คลินิกวัยทอง  (Golden Age Clinic)' },
  { value: 'คลินิกผิวหนัง (Skin care / Dermatology Clinic)', label: 'คลินิกผิวหนัง (Skin care / Dermatology Clinic)' },
  { value: 'คลินิกระบบทางเดินปัสสาวะ  (Urology Clinic)', label: 'คลินิกระบบทางเดินปัสสาวะ  (Urology Clinic)' },
  { value: 'คลินิกเบาหวานและต่อมไร้ท่อ  (Diabetes & Metabolic Center)', label: 'คลินิกเบาหวานและต่อมไร้ท่อ  (Diabetes & Metabolic Center)' },
  { value: 'คลินิกความอ้วน  (Weight Control Clinic)', label: 'คลินิกความอ้วน  (Weight Control Clinic)' }
];

class location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Local: 'Clinical',
      clinic: "",
      noclinic: "",
    };

    //     this.handleChange3 = this.handleChange3.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    //   }
    //   handleChange3(event) {
    //     this.setState({ location: event.target.value });
    //   }

    //   async handleClick(event) {
  }
  handleChangeclinic = (clinic) => {
    this.setState({ clinic });
    console.log(`Option selected:`, clinic);
  }
  handleChangenoclinic = (noclinic) => {
    this.setState({ noclinic });
    console.log(`Option selected:`, noclinic);
  }

  getlocallist() {
    if (this.state.Local === 'Clinical') {
      return (
        <div>
          <Row form>
            <Label>Department</Label>
            &nbsp;
                        <Col md={12}>
              <FormGroup>
                <Select
                  value={this.state.clinic}
                  onChange={this.handleChangeclinic}
                  options={clinicoption}
                />
              </FormGroup>
            </Col>
            &nbsp;
                    </Row>
        </div>
      );
    } else {
      return (
        <div>
          <Row form>
            <Label>Department</Label>
            &nbsp;
                        <Col md={12}>
              <FormGroup>
                <Select
                  value={this.state.noclinic}
                  onChange={this.handleChangenoclinic}
                  options={noclinicoption}
                />
              </FormGroup>
            </Col>
            &nbsp;
                    </Row>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <br />
        <Row>
          <Col sm={{ size: 4, order: 2, offset: 4 }}>
            <Container>
              <CardGroup>
                <Card>
                  <CardBody>
                    <h2 className="text-center"> Location </h2>
                    <hr />
                    <Label ><b>User Group</b></Label>
                    <div>
                      <CustomInput type='radio' id='Clinical' name='getlocal' value='Clinical' label='Clinical'
                        checked={this.state.Local === 'Clinical'}
                        onChange={(e) => this.setState({ Local: e.target.value })} />
                      <CustomInput type='radio' id='NoneClinical' name='getlocal' value='NoneClinical' label='None Clinical'
                        checked={this.state.Local === 'NoneClinical'}
                        onChange={(e) => this.setState({ Local: e.target.value })} />
                      &nbsp;
                      {this.getlocallist()}
                    </div>
                    <FormGroup body className="text-center">
                      <Button color="primary" href="/home">  OK  </Button>
                    </FormGroup>

                  </CardBody>
                </Card>
              </CardGroup>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

export default location;
