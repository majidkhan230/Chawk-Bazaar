import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const ModalB = ({data,children}) => {
 
  const {modal2Open,setModal2Open} =data;
  return (
    <>
      {/* <Button type="primary" onClick={() => setModal2Open(true)}>
       hit me
      </Button> */}
      <Modal
        width={1000}
      
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
       {children}
      </Modal>
    </>
  );
};
export default ModalB;