import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from 'passport-jwt';
import {Injectable} from "@nestjs/common";
import {passportJwtSecret} from "jwks-rsa";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            secretOrKeyProvider: passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: 'https://test-penpaperdigital.eu.auth0.com/.well-known/jwks.json'
            }),

            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            audience: 'http://localhost:3000',
            issuer: 'https://test-penpaperdigital.eu.auth0.com',
            algorithms: ['RS256']
        });
    }

    validate(payload: any) {
        return payload
    }

}
