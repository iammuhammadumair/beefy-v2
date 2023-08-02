import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  header: {
    display: 'flex',
    // backgroundColor: theme.palette.background.vaults.defaultThirdColor,
    // backgroundColor: '#353F51',
    backgroundColor: theme.palette.background.body,

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column' as const,
      rowGap: '16px',
    },
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
    color: theme.palette.text.secondary,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  apysContainer: {
    marginBottom: '32px',
  },
  apyTitle: {
    ...theme.typography['h3'],
    color: theme.palette.text.secondary,
    marginBottom: '8px',
  },
  apys: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '12px 32px',
  },
  apy: {},
  apyLabel: {
    ...theme.typography['subline-sm'],
    color: theme.palette.text.disabled,
  },
  apyValue: {
    ...theme.typography['body-lg-med'],
    color: theme.palette.text.secondary,
  },
  audits: {
    display: 'flex',
    columnGap: '56px',
    rowGap: '24px',
  },
  audit: {
    display: 'flex',
  },
  auditIcon: {
    marginRight: '8px',
  },
  auditLabel: {
    ...theme.typography['body-lg-med'],
    color: theme.palette.text.secondary,
  },
  detailsLink: {
    color: theme.palette.text.secondary,
  },
});
