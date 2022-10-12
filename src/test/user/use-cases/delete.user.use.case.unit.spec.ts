import { DeleteUserUseCase } from "../../../user/application/use-cases/delete-user.use.case";
import { UserUserId } from "../../../user/domain/user/user.userId";
import { UserMockRepository } from "../../../user/infrastructure/repositories/user.mock.repository";

describe("Delete-User-Use-Case", () => {
  let useCase: DeleteUserUseCase;

  beforeAll(() => {
    useCase = DeleteUserUseCase.getInstance(new UserMockRepository());
  });

  it("Should get define instance", () => {
    expect(useCase).toBeDefined();
  });

  it("Should delete user in the database", async () => {
    const response = await useCase.execute(new UserUserId(1));

    const {
      contain,
      status,
      success,
    }: {
      contain: any;
      status: number;
      success: boolean;
    } = response.toPrimitives();
    expect(contain).toEqual({
      message: "User deleted",
    });

    expect(status).toEqual(200);
    expect(success).toEqual(true);
  });
});
