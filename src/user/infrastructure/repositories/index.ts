import { UserMongooseRepository } from "./user.mongoose.repository";
import { UserRepository } from "../../domain/repositories/user.repository";

const UsersRepository: UserRepository = new UserMongooseRepository();

export default UsersRepository;
