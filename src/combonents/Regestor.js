import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Accounts from './Accounts';
// import Button from 'react-bootstrap/Button'
export default class Regestor extends Component {
    constructor(props){
    super(props)
        this.state = {
            employees:[]
        }
    }
    addEmployee=()=>{
        this.props.history.push("add");
    }
    componentDidMount(){
        Accounts.getEmployees().then((res)=>{
            this.setState({employees: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='' padding="-500px" margien="50px">
                <Link to="/add" className=''>
                {/* <Button variant="primary">Primary</Button>{' '} */}
                    </Link>{""}
                </div>
                <div className="">
                    <table className='table table-striped table-bordered'>
                      <thead>
                          <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Department</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key = {employee.id}>
                                             <td> { employee.username} </td>
                                             <td> {employee.Email}</td>
                                             <td> {employee.password}</td>
                                        </tr>
                                    )

                                }
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}



// import axios from 'axios'
// const EMPLOYEE_API_BASE_URL = "api/crime/user";
// class Service {
//     getEmployees(){
//         return axios.get(EMPLOYEE_API_BASE_URL);
//     }
//     createEmployee(employee){
//         return axios.post(EMPLOYEE_API_BASE_URL, employee);
//     }
// }
// export default new Service()