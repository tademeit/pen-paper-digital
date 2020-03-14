import {Module} from "@nestjs/common";
import {RegisterController} from "./register/register.controller";

@Module({
    controllers: [RegisterController]
})
export class PublicModule {}
