FROM php:latest

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    zip unzip curl libpng-dev libjpeg-dev libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Instalar Composer
COPY --from=composer:2.8.4 /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

RUN touch /app/database/database.sqlite

# Dar permisos adecuados
RUN chmod -R 777 /app/storage /app/database

# Instalar dependencias de Laravel
RUN composer install --no-dev --prefer-dist

RUN php artisan migrate

EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]