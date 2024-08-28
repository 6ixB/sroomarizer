"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { labels } from "@/lib/data/data";
import { exampleDataSchema } from "@/lib/data/example-data-schema";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const payment_object = exampleDataSchema.parse(row.original);
  const invoice_id = payment_object.invoice_id;

  return (
      <Link href={`/detail/${invoice_id}`}>
        <Button
            variant="ghost"
            className="flex h-auto w-auto p-2 data-[state=open]:bg-muted border">
            <span>Payment</span>
        </Button>
      </Link>
  );
}
