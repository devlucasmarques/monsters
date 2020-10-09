
import mongoose from 'mongoose';

class DB {
    public init(url: string) {
        console.log('Iniciando Mongo...')
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            serverSelectionTimeoutMS: 5000
        })
        .then(() => console.log('Mongo - OK'))
        .catch(error => console.log(error));
        const db = mongoose.connection;        
        db.on('error', () => console.log('Erro na conexão MongoDB'));
    }
}
export default new DB;