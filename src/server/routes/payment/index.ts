import * as express from 'express';

import { charge }  from '../../utils/payment'

const router = express.Router();

router.post('/api/donate', async (req, res, next) => {
    let tokenId = req.body.token.id;
    let amount = req.body.amount;
    try {
        let data = await charge(tokenId, amount);
        console.log(data);
        res.send({ message: 'Charged!' });
    } catch (e) {
        console.log(e);
        res.status(500)
    }
})

export default router;

