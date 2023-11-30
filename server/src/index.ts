import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import usersRoutes from './routes/usersRoutes';
import swagger_ui_express from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

class Server {
    public app: Application;
    constructor() {
        this.app= express();
        this.config();
        this.routes();
        this.app.use('/documentation', swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
    }

    config (): void {
        this.app.set('port',process.env.PORT|| 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes (): void {
        this.app.use('/api/users/', usersRoutes);
    }

    start (): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port',this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();