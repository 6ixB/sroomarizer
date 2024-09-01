import { Icons } from "@/components/icons";
import { createEWalletPayment, createQrPayment } from "@/lib/actions";
import { Step } from "@stepperize/react";
import Link from "next/link";
import { Link as LinkIcon, ScanQrCode } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { PaymentRequest } from "xendit-node/payment_request/models";
import { Button } from "@/components/ui/button";

interface PaymentAwaitCardContentProps {
  step: Step;
  amount: number;
  paymentMethod: string;
  eWalletType: string;
}

export default function PaymentAwaitCardContent({
  step,
  amount,
  paymentMethod,
  eWalletType,
}: PaymentAwaitCardContentProps) {
  const [paymentResponse, setPaymentResponse] = useState<PaymentRequest | null>(
    null,
  );
  const payAmount = amount * 2500;
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [qrCodeImageUri, setQrCodeImageUri] = useState<string | null>(null);

  const createPayment = useCallback(async () => {
    try {
      if (paymentMethod === "qrCode") {
        const { response, qrCodeDataUrl } = await createQrPayment({
          amount: payAmount,
        });

        setPaymentResponse(response);
        setQrCodeImageUri(qrCodeDataUrl);
      } else {
        const { response, paymentUrl, qrCodeDataUrl } =
          await createEWalletPayment({ amount: payAmount, eWalletType });

        setPaymentResponse(response);
        setPaymentUrl(paymentUrl);
        setQrCodeImageUri(qrCodeDataUrl);
      }
    } catch (error: any) {
      console.log(JSON.stringify(error));
    }
  }, [paymentMethod, eWalletType, payAmount]);

  useEffect(() => {
    createPayment();
  }, [createPayment]);

  return (
    <div className="flex w-full items-center justify-center">
      {paymentMethod === "qrCode" ? (
        !paymentResponse || !qrCodeImageUri ? (
          <Icons.spinner className="size-6 animate-spin" />
        ) : (
          <div className="flex w-full flex-col justify-center gap-y-4">
            <div className="flex items-center gap-x-2 text-sm">
              <ScanQrCode />
              Scan the QR code to complete the payment
            </div>
            <Image
              className="h-full w-full rounded-md border-2"
              src={qrCodeImageUri}
              alt="Generated QR Code Payment"
              width={0}
              height={0}
            />
          </div>
        )
      ) : !paymentResponse || !paymentUrl || !qrCodeImageUri ? (
        <Icons.spinner className="size-6 animate-spin" />
      ) : (
        <div className="flex w-full flex-col justify-center gap-y-4">
          <div className="flex items-center gap-x-2 text-sm">
            <ScanQrCode />
            Scan the QR code to complete the payment
          </div>
          <Image
            className="h-full w-full rounded-md border-2"
            src={qrCodeImageUri}
            alt="Generated QR Code Payment"
            width={0}
            height={0}
          />
          <div className="flex w-full items-center justify-center gap-x-2 text-sm">
            or
          </div>
          <Link href={paymentUrl} rel="noopener noreferrer" target="_blank">
            <Button className="flex w-full items-center gap-x-2">
              <LinkIcon className="size-4" /> Follow this link to complete the
              payment
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
