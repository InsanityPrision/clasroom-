import { courses, grades } from "../../index.js";
import { CourseStats } from "../../types";

// Crea una función para obtener las estadísticas de un curso
// La función debe recibir el id de un curso
// La función debe devolver un objeto de tipo CourseStats
export const getCourseStats = (courseId: number): CourseStats => {
  const sameCourse = grades.filter((grade) => grade.courseId === courseId);
  const yes = sameCourse.filter((grade) => grade.value >= 0);
  const studentsCount = grades.filter(
    (grade) => grade.courseId === courseId
  ).length;
  const passedCount = sameCourse.filter((grade) => grade.value >= 5).length;
  const passedCountPercentage = (passedCount * 100) / studentsCount;
  const failedCount = sameCourse.filter((grade) => grade.value < 5).length;
  const failedCountPercentage = (failedCount * 100) / studentsCount;
  const averageGrade =
    sameCourse
      .filter((grade) => grade.value >= 0)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue.value,
        0
      ) / studentsCount;
  const highestGrade = yes.reduce((previous, current) =>
    current.value > previous.value ? current : previous
  );
  const highestGradeStudentId = 2;

  let CourseStats: CourseStats = {
    courseId: courseId,
    studentsCount: studentsCount,
    passedCount: passedCount,
    passedCountPercentage: passedCountPercentage,
    failedCount: failedCount,
    failedCountPercentage: failedCountPercentage,
    averageGrade: averageGrade,
    highestGrade: highestGrade.value,
    highestGradeStudentId: highestGrade.studentId,
  };

  return CourseStats;
};
