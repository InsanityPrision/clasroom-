import { courses, grades, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Course, Grade, Student } from "../../types";
import { generateId } from "../../utils.js";
import { StudentGrade } from "../../types";

// Crea una función para obtener el total de notas
// La función debe recibir un array de notas y devolver el total de notas
export const getGradesTotal = (grades: Grade[]): number => {
  let gradesValue = [];
  for (let position = 0; position < grades.length; position++) {
    gradesValue.push(grades[position].value);
  }
  const gradesReduced = gradesValue.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return gradesReduced;
};

// Crea una función para obtener los datos completos de una nota
// La función debe recibir una nota
// La función debe devolver un objeto con las mismas propiedades de la nota
// más las propiedades studentName, studentLastName y courseName
export const getGradeFullData = (grade: Grade): StudentGrade => {
  let studentName = "";
  let studentLastName = "";
  let courseName = "";
  for (let position = 0; position < students.length; position++) {
    if (students[position].id === grade.id) {
      studentName = students[position].name;
    } else if (students[position].id === grade.id) {
      studentLastName = students[position].lastName;
    }
  }
  for (let position = 0; position < students.length; position++) {
    if (courses[position].id === grade.courseId) {
      courseName = courses[position].name;
    }
  }

  const studentGrade: StudentGrade = {
    id: grade.id,
    studentId: grade.studentId,
    courseId: grade.courseId,
    value: grade.value,
    studentName: studentName,
    studentLastName: studentLastName,
    courseName: courseName,
  };
  return studentGrade;
};

// Crea una función para eliminar una nota de la lista de notas
// La función debe recibir un array de notas y el id de la nota a eliminar
// export const deleteGrade =

// Crea una función para crear una nueva nota
// La función debe recibir un array de notas, el id del estudiante, el id del curso y el valor de la nota
// Si la nota ya existe, muestra un error con showErrorModal
export const addGrade = (
  grades: Grade[],
  studentId: Student["id"],
  courseId: Course["id"],
  gradeValue: number
): void => {
  let newGrade: Grade = {
    id: generateId(grades),
    studentId: studentId,
    courseId: courseId,
    value: gradeValue,
  };
  for (let position = 0; position < grades.length; position++) {
    if (grades.length === 0) {
      grades.push(newGrade);
      break;
    }
    if (grades[position].studentId === newGrade.studentId) {
      showErrorModal("El estudiante ya tiene una nota!");
    } else {
      grades.push(newGrade);
    }
  }
};
