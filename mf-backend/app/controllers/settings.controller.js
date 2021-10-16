import bcrypt from 'bcryptjs';
import User from '../models/User.model.js';

export const updateEmail = (req, res) => {
  const { email, newEmail } = req.body.userDetails;
  User.findOne({ email })
    .then((data) => {
      if (data) {
        data.email = newEmail;
        data.save()
          .then((updatedDoc) => {
            res.send({ msg: 'SUCCESS', data: updatedDoc })
          })
          .catch((err) => res.send({ error: err }))
      }
    })
}
export const updateGender = (req, res) => {
  const { email, gender } = req.body.userDetails;
  User.findOne({ email })
    .then((data) => {
      if (data) {
        data.gender = gender;
        data.save()
          .then((updatedDoc) => {
            res.send({ msg: 'SUCCESS', data: updatedDoc })
          })
          .catch((err) => res.send({ error: err }))
      }
    })
}
export const updateDOB = (req, res) => {
  const { email, dob } = req.body.userDetails;
  User.findOne({ email })
    .then((data) => {
      if (data) {
        data.dob = dob;
        data.save()
          .then((updatedDoc) => {
            res.send({ msg: 'SUCCESS', data: updatedDoc })
          })
          .catch((err) => res.send({ error: err }))
      }
    })
}
export const updateName = (req, res) => {
  const { email, name } = req.body.userDetails;
  User.findOne({ email })
    .then((data) => {
      if (data) {
        data.name = name;
        data.save()
          .then((updatedDoc) => {
            res.send({ msg: 'SUCCESS', data: updatedDoc })
          })
          .catch((err) => res.send({ error: err }))
      }
    })
}

export const updatePassword = (req, res) => {

  const { email, password, newPassword } = req.body.userDetails;
  User.findOne({ email: email })
    .then((user) => {
      if (!bcrypt.compareSync(password, user.password)) {
        res.send({ error: "You entered a wrong password" })
      } else if (bcrypt.compareSync(password, user.password)) {
        bcrypt.hash(newPassword, 10, (err, hash) => {
          user.password = hash;
          user.save()
            .then((updatedDoc) => {
              res.send({ msg: 'SUCCESS', data: updatedDoc })
            })
        })
      }
    })
    .catch((err) => res.json({ error: err }))
}


