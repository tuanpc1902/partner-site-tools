import { Button, Space } from 'antd';
import { useState } from 'react';
import SignInModal from '../../../Modal/SignInModal';
import SignUpModal from '../../../Modal/SignUpModal';

function Auth() {
    const [openModalSignIn, setOpenModalSignIn] = useState(false);
    const [openModalSignUp, setOpenModalSignUp] = useState(false);

    function toggleModalSignIn() {
        setOpenModalSignIn(true);
    }

    function toggleModalSignUp() {
        setOpenModalSignUp(true);
    }

    return (
        <Space>
            <Button type="text" className="text-black font-semibold" onClick={toggleModalSignIn}>
                Sign in
            </Button>
            <Button
                type="text"
                className="text-black bg-slate-300 hover:bg-slate-900 font-semibold"
                onClick={toggleModalSignUp}
            >
                Sign up for free
            </Button>
            <SignInModal open={openModalSignIn} setOpen={setOpenModalSignIn} />
            <SignUpModal open={openModalSignUp} setOpen={setOpenModalSignUp} />
        </Space>
    );
}
export default Auth;
