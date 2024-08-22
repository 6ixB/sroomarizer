import { PaymentCard } from "@/components/pages/transaction/payment-card";

export default function TokensPage(){
    return(
        <main className="flex flex-col max-h-screen items-center gap-8 p-16">
            <PaymentCard/>
        </main>
    )
}