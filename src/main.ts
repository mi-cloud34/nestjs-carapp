import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const configService = app.get<ConfigService>(ConfigService);
  // const globalPrefix = configService.get('globalPrefix')
  // const app = await NestFactory.create<NestExpressApplication>(AppModule, {
  //   cors: true
  // })
 /*  const appName = configService.get('appName')
  const appDescription = configService.get('appDescription')
  const apiVersion = configService.get('apiVersion')
  const config = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(appDescription)
    .setVersion(apiVersion)
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/', app, document)
  SwaggerModule.setup(globalPrefix, app, document)
 
 
  const port = configService.get('port') */
  //await app.listen(port)
  await app.listen(3000)
}
bootstrap();
/* prestart:"tsc --build tsconfig-simple.json" ,*/
/* prestart:"npm:build" ,*/