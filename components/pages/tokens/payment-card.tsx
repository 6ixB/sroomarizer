"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Wallet } from "lucide-react";
import { useState } from "react";

export function PaymentCard() {
  const [amount, setAmount] = useState<number>();
  const [status, setStatus] = useState<number>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) && value.trim() !== "") {
      setAmount(Number(value));
      setStatus(0);
    } else {
      setAmount(undefined);
      setStatus(1);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Top Up Your Token 🪙</CardTitle>
        <CardDescription>
          Enjoy our services by topping up your balance. Enter the amount
          you&apos;d like to add.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 pb-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Desired Amount</Label>
              <Input
                id="amount"
                placeholder="Input your desired amount of token 🪙"
                value={amount}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              {status == 1 && (
                <CardDescription className="text-red-400">
                  Inputted value must be numeric !
                </CardDescription>
              )}
              <CardDescription>
                Get more value with every purchase! For every 50 tokens you buy,
                you&apos;ll receive 5 bonus tokens for free.
              </CardDescription>
            </div>
          </div>
        </form>
        <div className="grid w-full items-center gap-4 pb-4">
          {amount && amount > 0 && (
            <Alert>
              <Wallet className="h-4 w-4" />
              <AlertTitle>Total Purchase</AlertTitle>
              <AlertDescription>
                Your total is Rp {amount * 10000}
              </AlertDescription>
            </Alert>
          )}
        </div>
        <hr />
        <div className="grid w-full items-center gap-2 pb-4 pt-4">
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            Choose a payment method for your transaction.
          </CardDescription>
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
              <CardDescription />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between" />
    </Card>
  );
}
