export class UserRegistrationDto {
    constructor(
        public username: string,
        public email: string,
        public password: string,
        public connection: string = 'Username-Password-Authentication'
    ) {}
}
