/* eslint-disable */

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { FirebaseModule } from '../firebase/firebase.module'; // Importa FirebaseModule

@Module({
  imports: [FirebaseModule], // Assicurati di importare FirebaseModule
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
