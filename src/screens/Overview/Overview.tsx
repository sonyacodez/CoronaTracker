import React, { FC } from 'react';
import * as S from './Overview.style';
import { useTranslation } from 'react-i18next';
import StatMiniCard from '../../components/StatMiniCard/StatMiniCard';
import AgeRangeGraph from '../../components/AgeRangeGraph/AgeRangeGraph';

const Overview: FC = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.CardWrapper>
        <StatMiniCard
          currentNumOfCases={123000}
          previousNumOfCases={169793}
          title={t('caseStatuses.active')}
        />
        <StatMiniCard
          currentNumOfCases={169793}
          previousNumOfCases={123000}
          title={t('caseStatuses.death')}
        />
        <StatMiniCard
          currentNumOfCases={169793}
          previousNumOfCases={123000}
          title={t('caseStatuses.recovered')}
        />
      </S.CardWrapper>
      <AgeRangeGraph />
    </S.Container>
  );
};

export default Overview;
