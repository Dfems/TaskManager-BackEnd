/* eslint-disable */

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('verify-token')
  async verifyToken(@Body('idToken') idToken: string) {
    try {
      // Chiama il metodo verifyToken di AuthService per verificare il token ID
      const decodedToken = await this.authService.verifyToken(idToken);
      
      // Restituisce il token decodificato come risposta
      return { decodedToken };
    } catch (error) {
      // Gestisce eventuali errori nella verifica del token
      return { message: 'Invalid token', error: error.message };
    }
  }
}
