import { courses, grades, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Course, Grade, Student } from "../../types";
import { generateId } from "../../utils.js";
import { StudentGrade } from "../../types";

// Crea una función para obtener el total de notas
// La función debe recibir un array de notas y devolver el total de notas
export const getGradesTotal = (gradess: Grade[]): number => {
  return grades.length;
};

// Crea una función para obtener los datos completos de una nota
// La función debe recibir una nota
// La función debe devolver un objeto con las mismas propiedades de la nota
// más las propiedades studentName, studentLastName y courseName
export const getGradeFullData = (grade: Grade): StudentGrade => {
  let studentFindNameAndLastName = students.find(
    (student) => student.id === grade.studentId
  );
  let courseFindName = courses.find((course) => course.id === grade.courseId);

  const studentGrade: StudentGrade = {
    id: grade.id,
    studentId: grade.studentId,
    courseId: grade.courseId,
    value: grade.value,
    studentName: studentFindNameAndLastName!.name,
    studentLastName: studentFindNameAndLastName!.lastName,
    courseName: courseFindName!.name,
  };
  return studentGrade;
};

// Crea una función para eliminar una nota de la lista de notas
// La función debe recibir un array de notas y el id de la nota a eliminar
export const deleteGrade = (grades: Grade[], gradeId: number): void => {
  for (let position = 0; position < grades.length; position++) {
    if (grades[position].id === gradeId) {
      grades.splice(position, 1);
    }
  }
};

// Crea una función para crear una nueva nota
// La función debe recibir un array de notas, el id del estudiante, el id del curso y el valor de la nota
// Si la nota ya existe, muestra un error con showErrorModal
export const addGrade = (
  grades: Grade[],
  studentId: number,
  courseId: number,
  gradeValue: number
): void => {
  let newGrade: Grade = {
    id: generateId(grades),
    studentId: studentId,
    courseId: courseId,
    value: gradeValue,
  };
  const isSameStudentId = grades.some(
    (grade) => grade.studentId === newGrade.studentId
  );
  const isDifferentCourseId = grades.some(
    (grade) => grade.courseId !== newGrade.courseId
  );
  if (isSameStudentId === true && isDifferentCourseId === true) {
    grades.push(newGrade);
  } else {
    showErrorModal("El estudiante ya tiene una nota");
  }
};
