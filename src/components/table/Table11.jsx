// // import axios from "axios";
// // import moment from "moment";
// // import { useState, useEffect } from "react";
// // import BootstrapTable from "react-bootstrap-table-next";
// // import paginationFactory from "react-bootstrap-table2-paginator";
// // import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
// // import filterFactory, { textFilter } from "react-bootstrap-table2-filter";


// // import MaterialTable from 'material-table'

// // // "axios-react": "^2.0.8",
// // // "react-bootstrap-table-next": "^4.0.3",
// // // "react-bootstrap-table2-editor": "^1.4.0",
// // // "react-bootstrap-table2-filter": "^1.3.3",
// // // "react-bootstrap-table2-paginator": "^2.1.2",
// // // "react-bootstrap-table2-toolkit": "^2.1.3",
// // // "react-circular-progressbar": "^2.0.4",

// // // import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

// // // const { SearchBar } = Search;


// // // const { ExportCSVButton } = CSVExport;

// // function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     getData();
//   }, []);
//   const getData = () => {
//     axios("http://localhost:2500/users/").then((res) => {
//       console.log(res.data);
//       setData(res.data);
//       res.data.forEach((element, index) => element.__id2 = index);
//     });
//   };

// //   // const columns = [
// //   //   {
// //   //     dataField: "name",
// //   //     text: "Name",
// //   //     // sort: true,
// //   //     filter: textFilter(),
// //   //     // formatter: emailFormatter,
// //   //     editable: false,
// //   //   },
// //   //   {
// //   //     dataField: "rank",
// //   //     text: "Rank",
// //   //     filter: textFilter(),
// //   //     editable: false,
// //   //     // sort: true,
// //   //     validator: (newValue, row, column) => {
// //   //       if (isNaN(newValue)) {
// //   //         return {
// //   //           valid: false,
// //   //           message: "Please enter numeric value",
// //   //         };
// //   //       }
// //   //       return true;
// //   //     },
// //   //   },
// //   //   {
// //   //     dataField: "number",
// //   //     text: "Number",
// //   //     // sort: true,
// //   //     editable: false,
// //   //   },
// //   //   {
// //   //     dataField: "adharno",
// //   //     text: "Aadhar Card ",
// //   //     // sort: true,
// //   //     editable: false,
// //   //   },
// //   //   {
// //   //     dataField: "snumber",
// //   //     text: "Snumber",
// //   //     // sort: true,
// //   //     editable: false,
// //   //   },
// //   //   {
// //   //     dataField: "blacklist",
// //   //     text: "Blacklist",
// //   //     // sort: true,
// //   //     editable: false,
// //   //   }, {
// //   //     dataField: "place",
// //   //     text: "Place",
// //   //     // sort: true,
// //   //     editable: false,
// //   //   }, {
// //   //     dataField: "supervisor",
// //   //     text: "Supervisor",
// //   //     // sort: true,
// //   //     editable: false,
// //   //   },
// //   //   {
// //   //     dataField: "timein",
// //   //     text: "Time In",
// //   //     sort: true,
// //   //     editable: false,
// //   //   }, {
// //   //     dataField: "datein",
// //   //     text: "Date In",
// //   //     sort: true,
// //   //     editable: false,
// //   //     // dataFormat:{dateFormatter}
// //   //   },
// //   //   {
// //   //     dataField: "timeout",
// //   //     text: "Time Out",
// //   //     sort: true,
// //   //     editable: false,
// //   //   },
// //   //   {
// //   //     dataField: "dateout",
// //   //     text: "Date Out",
// //   //     sort: true,
// //   //     editable: false,
// //   //     // dataFormat:{dateFormatter}

//   // //   },
//   // // ];

//   // const columns = [
//   //   {
// //         title: "name",
// //         field: "Name",
// //     },
// //     {
// //         title: "rank",
// //         field: "Rank",

// //     },
// //     {
// //         title: "number",
// //         field: "Number",
// //         //
// //     },
// //     {
// //         title: "adharno",
// //         field: "Aadhar Card ",
// //         //
// //     },
// //     {
// //         title: "snumber",
// //         field: "Snumber",
// //         //
// //     },
// //     {
// //         title: "blacklist",
// //         field: "Blacklist",
// //         //
// //     }, {
// //         title: "place",
// //         field: "Place",
// //         //
// //     }, {
// //         title: "supervisor",
// //         field: "Supervisor",
// //         //
// //     },
// //     {
// //         title: "timein",
// //         field: "Time In",

// //     }, {
// //         title: "datein",
// //         field: "Date In",

// //         // dataFormat:{dateFormatter}
// //     },
// //     {
// //         title: "timeout",
// //         field: "Time Out",

// //     },
// //     {
// //         title: "dateout",
// //         field: "Date Out",

// //         // dataFormat:{dateFormatter}

// //     },
// // ];

// //   return (
// //     // <div className="App">

// //     //   <BootstrapTable
// //     //     keyField="id2"
// //     //     data={data}
// //     //     columns={columns}
// //     //     striped
// //     //     hover
// //     //     condensed
// //     //     pagination={paginationFactory()}
// //     //     cellEdit={cellEditFactory({
// //     //       mode: "dbclick",
// //     //       blurToSave: true,
// //     //       nonEditableRows: () => [1, 2, 3],
// //     //     })}
// //     //     // selectRow={selectRow}
// //     //     filter={filterFactory()}
// //     //   // rowClasses={ rowClasses } 


// //     //   // expandRow={ expandRow }

// //     //   />

