import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { User } from './login/user.model';

@Module({
  imports: [ 
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'login',
    models: [User],
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
