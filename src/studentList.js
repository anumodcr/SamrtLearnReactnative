import React, { Component } from 'react'

export default class studentList extends Component {
    constructor(props)
     {
         super(props)
         this.state={
             students:[],
             name:"",
             age:""
         }
     }


    addStudents=()=>{
        alert(this.state.name)
        let stuName=this.state.name
        let stuAge=this.state.age
        let stuList=this.state.students
        stuList.push({"Name":stuName,"Age":stuAge})
        this.setState({students:stuList})
    }

  render() {
    return (
      <div>
          <h1>dhshdsdnsjkfhj </h1>
          <input type="text" name="name" value={this.state.name} onChange={e=>this.setState(e.target.value)}/>
          <button onClick={this.addStudents}>Submit</button>
      </div>
    )
  }
}
