import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

/**
 * Service responsible for managing user operations
 */
@Injectable()
export class UsersService {
  private readonly BCRYPT_SALT_ROUNDS = 10;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  /**
   * Creates a new user with hashed password
   * @param createUserDto - User creation data
   * @returns The created user entity
   * @throws ConflictException if email already exists
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    await this.validateEmailUniqueness(createUserDto.email);

    const hashedPassword = await this.hashPassword(createUserDto.password);

    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.userRepository.save(user);
  }

  /**
   * Validates that the email is not already in use
   * @param email - Email to validate
   * @throws ConflictException if email already exists
   */
  private async validateEmailUniqueness(email: string): Promise<void> {
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException(`User with email '${email}' already exists`);
    }
  }

  /**
   * Finds a user by email
   * @param email - User's email
   * @returns User entity or null if not found
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  /**
   * Hashes a password using bcrypt
   * @param password - Plain text password
   * @returns Hashed password
   */
  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.BCRYPT_SALT_ROUNDS);
  }
}
