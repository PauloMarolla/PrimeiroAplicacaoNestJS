import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const courses = this.courses.find(course => course.id === Number(id));

    if(!courses) {
      throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND) 
    }
  }

  create(createCourseDto: any) {
    return this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(course => course.id === Number(id));

    return this.courses[indexCourse] = updateCourseDto;
  }

  delete(id: string) {
    const indexCourse = this.courses.findIndex(course => course.id === Number(id));

    if(indexCourse  >= 0) {
      return this.courses.splice(indexCourse, 1);
    }
  }
}
