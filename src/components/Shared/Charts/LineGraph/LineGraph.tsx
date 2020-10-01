import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { IColors } from '../../../../types/styled';
import { LineChart, Line, YAxis } from 'recharts';

interface IProps {
  lineColor: keyof IColors;
}

const LineGraph: FC<IProps> = ({ lineColor }) => {
  const { colors } = useTheme();
  const data = [
    { uv: 400 },
    { uv: 200 },
    { uv: 300 },
    { uv: 100 },
    { uv: 330 },
    { uv: 150 },
    { uv: 380 },
  ];
  return (
    <LineChart
      data={data}
      width={346}
      height={138}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line dot={false} type="monotone" dataKey="uv" stroke={colors[lineColor]} strokeWidth={5} />
      <YAxis tick={false} orientation="right" />
    </LineChart>
  );
};

export default LineGraph;
