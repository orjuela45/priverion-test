# Priverion test


Hola, esta es una prueba tecnica para Priverion haciendo uso de Laravel y React, espero la prueba cumpla con lo requerido:

## Para tener en cuenta
En este proyecto se uso docker para la base de datos, por lo que si lo tienes puedes ejecutar el archivo docker-compose para levantar la base de datos

en caso de que no tengas docker, puedes creat una base datos y remplazar los valores en el archivo .env

## Instrucciones

1. Descargar el repositorio con git clone
2. Entrar a la carpeta descargada e instalar los paquetes de composer 
3. Ejcutar migraciones con comando php artisan migrate
4. En la carpeta raiz ejecutar el comando __php artisan serve__ para correr el projecto de Laravel
5. Entrar a la carpeta frontend e instalar los paquetes npm
6. Ejecutar el comando __npm run build__ para compilar el proyecto forntend
7. en la carpeta ./dist generada ejecutar el comando __http_server -o__ (recomiendo leer esta pagina para ver como funciona https://www.npmjs.com/package/http-server)

Con esto ya tendremos los dos proyectos corriendo

## Nota

Te comparto la documentacion de postman con respecto a los endpoints del backend 

https://documenter.getpostman.com/view/5695480/2s93JrvQLo