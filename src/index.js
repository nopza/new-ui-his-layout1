import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-table/react-table.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import {BrowserRouter} from 'react-router-dom'

const AppWithRouter = () =>(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

