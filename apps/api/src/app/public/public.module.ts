import {Module} from "@nestjs/common";
import {RegisterController} from "./register/register.controller";
import {LoginController} from "./login/login.controller";

@Module({
    controllers: [LoginController, RegisterController]
})
export class PublicModule {}
