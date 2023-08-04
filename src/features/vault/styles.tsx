import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
    paddingTop: '32px',
    paddingBottom: '32px',
  },
  contentContainer: {},
  contentColumns: {
    display: 'grid',
    gridTemplateColumns: '100%',
    rowGap: '24px',
    columnGap: '24px',
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,666fr) minmax(0,333fr)',
    },
  },
  columnActions: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    rowGap: '24px',
    '& > :first-child': {
      marginTop: 0,
    },
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
  },
  columnInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    rowGap: '24px',
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },
  },
  titleContainer: {
    height: '100px',
    [theme.breakpoints.down('md')]: {
      height: '150px',
    },
    backgroundColor: theme.palette.background.secondColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
