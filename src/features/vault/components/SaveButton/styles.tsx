import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  shareButton: {
    display: 'flex',
    width: '20px  !important',
    height: '24px',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    outline: 'none',
    '&:focus-visible, &.active , &:hover': {
      outline: 'none',
      backgroundColor: '#f9a052',
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
    backgroundColor: '#f5b277',
  },
  icon: {
    flexShrink: 0,
    flexGrow: 0,
    fontSize: '16px',
  },
  iconHolder: {
    height: '24px',
    width: '24px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.content,
    [theme.breakpoints.up('lg')]: {
      height: '16px',
      width: '16px',
      backgroundColor: 'transparent',
    },
  },
});
