import { Injectable } from '@nestjs/common';

@Injectable({})
export class CatService {
  getCat(id: number) {
    return `Meow! with ${id}`;
  }
}
