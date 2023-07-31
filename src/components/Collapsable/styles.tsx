import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {
    padding: 24,
    borderRadius: '12px',
    backgroundColor: theme.palette.background.body,
    border: `1px solid ${theme.palette.background.default}`,
  },
  content: {
    padding: 16,
  },
  title: {
    display: 'flex',
    padding: 0,
    justifyContent: 'space-between',
    backgroundColor: 'transparent' as const,
    borderColor: 'transparent' as const,
    '&:Hover': {
      backgroundColor: 'transparent' as const,
      borderColor: 'transparent' as const,
      borderBottom: `1px solid ${theme.palette.background.default}`,
    },
    borderBottom: `1px solid ${theme.palette.background.default}`,
    paddingBottom: theme.spacing(2),
  },
  titleIcon: {
    fill: theme.palette.text.primary,
  },
});
