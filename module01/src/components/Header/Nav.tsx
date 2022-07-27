import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="header__navigation">
      <ul className="navigation__list">
        <li className="list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="list__item">
          <Link to="/cards">Cards</Link>
        </li>
        <li className="list__item">
          <Link to="/forms">Forms</Link>
        </li>
        <li className="list__item">
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
