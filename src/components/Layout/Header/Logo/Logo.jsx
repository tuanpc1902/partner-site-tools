import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/">
            <img src="./src/assets/images/logo.png" alt="logo" className="h-14" />
        </Link>
    );
}
export default Logo;
