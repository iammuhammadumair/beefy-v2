import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    padding: '8px 16px',
  },
  address: {
    ...theme.typography['body-lg-med'],
    whiteSpace: 'nowrap' as const,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  disconnected: {
    display: 'flex',
    justifyContent: 'center',
    background: theme.palette.background.cta,
    '& $address': {
      color: theme.palette.text.primary,
      textOverflow: 'clip',
    },
  },
  known: {
    border: `2px solid transparent`,
    '& $address': {
      color: theme.palette.text.secondary,
    },
    '&:hover': {
      borderColor: '#3F466D',
    },
  },
  connected: {
    borderColor: theme.palette.background.cta,
    backgroundColor: '#242737',
    borderRadius: '50px',
  },
  loading: {
    paddingTop: '4px',
  },
  blurred: {
    filter: 'blur(.5rem)',
  },
});
