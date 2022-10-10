import { SaveUserUseCase } from "../../../user/application/use-cases/save-user.use.case";
import {
  UserEntity,
  UserPrimitive,
} from "../../../user/domain/user/user.aggregate";
import { UserMockRepository } from "../../../user/infrastructure/repositories/user.mock.repository";

describe("SaveUser-Use-Case", () => {
  let useCase: SaveUserUseCase;
  let newUser: UserEntity;

  beforeEach(() => {});

  beforeAll(() => {
    useCase = SaveUserUseCase.getInstance(new UserMockRepository());
  });

  it("Should get define instance", () => {
    expect(useCase).toBeDefined();
  });

  it("Should save user in the database", async () => {
    const response = await useCase.execute(newUser);
  });
});
