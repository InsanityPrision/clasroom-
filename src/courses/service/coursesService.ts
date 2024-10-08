import { showErrorModal } from "../../dom/index.js";
import { courses } from "../../index.js";
import { Course } from "../../types";
import { generateId } from "../../utils.js";
import { CourseOptions } from "../../types";

// Crea una función para obtener el total de cursos
// La función debe recibir un array de cursos y devolver el total de cursos
export const getCoursesTotal = (courses: Course[]): number => {
  return courses.length;
};

// Crea una función para añadir un curso a la lista de cursos
// La función debe recibir un array de cursos y el nombre del curso a añadir
// Si el curso ya existe en la lista, muestra un error con showErrorModal
export const addCourse = (
  courses: Course[],
  newCourseName: Course["name"]
): void => {
  const newCourse: Course = {
    id: generateId(courses),
    name: newCourseName,
  };
  courses.push(newCourse);
};

// Crea una función para eliminar un curso de la lista de cursos
// La función debe recibir un array de cursos y el id del curso a eliminar
export const deleteCourse = (courses: Course[], courseId: number): void => {
  for (let position = 0; position < courses.length; position++) {
    if (courses[position].id === courseId) {
      courses.splice(position, 1);
    }
  }
};

// Crea una función para obtener las opciones de cursos para rellenar un select
// La función debe recibir un array de cursos
// La función debe devolver un array de objetos con dos propiedades: id y name
// La propiedad id debe ser el id del curso
// La propiedad name debe ser el nombre del curso
export const getCoursesOptions = (courses: Course[]): Array<CourseOptions> => {
  let coursesOptions: CourseOptions[] = [];
  for (let position = 0; position < courses.length; position++) {
    let courseOptions: CourseOptions = {
      id: courses[position].id,
      name: courses[position].name,
    };
    coursesOptions.push(courseOptions);
  }
  return coursesOptions;
};
