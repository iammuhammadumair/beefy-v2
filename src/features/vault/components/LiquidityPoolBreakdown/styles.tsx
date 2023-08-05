import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {
    border: `1px solid ${theme.palette.background.default}`,
  },
  header: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  titleText: {
    borderBottom: `1px solid ${theme.palette.background.default}`,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(2),
  },
  tabs: {
    marginTop: '16px',
    padding: '0 10px 0 0',
    borderRadius: '8px',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
  },
  layout: {
    backgroundColor: theme.palette.background.body,
    borderRadius: '0 0 12px 12px',
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
      gridTemplateColumns: '232fr 484fr',
    },
    padding: '12px',
  },
});
