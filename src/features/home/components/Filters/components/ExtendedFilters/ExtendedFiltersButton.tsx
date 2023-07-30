import { memo, useCallback, useRef, useState } from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
// import { Button } from '../../../../../../components/Button';
import { styles } from './styles';
// import { useTranslation } from 'react-i18next';
import { Sidebar } from './Sidebar';
import { ExtendedFilters } from './ExtendedFilters';
import { Dropdown } from '../../../../../../components/Dropdown';
import FilterIcon from '../../../../../../images/filter.svg';

const useStyles = makeStyles(styles);

export type ExtendedFiltersButtonProps = {
  desktopView: boolean;
  // className?: string;
};
export const ExtendedFiltersButton = memo<ExtendedFiltersButtonProps>(
  function ExtendedFiltersButton({
    desktopView,
    //className
  }) {
    // const { t } = useTranslation();
    const anchorEl = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();

    const handleClose = useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);

    const handleOpen = useCallback(() => {
      console.log('check');
      console.log('desktop =>', this.desktopView);

      setIsOpen(true);
    }, [setIsOpen]);

    return (
      <>
        {/* <Button
          className={clsx(className)}
          variant="filter"
          size="sm"
          ref={anchorEl}
          onClick={handleOpen}
          active={isOpen}
        >
          {t('Filter-Btn')}
        </Button> */}
        <img alt="snapshot" src={FilterIcon} onClick={handleOpen} className={classes.filterBtn} />
        {desktopView ? (
          <Dropdown anchorEl={anchorEl} open={isOpen} onClose={handleClose} placement="bottom-end">
            <ExtendedFilters desktopView={true} />
          </Dropdown>
        ) : (
          <Sidebar open={isOpen} onClose={handleClose} />
        )}
      </>
    );
  }
);
