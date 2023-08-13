import { memo, useCallback, useMemo } from 'react';
import type { ToggleButtonsProps } from '../../../../../../components/ToggleButtons';
import { ToggleButtons } from '../../../../../../components/ToggleButtons';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../../store';
import { selectFilterVaultCategory } from '../../../../../data/selectors/filtered-vaults';
import type { FilteredVaultsState } from '../../../../../data/reducers/filtered-vaults';
import { filteredVaultsActions } from '../../../../../data/reducers/filtered-vaults';
import { CATEGORY_OPTIONS } from './category-options';
import { styles } from './styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(styles);

export type VaultCategoryButtonFilterProps = {
  className?: string;
  selected?: string;
};
export const VaultCategoryButtonFilter = memo<VaultCategoryButtonFilterProps>(
  function VaultCategoryButtonFilter({ className }) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const classes = useStyles();

    const allKey = 'all';
    const options: Record<string, string> = useMemo(
      () =>
        Object.fromEntries(
          Object.entries(CATEGORY_OPTIONS)
            .filter(([key]) => key !== allKey)
            .map(([key, label]) => [key, t(label)])
        ),
      [t]
    );
    const value = useAppSelector(selectFilterVaultCategory);
    const handleChange = useCallback<ToggleButtonsProps['onChange']>(
      value => {
        dispatch(
          filteredVaultsActions.setVaultCategory(value as FilteredVaultsState['vaultCategory'])
        );
      },
      [dispatch]
    );
    return (
      <ToggleButtons
        value={value}
        options={options}
        onChange={handleChange}
        // buttonsClass={classes.button}
        // selectedClass={classes.selected}
        fullWidth={false}
        untoggleValue={allKey}
        buttonsClass={className}
        buttonClass={classes.button}
        selectedClass={classes.selected}
      />
    );
  }
);
