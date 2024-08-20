/* eslint-disable */

import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Module({
  providers: [FirebaseService],
  exports: [FirebaseService], // Esporta FirebaseService per essere utilizzato in altri moduli
})
export class FirebaseModule {}
