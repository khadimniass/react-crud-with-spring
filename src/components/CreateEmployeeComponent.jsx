import React, { Component } from 'react'
import {Link, useNavigate , RedirectFunction} from "react-router-dom";
import {EMPLOYEE_URL, EmployeeService} from "../services/EmployeeService";
import axios from "axios";
import Swal from "sweetalert2"
export default class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
         this.state = {
            firstName:'',
            lastName:'',
            emailId:''
        }
        this.changeFistNmeHandler= this.changeFistNmeHandler.bind(this);
        this.changeLastNmeHandler= this.changeLastNmeHandler.bind(this);
        this.changeEmailHandler= this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    changeFistNmeHandler=(event)=>{
       this.setState({firstName: event.target.value});
    }
    changeLastNmeHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }
    saveEmployee(e) {
        e.preventDefault();
        Swal.fire({
            title: '<strong>Good job!</strong>',
            html: '<i>You clicked the button!</i>',
            icon: 'success',
            timer: 1000
        })
        let employee={firstName: this.state.firstName, lastName: this.state.lastName,emailId: this.state.emailId};
        axios.post(EMPLOYEE_URL,employee)
            .then(res=>{
                //this.props.history.push('/employees');
                useNavigate.history.push("/");







            })
            .catch(error=>{
                console.log('ERROR ', error)
            })
    }
  render() {
    return (
      <div className='container'>
            <div className="row mt-3">
                <div className="card col-md-6 offset-md-3 w-50">
                    <h3 className="text-center">Ajouter nouveau Employe</h3>
                    <div className="card-body">
                        <form action="" method="post">
                            <div className="form-group">
                                <label htmlFor="firstName">PRENOM</label>
                                <input type="text" placeholder='entrer le prenom'
                                 name='firstName' className='form-control' id="firstName"
                                 value={this.state.firstName} onChange={this.changeFistNmeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">NOM</label>
                                <input type="text" placeholder='entrer le nom'
                                name='lastName' className='form-control' id="lastName"
                                 value={this.state.lastName} onChange={this.changeLastNmeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailId">EMAIL</label>
                                <input type="text" placeholder='entrer le mail'
                                name='emailId' className='form-control' id="emailId"
                                 value={this.state.emailId} onChange={this.changeEmailHandler}
                                />
                            </div>
                            <div className="mt-3">
                                <button  className="btn btn-success" onClick={this.saveEmployee} >AJOUTER</button>
                                <Link to="/" className="btn btn-outline-danger float-end">ANNULER</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
      </div>
    )
  }


}
