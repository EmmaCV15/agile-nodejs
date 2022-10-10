import { UserRepository } from "../../domain/repositories/user.repository";
import { UserUserId } from "../../domain/user/user.userId";
import {
  Response,
  ResponsePrimitive,
} from "../../domain/response/response.entity";

export class DeleteUserUseCase {
  private static instance: DeleteUserUseCase | undefined;
  constructor(private userRepository: UserRepository) {}

  static getInstance(userRepository: UserRepository) {
    if (!this.instance) {
      this.instance = new DeleteUserUseCase(userRepository);
    }

    return this.instance;
  }

  async execute(userId: UserUserId): Promise<Response> {
    const userOrerrorMessage = await this.userRepository.deleteUser(
      userId.valueOf()
    );

    let response: ResponsePrimitive = {
      success: true,
      contain: {
        message: "User deleted",
      },
      status: 200,
    };

    if (!userOrerrorMessage) {
      response = {
        success: false,
        contain: {
          error: 404,
          message: "User not found",
        },
        status: 404,
      };
    }

    if (typeof userOrerrorMessage == "string") {
      response = {
        success: false,
        contain: {
          error: 400,
          message: userOrerrorMessage,
        },
        status: 400,
      };
    }

    return Response.fromPrimitives(
      response.success,
      response.status,
      response.contain
    );
  }
}
