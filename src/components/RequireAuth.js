import React, {useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {CURRENT_USER} from '../queries/user';

const RequireAuth = WrappedComponent => {  
  const NewComponent = props => {
    const {loading, data} = useQuery(CURRENT_USER);
    useEffect(() => {
        if (!loading && data && !data.currentUser) {
          props.history.push('/login');
        }
    }, [data]);
    return <WrappedComponent {...props} />
  }
  return NewComponent
};

export default RequireAuth;