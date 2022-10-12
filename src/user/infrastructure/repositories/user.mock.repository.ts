import { UserRepository } from "../../domain/repositories/user.repository";
import { UserEntity, UserPrimitive } from "../../domain/user/user.aggregate";
import { UserPassword } from "../../domain/user/user.password";
import { UserUsername } from "../../domain/user/user.username";

export class UserMockRepository implements UserRepository {
  async saveUser(user: UserPrimitive): Promise<string | UserEntity> {
    return UserEntity.fromPrimitive(
      "123-456-789",
      "Test",
      1,
      10,
      "root",
      "123",
      "1665109273499",
      "1665109273499"
    );
  }
  async deleteUser(userId: number): Promise<string | boolean> {
    return true;
  }
  async updateUser(user: UserPrimitive): Promise<string | boolean> {
    return true;
  }
  async findAll(): Promise<string | UserEntity[]> {
    return [
      UserEntity.fromPrimitive(
        "123-456-789",
        "Test",
        1,
        10,
        "root",
        "123",
        "1665109273499",
        "1665109273499"
      ),
      UserEntity.fromPrimitive(
        "987-456-123",
        "Test2",
        2,
        4,
        "root2",
        "1234",
        "1665109273499",
        "1665109273499"
      ),
    ];
  }
  async findById(id: string): Promise<string | UserEntity | null> {
    return UserEntity.fromPrimitive(
      "123-456-789",
      "Test",
      1,
      10,
      "root",
      "123",
      "1665109273499",
      "1665109273499"
    );
  }
  async findByUserId(userId: number): Promise<string | UserEntity | null> {
    return UserEntity.fromPrimitive(
      "123-456-789",
      "Test",
      1,
      10,
      "root",
      "123",
      "1665109273499",
      "1665109273499"
    );
  }
  async getUserByLogin(
    userName: UserUsername,
    password: UserPassword
  ): Promise<string | UserEntity> {
    return UserEntity.fromPrimitive(
      "123-456-789",
      "Test",
      1,
      10,
      "root",
      "123",
      "1665109273499",
      "1665109273499"
    );
  }
}
