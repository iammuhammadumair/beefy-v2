import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  valueStrikethrough: {
    ...theme.typography['subline-sm'],
    color: theme.palette.type === 'dark' ? '#F5F5FF' : '#A69885',
    textAlign: 'left' as const,
    textDecoration: 'line-through',
  },
  value: {
    ...theme.typography['body-lg-med'],
    margin: 0,
    padding: 0,
    fontSize: '26px',
    fontWeight: '700',
  },
});
