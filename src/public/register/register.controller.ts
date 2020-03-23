import {Body, Controller, HttpException, Post} from "@nestjs/common";
import {UserRegistrationDto} from "./user-registration.dto";
import {ManagementClient} from "auth0";

@Controller('register')
export class RegisterController {

    @Post()
    registerUser(@Body() userRegistration: UserRegistrationDto) {
        const managementClient = new ManagementClient({
            domain: 'test-penpaperdigital.eu.auth0.com',
            clientId: 'yS4hUWPXOXyvJyvMC607saRLKXbC83E8',
            clientSecret: '9zoIaG4pc-F4ya5oIcHxr1VBWgyAwEHrc-8FdRvYmhxZyGfLIRqGqR49J5rYW2zu',
            scope: 'read:users'
        });

        return managementClient.createUser(userRegistration)
            .catch(error => {
               return new HttpException(this.getErrorMessage(error), error['statusCode']);
            });
    }

    private getErrorMessage(error: Error) {
        if (error['statuscode'] === 409) {
            return 'Es existiert bereits ein Benutzer mit dieser E-Mail-Adresse';
        } else {
            return error.message;
        }
    }
}
