require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose'); // 1. Importar Mongoose

console.log('🚀 Iniciando PulseCore...');
console.log('DB_URL (Supabase) cargada:', !!process.env.DB_URL);
console.log('MONGO_URI cargada:', !!process.env.MONGO_URI); // 2. Log de Mongo

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 3. Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Atlas: Conectado con éxito'))
  .catch(err => console.error('❌ MongoDB Atlas Error:', err.message));

app.use('/api', require('./routes'));

// Ruta test básica
app.get('/', (req, res) => {
  res.json({ 
    message: 'estas aqui por algo',
    endpoints: ['/api/auth/login', '/api/auth/register', '/db-test', '/mongo-test']
  });
});

// Test Supabase (SQL)
app.get('/db-test', async (req, res) => {
  try {
    const { query } = require('./config/db');
    const result = await query('SELECT NOW()');
    res.json({ status: '✅ Supabase OK', time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Test MongoDB Atlas (NoSQL)
app.get('/mongo-test', (req, res) => {
  const state = mongoose.connection.readyState;
  const status = {
    0: "desconectado",
    1: "✅ conectado",
    2: "conectando",
    3: "desconectando"
  };
  res.json({ 
    status: 'MongoDB Atlas', 
    state: status[state] || "estado desconocido" 
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    console.error('❌ Error servidor:', error);
  } else {
    console.log(`✅ PulseCore corriendo http://localhost:${PORT}`);
  }
});
