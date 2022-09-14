import { AggregateRoot } from "../../../shared/domain/entities/aggregate.root";
import { UserId } from "./user.id";
import { UserName } from "./user.name";
import { UserUserId } from "./user.userId";
import { UserAchievements } from "./user.achievements";
import { UserUsername } from "./user.username";
import { UserPassword } from "./user.password";
import { UserCreatedAt } from "./user.createdAt";
import { UserUpdatedAt } from "./user.updatedAt";

export type UserPrimitive = ReturnType<UserEntity["toPrimitives"]>;

export class UserEntity extends AggregateRoot {
  constructor(
    private id: UserId,
    private name: UserName,
    private userId: UserUserId,
    private achievements: UserAchievements,
    private username: UserUsername,
    private password: UserPassword,
    private createdAt: UserCreatedAt,
    private updatedAt: UserUpdatedAt
  ) {
    super();
  }

  static fromPrimitive(
    id: string,
    name: string,
    userId: number,
    achievements: number,
    username: string,
    password: string,
    createdAt: string,
    updatedAt: string
  ) {
    return new UserEntity(
      new UserId(id),
      new UserName(name),
      new UserUserId(userId),
      new UserAchievements(achievements),
      new UserUsername(username),
      new UserPassword(password),
      new UserCreatedAt(createdAt),
      new UserUpdatedAt(updatedAt)
    );
  }

  static objectToEntity({
    id,
    name,
    userId,
    achievements,
    username,
    password,
    createdAt,
    updatedAt,
  }: {
    id: string;
    name: string;
    userId: number;
    achievements: number;
    username: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  }) {
    return new UserEntity(
      new UserId(id),
      new UserName(name),
      new UserUserId(userId),
      new UserAchievements(achievements),
      new UserUsername(username),
      new UserPassword(password),
      new UserCreatedAt(createdAt),
      new UserUpdatedAt(updatedAt)
    );
  }

  toPrimitives() {
    return {
      id: this.id.valueOf(),
      name: this.name.valueOf(),
      userId: this.userId.valueOf(),
      achievements: this.achievements.valueOf(),
      username: this.username.valueOf(),
      password: this.password.valueOf(),
      createdAt: this.createdAt.valueOf(),
      updatedAt: this.updatedAt.valueOf(),
    };
  }

  getId(): UserId {
    return this.id;
  }

  getName(): UserName {
    return this.name;
  }
}
