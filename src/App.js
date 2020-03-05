import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { v4 as uuidv4 } from 'uuid'


class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organism: [],
      text: ""
    }
  }
  handChange = e => {
    this.setState({ text: e.target.value })

  }
  addOrganism = () => {

    this.setState({
      organism: this.state.organism.concat({ id: uuidv4(), val: this.state.text, para: false }), text: ""

    })
  }
  linethrough = (id) => {
    this.setState({
      organism: this.state.organism.map(el =>
        //si val equal el.val alors lobjet qui quontient val et suprimer les crocher e(...)t et inverser le valeur de para 
        el.id === id ? { ...el, para: !el.para } : el)
    })

  }
  remouve = (id) => {
    this.setState({
      organism: this.state.organism.filter(el => id !== el.id)
    })
  }
  // addInterface = () => {
  //   this.setState({

  //   })
  // }
  render() {


    return (
      <div className="todo">

        <div className="objet  ">
          <div className="todo">
            <h1>To-Do App!<br /><br /> </h1>


            <h5>Add New To-Do</h5>
          </div>
          <div><input type="text" className="form-control " name="organism" value={this.state.text} onChange={this.handChange} placeholder="Enter new task" aria-label="Username" aria-describedby="addon-wrapping" />

          </div>
          <div><button type="button" onClick={this.addOrganism} className="btn btn-info">Add</button></div>
        </div>
        <div className="lets">Let's get some work done!</div>
        <div className="container d-flex ">


          {this.state.organism.map(el =>
            <div className="btnr">

              <button type="button" onClick={() => this.linethrough(el.id)} className="btn btn-info">{el.para ? 'undo' : 'complete'}</button>
              <button type="button" onClick={() => this.remouve(el.id)} className="btn btn-info">Delete</button>
              <h2 className={el.para ? "coucou" : ""} > {el.val}</h2>
            </div>

          )
          }








        </div >


      </div >
    )
  }
}

export default ToDo;
