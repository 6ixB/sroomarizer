import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import {
  AnalyzeFileData,
  AnalyzeResultFeatures,
  AnalyzeResultFeaturesMapping,
  RatingDetails,
} from "@/lib/data/analyze/analyze-data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnalyzeResultResume {
  resumeData: AnalyzeFileData[];
  resumeFeatures: AnalyzeResultFeatures[];
}

export default function AnalyzeResultResume({
  resumeData,
  resumeFeatures,
}: AnalyzeResultResume) {
  return (
    <>
      {resumeFeatures.length > 0 ? (
        <Accordion type="multiple">
          {resumeFeatures.map((resume, idx) => (
            <AccordionItem value={`resume-${idx}`}>
              <AccordionTrigger>
                <DisplayResumeRating
                  key={idx}
                  fileName={resumeData[resume.resume_idx].fileName}
                  rating={resume.rating ?? 0}
                />
              </AccordionTrigger>
              <AccordionContent>
                {resume.rating_details && (
                  <DisplayResumeRatingDetails
                    ratingDetails={resume.rating_details!}
                  />
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div>
          <DisplayResumeRating
            fileName={"Test"}
            rating={resumeFeatures[0].rating ?? 0}
          />
          <DisplayResumeRatingDetails
            ratingDetails={resumeFeatures[0].rating_details!}
          />
        </div>
      )}
    </>
  );
}

interface DisplayResumeRatingProps {
  fileName: string;
  rating: number;
}

function DisplayResumeRating({ fileName, rating }: DisplayResumeRatingProps) {
  return (
    <div className="flex w-full flex-row justify-between px-4 text-lg font-bold">
      <span>{fileName}</span>
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {(rating * 100).toFixed(2)}%
      </motion.div>
    </div>
  );
}

interface DisplayResumeRatingDetailsProps {
  ratingDetails: RatingDetails;
}

function DisplayResumeRatingDetails({
  ratingDetails,
}: DisplayResumeRatingDetailsProps) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="flex h-full w-full flex-col gap-y-4 px-8 py-4">
      {Object.entries(ratingDetails).map(([key, value]) => (
        <div className="flex flex-col gap-y-2">
          <div className="flex w-full flex-row justify-between">
            <h3 className="font-semibold">
              {AnalyzeResultFeaturesMapping[key] ?? key}
            </h3>
            {(value * 100).toFixed(2)}%
          </div>
          <Progress value={inView ? value * 100 : 0} />
        </div>
      ))}
    </div>
  );
}
