import { Module } from '@nestjs/common';
import { CronogramaService } from './cronograma.service';
import { CronogramaController } from './cronograma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cronograma } from './cronograma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cronograma])],
  controllers: [CronogramaController],
  providers: [CronogramaService],
})
export class CronogramaModule {}
