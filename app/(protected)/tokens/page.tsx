import { ContentLayout } from "@/components/base/protected/content-layout";
import { PaymentCard } from "@/components/pages/tokens/payment-card";

export default function TokensPage() {
  return (
    <ContentLayout title="Tokens">
      <div className="flex h-full justify-center items-center">
        <PaymentCard />
      </div>
    </ContentLayout>
  );
}
