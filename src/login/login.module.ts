import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { User } from './user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [LoginController],
  providers: [LoginService],
  exports:[SequelizeModule]
})
export class LoginModule {}
