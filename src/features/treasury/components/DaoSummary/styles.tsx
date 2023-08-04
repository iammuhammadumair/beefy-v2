import type { Theme } from '@material-ui/core';
export const styles = (theme: Theme) => ({
  container: {
    // backgroundColor: theme.palette.background.body,
    [theme.breakpoints.down('sm')]: {
      // padding: `0px 0 0px 0`,
    },
  },
  title: {
    ...theme.typography.h1,
    marginBottom: '24px',
    height: '100px',
    backgroundColor: theme.palette.background.secondColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
