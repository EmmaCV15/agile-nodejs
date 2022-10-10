import { GetAllUserUseCase } from "../../../user/application/use-cases/findAll-user.use.case";
import { UserPrimitive } from "../../../user/domain/user/user.aggregate";
import { UserMockRepository } from "../../../user/infrastructure/repositories/user.mock.repository";

describe("FindAll-Use-Case", () => {
  let useCase: GetAllUserUseCase;

  beforeAll(() => {
    useCase = GetAllUserUseCase.getInstance(new UserMockRepository());
  });

  it("Should get define instance", () => {
    expect(useCase).toBeDefined();
  });

  it("Should get all the users in the database", async () => {
    const response = await useCase.execute();

    const {
      contain,
      status,
      success,
    }: {
      contain: any;
      status: number;
      success: boolean;
    } = response.toPrimitives();

    expect(status).toEqual(200);
    expect(success).toEqual(true);

    (contain.users as Array<UserPrimitive>).forEach((user) => {
      expect(user.id).toBeDefined();
      expect(user.achievements).toBeDefined();
      expect(user.createdAt).toBeDefined();
      expect(user.name).toBeDefined();
      expect(user.password).toBeDefined();
      expect(user.updatedAt).toBeDefined();
      expect(user.userId).toBeDefined();
      expect(user.username).toBeDefined();
    });
  });
});
