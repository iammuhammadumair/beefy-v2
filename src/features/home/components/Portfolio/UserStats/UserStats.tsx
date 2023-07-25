import type { PropsWithChildren } from 'react';
import { memo } from 'react';
import { Hidden, makeStyles, useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { formatPercent, formatUsd } from '../../../../../helpers/format';
import { styles } from './styles';
import { useAppSelector } from '../../../../../store';
import { selectUserGlobalStats } from '../../../../data/selectors/apy';
import { selectIsBalanceHidden } from '../../../../data/selectors/wallet';
import currencyIcon from '../../../../../images/icons/currency_dollar_fill.png';
import monthlyYield from '../../../../../images/icons/monthlyYield.png';
import avgApy from '../../../../../images/icons/avg_apy.png';
import dailyYield from '../../../../../images/icons/daily_yield.png';

const useStyles = makeStyles(styles);

type UserStatProps = {
  borderRight: boolean;
  label: string;
  value: string;
  blurred: boolean;
  imgSrc: string;
};
const UserStat = memo<UserStatProps>(function UserStat({
  borderRight,
  label,
  value,
  blurred,
  imgSrc,
}) {
  const classes = useStyles();

  return (
    <div className={`${classes.stat} ${borderRight ? classes.borderRight : ''} `}>
      <div className={classes.label}>{label}</div>
      <div className={classes.value}>
        <span className={blurred ? classes.blurred : undefined}>{blurred ? '$100' : value}</span>
      </div>
      <img className={classes.icon} src={imgSrc} alt="i" />
    </div>
  );
});

type VisibleAboveProps = PropsWithChildren<{
  width: number;
}>;
const VisibleAbove = memo<VisibleAboveProps>(function VisibleAbove({ width, children }) {
  const aboveWidth = useMediaQuery(`(min-width: ${width}px)`, { noSsr: true });
  return <>{aboveWidth ? children : null}</>;
});

export const UserStats = memo(function UserStats() {
  const stats = useAppSelector(selectUserGlobalStats);
  const hideBalance = useAppSelector(selectIsBalanceHidden);
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.userStats}>
      <UserStat
        borderRight={true}
        label={t('Portfolio-Deposited')}
        value={formatUsd(stats.deposited)}
        blurred={hideBalance}
        imgSrc={currencyIcon}
      />
      <UserStat
        borderRight={true}
        label={t('Portfolio-YieldMnth')}
        value={formatUsd(stats.monthly)}
        blurred={hideBalance}
        imgSrc={monthlyYield}
      />
      <Hidden xsDown>
        <UserStat
          borderRight={true}
          label={t('Portfolio-YieldDay')}
          value={formatUsd(stats.daily)}
          blurred={hideBalance}
          imgSrc={dailyYield}
        />
      </Hidden>
      <VisibleAbove width={430}>
        <UserStat
          borderRight={false}
          label={t('Portfolio-AvgAPY')}
          value={formatPercent(stats.apy, 2, '0%')}
          blurred={hideBalance}
          imgSrc={avgApy}
        />
      </VisibleAbove>
    </div>
  );
});
