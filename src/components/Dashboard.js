import React from 'react';
import RequireAuthHOC from './RequireAuth';
import Alert from '@material-ui/lab/Alert';

const Dashboard = () => {
  return <Alert style={{marginTop: '1.5em'}} severity="info">This is an info alert — You are logged in!</Alert>;
}

export default RequireAuthHOC(Dashboard);