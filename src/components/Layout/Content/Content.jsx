import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

function Content() {
    return (
        <Layout.Content
            style={{
                padding: '0 24px',
                minHeight: 280,
            }}
        >
            <Outlet />
        </Layout.Content>
    );
}
export default Content;
