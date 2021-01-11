
import { react } from "react";
import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from './Modalc'



const Modalc = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        

        <div>

            <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
    </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        </div>
    );
}
export default Modalc