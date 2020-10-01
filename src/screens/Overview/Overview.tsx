import React, { FC } from 'react';
import * as S from './Overview.style';
import { useTranslation } from 'react-i18next';
import StatMiniCard from '../../components/StatMiniCard/StatMiniCard';

const Overview: FC = () => {
  const { t } = useTranslation();

  return (
    <S.CardWrapper>
      <StatMiniCard
        currentNumOfCases={123000}
        previousNumOfCases={169793}
        title={t('statMiniCards.active.title')}
      />
      <StatMiniCard
        currentNumOfCases={169793}
        previousNumOfCases={123000}
        title={t('statMiniCards.death.title')}
      />
      <StatMiniCard
        currentNumOfCases={169793}
        previousNumOfCases={123000}
        title={t('statMiniCards.recovered.title')}
      />
    </S.CardWrapper>
  );
};

export default Overview;
