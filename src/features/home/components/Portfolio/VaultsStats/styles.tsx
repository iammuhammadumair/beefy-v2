export const styles = theme => ({
  userStats: {
    display: 'flex',
    '& div:last-child': {
      marginRight: '0',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  stat: {
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: theme.spacing(6),
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
  borderRight: {
    borderRight: `1px solid ${theme.palette.text.borderColor}`,
    paddingRight: theme.spacing(6),
  },
});
