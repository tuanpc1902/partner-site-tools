import { Layout } from 'antd';
import { Content as AntdContent, Footer } from 'antd/es/layout/layout';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Sider from './Sider/Sider';
import { Outlet } from 'react-router-dom';
import Content from './Content/Content';
import Header from './Header/Header';

function DefaultLayout() {
    return (
        <Layout className="">
            <Header />
            <AntdContent className="container mx-auto" style={{ padding: '0 50px' }}>
                <Breadcrumb />
                <Layout style={{ padding: '24px 0' }}>
                    <Sider />
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Outlet />
                    </Content>
                </Layout>
            </AntdContent>
            <Footer style={{ textAlign: 'center' }}>Partner Site Back Office ©2023 Created by tuanpc</Footer>
        </Layout>
    );
}
export default DefaultLayout;
