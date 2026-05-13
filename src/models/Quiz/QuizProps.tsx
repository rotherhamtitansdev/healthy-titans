import { QuestionProps } from "./QuestionProps";

export interface QuizProps {
  id?: string;
  title?: string;
  description?: string;
  name: string;
  questions: QuestionProps[];
}
