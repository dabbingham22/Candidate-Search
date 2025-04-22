import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>Nav
      <h2>
        <Link 
        to ='/CandidateSearch'
        className={
          currentPage === '/WatchList' ? 'nav-link active' : 'nav-link'}
        >
        HOME
        </Link>

      </h2>
    </div>
  )
};

export default Nav;
