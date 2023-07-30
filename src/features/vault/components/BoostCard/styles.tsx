import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  text: {
    color: theme.palette.text.primary,
    marginBottom: '24px',
    fontSize: '20px',
    fontWeight: 400,
  },
  boostedBy: {
    ...theme.typography['h2'],
    color: theme.palette.text.primary,
    fontSize: '20px',
    fontWeight: 700,
    flexGrow: 1,
    '& span': {
      color: theme.palette.text.primary,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      fontWeight: 300,
    },
  },
  header: {
    // display: 'flex',
    flexWrap: 'wrap' as const,
    rowGap: '16px',
    padding: '24px 14px 15px 12px',
    borderRadius: '12px 12px 0 0',
    backgroundColor: theme.palette.background.body,
    // borderBottom: `1px solid ${theme.palette.background.default}`,
    //  borderBottom: theme.spacing(2),
    // padding: theme.spacing(2),
    // paddingBottom: theme.spacing(2),
  },

  contentWithBorder: {
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'center',
  },

  cardBody: {
    borderRadius: '10px',
    border: `1px solid ${theme.palette.background.default}`,
  },
  socials: {
    display: 'flex',
    columnGap: '8px',
    rowGap: '8px',
    flexWrap: 'wrap' as const,
  },
});
