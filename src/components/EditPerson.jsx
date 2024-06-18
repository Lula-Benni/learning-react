import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditPerson(props) {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='editBtn'>Update</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id='edit-modal' className='edit-person-form'>
                <div className='person-name'>
                    <div className='person-name-label'>
                        <label className="name-label" for="name">Full Name</label>
                    </div>
                    <div className='person-name-edit'>
                        <input 
                            className="name-update" 
                            id="name" 
                            type='text' 
                            value={name} 
                            onChange={(nameValue) => {setName(nameValue.target.value)}}
                            placeholder='Enter your FullName'></input>
                    </div>
                </div>
                <div className='person-role'>
                    <div className='person-role-label'>
                        <label className="role-label" for="role">Role</label>
                    </div>
                    <div className='person-role-edit'>
                        <input 
                            className="role-update" 
                            id="role" 
                            type='text' 
                            value={role} 
                            onChange={(roleValue) => {setRole(roleValue.target.value)}}
                            placeholder='Enter your Role'></input>
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className='update-btn' form='edit-modal'>Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPerson;