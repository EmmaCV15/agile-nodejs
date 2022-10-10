import { UserRepository } from "../../domain/repositories/user.repository";
import { UserUserId } from "../../domain/user/user.userId";
import {
  Response,
  ResponsePrimitive,
} from "../../domain/response/response.entity";
import { UserEntity } from "../../domain/user/user.aggregate";

export class FindByUserIdUserUseCase {
  private static instance: FindByUserIdUserUseCase | undefined;
  constructor(private userRepository: UserRepository) {}

  static getInstance(userRepository: UserRepository) {
    if (!this.instance) {
      this.instance = new FindByUserIdUserUseCase(userRepository);
    }
    return this.instance;
  }

  async execute(userId: UserUserId): Promise<Response> {
    const userOrerrorMessage = await this.userRepository.findByUserId(
      userId.valueOf()
    );

    let response: ResponsePrimitive = {
      success: false,
      status: 400,
      contain: {
        error: 400,
        message: userOrerrorMessage,
      },
    };

    if (!userOrerrorMessage) {
      response = {
        success: false,
        contain: {
          error: 404,
          message: "User not Found",
        },
        status: 404,
      };
    }

    if (userOrerrorMessage instanceof UserEntity) {
      response = {
        success: true,
        status: 200,
        contain: {
          user: {
            ...userOrerrorMessage.toPrimitives(),
          },
        },
      };
    }

    return Response.fromPrimitives(
      response.success,
      response.status,
      response.contain
    );
  }
}
