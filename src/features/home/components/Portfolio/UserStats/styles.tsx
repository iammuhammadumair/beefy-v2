import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  userStats: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
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
  borderRight: {
    // borderRight: `1px solid ${theme.palette.text.borderColor}`,
    // paddingRight: theme.spacing(6),
  },
  value: {
    ...theme.typography['h2'],
    color: theme.palette.text.primary,
    fontWeight: 700,
    // textAlign: 'left',
  },
  label: {
    // ...theme.typography['subline-lg'],
    display: 'inline-flex',
    color: theme.palette.text.primary,
    fontSize: '14px',
    fontWeight: 500,
  },
  blurred: {
    filter: 'blur(.5rem)',
  },
  obscured: {
    color: '#424866',
  },
});
