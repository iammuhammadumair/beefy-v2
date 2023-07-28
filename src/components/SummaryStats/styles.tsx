import type { Theme } from '@material-ui/core';
export const styles = (theme: Theme) => ({
  summaryContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  container: {
    width: '100%',
    display: 'flex',
    columnGap: '16px',
    padding: '16px',
    borderRadius: '8px',
    // color: theme.palette.text.primary,
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      columnGap: '8px',
      backgroundColor: 'transparent',
      padding: 0,
      alignItems: 'flex-start',
    },
  },
  iconContainer: {
    borderRadius: '10px',
    backgroundColor: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '50px',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.text.primary,
      height: '24px',
      width: '24px',
      padding: '5px',
      marginTop: '7px',
      marginRight: '7px',
    },
  },
  icon: {},
  contentContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  title: {
    // ...theme.typography['subline-lg'],
    fontWeight: 500,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('xs')]: {
      ...theme.typography['body-sm'],
      fontWeight: 300,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px',
    },
    fontSize: '14px',
  },
  value: {
    ...theme.typography.h1,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('xs')]: {
      ...theme.typography['body-lg-med'],
      fontWeight: 300,
    },
    fontWeight: '700',
    fontSize: '26px',
  },
  imageContainer: {
    marginLeft: 'auto',
  },
});
