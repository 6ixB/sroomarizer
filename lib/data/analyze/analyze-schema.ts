import { z } from "zod";

export const analyzeSchema = z.object({
  jobText: z
    .array(z.string().min(1, "Fill in the job description"))
    .nonempty("Fill in the job description"),
  resumeText: z
    .array(z.string().min(1, "Resume cannot be empty"))
    .nonempty("Please upload the resumes"),
});
