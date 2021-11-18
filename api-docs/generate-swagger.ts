// Generate Swagger definition for a microservice
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import yargs from 'yargs';

const options = yargs(process.argv.slice(2)).options({
  microservice_name: { type: 'string', demandOption: true },
  title: { type: 'string', demandOption: true },
}).argv;

const importPath = `${process.cwd()}/apps/${
  options.microservice_name
}/src/app.module.ts`;

(async () => {
  const importedObject = await import(importPath);
  const appModule = importedObject['AppModule'];
  const title = options.title;

  const swaggerBaseConfig = new DocumentBuilder()
    .setTitle(`${title} API`)
    .setDescription(`${title} API for Honda Lifecreation IOT Project`)
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const app = await NestFactory.create(appModule);
  const document: OpenAPIObject = SwaggerModule.createDocument(
    app,
    swaggerBaseConfig,
  );
  fs.writeFileSync(
    `api-docs/${options.microservice_name}-swagger.json`,
    JSON.stringify(document),
  );

  app.enableShutdownHooks();
  await app.close();
})();
