import { beforeEach, describe, expect, it } from "vitest";
import { UsersRepository } from "./user-repository";

describe("Users Repository", () => {
  let usersRepository: UsersRepository;

  beforeEach(() => {
    usersRepository = new UsersRepository([
      {
        id: 1,
        name: "Agostinho Carrara",
        age: 28,
        email: "carrarataxis@gmail.com",
      },
      {
        id: 2,
        name: "Tuco Silva",
        age: 20,
        email: "tuco@gmail.com",
      },
    ]);
  });

  it("should be able to create a new user", () => {
    const createdUser = usersRepository.create({
      age: 25,
      email: "aaaaaa@email.com",
      name: "Giovani",
    });

    expect(createdUser).toHaveProperty("id");
  });

  it("should be able to return all users", () => {
    const users = usersRepository.index();

    expect(users).toHaveLength(2);
  });

  it("should be able to  return one user by id", () => {
    const user = usersRepository.findById(1);

    expect(user?.name).toEqual("Agostinho Carrara");
  });

  it("should not be able to create a new user with existent email", () => {
    expect(() =>
      usersRepository.create({
        name: "Agostinho Carrara",
        age: 28,
        email: "carrarataxis@gmail.com",
      })
    ).toThrowError();
  });

  it("should not be able to find an unexistent user", () => {
    expect(() => usersRepository.findById(3)).toThrowError();
  });
});
