import {Body, Controller, HttpException, Post} from "@nestjs/common";
import {UserLogin} from "@ppd/api-interfaces";
import {AuthenticationClient} from "auth0";
import {ConnectionTypes} from "@ppd/api-interfaces";

@Controller('login')
export class LoginController {

  @Post()
  loginUser(@Body() userLogin: UserLogin) {
    const authenticationClient = new AuthenticationClient({
      domain: 'test-penpaperdigital.eu.auth0.com',
      clientId: 'HyZ4QiMhWbiWBzDpjQebmVl44NpdhlVv'
    });

    return authenticationClient.oauth.passwordGrant({
      username: userLogin.username,
      password: userLogin.password,
      realm: ConnectionTypes.UsernamePassword
    })
      .then(token => token)
      .catch(err => {
        throw new HttpException({
          status: err['statusCode'],
          error: err.message
        }, err['statusCode']);
      })
  }

}
