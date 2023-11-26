import { Col, Layout, Row, Space } from 'antd';
import './Header.scss';
import Logo from './Logo/Logo';
import Theme from './Theme/Theme';
import Search from './Search/Search';
import Auth from './Auth/Auth';

function Header() {
    return (
        <Layout.Header className="bg-white">
            <Row className="container mx-auto flex items-center h-full">
                <Col className="flex items-center" xxl={4} xl={4} lg={4} md={6} sm={6} xs={8}>
                    <Space>
                        <Logo />
                    </Space>
                </Col>
                <Col xxl={16} xl={16} lg={16} md={12} sm={12} xs={8}>
                    <Space className="center float-right flex items-center">
                        <Theme />
                        <Search />
                    </Space>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={8}>
                    <Auth />
                </Col>
            </Row>
        </Layout.Header>
    );
}
export default Header;
