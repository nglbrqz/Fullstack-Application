const express = require('express');
const router = express.Router();
const cors = require('cors')
const {test, registerUser, loginUser} = require('../controllers/authController')

 
//MIDDLE WARE FOR CONNECTING THE END POINTS BETWEEN FRONT END AND BACK END

router.use (
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)


//INSERT HERE NEW CRUD OPERATIONS AND LINK IT IN THE AUTHCONTROLLER
router.get('/', test )
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router