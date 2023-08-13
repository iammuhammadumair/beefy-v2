import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  input: {
    color: '#D0D0DA',
    background: '#111321',
    borderRadius: '8px',
    width: '100%',
    display: 'flex',
    cursor: 'default',
    '& .MuiInputBase-input': {
      ...theme.typography['h3'],
      padding: '12px 16px',
      color: theme.palette.text.light,
      height: 'auto',
      cursor: 'default',
      '&::placeholder': {
        color: theme.palette.text.dark,
        opacity: 1,
      },
    },
  },
  error: {
    borderColor: '#D15347',
  },
  max: {
    ...theme.typography['subline-sm'],
    color: theme.palette.text.primary,
    backgroundColor: '#363B63',
    border: '1px solid #6391FF',
    boxShadow: 'none',
    outline: 'none',
    borderRadius: '4px',
    margin: 0,
    padding: '6px 12px',
    minWidth: 0,
    flexShrink: 0,
    cursor: 'pointer',
    marginRight: '8px',
    '&:disabled': {
      color: theme.palette.text.primary,
      backgroundColor: '#6391FF',
      border: '1px solid #6391FF',
      opacity: 0.4,
    },
  },
});
