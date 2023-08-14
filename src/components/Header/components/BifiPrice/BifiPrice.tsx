import { makeStyles } from '@material-ui/core';
import type BigNumber from 'bignumber.js';
import { memo } from 'react';
import { connect } from 'react-redux';
import { BIG_ZERO } from '../../../../helpers/big-number';
import { formatBigUsd } from '../../../../helpers/format';
import type { BeefyState } from '../../../../redux-types';
// import bifiToken from '../../../../images/bifi-logos/BIFI-TOKEN.svg';
import bifiToken from '../../../../images/bifi-logos/BIFI-TOKEN-1.svg';

import { styles } from './styles';

const useStyles = makeStyles(styles);
export const _BifiPrice = connect((state: BeefyState) => {
  const beefyPrice = state.entities.tokens.prices.byOracleId['Moovee'] || BIG_ZERO;
  return { beefyPrice };
})(({ beefyPrice }: { beefyPrice: BigNumber }) => {
  const classes = useStyles();
  return (
    <a
      className={classes.bifiPrice}
      href="https://app.1inch.io/#/56/swap/BNB/BIFI"
      target="_blank"
      rel="noreferrer"
    >
      <img alt="Moovee" src={bifiToken} />
      {formatBigUsd(beefyPrice)}
    </a>
  );
});

export const BifiPrice = memo(_BifiPrice);
