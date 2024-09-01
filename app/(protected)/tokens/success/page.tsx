import { ContentLayout } from "@/components/base/protected/content-layout";
import PaymentResultCard from "@/components/pages/tokens/payment-result-card";

export default async function TokensSuccessPage() {
  return (
    <ContentLayout title="Tokens">
      <div className="flex h-full items-center justify-center">
        <PaymentResultCard />
      </div>
    </ContentLayout>
  );
}
