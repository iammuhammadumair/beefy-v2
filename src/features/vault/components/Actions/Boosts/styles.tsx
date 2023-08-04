import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    borderRadius: '12px',
  },
  containerBoost: {
    padding: theme.spacing(3),
    borderRadius: '12px',
    // backgroundColor: theme.palette.background.body,
    border: `1px solid ${theme.palette.background.default}`,
    display: 'flex',
    flexDirection: 'column' as const,
    rowGap: '16px',
    // border: `1px solid ${theme.palette.background.default}`,
  },
  containerExpired: {
    display: 'flex',
    flexDirection: 'column' as const,
    rowGap: '16px',
    padding: '24px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '12px',
    marginTop: theme.spacing(3),
  },
  boostImg: {
    width: 30,
    height: 30,
    marginLeft: '-8px',
  },
  title: {
    ...theme.typography['h2'],
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 700,
    borderBottom: `1px solid ${theme.palette.background.default}`,
    paddingBottom: theme.spacing(1),
  },
  titleWhite: {
    color: '#fff',
  },
  titleTooltipTrigger: {
    color: theme.palette.text.secondary,
    fontSize: '20px',
    width: '20px',
    height: '20px',
    marginLeft: '8px',
    '& .MuiSvgIcon-root': {
      fontSize: 'inherit',
      display: 'block',
    },
  },
  boostStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    columnGap: '16px',
    // backgroundColor: '#2D3153',
    padding: '12px',
    borderRadius: '8px',
  },
  boostStat: {
    '& :last-child': {
      marginBottom: 0,
    },
  },
  boostStatLabel: {
    // ...theme.typography['subline-sm'],
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: '14px',
  },
  boostStatValue: {
    ...theme.typography['body-lg-med'],
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: '22px',
  },
  button: {
    backgroundColor: '#6391FF',
    borderRadius: '50px',
    width: '60%',
    // textAlign: 'center'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '25px',
  },
  divider: {
    // marginRight: theme.spacing(3),
    width: 2,
    backgroundColor: theme.palette.background.content,
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2.5),
    },
  },
  borderRight: {
    borderRight: `1px solid ${theme.palette.text.borderColor}`,
  },
});