// //     // </div>
// //     <div className="App">
// //     <h1 align="center">React-App</h1>
// //     <h4 align='center'>Material Table</h4>
// //     <MaterialTable
// //         title="Employee Data"
// //         data={data}
// //         columns={columns}
// //     />
// // </div>

// //   );
// // }

// // export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import MaterialTable from 'material-table'

// const empList = [
//   { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', status: 0, role: 1 },
//   { id: 2, name: "Raj", email: 'raj@gmail.com', status: 1, role: 0 },
//   { id: 3, name: "David", email: 'david342@gmail.com', status: 1, role: 3 },
//   { id: 4, name: "Vikas", email: 'vikas75@gmail.com', status: 0, role: 2 },
// ]

// function App() {

//   const [data, setData] = useState(empList)
//   const columns = [
//     { title: "ID", field: "id" },
//     { title: "Name", field: "name" },
//     { title: "Email", field: "email" }, 
//     { title: "Status", field: 'status', },
//     { title: "Role", field: "role", }
//   ] 
 

//   return (
//     <div className="App">
//       <h1 align="center">React-App</h1>
//       <h4 align='center'>Material Table</h4>
//       <MaterialTable
//         title="Employee Data"
//         data={data}
//         columns={columns}
//       />
//     </div>
//   );
// }

// export default App;



// // // import axios from "axios";
// // // import moment from "moment";
// // // // import { useState, useEffect } from "react";
// // // import React, { useState, useEffect } from 'react';
// // // import './App.css';
// // // import MaterialTable from 'material-table'

// // // function App() {

// // //     const [data, setData] = useState([]);
// // //     useEffect(() => {
// // //         getData();
// // //     }, []);
// // //     const getData = () => {
// // //         axios("http://localhost:2500/users/").then((res) => {
// // //             console.log(res.data);
// // //             setData(res.data);
// // //             res.data.forEach((element, index) => element.__id2 = index);
// // //         });
// // //     };
// // //     const columns = [
// // //         {
// // //             title: "name",
// // //             field: "Name",
// // //         },
// // //         {
// // //             title: "rank",
// // //             field: "Rank",

// // //         },
// // //         {
// // //             title: "number",
// // //             field: "Number",
// // //             //
// // //         },
// // //         {
// // //             title: "adharno",
// // //             field: "Aadhar Card ",
// // //             //
// // //         },
// // //         {
// // //             title: "snumber",
// // //             field: "Snumber",
// // //             //
// // //         },
// // //         {
// // //             title: "blacklist",
// // //             field: "Blacklist",
// // //             //
// // //         }, {
// // //             title: "place",
// // //             field: "Place",
// // //             //
// // //         }, {
// // //             title: "supervisor",
// // //             field: "Supervisor",
// // //             //
// // //         },
// // //         {
// // //             title: "timein",
// // //             field: "Time In",

// // //         }, {
// // //             title: "datein",
// // //             field: "Date In",

// // //             // dataFormat:{dateFormatter}
// // //         },
// // //         {
// // //             title: "timeout",
// // //             field: "Time Out",

// // //         },
// // //         {
// // //             title: "dateout",
// // //             field: "Date Out",

// // //             // dataFormat:{dateFormatter}

// // //         },
// // //     ];

// // //     return (
// // //         <div className="App">
// // //             <h1 align="center">React-App</h1>
// // //             <h4 align='center'>Material Table</h4>
// // //             <MaterialTable
// // //                 title="Employee Data"
// // //                 data={data}
// // //                 columns={columns}
// // //             />
// // //         </div>
// // //     );
// // // }

// // // export default App;


// // import React, { useState, useEffect } from 'react';
// // import './App.css';
// // import MaterialTable from 'material-table'


// // function App() {

// //     const [data, setData] = useState([])
// //     const columns = [
//         // {
//         //     title: "name",
//         //     field: "Name",
//         // },
//         // {
//         //     title: "rank",
//         //     field: "Rank",

//         // },
//         // {
//         //     title: "number",
//         //     field: "Number",
//         //     //
//         // },
//         // {
//         //     title: "adharno",
//         //     field: "Aadhar Card ",
//         //     //
//         // },
//         // {
//         //     title: "snumber",
//         //     field: "Snumber",
//         //     //
//         // },
//         // {
//         //     title: "blacklist",
//         //     field: "Blacklist",
//         //     //
//         // }, {
//         //     title: "place",
//         //     field: "Place",
//         //     //
//         // }, {
//         //     title: "supervisor",
//         //     field: "Supervisor",
//         //     //
//         // },
//         // {
//         //     title: "timein",
//         //     field: "Time In",

//         // }, {
//         //     title: "datein",
//         //     field: "Date In",

//         //     // dataFormat:{dateFormatter}
//         // },
//         // {
//         //     title: "timeout",
//         //     field: "Time Out",

//         // },
//         // {
//         //     title: "dateout",
//         //     field: "Date Out",

//         //     // dataFormat:{dateFormatter}

//         // },
// //     ];

// //     useEffect(() => {
// //         fetch("http://localhost:2500/users/")
// //             .then(resp => resp.json())
// //             .then(resp => {
// //                 setData(resp)
// //             })
// //     }, [])

// //     return (
// //         <div className="App">
// //             <h1 align="center">React-App</h1>
// //             <h4 align='center'>Material Table</h4>
// //             <MaterialTable
// //                 title="Employee Data"
// //                 data={data}
// //                 columns={columns}
// //             />
// //         </div>
// //     );
// // }

// // export default App;