import type { Theme } from '@material-ui/core';
// theme: Theme
export const styles = (theme: Theme) => ({
  container: {
    borderRadius: '10px',
    '&.MuiPaper-elevation1': {
      // boxShadow: '0px 0px 32px 0px #0000001A',
    },
    backgroundColor: theme.palette.background.body,
    border: `1px solid ${theme.palette.background.default}`,
  },
});
