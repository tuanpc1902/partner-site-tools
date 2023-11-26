import { Button, Checkbox, Form, Input, Modal } from 'antd';
import PropTypes from 'prop-types';

function SignInModal({ open, setOpen }) {
    function toggleModal() {
        setOpen(!open);
    }
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Modal
            title=<div className="text-gray-900 font-bold">Sign In</div>
            open={open}
            onCancel={toggleModal}
            cancelButtonProps={{ hidden: true }}
            okButtonProps={{ hidden: true }}
        >
            <Form
                className="pt-10"
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 12,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input allowClear />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            min: 6,
                            message: 'Password must be at least 6 characters.',
                        },
                        {
                            max: 15,
                            message: 'Password must be at most 15 characters.',
                        },
                        {
                            pattern: new RegExp('^[a-zA-Z0-9_]+$', 'g'),
                            message: 'Password must be alphanumeric.',
                        },
                    ]}
                >
                    <Input.Password allowClear />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 20,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 20,
                    }}
                >
                    <Button type="primary" htmlType="submit" className="bg-gray-500">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}
export default SignInModal;

SignInModal.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
};
