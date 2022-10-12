import { SaveUserUseCase } from "../../../user/application/use-cases/save-user.use.case";
import { UserEntity } from "../../../user/domain/user/user.aggregate";
import { UserMockRepository } from "../../../user/infrastructure/repositories/user.mock.repository";

describe("SaveUser-Use-Case", () => {
  let useCase: SaveUserUseCase;

  beforeEach(() => {});

  beforeAll(() => {
    useCase = SaveUserUseCase.getInstance(new UserMockRepository());
  });

  it("Should get define instance", () => {
    expect(useCase).toBeDefined();
  });

  it("Should save user in the database", async () => {
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
      user: {
        id: "123-456-789",
        name: "Test",
        userId: 1,
        achievements: 10,
        username: "root",
        password: "123",
        createdAt: "1665109273499",
        updatedAt: "1665109273499",
      },
    });

    expect(status).toEqual(200);
    expect(success).toEqual(true);
  });
});
