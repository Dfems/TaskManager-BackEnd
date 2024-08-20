/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async verifyToken(idToken: string): Promise<admin.auth.DecodedIdToken> {
    try {
      // Verifica il token ID ricevuto dal frontend
      const decodedToken = await this.firebaseService.getAuth().verifyIdToken(idToken);
      return decodedToken;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
