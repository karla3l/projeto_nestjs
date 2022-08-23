import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './dto/cats.dto';
import { Cat } from './entity/create.cat';

// CatService catService = new CatService();

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Post()
  async create(@Body() Cat: Cat) {
    // return `estou criando um cat de ${CatDto.age}
    // anos chamado ${CatDto.name}`;
    this.catsService.create(Cat);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCat: CatDto) {
    // this.catsService.update(updateCat, id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
