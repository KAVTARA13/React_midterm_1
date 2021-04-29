import LoginForm from '../../components/forms/login-form';
import { withAuth } from '../../hoc/withAuth';

function LoginPage(props) {
  return (
    <div className="row mt-4">
      <div className="d-flex justify-content-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default withAuth(LoginPage);
