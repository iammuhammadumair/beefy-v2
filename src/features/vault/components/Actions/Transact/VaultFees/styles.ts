import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {
    borderBottom: `1px solid ${theme.palette.background.default}`,
    borderRadius: '8px',
    padding: '12px',
  },
  transactionFees: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '4px',
    borderBottom: `1px solid ${theme.palette.background.default}`,
    paddingBottom: theme.spacing(2),
    // color:'red',
  },
  performanceFees: {
    ...theme.typography['body-sm'],
    color: theme.palette.text.primary,
    marginTop: '12px',
  },
  tooltipTrigger: {
    width: '16px',
    height: '16px',
    margin: 0,
    verticalAlign: 'middle',
    '& svg': {
      width: '16px',
      height: '16px',
    },
  },
});
