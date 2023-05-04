import { User } from './user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class LoginService {
   constructor(@InjectModel(User) private userModel: typeof User,
    ) {}
   
   
   createUser(user): Promise<User> {
      
      return this.userModel.create(user);
    }
   
   
   findUser(id: string): Promise<User> {
      return this.userModel.findOne({
        where: {
          id,
        },
      });
    }
    async findAll(): Promise<User[]> {
      return this.userModel.findAll();
    }

}