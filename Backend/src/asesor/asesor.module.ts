import { Module } from '@nestjs/common';
import { AsesorService } from './asesor.service';
import { AsesorController } from './asesor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asesor } from './asesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asesor])],
  controllers: [AsesorController],
  providers: [AsesorService],
})
export class AsesorModule {}
