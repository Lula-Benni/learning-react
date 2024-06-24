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
      <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>

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
            <form onSubmit={(e) => {
                e.preventDefault()
                props.updatePerson(props.id, name, role)
            }} 
            id='edit-modal' className='edit-person-form'>
                <div className='m-3 flex flex-wrap'>
                    <div className='m-2'>
                        <label className="name-label" for="name">Full Name</label>
                    </div>
                    <div className='m-2'>
                        <input 
                            className="rounded-sm bg-zinc-200 text-center"
                            id="name" 
                            type='text' 
                            value={name} 
                            onChange={(nameValue) => {setName(nameValue.target.value)}}
                            placeholder='Enter your FullName'></input>
                    </div>
                </div>
                <div className='m-3 flex flex-wrap'>
                    <div className='px-4 m-1'>
                        <label className="role-label" for="role">Role</label>
                    </div>
                    <div className='m-2'>
                        <input 
                            className="rounded-sm bg-zinc-200 text-center"
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
          <button className='bg-violet-600 rounded py-2 px-2' form='edit-modal'>Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPerson;