import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  top: {
    backgroundColor: theme.palette.background.footer,
  },
  chain: {
    width: '100%',
    marginBottom: '1rem',
    [theme.breakpoints.up('md')]: {
      width: 'fit-content',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
  },
  vaultContainer: {
    paddingTop: '32px',
    paddingBottom: '32px',
  },
});
