/* eslint-disable */

import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { FirebaseModule } from 'src/firebase/firebase.module';

@Module({
  imports: [FirebaseModule],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
