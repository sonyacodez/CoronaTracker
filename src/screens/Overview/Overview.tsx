import React, { FC } from 'react';
import * as S from './Overview.style';
import { useTranslation } from 'react-i18next';
import StatMiniCard from '../../components/StatMiniCard/StatMiniCard';

const Overview: FC = () => {
  const { t } = useTranslation();

  return (
    <S.CardWrapper>
      <StatMiniCard
        title={t('statMiniCards.active.title')}
        previousNumOfActiveCases={169793}
        currentNumOfActiveCases={123000}
      />
      <StatMiniCard
        title={t('statMiniCards.death.title')}
        currentNumOfActiveCases={169793}
        previousNumOfActiveCases={123000}
      />
      <StatMiniCard
        title={t('statMiniCards.recovered.title')}
        currentNumOfActiveCases={169793}
        previousNumOfActiveCases={123000}
      />
    </S.CardWrapper>
  );
};

export default Overview;
