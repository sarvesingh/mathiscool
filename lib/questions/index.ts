import { mentalMathQuestions } from "./mentalMath";
import { individualQuestions } from "./individual";
import { teamMCQuestions } from "./teamMC";
import { teamQuestions } from "./team";
import { tripleJumpQuestions } from "./tripleJump";
import { collegeBowlQuestions } from "./collegeBowl";
import { grade5Questions } from "./grade5";
import { grade6Questions } from "./grade6";
import { Question } from "../types";

export const questions: Question[] = [
  ...mentalMathQuestions,
  ...individualQuestions,
  ...teamMCQuestions,
  ...teamQuestions,
  ...tripleJumpQuestions,
  ...collegeBowlQuestions,
  ...grade5Questions,
  ...grade6Questions,
];
