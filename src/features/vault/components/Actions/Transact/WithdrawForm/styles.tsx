import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  container: {
    padding: '24px',
  },
  stakedInBoost: {
    marginBottom: '24px',
  },
  labels: {
    display: 'flex',
    flexWrap: 'nowrap' as const,
    alignItems: 'baseline',
    gap: '8px',
    marginBottom: '4px',
  },
  selectLabel: {
    ...theme.typography['body-lg'],
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: '12px',
  },
  availableLabel: {
    ...theme.typography['body-sm'],
    color: theme.palette.text.dark,
    marginLeft: 'auto',
  },
  availableLabelAmount: {
    ...theme.typography['body-sm-med'],
    color: theme.palette.text.middle,
  },
  inputs: {
    display: 'flex',
    flexWrap: 'nowrap' as const,
    gap: '12px',
  },
  links: {
    marginTop: '26px',
  },
  quote: {
    marginTop: '12px',
  },
  actions: {
    marginTop: '28px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
    width: '100%',
  },
  fees: {
    marginTop: '24px',
    border: `1px solid ${theme.palette.background.default}`,
    backgroundColor: theme.palette.background.secondColor,
  },
});
