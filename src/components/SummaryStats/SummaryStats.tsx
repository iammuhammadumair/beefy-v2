import { makeStyles } from '@material-ui/core';
import React, { memo } from 'react';
import { styles } from './styles';

const useStyles = makeStyles(styles);

interface SummaryStatProps {
  title: string;
  Icon: React.FC;
  value: string;
  color: string;
}

const SummaryStat = memo<SummaryStatProps>(function SummaryStat({ title, Icon, value, color }) {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ backgroundColor: color }}>
      <div className={classes.contentContainer}>
        <div className={classes.title}>{title}</div>
        <div className={classes.value}>{value}</div>
      </div>
      <div className={classes.imageContainer}>
        <div className={classes.iconContainer}>
          <Icon />
        </div>
      </div>
    </div>
  );
});

interface SummaryStatsProps {
  items: SummaryStatProps[];
}

export const SummaryStats = memo<SummaryStatsProps>(function SummaryStats({ items }) {
  const classes = useStyles();

  return (
    <div className={classes.summaryContainer}>
      {items.map(item => (
        <SummaryStat
          key={item.title}
          title={item.title}
          value={item.value}
          Icon={item.Icon}
          color={item.color}
        />
      ))}
    </div>
  );
});
