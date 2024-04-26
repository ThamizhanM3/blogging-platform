const User = require("../models/User");

const validateUser = async (request, response) => {
    try {
        const user = await User.find({ 'userId': request.body.userId })
        if (user.length) {
            console.log(user);
            response.status(200).json({
                'status': 'Found',
                'message': 'Login Sucessful',
            })
        } else {
            console.log('noUser');
            response.status(400).json({
                'status': 'Failure',
                'message': 'No User Found',
            })
        }
    } catch (error) {
        response.status(500).json({
            'status': 'Failure',
            'message': 'Login Unsucessful',
            'error': error
        })
    }
}

module.exports = { validateUser }