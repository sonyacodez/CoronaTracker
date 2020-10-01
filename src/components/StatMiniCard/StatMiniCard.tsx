import React, { FC } from 'react';
import * as S from './StatMiniCard.style';
import CustomText from '../Shared/CustomText/CustomText';
import LineGraph from '../Shared/Charts/LineGraph/LineGraph';

interface IStatMiniCard {
  title: string;
  currentNumOfCases: number;
  previousNumOfCases: number;
}

const StatMiniCard: FC<IStatMiniCard> = ({ title, currentNumOfCases, previousNumOfCases }) => {
  const percentChange = Math.round(
    ((currentNumOfCases - previousNumOfCases) / previousNumOfCases) * 100
  );
  return (
    <S.Container>
      <LineGraph lineColor="orange1" />
      <S.PercentageContainer>
        <CustomText size="s14" text={`${Math.abs(percentChange)}%`} />
        <S.Arrow
          aria-hidden="true"
          className="fa fa-arrow-down"
          hasIncreased={!!(percentChange > 0 && percentChange)}
        />
      </S.PercentageContainer>
      <CustomText size="s32" color="teal" text={`${currentNumOfCases}`} />
      <CustomText size="s20" text={title} />
    </S.Container>
  );
};

export default StatMiniCard;
