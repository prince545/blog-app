const { createHmac, randomBytes } = require('crypto');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: 'blog-app/public/profile_icon.png'
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const salt = randomBytes(16).toString('hex');
    const hash = createHmac('sha256', salt).update(user.password).digest('hex');
    user.password = hash;
    user.salt = salt;
    next();
});

userSchema.statics.matchPassword = async function(email, password) {
    const user = await this.findOne({ email });
    if (!user) return false;
    const hash = createHmac('sha256', user.salt).update(password).digest('hex');
    return hash === user.password;
};

const User = model('User', userSchema);

module.exports = User;