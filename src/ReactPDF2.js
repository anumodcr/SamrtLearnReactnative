// import React from 'react'
// import html2canvas from 'html2canvas';
// // import jsPDF from 'jspdf';

// const ReactPDF2 = () => {
    
//   const convertPdf= () =>{
//     return(
//     html2canvas(document.querySelector("#demo")).then(canvas => {
//       document.body.appendChild(canvas)
//     }))
//   }

//   const convertPdf2= () =>{
//     const input = document.getElementById('demo');
//     return(
//       html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'PNG', 0, 0);
//         pdf.save("download.pdf"); 
//       })
//     )
//   }

//   return (
//     <>
//  <div id="demo">
//     <p>Hello word</p>
// </div>
// <button onClick={()=>convertPdf()} >Convert</button>
// <button onClick={()=>convertPdf2()} >Convert</button>
// </>
//   )
// }

// export default ReactPDF2
