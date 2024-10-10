// src/components/PopUp.js
import React from 'react';
import { Modal, Button } from '@mui/material';

const PopUp = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ padding: 20, background: 'white' }}>
        <h2>Pop Up Title</h2>
        <p>This is a pop-up message.</p>
        <Button onClick={handleClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default PopUp;
