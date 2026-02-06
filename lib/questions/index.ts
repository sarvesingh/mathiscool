import { mentalMathQuestions } from "./mentalMath";
import { individualQuestions } from "./individual";
import { teamMCQuestions } from "./teamMC";
import { teamQuestions } from "./team";
import { tripleJumpQuestions } from "./tripleJump";
import { collegeBowlQuestions } from "./collegeBowl";
import { Question } from "../types";

export const questions: Question[] = [
  ...mentalMathQuestions,
  ...individualQuestions,
  ...teamMCQuestions,
  ...teamQuestions,
  ...tripleJumpQuestions,
  ...collegeBowlQuestions,
];
