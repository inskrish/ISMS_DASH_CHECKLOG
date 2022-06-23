import React, { useState, useEffect ,useCallback ,setItem} from 'react';
import './App.css';
import MaterialTable from 'material-table'
import axios from "axios";
import Avatar from "react-avatar";
import Button from '@mui/material/Button';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Table from '@mui/material/Table';
import Fingerprint from '@mui/icons-material/Fingerprint';
import moment from "moment";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Detailpage from "../../components/Detailpage/Detailpage";
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';
import Modal from "../../components/Detailpage/Modal";

import {render} from 'react-dom';

function App() {


    // const items = [
        
    //   ]

    //   const handleOnSearch = (string, results) => {
    //     // onSearch will have as the first callback parameter
    //     // the string searched and for the second the results.
    //     console.log(string, results)
    //   }
    
    //   const handleOnHover = (result) => {
    //     // the item hovered
    //     console.log(result)
    //   }
    
    //   const handleOnSelect = (item) => {
    //     // the item selected
    //     console.log(item)
    //   }
    
    //   const handleOnFocus = () => {
    //     console.log('Focused')
    //   }
    
    //   const formatResult = (item) => {
    //     return (
    //       <>
    //         <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
    //         <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
    //       </>
    //     )
    //   }
    
      




    const columns = [
        {
            title: "Avatar",
            render: data => (
                <Avatar
                    maxInitials={1}
                    size={40}
                    round={true}
                    name={data === undefined ? " " : data.name}
                />
            )
        },
        {
            field: "name",
            title: "Name",
        //   cellStyle: { fontSize: '1.3rem', minWidth: '300px' },
        //     render: data => {
        //          if (data && data.name) {
        //         const nameSplit = _.split(data.name, '-'); 
        //         return namesplit[2];
        //          }
        //         },
        //         editComponent: props => 
        //         <FormControl 
        //         className="mt-8 mb-16 text-13 min-w-320" 
        //         fullWidth
        //          onblur={this.autoSubmit}
        //          >
                 
        //         <Async
        //         value={this.defaultValue(props)}
        //          loadOptions={this.promiseOptions}
        //           defaultOptions
        //            cacheOptions
        //             placeholder={'Search name...'}
        //              onChange={e => {
        //         props.onChange(e.value); }} 
        //         onblur={this.autoSubmit}
        //     />
        //         { !props.data.name &&( 
        //             <FormHelperText style={{ color: "#f44336" }}
        //          >
        //         name is required! 
        //         </FormHelperText>
        //          )}    
        //          </FormControl>
                 
        },
        {
            field: "rank",
            title: "Rank"
        },
        {
            field: "number",
            title: "Number"
        },
        {
            field: "adharno",
            title: "Aadhar Card "
        },
        {
            field: "snumber",
            title: "Snumber"
        },
        {
            field: "blacklist",
            title: "Blacklist",
            filtering: false
        }, {
            field: "place",
            title: "Place",
            filtering: false
        }, {
            field: "supervisor",
            title: "Supervisor",
            filtering: false
        },
        {
            field: "timein",
            title: "Time In",
            filtering: false
        }, {
            field: "datein",
            title: "Date In",
            filtering: false
        },
        {
            field: "timeout",
            title: "Time Out",
            filtering: false
        },
        {
            field: "dateout",
            title: "Date Out",
            filtering: false
        }
    ]

    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        axios("http://localhost:2500/users/").then((res) => {
            res.data.forEach(function(element, index)
            {
                // if(element.timein != null){
                // var d=element.timein
                // var a=d.split("T")
                // console.log(a);
                // element.timein = a[0]

                // }
            // console.log(moment(element.timein).format('MM/DD/YYYY'))
            
            element.datein= moment(element.datein).format('MM/DD/YYYY');
            element.timein= moment(element.timein).format('LTS');
            element.dateout= moment(element.dateout).format('MM/DD/YYYY');
            element.timeout= moment(element.timeout).format('LTS');
            
            // items.push({id:element.id,name:element.name})
            // console.log(items)            
            
            }
            );
            console.log(res.data);

            setData(res.data);
            res.data.forEach((element, index) => element.__id2 = index);
        });
    };


    // function Example() {
    //     // const [show, setShow] = useState(false);
      
    //     return (
    //       <>
    //         <Button variant="primary" onClick={() => setShow(true)}>
    //           Custom Width Modal
    //         </Button>
      
    //         <Modal
    //           show={show}
    //           onHide={() => setShow(false)}
    //           dialogClassName="modal-90w"
    //           aria-labelledby="example-custom-modal-styling-title"
    //         >
    //           <Modal.Header closeButton>
    //             <Modal.Title id="example-custom-modal-styling-title">
    //               Custom Modal Styling
    //             </Modal.Title>
    //           </Modal.Header>
    //           <Modal.Body>
    //             <p>
    //               Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
    //               commodi aspernatur enim, consectetur. Cumque deleniti temporibus
    //               ipsam atque a dolores quisquam quisquam adipisci possimus
    //               laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
    //               accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
    //               reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
    //               deleniti rem!
    //             </p>
    //           </Modal.Body>
    //         </Modal>
    //       </>
    //     );
    //   }
      
    //   render(<Example />);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        
        <div className="App">
        <img className="logo" src={require('./mylogo.png')} width="150px" height="150px" />
            <h1 align="center">INS Valsura</h1>
            <h4 align='center'>Integrated Security Management System</h4>
          
             {/* <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
 */}
 
            <MaterialTable
                title=""
                data={data}
                columns={columns}
                options={{
                    grouping: true,
                    filtering: true,
                    exportButton: true,


                }}
                actions={[
                    {
                        icon: 'save',
                        tooltip: 'Save User',
                        // onClick: (event, data) => alert("You saved " + data.name)
                        // onClick: (event, data) =>  {
                            
                        // }
                        // onClick: () => this.Example
                        onClick : () => {
                             setModalOpen(true);
                                }
                    }
                ]}
                components={{

                    Action: props => (
                        <Button
                            onClick={(event) => props.action.onClick(event, props.data)}
                            color=""
                            variant=""
                            style={{ textTransform: 'none' }}
                            size="small"
                            // onClick={()=>{setModalOpen(true);}}
                        >
                            {/* <Fingerprint color="secondary" /> */}

                            <Fingerprint sx={{ fontSize: 30 }} />
                        </Button>
                    ),
                }}
            />
             {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';
// import MaterialTable from 'material-table'

// const empList = [
//     { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', status: 0, role: 1 },
//     { id: 2, name: "Raj", email: 'raj@gmail.com', status: 1, role: 0 },
//     { id: 3, name: "David", email: 'david342@gmail.com', status: 1, role: 3 },
//     { id: 4, name: "Vikas", email: 'vikas75@gmail.com', status: 0, role: 2 },
// ]

// function App() {

//     const [data, setData] = useState(empList)
//     const columns = [
//         { title: "ID", field: "id" },
//         { title: "Name", field: "name" },
//         { title: "Email", field: "email" },
//         { title: "Status", field: 'status', },
//         { title: "Role", field: "role", }
//     ]


//     return (
//         <div className="App">
//             <h1 align="center">React-App</h1>
//             <h4 align='center'>Material Table</h4>
//             <MaterialTable
//                 title="Employee Data"
//                 data={data}
//                 columns={columns}
//             />
//         </div>
//     );
// }

// export default App;

