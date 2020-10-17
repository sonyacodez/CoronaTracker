import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { IColors } from '../../../../types/styled';
import { LineChart, Line, YAxis } from 'recharts';

interface IProps {
  graphData: { numOfCases: number }[];
  lineColor: keyof IColors;
}

const LineGraph: FC<IProps> = ({ lineColor, graphData }) => {
  const { colors } = useTheme();

  return (
    <LineChart
      width={346}
      height={138}
      data={graphData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line
        dot={false}
        type="monotone"
        strokeWidth={5}
        dataKey="numOfCases"
        stroke={colors[lineColor]}
      />
      <YAxis tick={false} orientation="right" />
    </LineChart>
  );
};

export default LineGraph;
