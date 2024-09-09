import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import React from 'react'


interface Props {
  invoiceLength: number;
  todoLength: number;
  totalCustomers: number;
  totalSales: number;
}

const CardComponent = ({ invoiceLength, todoLength, totalCustomers, totalSales }: Props) => {
  const cardList = [{
    description: 'Tool Sales',
    titleColor: 'text-[#009fbd]',
    title: `${formatCurrency(totalSales)}`,
  }, {
    description: 'Number of Customers',
    titleColor: 'text-[#E88D67]',
    title: `${totalCustomers}`,
  }, {
    description: 'Pending Tasks',
    titleColor: 'text-[#D71313]',
    title: `${todoLength}`,
  }, {
    description: 'Number of Invoices',
    titleColor: 'text-[#088395]',
    title: `${invoiceLength}`,
  }]

  return (
    <div className='md:space-y-4'>
      <div className="w-full flex flex-row flex-wrap gap-3 items-center">
        {cardList.map((card) => (
          <Card key={card.description} className="md:w-[calc(50%-16px)] w-full flex flex-col items-center justify-center">
            <CardHeader>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h2 className={`text-2xl font-bold ${card.titleColor}`} >{card.title}</h2>
            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  )
}

export default CardComponent