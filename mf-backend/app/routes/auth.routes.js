import { register, login } from '../controllers/auth.controller.js';

const authRoutes = (app) => {
  app.route('/register')
    .post(register)
  app.route('/signin')
    .post(login)
}

export default authRoutes