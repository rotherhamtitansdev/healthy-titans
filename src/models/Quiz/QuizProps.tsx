import { QuestionProps } from "./QuestionProps";

export interface QuizProps {
  name: string;
  description: string;
  img: string;
  questions: QuestionProps[];
}
