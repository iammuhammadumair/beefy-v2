import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {
    border: `1px solid ${theme.palette.background.default}`,
    borderRadius: '10px',
  },
  header: {
    display: 'flex',
    // backgroundColor: theme.palette.background.vaults.defaultThirdColor,
    // backgroundColor: '#353F51',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column' as const,
      rowGap: '16px',
    },
  },
  divider: {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.background.default}`,
    width: '100%',
    paddingBottom: theme.spacing(2),
  },
  cardActions: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    rowGap: '8px',
    columnGap: '8px',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },
  cardAction: {},
  text: {
    margin: '0 0 32px 0',
    whiteSpace: 'pre-line' as const,
    color: theme.palette.text.primary,
    '&:last-child': {
      marginBottom: 0,
    },
    fontSize: '20px',
    fontWeight: 400,
    paddingLeft: '10px',
  },
  apysContainer: {
    marginBottom: '32px',
    marginTop: '10px',
    paddingLeft: '10px',
  },
  apyTitle: {
    ...theme.typography['h3'],
    color: theme.palette.text.secondary,
    marginBottom: '8px',
  },
  apys: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    // gap: '12px 32px',
    justifyContent: 'space-between',
    border: `1px solid ${theme.palette.background.default}`,
    borderRadius: '10px',
  },
  apy: {
    flex: 1,
  },
  apyLabel: {
    ...theme.typography['subline-sm'],
    color: theme.palette.text.disabled,
    backgroundColor: theme.palette.background.secondColor,
    padding: '10px',
  },
  apyLabel1: {
    ...theme.typography['subline-sm'],
    color: theme.palette.text.disabled,
    backgroundColor: theme.palette.background.secondColor,
    padding: '10px',
    borderTopLeftRadius: '10px',
  },
  apyLabel2: {
    ...theme.typography['subline-sm'],
    color: theme.palette.text.disabled,
    backgroundColor: theme.palette.background.secondColor,
    padding: '10px',
    borderTopRightRadius: '10px',
  },
  apyValue: {
    ...theme.typography['body-lg-med'],
    color: theme.palette.text.primary,
    padding: '10px',
  },
  audits: {
    display: 'flex',
    columnGap: '56px',
    rowGap: '24px',
    paddingLeft: '10px',
  },
  audit: {
    display: 'flex',
  },
  auditIcon: {
    marginRight: '8px',
  },
  auditLabel: {
    ...theme.typography['body-lg-med'],
    color: theme.palette.text.primary,
  },
  detailsLink: {
    color: theme.palette.text.secondary,
  },
});
