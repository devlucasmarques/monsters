//Aula 01
import express from 'express';
import cors from 'cors';
import http from 'http';
import socketio from 'socket.io';
import bodyParser from 'body-parser';
import path from 'path';
import router from './routes';
import db from './config/mongo'; //Aula 02

class App {
    public express = express.application;
    public io;
    private ioHttp;

    constructor() {
        this.express = express();
        this.ioHttp = http.createServer(this.express);
        this.io = socketio(this.ioHttp);

        this.middlewares();
        this.startDb(); //Aula 02

        this.express.use(router); //Aula 04
    }

    private middlewares() {
        this.express.use(express.static('src/public'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(cors());
        this.express.set('view engine', 'ejs');
        this.express.set('views', path.join(__dirname, '/views'));
    }

    //Aula 02
    private startDb() {
        db.init('mongodb://localhost:27017/monster');
    }
    // fim Aula 02

    public listen(port: number, message: string) {
        this.ioHttp.listen(port, () => console.log(message));
    }
}

export default new App;

//fim Aula 01