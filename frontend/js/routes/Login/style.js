const style = theme => ({
  main: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
  },
  paper: {
    padding: `${theme.spacing(5)} ${theme.spacing(15)}`,
    [theme.breakpoints.down('xs')]: {
      padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
    },
  },
  textField: {
    margin: '0 auto',
    display: 'block',
    width: theme.spacing(35),
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  login: {
    width: theme.spacing(20),
    marginTop: theme.spacing(5),
  },
  trouble: {
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    marginTop: theme.spacing(1),
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  error: {
    color: theme.palette.common.white,
    background: theme.palette.error[500],
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
});

export default style;
