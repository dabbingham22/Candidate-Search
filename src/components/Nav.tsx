import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>Nav
      <ul>
        <li>
          <h2>
            <Link 
            to ='/CandidateSearch'
            className={
              currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
            HOME
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link 
            to ='/SavedCandidates'
            className={
              currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}
            >
            HOME
            </Link>
          </h2>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
