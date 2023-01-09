import {BrowserRouter as Router, Link} from 'react-router-dom'
import axios from 'axios'
import React, { Component } from 'react'
import { EMPLOYEE_URL } from '../services/EmployeeService'

export default class EmployeeComponent extends Component {
    constructor(props){
        super(props)
         this.state = {
            employees:[]
        }
        this.showEmployee=this.showEmployee.bind(this)
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
            this.context.transitionTo("add-employee")
            this.props.history.push("add-employee")
            this.props.navigation.navigate()
          }
          showEmployee(id){
              console.log(`employee/${id}`)
            this.props.history.push(`employee/${id}`)
          }
          editEmployee(id){
              console.log('edit => ',id)
          }
        deleteEmployee(id){
            console.log('delete => ',id)
        }
    render() {
        return (
          <div>
            <h2 className='text-center text-muted mt-3'>liste des employes</h2>
            <div className="row">
              <div className="">
                <Link to="add-employee" className="btn float-end btn-outline-primary">+ Ajouter</Link>
              </div>
                <table className="table table-striped table-borded text-center">
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
                                <td>
                                    <button className="btn btn-primary" onClick={()=>this.showEmployee(employee.id)}>detail</button>
                                    <button className="btn btn-secondary" onClick={()=>this.editEmployee(employee.id)}>modif</button>
                                    <button className="btn btn-danger" onClick={()=>this.deleteEmployee(employee.id)}>delete</button>
                                </td>
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
