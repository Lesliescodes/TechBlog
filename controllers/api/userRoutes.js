const router = require('express').Router();
const { User } = require('../../models');


router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
    })
        .then((dbUserData) => {
            req.session.save(() => {
                req.session.userId = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json(dbUserData);

            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'no user found' })
            return
        }
        const valPass = dbUserData.checkPassword(req.body.password);

        if (!valPass) {
            res.status(400).json({ message: 'password incorrect' })
            return
        }

        req.session.save(() => {
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);

        });
    })
});



router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();

        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;