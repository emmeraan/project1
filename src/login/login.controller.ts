import { Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('Login')
  loginUser(): void {
   // return this.loginService.createUser();
  }
  @Get('Login')
  DiplayUser() {
    return this.loginService.findAll()
  }
//   @Get('All')
//   Users(): string {
//     return this.loginService.findAll();
//   }
}
