import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

import UnauthedActions from './components/UnauthedActions';
import UserMenu from './components/UserMenu';

import style from './style';

const useStyles = makeStyles(style);

export default function Header({ elevated, text, user }) {
  const classes = useStyles();

  const auth = useSelector(state => state.auth);
  const currentUser = useSelector(state => state.currentUser);

  return (
    <Grid item xs={12} className={`${classes.container} ${elevated && classes.elevated}`}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item sm={4} xs={6}>
          <Typography align="center" variant="subtitle1">{text || 'Sump Thing'}</Typography>
        </Grid>
        { auth.isLoggedIn && !currentUser.loading ? <UserMenu user={user} /> : <UnauthedActions /> }
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  elevated: PropTypes.bool,
  text: PropTypes.string,
  user: PropTypes.object,
};

Header.defaultProps = {
  elevated: false,
  text: '',
  user: {},
};
