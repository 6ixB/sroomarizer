import { ContentLayout } from "@/components/base/protected/content-layout";
import { auth } from "@clerk/nextjs/server";

export default function AnalysisHistoryPage() {
  const { userId } = auth();

  return (
    <ContentLayout title="History">
      <div></div>
    </ContentLayout>
  );
}
