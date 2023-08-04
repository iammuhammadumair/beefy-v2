import React from 'react';
import { Box, Divider, Grid, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import type { VaultEntity } from '../../../data/entities/vault';
import { isGovVault } from '../../../data/entities/vault';
import { selectVaultById } from '../../../data/selectors/vaults';
import { DailyApyStats, YearlyApyStats } from '../../../../components/ApyStats';
import { ValueBlock } from '../../../../components/ValueBlock/ValueBlock';
import { VaultTvl } from '../../../../components/VaultTvl/VaultTvl';
import { VaultDeposited } from '../../../../components/VaultDeposited/VaultDeposited';
import { GovVaultRewards } from '../../../../components/GovVaultRewards/GovVaultRewards';
import { getBeefyApi } from '../../../data/apis/instances';
import { useAppSelector } from '../../../../store';
import { formatDistance } from 'date-fns';
import copperCoin from '../../../../images/icons/copper_coin_fill.svg';
import presentationFill from '../../../../images/icons/presentation_2_fill.svg';
import calendarFill from '../../../../images/icons/calendar_fill.svg';
import currencyDollar from '../../../../images/icons/currency_dollar_fill.png';

const useStyles = makeStyles(styles);

function VaultsStatsComponent({ vaultId }: { vaultId: VaultEntity['id'] }) {
  const lastHarvestStr = useLastHarvestStr(vaultId);
  const classes = useStyles();
  const { t } = useTranslation();
  const vault = useAppSelector(state => selectVaultById(state, vaultId));

  return (
    <div className={classes.stats}>
      <div className={classes.interestStats}>
        <Box className={classes.interestStatsBox}>
          <div style={{ width: '33%' }} className={classes.statsContainer}>
            <Box className={classes.statFigures}>
              <VaultTvl vaultId={vaultId} />
            </Box>
            <div className={classes.icon}>
              {' '}
              <img src={copperCoin} alt="icon" />
            </div>
          </div>

          <div
            style={{ width: '33%' }}
            className={`${classes.statsContainer} ${classes.statsColor}`}
          >
            {/* <Divider className={classes.divider} orientation="vertical" /> */}
            <Box className={classes.statFigures}>
              <YearlyApyStats vaultId={vault.id} />
            </Box>
            <div className={classes.icon}>
              <img src={presentationFill} alt="icon" />
            </div>
          </div>

          <div style={{ width: '33%' }} className={`${classes.statsContainer}`}>
            <Box className={classes.statFigures}>
              <DailyApyStats vaultId={vault.id} />
            </Box>
            <div className={classes.icon}>
              <img src={calendarFill} alt="icon" />
            </div>
          </div>
        </Box>
      </div>
      <div className={classes.depositStats}>
        <Grid container className={classes.depositStatsBox}>
          <Grid item xs={6} className={classes.statsBody}>
            <div className={`${classes.statsContainer}`}>
              <Box className={classes.statFigures2}>
                <VaultDeposited vaultId={vaultId} />
              </Box>

              <div className={classes.icon2}>
                <img src={currencyDollar} alt="icon" />
              </div>
            </div>
          </Grid>
          {(isGovVault(vault) || lastHarvestStr !== 'never') && (
            <Divider flexItem={true} className={classes.divider1} orientation="vertical" />
          )}
          {!isGovVault(vault) ? (
            <>
              {lastHarvestStr !== 'never' && (
                <Grid item xs={6}>
                  <Box className={classes.stat4}>
                    <ValueBlock label={t('Vault-LastHarvest')} value={lastHarvestStr} />
                  </Box>
                </Grid>
              )}
            </>
          ) : (
            <Grid item xs={6}>
              <Box className={classes.stat4}>
                <GovVaultRewards vaultId={vaultId} />
              </Box>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

export const VaultsStats = React.memo(VaultsStatsComponent);

const useLastHarvestStr = (vaultId: string) => {
  const [state, setState] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const beefyApi = getBeefyApi();
      const lastHarvest = await beefyApi.getVaultLastHarvest(vaultId);

      if (lastHarvest === null) {
        setState('never');
      } else {
        const lhStr = formatDistance(lastHarvest, new Date(), { addSuffix: true });

        setState(lhStr);
      }
    })();
  }, [vaultId]);

  return state;
};
