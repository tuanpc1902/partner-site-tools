import { Modal } from 'antd';
import PropTypes from 'prop-types';

function SignUpModal({ open, setOpen }) {
    function toggleModal() {
        setOpen(!open);
    }

    return (
        <Modal title="Sign Up" open={open} onCancel={toggleModal}>
            <p>Some contents...</p>
        </Modal>
    );
}
export default SignUpModal;

SignUpModal.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
};
