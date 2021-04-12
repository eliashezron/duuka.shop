import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'elias hezron',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
        telephoneNumber:11111

    },
    {
        name: 'feetbitstore',
        email:'feetbitstore@example.com',
        password: bcrypt.hashSync('123456', 10),
        telephoneNumber: 111112

    }
]
export default users