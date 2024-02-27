import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { Payload } from './dtos';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(email: string, password: string) {
    return `${email} ${password}`;
  }

  async handleGoogleLogin(email: string) {
    return `handleGoogleLogin ${email}`;
  }

  async login(userId: string) {
    return `login ${userId}`;
  }

  async generateJwt(payload: Payload): Promise<string> {
    const { id } = payload;

    return this.jwtService.sign({ id });
  }
}
