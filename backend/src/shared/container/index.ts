import { container } from "tsyringe";

import "@modules/users/providers";
import "./providers";

import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import UsersRepository from "@modules/users/infra/typeorm/repositories/UserRepository";

import IUserTokensRepository from "@modules/users/repositories/IUsersTokensRepository";
import UserTokensRepository from "@modules/users/infra/typeorm/repositories/UserTokenRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUserTokensRepository>(
  "UserTokensRepository",
  UserTokensRepository
);
