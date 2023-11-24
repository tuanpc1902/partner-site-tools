import { Button, Col, Layout, Row, Select, Space } from 'antd';
import { Link } from 'react-router-dom';
import './Header.scss';
import { useEffect, useState } from 'react';
import Search from 'antd/es/input/Search';

function Header() {
    function getTheme() {
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const currentTheme = localStorage.getItem('theme');
        const theme = currentTheme ? currentTheme : prefersDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        return theme;
    }

    const [theme, setTheme] = useState('os');
    useEffect(() => {
        const theme = getTheme();
        setTheme(theme);
    }, []);

    const handleChange = (value) => {
        if (value === 'os') {
            setTheme('os');
            return;
        } else {
            setTheme(value);
        }
    };
    return (
        <Layout.Header className="bg-white">
            <Row className="container mx-auto flex items-center h-full">
                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={8}>
                    <Link to="/">
                        <img src="./src/assets/images/logo.png" alt="logo" className="h-14" />
                    </Link>
                </Col>
                <Col xxl={16} xl={16} lg={16} md={12} sm={12} xs={8}>
                    <Space className="center float-right flex items-center">
                        {/* <Search
                            className="w-[100px] h-full"
                            placeholder="input search text"
                            onSearch={() => {}}
                            // enterButton
                        /> */}

                        <Select
                            style={{ width: 120 }}
                            defaultValue={theme}
                            suffixIcon={
                                <div className="flex items-center">
                                    <div className={`theme-mode theme-mode-${theme} mr-3`}></div>
                                </div>
                            }
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'os',
                                    label: 'OS Default',
                                },
                                {
                                    value: 'light',
                                    label: 'Light',
                                },
                                {
                                    value: 'dark',
                                    label: 'Dark',
                                },
                            ]}
                        />
                        <form className="search rounded-[5px] h-[30px] mr-[10px]">
                            <input
                                id="search-input"
                                type="text"
                                placeholder="____"
                                onFocus={() => {
                                    document.querySelector('.search').classList.add('active');
                                    document.querySelector('#search-input').placeholder = 'Input your search';
                                }}
                            />
                            <button className="search-btn"></button>
                        </form>
                    </Space>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={8}>
                    <Space>
                        <Button type="text" className="text-black font-semibold">
                            Sign in
                        </Button>
                        <Button type="text" className="text-black bg-slate-300 hover:bg-slate-900 font-semibold">
                            Sign up for free
                        </Button>
                    </Space>
                </Col>
            </Row>
        </Layout.Header>
    );
}
export default Header;
