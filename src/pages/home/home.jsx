import { withNoAuth } from '../../hoc';

function Home(props) {
  return <div className="nav-link active">Home</div>;
}

export default withNoAuth(Home);
