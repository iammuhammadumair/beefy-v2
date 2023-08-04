import { Container, makeStyles } from '@material-ui/core';
import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SummaryStats } from '../../../../components/SummaryStats';
import { formatBigUsd } from '../../../../helpers/format';
import { styles } from './styles';
import { ReactComponent as WalletIcon } from '../../../../images/icons/wallet_fill.svg';
import { ReactComponent as VaultIcon } from '../../../../images/icons/currency_dollar_fill.svg';
import { ReactComponent as DailyIcon } from '../../../../images/icons/coin_fill.svg';
import { ReactComponent as BifiIcon } from '../../../../images/icons/bifi.svg';
import { useAppSelector } from '../../../../store';
import { selectTreasuryStats } from '../../../data/selectors/treasury';

const useStyles = makeStyles(styles);

export const DaoSummary = memo(function DaoSummary() {
  const { t } = useTranslation();
  const classes = useStyles();

  const { holdings, beefyHeld, assets, stables } = useAppSelector(selectTreasuryStats);

  const DaoStats = useMemo(() => {
    return [
      {
        title: t('Summary-Holdings'),
        value: formatBigUsd(holdings),
        Icon: WalletIcon,
        color: '#6391FF',
      },
      {
        title: t('Summary-Stables'),
        value: formatBigUsd(stables),
        Icon: DailyIcon,
        color: '#F7931A',
      },
      {
        title: t('Summary-Held-BIFI'),
        value: beefyHeld.toFixed(0),
        Icon: BifiIcon,
        color: '#59A662',
      },
      {
        title: t('Summary-Asset-Diversity'),
        value: `${assets}`,
        Icon: VaultIcon,
        color: '#5AAEC9',
      },
    ];
  }, [assets, beefyHeld, holdings, stables, t]);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Container maxWidth="lg">
          <div>{t('Treasury-Title')}</div>
        </Container>
      </div>
      <Container maxWidth="lg">
        <SummaryStats items={DaoStats} />
      </Container>
    </div>
  );
});
