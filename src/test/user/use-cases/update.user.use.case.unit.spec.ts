import { UpdateUserUseCase } from "../../../user/application/use-cases/update-user.use.case";
import { UserEntity } from "../../../user/domain/user/user.aggregate";
import { UserMockRepository } from "../../../user/infrastructure/repositories/user.mock.repository";

describe("Update-User-Use-Case", () => {
  let useCase: UpdateUserUseCase;

  beforeAll(() => {
    useCase = UpdateUserUseCase.getInstance(new UserMockRepository());
  });

  it("Should get defined instance", () => {
    expect(useCase).toBeDefined();
  });

  it("Should update user in the database", async () => {
    const response = await useCase.execute(
      UserEntity.fromPrimitive(
        "123,456",
        "Emmanuel",
        2,
        8,
        "Emma123",
        "EmmaCV15",
        "1665109273499",
        "1665109273499"
      )
    );

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
      message: "User Updated",
    });

    expect(status).toEqual(200);
    expect(success).toEqual(true);
  });
});
