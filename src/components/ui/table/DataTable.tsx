import React from 'react';
import MUIDataTable, {
  MUIDataTableOptions,
  MUIDataTableColumn
} from 'mui-datatables';

type DataTableProps<TData> = {
  title?: string;
  columns: MUIDataTableColumn[];
  data: TData[];
  options?: MUIDataTableOptions & {
    filterType?:
      | 'checkbox'
      | 'dropdown'
      | 'multiselect'
      | 'textField'
      | 'custom';
  };
};

const defaultOptions: MUIDataTableOptions = {
  filterType: 'dropdown',
  responsive: 'standard',
  selectableRows: 'none',
  elevation: 1,
  download: false,
  print: false
};

export function DataTable<TData>({
  title = '',
  columns,
  data,
  options
}: DataTableProps<TData>) {
  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <MUIDataTable
      title={title}
      data={data as any[][]} // Ensure proper type casting
      columns={columns}
      options={mergedOptions}
    />
  );
}
