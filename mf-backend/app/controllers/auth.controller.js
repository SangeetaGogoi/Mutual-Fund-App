import bcrypt from 'bcryptjs';
import User from '../models/User.model.js';

export const register = (req, res) => {
  const { email, password, name, dob, gender } = req.body.userDetails
  const userData = {
    email, password, name, dob, gender
  }
  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please add all the credentials" })
  }
  User.findOne({ email })
    .then((data) => {
      if (data) {
        res.send({ error: 'Email already registered' });
      } else {
        bcrypt.hash(password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData, (err, data) => {
            res.status(200).json({ msg: 'Successfully registered' });
          })
        })
      }
    })
    .catch((err) => res.send({ error: err }))
};

export const login = (req, res) => {

  const { email, password } = req.body.userDetails;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.send({ error: 'Account not found' })
      } else {
        if (!bcrypt.compareSync(password, user.password)) {
          res.send({ error: "You entered a wrong password" })
        } else if (bcrypt.compareSync(password, user.password)) {
          delete user.password;
          res.status(200).json({ user: user.toJSON() });

        }
      }
    })
    .catch((err) => res.json({ error: err }))
}


