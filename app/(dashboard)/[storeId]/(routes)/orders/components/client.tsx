'use client';

import { FC } from 'react';

import { DataTable } from '@/components/ui/data-table';
import Heading from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { OrderColumn, columns } from './columns';

interface OrderClientProps {
  data: OrderColumn[];
}
export const OrderClient: FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage Orders for your store"
      />

      <Separator />

      <DataTable columns={columns} data={data} searchKey="label" />
    </>
  );
};
