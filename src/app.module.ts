import {Module} from '@nestjs/common';
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from "@nestjs/config";
import {PublicModule} from "./public/public.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        AuthModule,
        PublicModule
    ]
})
export class AppModule {}
