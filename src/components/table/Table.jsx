import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import axios from "axios";
import Avatar from "react-avatar";
import Button from '@mui/material/Button';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Table from '@mui/material/Table';
import Fingerprint from '@mui/icons-material/Fingerprint';

function App() {
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
            title: "Name"
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
            console.log(res.data);
            setData(res.data);
            res.data.forEach((element, index) => element.__id2 = index);
        });
    };


    return (
        <div className="App">
            <h1 align="center">INS Valsura</h1>
            <h4 align='center'>Integrated Security Management System</h4>
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
                        onClick: (event, data) => alert("You saved " + data.name)
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
                        >
                            {/* <Fingerprint color="secondary" /> */}

                            <Fingerprint sx={{ fontSize: 30 }} />
                        </Button>
                    ),
                }}
            />
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

