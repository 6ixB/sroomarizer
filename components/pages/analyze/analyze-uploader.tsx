"use client";

import { useUploadFile } from "@/hooks/use-upload-file";
import { FileUploader } from "@/components/pages/analyze/file-uploader";

import { UploadedFilesCard } from "./uploaded-files-card";
import { ResumeUploader } from "./resume-uploader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import rateResumeAction from "@/app/actions/analyze/rate-resume";
import { analyzeSchema } from "@/lib/data/analyze/analyze-schema";
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/handle-error";
import AnalyzeResult from "./analyze-result";
import { AnalyzeFileData } from "@/lib/data/analyze/analyze-data";
import { Notebook } from "lucide-react";
import { JobDescriptionUploader } from "./job-description-uploader";

export function AnalyzerUploader() {
  const [jobText, setJobText] = useState<string>("");
  const [resumeData, setResumeData] = useState<AnalyzeFileData[]>([]);
  const [analyzeResults, setAnalyzeResults] = useState<any>(null);

  const handleJobText = (text: string) => {
    setJobText(text);
  };

  const handleResumeData = (resumeData: AnalyzeFileData[]) => {
    setResumeData(resumeData);
  };

  const resetAnalyze = () => {
    setAnalyzeResults(null);
  };

  const rateResume = async () => {
    const resumeText = resumeData.map((resume) => resume.text);

    try {
      analyzeSchema.parse({
        jobText: [jobText],
        resumeText: resumeText,
      });
    } catch (err) {
      return toast.error(getErrorMessage(err));
    }

    const data = await rateResumeAction({
      jobText: [jobText],
      resumeText: resumeText,
    });

    // Prevent increased memory usage because large amount of text
    const noTextResumeData: AnalyzeFileData[] = resumeData.map((file) => ({
      fileName: file.fileName,
      url: file.url,
      text: '', 
    }));

    setResumeData(noTextResumeData)

    setAnalyzeResults(data);
  };

  return (
    <div className="space-y-6">
      {analyzeResults ? (
        <AnalyzeResult results={analyzeResults} resumeData={resumeData} resetAnalyze={resetAnalyze} />
      ) : (
        <>
          <JobDescriptionUploader jobText={jobText} handleJobText={handleJobText} />
          <ResumeUploader handleResumeData={handleResumeData} />
          <div className="flex h-full w-full items-center">
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger className="w-full" asChild>
                  <Button
                    variant={"default"}
                    size={"lg"}
                    className="mx-auto flex"
                    onClick={rateResume}
                  >
                    Analyze now
                  </Button>
                </TooltipTrigger>
                <TooltipContent side={"top"} className="bg-transparent">
                  <AnimatedGradientText>
                    <p>Use 1 token per resume file</p>
                  </AnimatedGradientText>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </>
      )}
    </div>
  );
}
