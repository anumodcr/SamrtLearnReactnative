import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Editorfive from './editorfive';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import EditorFour from './editorfour';
// import DocumentEditor from './DocumentEditor';
// import DemoCalender from './DemoCalender';

import CustomTimeline from "./CustomTimeline";
import PDFdemo from "./PDFdemo";
import "react-calendar-timeline/lib/Timeline.css";
import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF2 from './ReactPDF2';
import studentList from './studentList';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';


// ClassicEditor
//     .create( document.querySelector( '#editor' ), {
//         image: {
  //            resizeUnit: 'px',
//             // You need to configure the image toolbar, too, so it uses the new style buttons.
//             toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],

//             styles: [
//                 // This option is equal to a situation where no style is applied.
//                 'full',

//                 // This represents an image aligned to the left.
//                 'alignLeft',

//                 // This represents an image aligned to the right.
//                 'alignRight'
//             ]
//         }
//     } )
//     .then()
//     .catch();


class App extends Component {
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
    //  let stuName=this.state.name
    //  let stuAge=this.state.age
    //  console.log(stuName,stuAge)
     let stuList=this.state.students
     stuList.push({"Name":this.state.name,"Age":this.state.age})
     
     this.setState({students:stuList})
 }
    render() {
        return (       
        <div>
          <input type="text" name="name" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/>
          <input type="text" name="age" value={this.state.age} onChange={(event)=>this.setState({age:event.target.value})}/>
          <button onClick={this.addStudents}>Submit</button>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((item,index)=>
                <tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
        );
    }
}

export default App;