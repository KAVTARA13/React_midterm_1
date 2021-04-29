import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import { login } from '../../../services/auth';

function LoginForm(props) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const loggedIn = await login(data);

    localStorage.setItem('auth.token', JSON.stringify(loggedIn.token));
    history.replace('/');
  };

  return (
    <div className="col-6">
      <h4 className="text-muted">Please login in</h4>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            defaultValue="eve.holt@reqres.in"
            {...register('email', { required: true, email: true })}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            defaultValue="cityslicka"
            {...register('password', { required: true })}
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </div>
  );
}

export default LoginForm;
