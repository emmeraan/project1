import { Column, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model {
  static insert(user: User): Promise<User> {
     throw new Error('Method not implemented.');
  }
  static save(value: Promise<User>): Promise<User> {
     throw new Error('Method not implemented.');
  }
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  password: string;
}