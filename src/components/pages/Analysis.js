import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import campaignData from "./data-files/campaign-matrix.json";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const columns = [
  { field: 'classification_name', headerName: 'Classification Name', width: 210 },
  { field: 'number_of_offers', headerName: 'Number of Offers', width: 210 },
  { field: 'total_incremental_sales', headerName: 'Total Incremental Sales', width: 210 },
  {
    field: 'total_incremental_margin',
    headerName: 'Total Incremental Margin',
    width: 210,
  },
  {
    field: 'classification',
    headerName: 'Classification',
    width: 210,
  }
];

export default function Analysis() {
  return (
    <div style={{ textAlign: "center" }} className='component-routes'>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={campaignData}
        columns={columns}
      />
      </div>
      <div>
        <BarChart width={730} height={250} data={campaignData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="classification_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="number_of_offers" fill="purple" />
          <Bar dataKey="total_incremental_sales" fill="green" />
          <Bar dataKey="total_incremental_margin" fill="blue" />
          <Bar dataKey="classification" fill="red" />
        </BarChart>
      </div>
    </div>
  );
}
