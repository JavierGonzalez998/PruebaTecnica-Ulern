# Prueba Técnica Ulern

Esta prueba técnica, para el cargo de Full Stack Developer, se basa en un login de usuarios con registro y visualización de datos. El proyecto está desarrollado con Vue3 en el Frontend y Laravel 11 en el Backend, utilizando una base de datos SQLite.

## Herramientas usadas

Las herramientas utilizadas para desarrollar el proyecto fueron las siguientes:

### Frontend 
 - Vue3: Es el framework de Javascript que permite diseñar sitios web de forma rápida y escalables.
 - Nuxt: Es un framework de Vue que entrega herramientas para desarrollar sin necesidad de configurar otras herramientas externas.
 - TailwindCSS: Es una herramienta de CSS que permite aplicar estilos de una forma sencilla y estructurada.
 - Pinia: Herramienta de Vue que permite gestionar estados globales. También se utilizó el plugin pinia-plugin-persistedstate para la persistencia de datos

### Backend
 - Laravel 11: Laravel es un Framework de PHP que entrega una serie de herramientas que permiten levantar un entorno web, tanto como frontend, como en backend y ambos.


## Instrucciones

Antes de ejecutar el proyecto, se debe crear en la raiz del proyecto backend un archivo .env con las siguientes variables de entorno
```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:W/SuyXSc9J20zBIamIxCNDDEcwwCDCecL/yV/U5k3jg=
APP_DEBUG=true
APP_TIMEZONE=UTC
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
# APP_MAINTENANCE_STORE=database

PHP_CLI_SERVER_WORKERS=4

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=sqlite

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_SCHEME=null
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

VITE_APP_NAME="${APP_NAME}"

```
Estas variables de entorno son las que por defecto entrega laravel, por lo que no hay problemas de seguridad.

En el Frontend, la conexión a la API del backend está por defecto en: ```http://localhost:8000```. Si se desea cambiar la URL o el backend está ejecutándose en otro puerto, se debe crear un archivo .env en la raíz del proyecto frontend y ahí asignar la siguiente variable de entorno:

```BACKEND_URL="*la url que desee utilizar*"```


Para levantar el proyecto hay dos opciones:

### Docker
Para levantar el proyecto con Docker sólo hay que ejecutar en la consola de comando, ubicado en la raíz del proyecto:

``` docker compose up -d ```

Docker configurará el entorno y levantará ambos contenedores, tanto para frontend como para el backend.

### Local
Para levantar el proyecto en local. Se debe dividir las instrucciones en Backend y frontend.

#### Backend
Para levantar el backend se debe tener instalado y configurado:
 - PHP
 - Composer

En la raíz del proyecto Backend y en la consola ejecutar: ```composer install```. Una vez instaladas las dependencias del proyecto, ejecutar el siguiente comando:

```php artisan migrate```

Solicitará crear una base de datos, escriben YES e ingresan.

Luego, para ejecutar el servidor, se ingresa el siguiente comando:

```php artisan serve```

Se ejecutará el servidor del backend y estará listo para su funcionamiento.

#### Frontend
Para levantar el frontend se debe tener instalado y configurado:
 - NodeJS

Una vez instalado y configurado las herramientas, ejecutar en la consola de comandos, ubicado en la raíz del frontend:
``` npm install ```

NPM instalará todas las dependencias del proyecto.

Finalmente se ejecuta el siguiente comando para funcionar el servidor:
```npm run dev```

