import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {},
  title: {
    ...theme.typography.h2,
    color: theme.palette.text.primary,
    fontSize: '20px',
    fontWeight: 700,
  },
});
