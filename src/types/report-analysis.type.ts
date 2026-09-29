import type { IDetectedCondition } from "./detected-condition.type";
import type { IReport } from "./report.type";

export interface IReportAnalysis {
  id: string;
  patientName: string | null;
  doctorName: string | null;
  reportDate: string | null;
  reportId: string;
  report: IReport;
  finalSummary: unknown;
  overallInterpretation: unknown;
  majorIssues: unknown;
  minorIssues: unknown;
  termExplanations: unknown;
  sources: unknown;
  dietarySuggestions: unknown;
  detectedConditions: IDetectedCondition[];
  createdAt: string;
  updatedAt: string;
}
