# Prueba Técnica Ulern

Esta prueba técnica, para el cargo de Full Stack Developer, se basa en un login de usuarios con registro y visualización de datos. El proyecto está desarrollado con Vue3 en el Frontend y Laravel 11 en el Backend, utilizando una base de datos SQLite.

## Herramientas usadas
<hr/>
Las herramientas utilizadas para desarrollar el proyecto fueron las siguientes:

### Frontend 
 - Vue3: Es el framework de Javascript que permite diseñar sitios web de forma rápida y escalables.
 - Nuxt: Es un framework de Vue que entrega herramientas para desarrollar sin necesidad de configurar otras herramientas externas.
 - TailwindCSS: Es una herramienta de CSS que permite aplicar estilos de una forma sencilla y estructurada.
 - Pinia: Herramienta de Vue que permite gestionar estados globales. También se utilizó el plugin pinia-plugin-persistedstate para la persistencia de datos

### Backend
 - Laravel 11: Laravel es un Framework de PHP que entrega una serie de herramientas que permiten levantar un entorno web, tanto como frontend, como en backend y ambos.


## Instrucciones
<hr/>
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

```php artisan serve```

Se ejecutará el servidor del backend y estará listo para su funcionamiento.

#### Frontend
Para levantar el frontend se debe tener instalado y configurado:
 - NodeJS

Una vez instalado y configurado las herramientas, ejecutar en la consola de comandos, ubicado en la raíz del frontend:
``` npm install ```

NPM instalará todas las dependencias del proyecto.

La conexión a la API del backend está por defecto en: ```http://localhost:8000```. Si se desea cambiar la URL o el backend está ejecutándose en otro puerto, se debe crear un archivo .env en la raíz del proyecto frontend y ahí asignar la siguiente variable de entorno:

```BACKEND_URL="*la url que desee utilizar*"```

Finalmente se ejecuta el siguiente comando para funcionar el servidor:
```npm run dev```

