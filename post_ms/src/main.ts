import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const PORT = parseInt(process.env.SERVER_PORT, 10) || 3001;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Add validations to all endpoints

  // Add documentation tags and titles.
  const options = new DocumentBuilder()
    .setTitle('MongoDB Posts REST API')
    .setDescription('Micoservicio de Posts con MongoDB')
    .setVersion('1.0')
    .addTag('Posts', 'Endpoints relacionados con posts')
    .addTag('Likes', 'Endpoints relacionados con likes')
    .addTag('Comments', 'Endpoints relacionados con comments')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  //Documentation endpoint
  SwaggerModule.setup('docs', app, document);

  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
