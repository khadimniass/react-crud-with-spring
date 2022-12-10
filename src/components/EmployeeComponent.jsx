import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import axios from 'axios'
import React, { Component } from 'react'
import { EMPLOYEE_URL } from '../services/EmployeeService'

export default class EmployeeComponent extends Component {
    constructor(props){
        super(props)
         this.state = {
            employees:[]
        }
        this.addEmployee=this.addEmployee.bind(this);
    }
    componentDidMount(){
    //    EmployeeService.getEmployees().then(result=>{
    //        this.setState({employees:result.data})
    //     })
    //     this.setState({employees:axios.get(EMPLOYEE_URL)})
    const config = {
        method: "get",
        url: EMPLOYEE_URL,
        headers: {
          "Content-Type": "application/json"
        }
      };
        axios(config)
        .then(res=>{
            console.log(res.data);
          this.setState({employees:res.data})
            //{employees:res.data}
        })
        .catch((error) => {
            error = new Error();
            console.log(error);
          });
        }
          addEmployee(){
            //this.context.transitionTo("add-employee")
            //this.props.history.push("add-employee")
            //this.props.navigation.navigate()
          }
    render() {
        return (
          <div>
            <h2 className='text-center'>liste des employes</h2>
            <div className="row">
                <Link to="add-employee" className="btn btn-primary">Ajouter</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-borded">
                    <thead>
                        <tr>
                            <th>Employee first name</th>
                            <th>Employee last name</th>
                            <th>Employee email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map(
                            employee=>
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
    
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
