import React from 'react';
import Camera from 'react-camera';
import { Row, Col,Button,Card,CardBody} from 'reactstrap';


export default class CameraGG extends React.Component {
    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
    }
    takePicture() {
        this.camera.capture()
        .then(blob => {
          this.img.src = URL.createObjectURL(blob);
          this.img.onload = () => { URL.revokeObjectURL(this.src); }
        })
      }
        render() {
          let {img} = this.props
            return (
              <div>
                <div class="bottom-container">
                  <div id="photos"></div>
                </div>
                  <Row>
                    <Col sm="6">
                      <Card body className="text-center" >
                        <CardBody>
                          <div style={style.container}>
                            <Camera
                              style={style.preview}
                              ref={(cam) => {
                              this.camera = cam;}}>
                              </Camera>
                              <br/>
                              <Button color="primary" onClick={this.takePicture}><i class="fas fa-camera"></i> ถ่ายภาพ</Button>{' '} 
                          </div>
                        </CardBody>    
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card body className="text-center" >
                        <CardBody>
                          <div style={style.container}>
                            <img
                              style={style.captureImage}
                              ref={(img) => {
                              this.img = img;
                            }}/>
                          </div>
                          <br/> <br/> <br/>
                          {/* <Button color="primary" ><i class="fas fa-redo"></i> ถ่ายใหม่ </Button>{' '}
                          <Button color="primary" ><i class="fas fa-camera"></i> ถ่ายภาพ</Button>{' '} */}
                        </CardBody>    
                      </Card>
                    </Col>
                  </Row>
              </div>
            );
        }
  }
const style = {
    preview: {
      position: 'relative',
    },
    captureContainer: {
      display: 'flex',
      position: 'absolute',
      justifyContent: 'center',
      zIndex: 1,
      bottom: 0,
      width: '100%'
    },
    captureImage: {
      width: '100%',
    }
  };