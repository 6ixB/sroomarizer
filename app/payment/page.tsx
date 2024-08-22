import { PaymentCard } from "@/components/pages/transaction/payment-card";
import { Input } from "@/components/ui/input";
import { FileWarningIcon, Search, WalletCards } from "lucide-react";
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { DatePickerWithRange } from "@/components/forms/ranged-datepicker";
import { ComboboxPopover } from "@/components/forms/combobox";
import { Table } from "@/components/ui/table";
import { TransactionTable } from "@/components/pages/transaction/transaction-table";

export default function PaymentPage(){
    return(
        <main className="flex flex-col max-h-screen items-center gap-8 p-16">
            <div className="flex px-32 w-screen justify-between items-end">
                <div className="flex flex-col gap-2">
                    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">Payment History</h2>
                    <div className="flex gap-2 leading-7 [&:not(:first-child)]:mt-2"><WalletCards/> View your payment History</div>
                </div>
                <div className="w-1/4">
                    <Input placeholder=" 🔍 Invoice No. or ID" id="search"/>
                </div>
            </div>
            <div className="flex px-32 w-screen justify-left gap-16">
                <div className="flex flex-col gap-2">
                    <p>Filter Date</p>
                    <div className="flex h-full">
                        <DatePickerWithRange/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Status</p>
                    <div className="flex h-full">
                        <ComboboxPopover/>
                    </div>
                </div>
            </div>
            <div className="flex px-32 w-screen">
                <TransactionTable/>
            </div>
        </main>
    )
}