import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatDto } from './dto/cats.dto';
import { Cat } from './entity/create.cat';

@Injectable()
export class CatsService {
  private cats: CatDto[] = [];

  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  create(cat: Cat) {
    this.catsRepository.create(cat);
    this.catsRepository.insert(cat);
  }

  async findAll(): Promise<Cat[]> {
    // buscará todos os elementos do bd
    return await this.catsRepository.find();
  }

  async findOne(id: string): Promise<Cat> {
    // const cat = this.cats.filter((value) => value.id === id);
    return await this.catsRepository.findOneBy({ id });
  }

  async remove(id: string) {
    // const cats_remove = this.cats.filter((value) => value.id !== id);
    // this.cats = cats_remove;
    return await this.catsRepository.delete(id);
  }

  async update(CatToUpdate: CatDto, id: string): Promise<Cat> {
    const cat = await this.catsRepository.findOneBy({ id });
    const updated = Object.assign(CatToUpdate, cat);

    return await this.catsRepository.save(updated);

    // atualizar ele na lista
  }
}
