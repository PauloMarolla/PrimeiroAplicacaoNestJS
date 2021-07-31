import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {

  }
  @Get()
  index(@Res() response) {
    return response.status(200).send(['Matematica', 'Portugues', 'Artes']);
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return `Curso ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  store(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualização do Curso ${id}`
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Curso ${id} deletado`;
  }
}
