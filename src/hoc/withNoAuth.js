import { Redirect } from 'react-router';

export const withNoAuth = (Component) => {
  const WithNoAuth = (props) => {
    const token = JSON.parse(localStorage.getItem('auth.token'));
    if (!token) return <Redirect to="/login" />;

    return <Component {...props} />;
  };

  return WithNoAuth;
};
