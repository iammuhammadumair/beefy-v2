import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: theme.palette.background.body,
    borderRadius: '0 0 12px 12px',
    padding: '10px 14px 15px 12px',
  },
});
