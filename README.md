# Pre-Entrega-BackEnd3

Estructura

Pre-Entrega1/
├── node_modules/           # Directorio de dependencias
├── src/
│   ├── routes/
│   │   └── mocks.router.js  # Router para gestionar las rutas de mocks
│   ├── models/
│   │   ├── user.model.js    # Modelo de Mongoose para los usuarios
│   │   └── pet.model.js     # Modelo de Mongoose para las mascotas
│   ├── app.js               # Archivo principal del servidor Express
│   ├── services/
│   │   ├── mockData.service.js    
│   └── config/
│       └── database.js      # Archivo para configurar la conexión a MongoDB
├── .env                     # Archivo para almacenar las variables de entorno (como el URI de MongoDB)
├── .gitignore               # Archivo para ignorar node_modules y otros archivos innecesarios en Git
├── package.json             # Archivo que contiene la configuración del proyecto y las dependencias
└── README.md                # Archivo de documentación del proyecto
