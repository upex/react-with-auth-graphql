import React from 'react';
import {withRouter} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Link
} from "react-router-dom";
import {useQuery} from '@apollo/react-hooks';
import {CURRENT_USER, LOGOUT_USER} from '../queries/user';
import {useMutation} from '@apollo/react-hooks';

const Appbar = ({history}) => {
  const [logoutUser] = useMutation(LOGOUT_USER);
  const {loading, error, data} = useQuery(CURRENT_USER);

  if (loading || error) return null;

  const handleLogOut = () => {
    logoutUser({
      refetchQueries: [{ query: CURRENT_USER}]
    }).then(() => history.push('/'));
  }

  const renderButtons = () => {
    if (data.currentUser) {
      return (<Button 
          onClick={handleLogOut}
          color="secondary">
            Logout
          </Button>)
    } else {
      return (<div>
        <Link
        style={{color: '#fff', textDecoration: 'none', float: 'right'}}
        to='/signup'
        >
        <Button color="inherit">Signup</Button>
        </Link>
        <Link
        style={{color: '#fff', textDecoration: 'none', float: 'right'}}
        to='/login'
        >
        <Button color="inherit">Login</Button>
        </Link>
      </div>);
    }
  }

  return(
      <div>
        <AppBar position="static">
          <Toolbar style={{justifyContent: 'space-between'}}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            { renderButtons() }
          </Toolbar>
        </AppBar>
      </div>
  );
};

export default withRouter(Appbar);