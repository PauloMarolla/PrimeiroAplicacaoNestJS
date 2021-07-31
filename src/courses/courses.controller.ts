import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  index() {
    return ['Matematica', 'Portugues', 'Artes'];
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return `Curso ${id}`;
  }

  @Post()
  store(@Body('name') body) {
    return body;
  }
}
