import { showErrorModal } from "../../dom/index.js";
import { students } from "../../index.js";
import { Student } from "../../types.js";
import { generateId } from "../../utils.js";

// Crea una función para obtener el total de estudiantes
// La función debe recibir un array de estudiantes y devolver el total de estudiantes
export const getStudentsTotal = (): number => {
  return students.length;
};

// Crea una función para añadir un estudiante a la lista de estudiantes
// La función debe recibir un array de estudiantes y los datos del estudiante a añadir
// Si el estudiante ya existe en la lista, muestra un error con showErrorModal
export const addStudent = (
  students: Student[],
  studentName: Student["name"],
  studentSurname: Student["lastName"],
  studentAge: Student["age"],
  studentEmail: Student["email"],
  studentPhone: Student["phoneNumber"]
): void => {
  let newStudent: Student = {
    id: generateId(students),
    name: studentName,
    lastName: studentSurname,
    age: studentAge,
    email: studentEmail,
    phoneNumber: studentPhone,
  };
  for (let position = 0; position < students.length; position++) {
    if (students[position].email === newStudent.email) {
      showErrorModal("El estudiante ya esta en la lista");
      break;
    } else {
      students.push(newStudent);
      break;
    }
  }
};

// Crea una función para eliminar un estudiante de la lista de estudiantes
// La función debe recibir un array de estudiantes y el id del estudiante a eliminar
export const deleteStudent = (students: Student[], studentId: number): void => {
  for (let position = 0; position < students.length; position++) {
    if (students[position].id === studentId) {
      students.splice(position, 1);
    }
  }
};

// Crea una función para obtener las opciones de estudiantes para rellenar un select
// La función debe recibir un array de estudiantes
// La función debe devolver un array de objetos con tres propiedades: id, name y lastName
// La propiedad id debe ser el id del estudiante
// La propiedad name debe ser el nombre del estudiante
// La propiedad lastName debe ser el apellido del estudiante
// export const getStudentsOptions =

// Crea una función para obtener el nombre completo de un estudiante por su id
// La función debe recibir un array de estudiantes y el id del estudiante
// export const getStudentNameById =
