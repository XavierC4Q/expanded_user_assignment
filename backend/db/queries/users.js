const db = require("../db")

module.exports = {

    getAllUsers: (req, res, next) => {
        db.any('SELECT * FROM users')
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.json({
                    message: 'Your request for all users failed'
                })
            })
    },

    getOneUser: (req, res, next) => {
        db.one('SELECT * FROM users WHERE id = $1', [Number(req.params.id)])
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.json({
                    message: 'Request for a single user failed'
                })
            })
    },

    editUser: (req, res, next) => {
        const query = `UPDATE users SET username = $1, phone_number = $2
                       WHERE id = $3
                       RETURNING id, username, phone_number`
        // QUERY TO UPDATE A USER AND RETURN THE UPDATED USER ID, USERNAME AND PHONE NUMBER
        db.one(query, [req.body.username, req.body.phone_number, req.body.id])
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.json({
                message: 'Request to edit user failed'
            })
        })
    },
    addNewUser: (req, res, next) => {
        db.none('INSERT INTO users (username, phone_number) VALUES ($1, $2)', [req.body.username, req.body.phone_number])
        .then(() => {
            res.send({ message: 'Successfully added user' })
        })
        .catch(err => {
            res.json({
                message: 'Username or phone number is taken'
            })
        })
    }
}