import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { TestModule } from './test/test.module';
@Module({
  imports: [CatModule, TestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
