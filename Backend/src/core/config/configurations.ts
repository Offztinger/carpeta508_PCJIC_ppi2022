import { ConfigModuleOptions, registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export interface IConfig {
  //URL
  backendUrl: string;
  // JWT
  jwtSecret: string;
  jwtExpiresIn: string;
  // POSTGRES
  postgresHost: string;
  postgresPort: number;
  postgresUser: string;
  postgresPassword: string;
  postgresDatabase: string;
  // GOOGLE
  googleClientId: string;
  googleClientSecret: string;
}

const configurations = registerAs(
  'configEnvs',
  (): IConfig => ({
    // URL
    backendUrl: process.env.BACKEND_URL || '',
    // JWT
    jwtSecret: process.env.JWT_SECRET || '',
    jwtExpiresIn: process.env.TOKEN_EXPIRATION || '',
    // POSTGRES
    postgresHost: process.env.POSTGRES_HOST || '',
    postgresPort: parseInt(process.env.POSTGRES_PORT || '', 10),
    postgresUser: process.env.POSTGRES_USER || '',
    postgresPassword: process.env.POSTGRES_PASSWORD || '',
    postgresDatabase: process.env.POSTGRES_DB || '',
    // GOOGLE
    googleClientId: process.env.GOOGLE_CLIENT_ID || '',
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  })
);

export default configurations;

export function configRoot(): ConfigModuleOptions {
  return {
    load: [configurations],
    isGlobal: true,
    validationSchema: Joi.object({
      // URL
      BACKEND_URL: Joi.string().required(),
      // JWT
      JWT_SECRET: Joi.string().required(),
      TOKEN_EXPIRATION: Joi.string().required(),
      // POSTGRES
      POSTGRES_HOST: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_PASSWORD: Joi.string().required(),
      POSTGRES_DB: Joi.string().required(),
      // GOOGLE
      GOOGLE_CLIENT_ID: Joi.string().required(),
      GOOGLE_CLIENT_SECRET: Joi.string().required(),
    }),
  };
}
