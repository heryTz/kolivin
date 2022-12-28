import { NestFactory } from '@nestjs/core';
import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';

/**
 * Bénéficier de l'AppModule qu'on a pour le module "commander"
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await CommandFactory.run(AppModule);
  app.close();
}
void bootstrap();
