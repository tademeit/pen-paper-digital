import {databaseProviders} from "./database.provider";
import {Module} from "@nestjs/common";

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DatabaseModule {}
