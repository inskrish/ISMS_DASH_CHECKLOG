// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
// export default function Detailpage() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       {/* <Button variant="outlined" onClick={handleClickOpen}>
//         Open full-screen dialog
//       </Button> */}
//       {console.log("clicked")}
//       {{handleClickOpen}}
      
//       <Dialog
//         fullScreen
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Transition}
//       >
//         <AppBar sx={{ position: 'relative' }}>
//           <Toolbar>
//             <IconButton
//               edge="start"
//               color="inherit"
//               onClick={handleClose}
//               aria-label="close"
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//               Sound
//             </Typography>
//             <Button autoFocus color="inherit" onClick={handleClose}>
//               save
//             </Button>
//           </Toolbar>
//         </AppBar>
//         {/* <List>
//           <ListItem button>
//             <ListItemText primary="Phone ringtone" secondary="Titania" />
//           </ListItem>
//           <Divider />
//           <ListItem button>
//             <ListItemText
//               primary="Default notification ringtone"
//               secondary="Tethys"
//             />
//           </ListItem>
//         </List> */}
//       </Dialog>
//     </div>
//   );
// }

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import {render} from 'react-dom';
import React, { useState, useEffect ,useCallback ,setItem} from 'react';
// import './App.css';
import Button from 'react-bootstrap/Button';


function Detailpage() {
  // const [show, setShow] = useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="Detailpage-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Detailpage-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal> */}
      {console.log("hiii")};
    </>
  );
}

// render(<Detailpage />);

export default Detailpage;