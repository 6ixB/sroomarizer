import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request, res: NextApiResponse) {
    const input = await req.json();

    try {
      const result = await prisma.$transaction(async (tx: any) => {
        const analysis = await tx.analysis.create({
          data: {
            userId: input.userId,
            date: new Date(),
            educationTarget: input.educationTarget,
            gpaTarget: input.gpaTarget,
            jobTarget: input.jobTarget,
            yearsTarget: input.yearsTarget,
            experienceTarget: input.experienceTarget,
            skillTarget: input.skillTarget,
            softSkillTarget: input.softSkillTarget,
            languageTarget: input.languageTarget,
            cvs: {
              create: input.cvs.map((cv: any) => ({
                fileName: cv.fileName,
                fileURL: cv.fileURL,
                educationRating: cv.educationRating,
                gpaRating: cv.gpaRating,
                jobRating: cv.jobRating,
                yearsRating: cv.yearsRating,
                experienceRating: cv.experienceRating,
                skillRating: cv.skillRating,
                softSkillRating: cv.softSkillRating,
                languageRating: cv.languageRating,
              })),
            },
          },
          include: {
            cvs: true,
          },
        });

        return analysis;
      });

      return NextResponse.json(result, { status: 200 });
    } catch (error) {
      console.error('Error creating analysis with CVs:', error);
      return NextResponse.json({ error: 'Failed to create analysis' }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
}
