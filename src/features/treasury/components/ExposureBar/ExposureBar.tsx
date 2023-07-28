import { makeStyles } from '@material-ui/core';
import React, { memo } from 'react';
import { formatPercent } from '../../../../helpers/format';
import type { BaseEntry } from '../../../data/utils/array-utils';
import { styles } from './styles';

const useStyles = makeStyles(styles);

interface ExposureBarProps {
  data: BaseEntry[];
}

const COLORS = ['#6391FF', '#F7931A', '#59A662', '#5AAEC9', '#C3136F', '#8247E4'];

export const ExposureBar = memo<ExposureBarProps>(function ExposureBar({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.bar}>
      {Object.values(data).map((item, i) => (
        <div
          key={item.key}
          style={{
            backgroundColor: COLORS[i],
            width: formatPercent(item.percentage, 2, '0%'),
          }}
          className={classes.barItem}
        />
      ))}
    </div>
  );
});
