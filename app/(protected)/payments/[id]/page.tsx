'use client'

import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

import { ContentLayout } from "@/components/base/protected/content-layout";
import { columns } from "@/components/pages/payment/columns";
import { DataTable } from "@/components/pages/payment/data-table";
import { taskSchema } from "@/lib/data/schema";
import { exampleDataSchema } from "@/lib/data/example-data-schema";
import { useParams } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import Image from 'next/image';
export default function PaymentPage() {
  const { id } = useParams();

  return (
    <ContentLayout title="Payment Detail">
      <div className="flex h-full flex-1 flex-col space-y-8 p-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Payment Detail {id}
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s the details of your payment.
            </p>
          </div>
        </div>
        <div className="flex w-full">
            <div className="flex flex-col gap-8 items-center">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Token Amount</TableHead>
                    <TableHead>Amount Purchase</TableHead>
                    <TableHead>Payment Status</TableHead>
                    <TableHead className="text-right">Payment Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Aug 24th, 2024</TableCell>
                    <TableCell>25</TableCell>
                    <TableCell>Rp. 250.75,00</TableCell>
                    <TableCell>Unpaid</TableCell>
                    <TableCell className="text-right">Credit Card</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Card>
                <CardHeader>
                  <CardTitle>
                    Payment QR
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image src="/tree.jpg" alt="Payment QR" width={500} height={300} />
                </CardContent>
              </Card>
            </div>      
        </div>
      </div>
    </ContentLayout>
  );
}
