import { mentalMathQuestions } from "./mentalMath";
import { individualQuestions } from "./individual";
import { teamMCQuestions } from "./teamMC";
import { teamQuestions } from "./team";
import { tripleJumpQuestions } from "./tripleJump";
import { collegeBowlQuestions } from "./collegeBowl";
import { grade5Questions } from "./grade5";
import { grade6Questions } from "./grade6";
import { mathcountsSchoolQuestions } from "./mathcountsSchool";
import { mathcountsChapterQuestions } from "./mathcountsChapter";
import { mathcountsStateQuestions } from "./mathcountsState";
import { grade910Questions } from "./grade910";
import { grade910MCQuestions } from "./grade910MC";
import { grade910TeamQuestions } from "./grade910Team";
import { grade910PressureQuestions } from "./grade910Pressure";
import { grade910CBQuestions } from "./grade910CB";
import { olympiad56Questions } from "./olympiad56";
import { olympiad78Questions } from "./olympiad78";
import { olympiad910Questions } from "./olympiad910";
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
  ...mathcountsSchoolQuestions,
  ...mathcountsChapterQuestions,
  ...mathcountsStateQuestions,
  ...grade910Questions,
  ...grade910MCQuestions,
  ...grade910TeamQuestions,
  ...grade910PressureQuestions,
  ...grade910CBQuestions,
  ...olympiad56Questions,
  ...olympiad78Questions,
  ...olympiad910Questions,
];
