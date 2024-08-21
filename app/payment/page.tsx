import { PaymentCard } from "@/components/pages/payment/payment-card";

export default function PaymentPage(){
    return(
        <main className="flex flex-col max-h-screen items-center gap-8 p-16">
            <PaymentCard/>
        </main>
    )
}