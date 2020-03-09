import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();

    this['password'] = bcrypt.hash(this['password'], bcrypt.genSalt(SALT_WORK_FACTOR));
    return next();
});

UserSchema.methods.validatePassword = async function validatePassword(data) {
    console.log(data);
    console.log(this['password']);
    return bcrypt.compare(data, this['password']);
};
