import React, { FC } from 'react';
import * as S from './AgeRangeGraph.style';
import { IColors } from '../../types/styled';
import { useTranslation } from 'react-i18next';
import CustomText from '../Shared/CustomText/CustomText';

interface IProps {}

const AgeRangeGraph: FC<IProps> = () => {
  const { t } = useTranslation();
  const legendKeyMapper: { [text: string]: keyof IColors } = {
    [t('caseStatuses.active')]: 'teal',
    [t('caseStatuses.recovered')]: 'green1',
    [t('caseStatuses.death')]: 'red'
  };

  return (
    <S.Container>
      <CustomText bold size="s18" text={t('ageRangeGraph.title')} />
      <div>
        {Object.entries(legendKeyMapper).map(([text, color]) => (
          <S.KeyContainer>
            <S.KeyColorSquare keyColor={color} />
            <CustomText size="s14" text={text} />
          </S.KeyContainer>
        ))}
      </div>
    </S.Container>
  );
};

export default AgeRangeGraph;
