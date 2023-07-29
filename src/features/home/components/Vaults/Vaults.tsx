import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './styles';
import { VaultsHeader } from './components/VaultsHeader';
import { VaultsList } from './components/VaultsList';
import { Filters } from '../Filters';

const useStyles = makeStyles(styles);

export const Vaults = memo(function Vaults() {
  const classes = useStyles();

  return (
    <div className={classes.vaults}>
      <Filters />
      <VaultsHeader />
      <VaultsList />
    </div>
  );
});
