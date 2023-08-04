export const styles = theme => ({
  portfolio: {
    // backgroundColor: theme.palette.background.body,
    padding: `${40 - 24}px 0 40px 0`,
    marginBottom: theme.spacing(4),
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: '100%',
    rowGap: '32px',
    columnGap: '32px',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '583fr 417fr',
    },
  },
  userStats: {
    backgroundColor: theme.palette.background.secondColor,
    padding: '20px',
    borderRadius: '6px',
  },
  vaultStats: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right' as const,
      '& $title': {
        justifyContent: 'flex-start',
      },
    },
    backgroundColor: theme.palette.background.secondColor,
    padding: '20px',
    borderRadius: '6px',
  },
  title: {
    ...theme.typography['h3'],
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    borderBottom: `1px solid ${theme.palette.text.borderColor}`,
    paddingBottom: theme.spacing(2),
  },
  btnHide: {
    color: '#484F7F',
    marginLeft: '8px',
    padding: 0,
    minWidth: 0,
    width: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#6B7199',
    },
  },
});
