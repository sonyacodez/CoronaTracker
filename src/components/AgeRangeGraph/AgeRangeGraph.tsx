import React, { FC } from 'react';
import * as S from './AgeRangeGraph.style';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import CustomText from '../Shared/CustomText/CustomText';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface IProps {}

const AgeRangeGraph: FC<IProps> = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const legendKeyMapper: { [text: string]: string } = {
    [t('caseStatuses.active')]: colors.teal,
    [t('caseStatuses.death')]: colors.red,
    [t('caseStatuses.recovered')]: colors.green1,
  };

  const data = [
    {
      name: '0 - 10',
      [t('caseStatuses.active')]: 4000,
      [t('caseStatuses.death')]: 2400,
      [t('caseStatuses.recovered')]: 2000,
    },
    {
      name: '10 - 19',
      [t('caseStatuses.active')]: 3000,
      [t('caseStatuses.death')]: 1398,
      [t('caseStatuses.recovered')]: 2210,
    },
    {
      name: '20 - 29',
      [t('caseStatuses.active')]: 2000,
      [t('caseStatuses.death')]: 9800,
      [t('caseStatuses.recovered')]: 2290,
    },
    {
      name: '30 - 39',
      [t('caseStatuses.active')]: 2780,
      [t('caseStatuses.death')]: 3908,
      [t('caseStatuses.recovered')]: 2000,
    },
    {
      name: '40 - 49',
      [t('caseStatuses.active')]: 1890,
      [t('caseStatuses.death')]: 4800,
      [t('caseStatuses.recovered')]: 2181,
    },
    {
      name: '50 - 59',
      [t('caseStatuses.active')]: 2390,
      [t('caseStatuses.death')]: 3800,
      [t('caseStatuses.recovered')]: 2500,
    },
    {
      name: '60 - 69',
      [t('caseStatuses.active')]: 3490,
      [t('caseStatuses.death')]: 4300,
      [t('caseStatuses.recovered')]: 2100,
    },
    {
      name: '70 - 79',
      [t('caseStatuses.active')]: 3490,
      [t('caseStatuses.death')]: 4300,
      [t('caseStatuses.recovered')]: 2100,
    },
    {
      name: '80+',
      [t('caseStatuses.active')]: 3490,
      [t('caseStatuses.death')]: 4300,
      [t('caseStatuses.recovered')]: 2100,
    },
  ];

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
      <BarChart
        data={data}
        width={500}
        height={680}
        layout="vertical"
        margin={{ top: 5, right: 20, left: 5, bottom: 5 }}
      >
        <XAxis type="number" tick={{ fill: colors.black }} stroke={colors.white} />
        <YAxis dataKey="name" type="category" tick={{ fill: colors.black }} stroke={colors.white} />
        <Tooltip />
        {Object.entries(legendKeyMapper).map(([text, color]) => (
          <Bar dataKey={text} fill={color} />
        ))}
      </BarChart>
    </S.Container>
  );
};

export default AgeRangeGraph;
