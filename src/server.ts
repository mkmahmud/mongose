import mongoose from 'mongoose';
import app from './app';

const port = 5000;



async function DBConnect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ass')
        console.log('DB Connected')
        app.listen(port, () => console.log('Listening on port 5000'));

    }
    catch (err) {
        console.log(err)
    }

}

DBConnect()


