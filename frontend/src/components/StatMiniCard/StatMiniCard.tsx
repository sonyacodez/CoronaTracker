import React, { FC } from 'react';
import * as S from './StatMiniCard.style';
import CustomText from '../Shared/CustomText/CustomText';
import LineGraph from '../Shared/Charts/LineGraph/LineGraph';

interface IProps {
  title: string;
  currentNumOfCases: number;
  previousNumOfCases: number;
}

const StatMiniCard: FC<IProps> = ({ title, currentNumOfCases, previousNumOfCases }) => {
  const lineGraphData = [
    { numOfCases: 400 },
    { numOfCases: 200 },
    { numOfCases: 300 },
    { numOfCases: 100 },
    { numOfCases: 330 },
    { numOfCases: 150 },
    { numOfCases: 380 },
  ];
  
  const percentChange = Math.round(
    ((currentNumOfCases - previousNumOfCases) / previousNumOfCases) * 100
  );
  const hasIncreased = !!(percentChange > 0 && percentChange);

  return (
    <S.Container>
      <LineGraph graphData={lineGraphData} lineColor="orange1" />
      <S.PercentageContainer>
        <CustomText size="s14" text={`${Math.abs(percentChange)}%`} />
        <S.Arrow hasIncreased={hasIncreased} aria-hidden="true" className="fa fa-arrow-down" />
      </S.PercentageContainer>
      <CustomText bold size="s32" color="teal" text={`${currentNumOfCases}`} />
      <CustomText bold size="s18" text={title} />
    </S.Container>
  );
};

export default StatMiniCard;
