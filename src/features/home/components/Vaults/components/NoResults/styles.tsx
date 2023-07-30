import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  message: {
    padding: '24px',
    background: 'transparent',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  title: {
    ...theme.typography['h3'],
    color: '#D0D0DA',
    margin: '0 0 4px 0',
  },
  text: {
    ...theme.typography['body-lg'],
    color: '#D0D0DA',
  },
  btn: {
    backgroundColor: theme.palette.background.cta,
    color: theme.palette.text.primary,
    borderColor: theme.palette.background.cta,
    borderRadius: '50px',
    '&:hover': {
      backgroundColor: theme.palette.background.cta,
      color: theme.palette.text.primary,
      borderColor: theme.palette.background.cta,
    },
  },
  extra: {
    marginTop: '24px',
  },
});
