const express = require('express');
const router = express.Router();

router.post('/mock_save.json', function (req, res, next) {
    console.log(req.body)

    res.json({
        success: true,
        message: 'saved(mock)'
    })
});

module.exports = router;
