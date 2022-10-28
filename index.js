const jsonServer = require('json-server')
const jwt = require('jsonwebtoken');
const db = require('./db.json');
const cors = require('cors');

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();
const SECRET_KEY = 'secret';

server.use(middlewares);
server.use(cors());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    next()
})


function createToken(payload){
    return jwt.sign(payload, SECRET_KEY);
}

function verifyToken(token){
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (e) {
        console.log('error: ', e);
        return e;
    }
}

// Check if the user exists in database
function isAuthenticated({email, password}){
    return db.users.findIndex(user => user.email === email && user.password === password);
}

server.post('/login', (req, res) => {
    const {email, password} = req.body;
    const indexUser = isAuthenticated({email, password});

    if (indexUser === -1) {
        const status = 401;
        const message = 'Incorrect email or password';
        res.status(status).json({status, message});
        return
    }
    const {id, name, lastName, age} = db.users[indexUser];
    const token = createToken({email, password, id})

    res.status(200).json({
        token,
        user: {id, name, email, lastName, age}
    })
})

server.use(/^(?!\/login).*$/,  (req, res, next) => {

    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
        const status = 401
        const message = 'Bad authorization header'
        res.status(status).json({status, message})
        return
    }

    try {

        const tok = req.headers.authorization.split(' ')[1];
        verifyToken(tok);
        next();

    } catch (err) {
        const status = 401;
        const message = 'Error: access_token is not valid';
        res.status(status).json({status, message});
    }
})


server.get('/getUser', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    let { id } = verifyToken(token);
    const { name, lastName, email, age} = db.users.find(item => item.id === id);

    res.jsonp({id, name, lastName, email, age});
})


server.use(router)
const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`JSON Server is running ${port}`)
})