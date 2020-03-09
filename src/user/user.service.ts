import {Inject, Injectable} from "@nestjs/common";
import {Model} from 'mongoose';
import {User} from "./interfaces/user.interface";
import {UserDto} from "./dto/user.dto";
import {UserLoginAttemptDto} from "./dto/user-login-attempt-dto";

@Injectable()
export class UserService {
    constructor(@Inject('USER_MODEL') private readonly  userModel: Model<User>) {}

    async create(userDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(userDto);
        return createdUser.save();
    }

    async checkLogin(userLoginAttemptDto: UserLoginAttemptDto) {
        this.userModel.findOne({username: userLoginAttemptDto.username}).exec()
            .then(user => {
                console.log(user.password);
                user.schema.methods.validatePassword(userLoginAttemptDto.password);
            });
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async find(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async findByUsername(username: string): Promise<User> {
        return this.userModel.findOne({username}).exec();
    }

    async update(id: string, userDto: UserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, userDto);
    }

    async delete(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id);
    }
}
