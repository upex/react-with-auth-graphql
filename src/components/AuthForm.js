import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

const AuthForm = ({ButtonLabel, handleSubmit, errors = []}) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleOnChange = e => {
    const val = {
      ...values,
      [e.target.name]: e.target.value
    };
    setValues(val);
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    handleSubmit(values);
  }

  const showErros = () => {
    if (errors.length) {
      return (<Alert style={{marginTop: '1.5em'}} severity="error">{errors.join(', ')}</Alert>);
    }
    return null;
  }

  return (
        <form onSubmit={handleOnSubmit}>
          <FormControl fullWidth>
              <InputLabel htmlFor='email'>Email*</InputLabel>
              <Input
                id='email'
                name='email'
                type='email'
                value={values.email}
                onChange={handleOnChange}
                required
              />
          </FormControl>
          <FormControl fullWidth>
              <InputLabel htmlFor='password'>Password*</InputLabel>
              <Input
                id='password'
                name='password'
                type='password'
                value={values.password}
                onChange={handleOnChange}
                required
              />
          </FormControl>
          { showErros() }
          <Button style={{marginTop: '1.5em'}} type='submit' variant="contained" color="secondary">
            {ButtonLabel}
          </Button>
        </form>
  );
}

export default AuthForm;