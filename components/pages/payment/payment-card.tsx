import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export function PaymentCard() {
    return(
        <Card className="w-[350px]">
            <CardHeader>
            <CardTitle>Top Up Your Token 🪙</CardTitle>
            <CardDescription>Enjoy our services by topping up your balance. Enter the amount you'd like to add.</CardDescription>
            </CardHeader>
            <CardContent>
            <form>
                <div className="grid w-full items-center gap-4 pb-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="amount">Desired Amount</Label>
                    <Input id="amount" placeholder="Input your desired amount of token 🪙" />
                </div>
                <div className="flex flex-col space-y-1.5">
                <CardDescription>Get more value with every purchase! For every 50 tokens you buy, you'll receive 5 bonus tokens for free.</CardDescription>
                </div>
                </div>
            </form>
            <hr/>
            <div className="grid w-full items-center gap-2 pt-4 pb-4">
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose a payment method for your transaction.</CardDescription>
            </div>
            <form>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>BCA Virtual Account</AccordionTrigger>
                            <AccordionContent>
                            <div className="grid w-full items-center gap-4">
                                Testing (harusnya ini nnti diisi cara2nya)
                                <Button>Continue</Button>
                            </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>QRIS</AccordionTrigger>
                            <AccordionContent>
                            <div className="grid w-full items-center gap-4">
                                Testing (harusnya ini nnti diisi cara2nya)
                                <Button>Continue</Button>
                            </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Bank</AccordionTrigger>
                            <AccordionContent>
                            <div className="grid w-full items-center gap-4">
                                Testing (harusnya ini nnti diisi cara2nya)
                                <Button>Continue</Button>
                            </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="flex flex-col space-y-1.5">
                <CardDescription/>
                </div>
                </div>
            </form>
            </CardContent>
            <CardFooter className="flex justify-between"/>
        </Card>
    )
}