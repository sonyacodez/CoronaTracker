import React, { FC } from 'react';
import * as S from './AgeRangeGraph.style';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import CustomText from '../Shared/CustomText/CustomText';

interface IProps {}

const AgeRangeGraph: FC<IProps> = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const legendKeyMapper: { [text: string]: string } = {
    [t('caseStatuses.active')]: colors.teal,
    [t('caseStatuses.death')]: colors.red,
    [t('caseStatuses.recovered')]: colors.green1
  };

  return (
    <S.Container>
      <CustomText bold size="s18" text={t('ageRangeGraph.title')} />
      <S.Legend>
        {Object.entries(legendKeyMapper).map(([text, color]) => (
          <S.KeyContainer>
            <S.KeyColorSquare keyColor={color} />
            <CustomText size="s14" text={text} />
          </S.KeyContainer>
        ))}
      </S.Legend>
    </S.Container>
  );
};

export default AgeRangeGraph;
