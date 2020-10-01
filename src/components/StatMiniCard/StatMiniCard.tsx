import React, { FC } from 'react';
import * as S from './StatMiniCard.style';
import CustomText from '../Shared/CustomText/CustomText';

interface IProps {
  title: string;
  currentNumOfActiveCases: number;
  previousNumOfActiveCases: number;
}

const StatMiniCard: FC<IProps> = ({ title, currentNumOfActiveCases, previousNumOfActiveCases }) => {
  const percentChange = Math.round(
    ((currentNumOfActiveCases - previousNumOfActiveCases) / previousNumOfActiveCases) * 100
  );
  return (
    <S.Container>
      <CustomText size="s20" text={title} />
      <CustomText size="s32" color="teal" text={`${currentNumOfActiveCases}`} />
      <S.PercentageContainer>
        <CustomText size="s14" text={`${Math.abs(percentChange)}%`} />
        <S.Arrow
          aria-hidden="true"
          className="fa fa-arrow-down"
          hasIncreased={!!(percentChange > 0 && percentChange)}
        />
      </S.PercentageContainer>
    </S.Container>
  );
};

export default StatMiniCard;
