import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  checkbox: {
    ...theme.typography['body-lg-med'],
    display: 'flex',
    alignItems: 'center',
    color: '#D0D0DA',
    cursor: 'pointer',
    columnGap: '5px',
    userSelect: 'none' as const,
  },
  icon: {
    color: 'white',
    backgroundColor: 'white',
    borderRadius: '4px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  checked: {
    '& $icon': {
      color: '#F5F5FF',
      backgroundColor: '#6391FF',
    },
  },
});
