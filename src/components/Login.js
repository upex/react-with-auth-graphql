import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router-dom";
import AuthForm from './AuthForm';
import Typography from '@material-ui/core/Typography';
import {useMutation} from '@apollo/react-hooks';
import {useQuery} from '@apollo/react-hooks';
import {LOGIN_USER, CURRENT_USER} from '../queries/user';

const Login = ({history}) => {
  const [errors, setErrors] = useState([]);
  const [loginUser] = useMutation(LOGIN_USER);
  const {loading, data} = useQuery(CURRENT_USER);

  useEffect(() => {
      if (data && data.currentUser) {
        history.push('/dashboard');
      }
  }, [data]);

  if (loading) return null;

  const handleSubmit = ({email, password}) => {
    loginUser({
      variables: {email, password},
      refetchQueries: [{ query: CURRENT_USER}]
    }).catch(error => { 
       const errors = error.graphQLErrors.length && error.graphQLErrors.map(error => error.message);
       setErrors(errors);
    });
  }
  return (
    <div style={{marginTop: '2em'}}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <AuthForm 
        errors={errors}
        ButtonLabel='Login'
        handleSubmit={handleSubmit} />
    </div>
  );
}

export default withRouter(Login);