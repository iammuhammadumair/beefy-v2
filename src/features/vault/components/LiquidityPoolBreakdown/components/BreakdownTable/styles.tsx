import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  table: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    // backgroundImage:
    //   'linear-gradient(to bottom, #2D3153 0%, #2D3153 50%, #363B63 50%, #363B63 100%)',
    backgroundColor: theme.palette.background.body,
    // borderRadius: '8px',
    // borderBottomLeftRadius: '8px',
    // borderBottomRightRadius: '8px',
    // [theme.breakpoints.up('lg')]: {
    //   borderBottomLeftRadius: 0,
    // },
    // borderRadius:'20px',
    // padding:'10px'
  },
  cell: {
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // padding: '4px',
    paddingLeft: '5px',
  },
  row: {
    backgroundColor: theme.palette.background.body,
    display: 'grid',
    gridTemplateColumns: '35fr 35fr 30fr',
    padding: '16px 10px 0 0',
    borderBottom: 'solid 2px #363B63',
    alignItems: 'center',
    columnGap: '16px',
    '&:last-child': {
      borderBottom: 0,
    },
    '& $cell:nth-child(2), & $cell:nth-child(3)': {
      textAlign: 'right' as const,
    },
  },
  header: {
    ...theme.typography['subline-sm'],
    color: '#999CB3',
    backgroundColor: theme.palette.background.secondColor,
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
  },
  footer: {
    backgroundColor: '#363B63',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    [theme.breakpoints.up('lg')]: {
      borderBottomLeftRadius: 0,
    },
    backgroundColor: '#353F51',
  },
  asset: {
    display: 'flex',
    alignItems: 'center',
    // padingRight:'5px',
  },
  icon: {
    width: '32px',
    height: '32px',
    marginRight: '8px',
  },
  tokenAmount: {
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    width: 'min-content',
    maxWidth: '100%',
    marginLeft: 'auto',
  },
});
