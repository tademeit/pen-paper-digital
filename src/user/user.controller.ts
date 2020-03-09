import {UserService} from "./user.service";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {UserDto} from "./dto/user.dto";
import {User} from "./interfaces/user.interface";
import {UserLoginAttemptDto} from "./dto/user-login-attempt-dto";

@Controller('user')
export class UserController {
    constructor(private readonly  userService: UserService) {}

    @Post('register')
    async create(@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Post('login')
    async login(@Body() userLoginAttemptDto: UserLoginAttemptDto) {
        return this.userService.checkLogin(userLoginAttemptDto);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return this.userService.find(id);
    }

    @Put(':id')
    async update(@Param(':id') id: string, @Body() userDto: UserDto) {
        return this.userService.update(id, userDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
