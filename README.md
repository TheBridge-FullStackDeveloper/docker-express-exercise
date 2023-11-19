# 🚀 The Bridge - 🐳 Dockerización de Aplicación Express

![Logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png "Logotipo de The Bridge")

## 📝 Descripción del Ejercicio

En este ejercicio, aprenderás a dockerizar una aplicación Node.js con Express, haciéndola lista para despliegues en cualquier entorno que soporte Docker.

## 📖 Instrucciones

1. 🍴 Haz un fork del repositorio que contiene tu aplicación de Express.
2. 📥 Clona el repositorio que has bifurcado en tu máquina local.
3. 🐳 Crea un `Dockerfile` en la raíz de tu proyecto para definir los pasos necesarios para contenerizar tu aplicación.
4. 📦 Construye tu imagen Docker utilizando el comando `docker build`.
5. 🏃‍♂️ Ejecuta tu contenedor Docker basado en la imagen construida con `docker run`.
6. 🌐 Asegúrate de que tu aplicación esté accesible desde un navegador probando la conexión al puerto expuesto.
7. 🔁 Utiliza `docker-compose` si necesitas configurar servicios adicionales como bases de datos.
8. 📤 Haz commit de tus cambios en el `Dockerfile` y cualquier archivo de configuración asociado, y súbelos a tu fork.
9. 📧 Abre un Pull Request para que tu código sea revisado.

## ✔️ Tareas a Realizar

- Escribe un `Dockerfile` que parta de una imagen base de Node.js, instale las dependencias y ejecute tu aplicación.
- Construye la imagen Docker con `docker build -t tu-nombre-de-imagen .`
- Ejecuta un contenedor basado en tu imagen con `docker run -p 3000:3000 tu-nombre-de-imagen`
- Verifica que puedas acceder a las rutas de tu aplicación con postman.
- (Opcional) Configura `docker-compose.yml` para ejecutar tu aplicación.
