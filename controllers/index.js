const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./api/postRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('./dashboardRoutes.js', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
