import {Body, Controller, HttpException, Post} from "@nestjs/common";
import { ManagementClient } from "auth0";

import { UserRegistration } from '@ppd/api-interfaces';

@Controller('register')
export class RegisterController {

  @Post()
  async registerUser(@Body() userRegistration: UserRegistration): Promise<any> {
    const managementClient = new ManagementClient({
      domain: 'test-penpaperdigital.eu.auth0.com',
      clientId: 'yS4hUWPXOXyvJyvMC607saRLKXbC83E8',
      clientSecret: '9zoIaG4pc-F4ya5oIcHxr1VBWgyAwEHrc-8FdRvYmhxZyGfLIRqGqR49J5rYW2zu',
      scope: 'read:users'
    });

    return managementClient
      .createUser(userRegistration)
      .then((user) => {
        return user;
      })
      .catch(err => {
        throw new HttpException({
          status: err['statusCode'],
          error: err.message
        }, err['statusCode']);
      });
  }

}
