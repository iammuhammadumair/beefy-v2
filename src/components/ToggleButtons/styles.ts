import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  buttons: {
    display: 'flex',
    width: 'fit-content',
    // border: 'solid 2px #303550',
    // borderRadius: '8px',
    // backgroundColor: '#262A40',
  },
  fullWidth: {
    width: '100%',
  },
  button: {
    ...theme.typography['body-lg-med'],
    color: '#8A8EA8',
    backgroundColor: 'inherit',
    border: 'none',
    // borderRadius: '50px',
    boxShadow: 'none',
    cursor: 'pointer',
    margin: 0,
    padding: `0px 12px`,
    flexGrow: 1,
    flexShrink: 0,
    '&:hover': {
      color: '#D0D0DA',
      boxShadow: 'none',
    },
    '&:active, &:hover:active': {
      color: theme.palette.text.primary,
    },
    fontWeight: 700,
    fontSize: '20px',
  },
  selected: {
    pointerEvents: 'none' as const,
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    paddingBottom: theme.spacing(2),
    // position: 'relative',
    '&:hover': {
      color: theme.palette.text.primaryLight,
      backgroundColor: `${theme.palette.background.vaults.defaultOutline} !important`,
    },
  },
  selected2: {
    pointerEvents: 'none' as const,
    color: theme.palette.text.primary,
    backgroundColor: '#6391FF',
    borderRadius: '8px',
    // padding:'8px',

    '&:hover': {
      color: theme.palette.text.primaryLight,
      backgroundColor: `${theme.palette.background.vaults.defaultOutline} !important`,
    },
  },
  untogglable: {
    // padding: `${8 - 2}px ${16 - 12 - 2}px`,
    '& $button': {
      padding: '0 12px',
      '&:hover': {
        color: '#D0D0DA',
        backgroundColor: 'transparent',
      },
      '&:active, &:hover:active': {
        color: theme.palette.text.primary,
        backgroundColor: 'transparent',
      },
      '&$selected': {
        pointerEvents: 'all' as const,
        color: theme.palette.text.primaryLight,
        backgroundColor: 'transparent',
        '&:hover': {
          color: theme.palette.text.primaryLight,
          backgroundColor: 'transparent',
        },
      },
    },
  },
  dropdown: {
    display: 'flex',
    flexDirection: 'column' as const,
    rowGap: '8px',
    padding: `12px`,
    backgroundColor: '#303550',
    borderRadius: '8px',
    marginTop: '8px',
    marginLeft: '4px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    ...theme.typography['body-lg-med'],
    color: theme.palette.text.dark,
    fill: theme.palette.text.dark,
    '&:hover': {
      color: theme.palette.text.primary,
      fill: theme.palette.text.primary,
      cursor: 'pointer',
    },
  },
  icon: {
    height: '20px',
  },
  iconActive: {
    fill: theme.palette.text.primary,
  },
  buttonList: {
    ...theme.typography['body-lg-med'],
    color: '#848BAD',
    backgroundColor: 'inherit',
    border: 'none',
    padding: 0,
    textAlign: 'start' as const,
    '&:hover': {
      color: theme.palette.text.primary,
      cursor: 'pointer',
    },
  },
  selectedList: {
    color: theme.palette.text.primary,
  },
});
