import { User, type UserProps } from "../entities/user";

export class UsersRepository {
  public users: User[];

  constructor(users: User[]) {
    this.users = users;
  }

  create(userProps: UserProps) {
    const findUser = this.users.find((user) => user.email == userProps.email);

    if (findUser) {
      throw new Error("User already exists.");
    }

    const user = new User({
      ...userProps,
      id: this.users.length + 1,
    });

    this.users.push(user);

    return user;
  }

  index() {
    return this.users;
  }

  findById(id: number) {
    const user = this.users.find((user) => user.id == id);

    if (!user) {
      throw new Error("User not found.");
    }

    return user;
  }
}
