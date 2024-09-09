'use client'

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#2563eb",
  },
  customers: {
    label: "Customers",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

type Props = {
  chartData: Chart[]
}

export default function ChartCopmonent({ chartData }: Props) {
  return (
    <ChartContainer config={chartConfig} className='min-h-[200px]'>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false}></CartesianGrid>
        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(tick) => tick.slice(0, 3)} />
        <YAxis axisLine={false} tickLine={false} tickMargin={10} tickCount={5} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
        <Bar dataKey="customers" fill="var(--color-customers)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}