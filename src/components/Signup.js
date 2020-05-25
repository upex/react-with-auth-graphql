import React, {useState, useEffect}from 'react';
import {withRouter} from "react-router-dom";
import AuthForm from './AuthForm';
import Typography from '@material-ui/core/Typography';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {SIGNUP_USER, CURRENT_USER} from '../queries/user';

const Signup = ({history}) => {
  const [errors, setErrors] = useState([]);
  const [signupUser] = useMutation(SIGNUP_USER);
  const {loading, data} = useQuery(CURRENT_USER);

  useEffect(() => {
      if (data && data.currentUser) {
        history.push('/dashboard');
      }
  }, [data]);

  const handleSubmit = ({email, password}) => {
    signupUser({
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
          Signup
        </Typography>
        <AuthForm 
        errors={errors}
        ButtonLabel='Signup'
        handleSubmit={handleSubmit} />
    </div>
  );
}

export default withRouter(Signup);