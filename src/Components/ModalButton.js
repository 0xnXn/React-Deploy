
import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'



const Modalc = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (


        <div>

            <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Know More
    </Button>

                <MyVerticallyCenteredModal
                    heading={props.heading}
                    content={props.content}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        </div>
    );
}
export default Modalc