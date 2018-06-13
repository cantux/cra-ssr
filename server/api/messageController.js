import express from 'express';
const router = express.Router();

router.get('/message', (req, res) => {
    res.send({ message: 'message from server' });
});
module.exports = router;