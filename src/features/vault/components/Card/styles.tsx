import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {
    borderRadius: '12px',
    '&.MuiPaper-elevation1': {
      boxShadow: '0px 0px 32px 0px #0000001A',
    },
    backgroundColor: theme.palette.background.body,
  },
});
