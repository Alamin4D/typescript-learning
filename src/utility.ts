type User = {
  id: number;
  name: string;
  password: string;
  nickName: string;
};

type PublicUser = Omit<User, "password" | "nickName" | "name">;

type UserNameOnly = Pick<User, "id" | "name"| "nickName">;

type PartialUser = Partial<User>;

type ReadOnlyUser = Readonly<User>;

