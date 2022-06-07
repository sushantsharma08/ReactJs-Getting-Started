import {useState} from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'
function Todo(propsValue) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandeler(){
        setModalIsOpen(false);
    }
    
    return (
        <div className="card" >
            <h2>{propsValue.titleName}</h2>
            <div className="action">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen ? <Modal 
                Name={propsValue.titleName} 
                onCancel={closeModalHandeler}
                onConfirm={closeModalHandeler}/> : null
            }
            {modalIsOpen ? <Backdrop onCancel = {closeModalHandeler}/> : null}
            
        </div>
    );
}
export default Todo;