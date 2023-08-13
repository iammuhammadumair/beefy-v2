import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  button: {
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '16px',
  },
  selected: {
    color: 'rgba(99, 145, 255, 1)',
    // pointerEvents: "none",
    backgroundColor: `${theme.palette.background.snackbars.bg} !important`,
    borderRadius: '50px',
    padding: '0px 12px',
    fontWeight: 500,
    lineHeight: '24px',
    // textTransform: "none",
    // fontSize: "16px"
  },
});
