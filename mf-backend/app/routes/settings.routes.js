import {
    updateEmail,
    updateName,
    updateGender,
    updateDOB,
    updatePassword
} from '../controllers/settings.controller.js';

const authRoutes = (app) => {
    app.route('/email_settings')
        .put(updateEmail)
    app.route('/name_settings')
        .put(updateName)
    app.route('/dob_settings')
        .put(updateDOB)
    app.route('/gender_settings')
        .put(updateGender)
    app.route('/password_settings')
        .put(updatePassword)
}

export default authRoutes