'use client';

import React, { FC } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
interface OverviewProps {
  data: any[];
}

const STROKE = '#888888';

const commonProps = {
  stroke: STROKE,
  fontSize: 12,
  tickLine: false,
  axisLine: false,
};

const Overview: FC<OverviewProps> = ({ data }) => {
  return (
    <ResponsiveContainer width={'100%'} height={350}>
      <BarChart data={data}>
        <XAxis {...commonProps} dataKey={'name'} />

        <YAxis {...commonProps} tickFormatter={(value) => `$${value}`} />

        <Bar dataKey={'total'} fill="#3498db" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Overview;
