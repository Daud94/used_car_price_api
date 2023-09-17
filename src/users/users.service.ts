import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }

  async findUserById(id: number) {
    return await this.repo.findOneBy({ id: id });
  }

  async findByEmail(email: string) {
    return await this.repo.find({
      where: {
        email: email,
      },
    });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.repo.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException('user not found');
    }

    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.repo.findOneBy({ id: id });
    if (!user) {
      throw new Error('user not found');
    }
    return this.repo.remove(user);
  }
}
