import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  navHeader: {
    background: 'transparent',
    boxShadow: 'none',
    borderBottom: '1px solid #364262',
    '&:hover .MuiListItem-button': {
      background: 'transparent',
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    columnGap: theme.spacing(2),
  },
  hasPortfolio: {
    backgroundColor: theme.palette.background.header,
  },
  userOnDashboard: {
    backgroundColor: theme.palette.background.alternativeFooterHeader,
  },
  container: {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  content: {
    justifyContent: 'space-between',
  },
  beefy: {
    display: 'block',
    '& img': {
      height: '40px',
      display: 'block',
    },
  },
});
