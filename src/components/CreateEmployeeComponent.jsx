import React, { Component } from 'react'

export default class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
         this.state = {
            firstName:'',
            lastName:'',
            emailId:''
        }
    }
    changeFistNmeHandler(event){
       this.setState({firstName: event.target.value})
    }
  render() {
    return (
      <div className='container'>
            <div className="row">
                <div className="card col-md-6 offset-md-3 w-50">
                    <h3 className="text-center">Ajouter nouveau Employe</h3>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">PRENOM</label>
                                <input type="text" placeholder='entrer le prenom'
                                name='firstName' className='form-control'
                                // value={this.state.firstName} onChange={this.changeFistNmeHandler()}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">NOM</label>
                                <input type="text" placeholder='entrer le nom'
                                name='lastName' className='form-control'
                                // value={this.state.firstName} onChange={this.changeFistNmeHandler()}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">EMAIL</label>
                                <input type="text" placeholder='entrer le mail'
                                name='emailId' className='form-control'
                                // value={this.state.firstName} onChange={this.changeFistNmeHandler()}
                                />
                            </div>
                            {/* <button>AJOUTER</button> */}
                        </form>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
