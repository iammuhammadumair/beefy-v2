export const styles = theme => ({
  // userStats: {
  //   display: 'flex',
  //   '& div:last-child': {
  //     marginRight: '0',
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     justifyContent: 'flex-start',
  //   },
  // },

  userStats: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  // stat: {
  //   paddingTop: 0,
  //   paddingBottom: 0,
  //   marginRight: theme.spacing(6),
  //   [theme.breakpoints.down('sm')]: {
  //     margin: '8px 24px 8px 0px',
  //   },
  // },
  stat: {
    paddingTop: 0,
    paddingBottom: 0,
    // marginRight: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    '& .txt': {
      marginRight: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      '&:not(:last-child)::after': {
        content: '""',
        display: 'inline-block',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderLeft: `1px solid ${theme.palette.text.borderColor}`,
      },

      '&:last-child::after': {
        content: '""',
        display: 'inline-block',
        height: '100%',
        marginLeft: 'auto',
        marginRight: '0px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      margin: '8px 24px 8px 0px',
    },
  },
  value: {
    ...theme.typography['h2'],
    color: theme.palette.text.primary,
    fontWeight: 700,
    textAlign: 'left',
  },
  label: {
    // ...theme.typography['subline-lg'],
    display: 'inline-flex',
    color: theme.palette.text.primary,
    fontSize: '14px',
    fontWeight: 500,
  },
  obscured: {
    color: '#424866',
  },
  labelWithIcon: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  icon: {
    marginLeft: theme.spacing(0.5),
    cursor: 'pointer',
    display: 'block',
  },
  // borderRight: {
  // borderRight: `1px solid ${theme.palette.text.borderColor}`,
  // paddingRight: theme.spacing(6),
  // },
});
