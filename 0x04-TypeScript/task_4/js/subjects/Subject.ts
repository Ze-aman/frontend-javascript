/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher!: Teacher;

    /* Setter method for teacher */
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
