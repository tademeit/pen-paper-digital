import {Body, Controller, Post} from "@nestjs/common";
import {UserRegistrationDto} from "./user-registration.dto";
import {ManagementClient} from "auth0";
import {UserDto} from "./user.dto";

@Controller('register')
export class RegisterController {

    @Post()
    async registerUser(@Body() userRegistration: UserRegistrationDto): Promise<any> {
        const managementClient = new ManagementClient({
            domain: 'test-penpaperdigital.eu.auth0.com',
            clientId: 'yS4hUWPXOXyvJyvMC607saRLKXbC83E8',
            clientSecret: '9zoIaG4pc-F4ya5oIcHxr1VBWgyAwEHrc-8FdRvYmhxZyGfLIRqGqR49J5rYW2zu',
            scope: 'read:users'
        });

        return managementClient
                .createUser(userRegistration)
                .then((user: UserDto) => {
                    return user;
                })
            .catch(err => {
                return err;
            });
    }

}
