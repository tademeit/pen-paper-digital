import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {userProviders} from "./schemas/user.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService, ...userProviders]
})
export class UserModule {}
