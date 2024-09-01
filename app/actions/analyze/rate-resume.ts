"use server";

import { AnalyzeResultFeatures } from "@/lib/data/analyze/analyze-data";

interface RateResumeProps {
  jobText: string[];
  resumeText: string[];
}

export default async function rateResumeAction({
  jobText,
  resumeText,
}: RateResumeProps) {
  const URL = process.env.AI_MODEL_URL + "/rate";

  try {
    const response = await fetch(URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        job_description_text: jobText,
        resume_text: resumeText,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const jobFeatures: AnalyzeResultFeatures = data[0];
    const resumeFeatures: AnalyzeResultFeatures = data[1];    

    console.log('Job features: ', jobFeatures);
    console.log('Resume features: ', resumeFeatures);


    return data;
  } catch (err) {
    console.log(err);
  }
}
