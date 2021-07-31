import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      description: 'Essa é a primeira descricao de um curso',
      name: 'Fundamentos do primeiro curso',
      tags: ['Educacao', 'TI', 'Tecnologia', 'NodeJS', 'NestJS']
    }
  ];

  index() {
    return this.courses;
  }

  show(id: string) {
    this.courses.find(course => course.id === Number(id));
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(course => course.id === Number(id));

    this.courses[indexCourse] = updateCourseDto;
  }

  delete(id: string) {
    const indexCourse = this.courses.findIndex(course => course.id === Number(id));

    if(indexCourse  >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
