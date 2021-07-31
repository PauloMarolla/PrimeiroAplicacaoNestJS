import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCoursesDto } from './dto/create-courses.dto';
import { UpdateCoursesDto } from './dto/update-courses.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {

  }
  @Get()
  index() {
    return this.coursesService.index();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.coursesService.show(id);
  }

  @Post()
  store(@Body() createCourseDto: CreateCoursesDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDtp: UpdateCoursesDto) {
    return this.coursesService.update(id, updateCourseDtp);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coursesService.delete(id);
  }
}
