// import React, { useState, useEffect } from 'react';
// import { DateRangePicker } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { addDays } from 'date-fns';

// function Date_filter() {

//     const [state, setState] = useState([
//         {
//             startDate: new Date(),
//             endDate: addDays(new Date(), 7),
//             key: 'selection'
//         }
//     ]);



//     return (
//         <>

//             <DateRangePicker
//                 onChange={item => setState([item.selection])}
//                 showSelectionPreview={true}
//                 moveRangeOnFirstSelection={false}
//                 months={2}
//                 ranges={state}
//                 direction="horizontal"
//             />;
//         </>
//     )
// }

// export default Date_filter



import { useEffect, useRef, useState } from 'react'
import { DateRangePicker } from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'
// import { MDBInput } from "mdbreact";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'


import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Date_filter = () => {

    // date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    // open close
    const [open, setOpen] = useState(false)

    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        // console.log(e.key)
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    // Hide dropdown on outside click
    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    return (
        <div className="calendarWrap">

            <input
                value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
                readOnly
                className="inputBox"
                onClick={() => setOpen(open => !open)}

            />

            {/* <MDBInput label='Example label' id='form1' type='text'
                value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
                readOnly
                // className="inputBox"
                onClick={() => setOpen(open => !open)}

            /> */}

            <div ref={refOne}>
                {open &&
                    <DateRangePicker
                        onChange={item => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={2}
                        direction="horizontal"
                        className="calendarElement"
                    />
                }
            </div>

        </div>
    )
}

export default Date_filter
