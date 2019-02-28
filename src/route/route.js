import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../component/Page/Register/Register';
import Home from '../component/Page/Home';
import SendPatient from '../component/Page/SendPatient/SendPatient';
import Xray from '../component/Page/Xray';
import Finance from '../component/Page/Finance';
import Manage from '../component/Page/Manage';
import login from '../component/Page/login/login';
import location from '../component/Page/login/location';
import Dispensing from '../component/Page/OPD/Dispensing';
import Examination from '../component/Page/OPD/Examination';
import ExamDoctor from '../component/Page/OPD/ExamDoctor';



class Routing extends Component {

  render() { 
    return (
        <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/location" component={location} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/sendpatient" component={SendPatient} />
            <Route exact path="/examination" component={Examination} />
            <Route exact path="/examdoctor" component={ExamDoctor} />
            <Route exact path="/Dispensing" component={Dispensing} />
            <Route exact path="/xray" component={Xray} />
            <Route exact path="/finance" component={Finance} />
            <Route exact path="/manage" component={Manage} />
            
        </Switch>

    );
  }
}

export default Routing;
