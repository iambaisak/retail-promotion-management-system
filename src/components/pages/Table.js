import React from 'react';
import detailedData from './data-files/detailed-data-table.json';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'promo_id', headerName: 'Promo ID', width: 150 },
    { field: 'product_id', headerName: 'Product ID', width: 150 },
    { field: 'start_date', headerName: 'Start Date', width: 150 },
    {
      field: 'end_date',
      headerName: 'End Date',
      width: 150,
    },
    {
      field: 'retailer_id',
      headerName: 'Retailer ID',
      width: 150,
    },
    {
      field: 'promo_spend',
      headerName: 'Promo Spend',
      width: 150,
    }
  ]

export default function Table() {
  return <div className='component-routes'>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid getRowId={row => row.promo_id}
        rows={detailedData.promo_events}
        columns={columns}
      />
    </div>
  </div>;
}
