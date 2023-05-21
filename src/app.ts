
import express from 'express';
import cors from 'cors';

const app = express();
const router = express.Router()
app.use(cors());
app.use(router);

router.get('/', function (req, res) {
    res.send("All  operational")
})


export default app