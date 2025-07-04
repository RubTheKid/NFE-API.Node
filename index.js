const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const pool = require('./config/database');

const app = express();

app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'NFE Api - Node.js version',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/health', async (req, res) => {
    try {
        const client = await pool.connect();
        res.json({ 
            status: 'OK', 
            message: 'Database connected successfully',
            timestamp: new Date().toISOString()
        });
        client.release();
    } catch (err) {
        res.status(500).json({ 
            status: 'ERROR', 
            message: 'Database connection failed',
            error: err.message 
        });
    }
});

app.get('/', (req, res) => {
    res.send('Api running smoothly!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    console.log('Swagger is running on http://localhost:3000/api-docs');
});