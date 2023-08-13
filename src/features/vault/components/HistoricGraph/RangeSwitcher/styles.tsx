import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  tabs: {
    border: 0,
    padding: 0,
    background: 'transparent',
    gap: '12px',
  },
  tab: {
    border: 0,
    paddingRight: '24px',
    background: 'transparent',
    '&:hover': {
      background: 'transparent',
    },
  },
  selected: {
    background: 'transparent',
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    paddingBottom: theme.spacing(1),
  },
});
