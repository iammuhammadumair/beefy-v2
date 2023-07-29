import React, { memo } from 'react';
import { Container, makeStyles, useMediaQuery } from '@material-ui/core';
import type { Theme } from '@material-ui/core';

// import { Filters } from './components/Filters';
import { Portfolio } from './components/Portfolio';
import { Loading } from './components/Loading';
import { selectIsVaultListAvailable } from '../data/selectors/data-loader';
import { styles } from './styles';
import { Vaults } from './components/Vaults';
import { useAppSelector } from '../../store';
import { Banners } from './components/Banners';
import { ChainButtonFilter } from './components/Filters/components/ChainFilters';

const useStyles = makeStyles(styles);

export const Home = memo(function Home() {
  const classes = useStyles();
  const isVaultListAvailable = useAppSelector(selectIsVaultListAvailable);
  const desktopView = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), { noSsr: true });

  if (!isVaultListAvailable) {
    return <Loading />;
  }
  // const classes = useStyles();

  return (
    <>
      <div className={classes.top}></div>
      <Container maxWidth="lg" className={classes.vaultContainer}>
        <Banners />
        <Portfolio />
        {desktopView ? <ChainButtonFilter className={classes.chain} /> : null}
        {/* <Filters /> */}
        <Vaults />
      </Container>
    </>
  );
});
