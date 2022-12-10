import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
    <div >
      <header>
        <nav className="navbar navbar-expended-md navbar-dark bg-dark">
            <div className='container text-muted fs-2'>
                        Gestion des employe
            </div>
        </nav>
      </header>
    </div>  
    )
  }
}
