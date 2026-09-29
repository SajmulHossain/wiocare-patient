import type { IReportAnalysis } from "./report-analysis.type";

export interface IDetectedCondition {
  id: string;
  analysisId: string;
  category: string;
  subCategory: string;
  condition: string;
  value: string;
  unit: string | null;
  analysis: IReportAnalysis;
}
