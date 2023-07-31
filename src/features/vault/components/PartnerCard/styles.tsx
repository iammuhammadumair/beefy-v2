import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  link: {
    textDecoration: 'none' as const,
  },
  container: {
    marginTop: '16px',
    backgroundColor: theme.palette.background.vaults.defaultThirdColor,
    padding: '16px',
    borderRadius: '12px',
    '&:Hover': {
      backgroundColor: theme.palette.background.vaults.defaultOutline,
    },
  },
  title: {
    ...theme.typography['body-lg-med'],
    color: theme.palette.text.primary,
    display: 'flex',
    fontSize: '14px',
    fontWeight: 600,
  },
  icon: {
    height: '24px',
    width: '24px',
    marginRight: '8px',
  },
  content: {
    marginTop: '16px',
    ...theme.typography['body-lg'],
    color: theme.palette.text.secondary,
  },
});
