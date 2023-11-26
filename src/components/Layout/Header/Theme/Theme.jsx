import Select from 'antd/es/select';
import { useEffect, useState } from 'react';

function Theme() {
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
    );
}
export default Theme;
