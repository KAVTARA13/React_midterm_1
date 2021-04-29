import { Redirect } from 'react-router';

export const withAuth = (Component) => {
  const WithAuth = (props) => {
    const token = JSON.parse(localStorage.getItem('auth.token'));
    if (token) return <Redirect to="/" />;

    return <Component {...props} />;
  };

  return WithAuth;
};
