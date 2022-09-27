"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _bcrypt = _interopRequireDefault(require("bcrypt"));
const _mongoose = _interopRequireDefault(require("mongoose"));
const _supertest = _interopRequireDefault(require("supertest"));
const _app = _interopRequireDefault(require("../app"));
const _authRoute = _interopRequireDefault(require("../routes/auth.route"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
afterAll(async ()=>{
    await new Promise((resolve)=>setTimeout(()=>resolve(), 500));
});
describe('Testing Auth', ()=>{
    describe('[POST] /signup', ()=>{
        it('response should have the Create userData', async ()=>{
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4!'
            };
            const authRoute = new _authRoute.default();
            const users = authRoute.authController.authService.users;
            users.findOne = jest.fn().mockReturnValue(null);
            users.create = jest.fn().mockReturnValue({
                _id: '60706478aad6c9ad19a31c84',
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            _mongoose.default.connect = jest.fn();
            const app = new _app.default([
                authRoute
            ]);
            return (0, _supertest.default)(app.getServer()).post(`${authRoute.path}signup`).send(userData);
        });
    });
    describe('[POST] /login', ()=>{
        it('response should have the Set-Cookie header with the Authorization token', async ()=>{
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4!'
            };
            const authRoute = new _authRoute.default();
            const users = authRoute.authController.authService.users;
            users.findOne = jest.fn().mockReturnValue({
                _id: '60706478aad6c9ad19a31c84',
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            _mongoose.default.connect = jest.fn();
            const app = new _app.default([
                authRoute
            ]);
            return (0, _supertest.default)(app.getServer()).post(`${authRoute.path}login`).send(userData).expect('Set-Cookie', /^Authorization=.+/);
        });
    });
    describe('[POST] /logout', ()=>{
        it('logout Set-Cookie Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ; Max-age=0', async ()=>{
            const userData = {
                _id: '60706478aad6c9ad19a31c84',
                email: 'test@email.com',
                password: await _bcrypt.default.hash('q1w2e3r4!', 10)
            };
            const authRoute = new _authRoute.default();
            const users = authRoute.authController.authService.users;
            users.findOne = jest.fn().mockReturnValue(userData);
            _mongoose.default.connect = jest.fn();
            const app = new _app.default([
                authRoute
            ]);
            return (0, _supertest.default)(app.getServer()).post(`${authRoute.path}logout`).send(userData).set('Set-Cookie', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ');
        });
    });
});

//# sourceMappingURL=auth.test.js.map