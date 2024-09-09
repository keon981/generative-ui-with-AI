
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { formatCurrency } from '@/lib/utils'
import React from 'react'

type Props = {
  invoiceList: Invoice[]
}

const statusColorMap = new Map([
  ["Overdue", "text-red-500"],
  ["Pending", "text-orange-300"],
]);

const TableComponent = ({ invoiceList }: Props) => {
  return (
    <div>
      <h3 className='font-bold text-xl text-[#071952]'>Invoices</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Invioce</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoiceList.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className='font-medium'>INV00{invoice.id}</TableCell>
              <TableCell className={`${statusColorMap.get(invoice.status) || 'text-blue-400'}`}>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className='text-right'>{formatCurrency(invoice.amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableComponent