import { useCallback, useState } from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { formatBigUsd } from '../../../../../helpers/format';
import { StatLoader } from '../../../../../components/StatLoader';
import { styles } from './styles';
import { selectTotalTvl } from '../../../../data/selectors/tvl';
import { selectTotalActiveVaults } from '../../../../data/selectors/vaults';
import { selectTotalBuybackUsdAmount } from '../../../../data/selectors/buyback';
import { ModalTvl } from '../ModalTvl';
import { useAppSelector } from '../../../../../store';
import { Modal } from '../../../../../components/Modal';
import tvlIcon from '../../../../../images/icons/tvl.png';
import walletIcon from '../../../../../images/icons/wallet.png';
import buybackIcon from '../../../../../images/icons/buyback.png';

const useStyles = makeStyles(styles);
export const VaultsStats = () => {
  const [isTvlModalOpen, setIsTvlModalOpen] = useState<boolean>(false);
  const classes = useStyles();
  const { t } = useTranslation();
  const totalTvl = useAppSelector(selectTotalTvl);
  const totalActiveVaults = useAppSelector(selectTotalActiveVaults);
  const buyback = useAppSelector(selectTotalBuybackUsdAmount);
  const ValueText = ({ value }) => <>{value ? <span>{value}</span> : <StatLoader />}</>;

  const handleTvlModalOpen = useCallback(() => {
    setIsTvlModalOpen(true);
  }, [setIsTvlModalOpen]);

  const handleTvlModalClose = useCallback(() => {
    setIsTvlModalOpen(false);
  }, [setIsTvlModalOpen]);

  return (
    <Grid className={classes.userStats}>
      <Box className={classes.stat}>
        <div className="txt">
          <Box className={classes.labelWithIcon}>
            <div className={classes.label}>{t('TVL')}</div>
            <div onClick={handleTvlModalOpen}></div>
          </Box>
          <div className={classes.value}>
            <ValueText value={formatBigUsd(totalTvl)} />
          </div>
        </div>
        <img className={classes.icon} src={tvlIcon} alt="i" />
      </Box>
      <Box className={classes.stat}>
        <div className="txt">
          <div className={classes.label}>{t('Vaults-Title')}</div>
          <div className={classes.value}>
            <ValueText value={totalActiveVaults} />
          </div>
        </div>
        <img className={classes.icon} src={walletIcon} alt="i" />
      </Box>
      <Box className={classes.stat}>
        <div className="txt">
          <div className={classes.label}>{t('BuyBack')}</div>
          <div className={classes.value}>
            <ValueText value={formatBigUsd(buyback)} />
          </div>
        </div>
        <img className={classes.icon} src={buybackIcon} alt="i" />
      </Box>
      <Modal open={isTvlModalOpen} onClose={handleTvlModalClose}>
        <ModalTvl close={handleTvlModalClose} />
      </Modal>
    </Grid>
  );
};
