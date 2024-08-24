import { ContentLayout } from "@/components/base/protected/content-layout";
import { Uploader } from "@/components/pages/analyze/uploader";

export default function AnalyzePage() {
  return (
    <ContentLayout title="Analyze">
      <Uploader />
    </ContentLayout>
  );
}
