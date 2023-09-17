import { IsEmail, IsString } from 'class-validator';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class CreateUserDtos {
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmail()
  email: string;
  @IsString()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with Id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with is', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id', this.id);
  }
}
