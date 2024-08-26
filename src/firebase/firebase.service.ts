/* eslint-disable */

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private firebaseApp: admin.app.App;

  constructor() {
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;
    
    if (!privateKey) {
      throw new Error('FIREBASE_PRIVATE_KEY is not defined in the environment variables');
    }

    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: privateKey.replace(/\\n/g, '\n'),
      } as ServiceAccount),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
  }

  getAuth() {
    return admin.auth(); // Restituisce l'istanza di autenticazione di firebase-admin
  }

  getDatabase() {
    return admin.firestore(); // Restituisce l'istanza di Firestore
  }
}
