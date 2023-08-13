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
      backgroundColor: theme.palette.background.body,
    },
  },
  titleText: {
    borderBottom: `1px solid ${theme.palette.background.default}`,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    // paddingBottom:theme.spacing(1),
  },
  content: {
    padding: 0,
    backgroundColor: theme.palette.background.body,
  },
});
