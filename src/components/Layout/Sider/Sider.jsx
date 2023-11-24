import { Layout, Menu } from 'antd';

function Sider() {
    return (
        <Layout.Sider width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                    height: '100%',
                }}
                items={[]}
            />
        </Layout.Sider>
    );
}
export default Sider;
