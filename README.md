# Web Chat

Un chat global y anonimo.

## Herramientas utilizadas

#### Frameworks y librerías

- **[Next.js](https://nextjs.org)**: Next.js es un framework de React que permite la generación estática y la renderización del lado del servidor (SSR), lo cual mejora significativamente el rendimiento y el SEO. Su enfoque en la simplicidad y su capacidad para manejar tanto páginas estáticas como dinámicas lo hacen ideal para nuestra aplicación de chat.

- **[NextAuth.js](https://next-auth.js.org)**: NextAuth.js es una solución completa para la autenticación en aplicaciones Next.js. Ofrece soporte para múltiples proveedores de autenticación, incluyendo OAuth, email/password y credenciales personalizadas. La facilidad de integración y su seguridad robusta son cruciales para manejar la autenticación de usuarios en un entorno de chat global y anónimo.

- **[Prisma](https://prisma.io)**: Prisma es un ORM moderno que simplifica el acceso a la base de datos y mejora la productividad de los desarrolladores. Su capacidad para trabajar con múltiples bases de datos y su potente generador de esquemas hacen que sea una herramienta esencial para manejar la lógica de datos de nuestra aplicación.

- **[Tailwind CSS](https://tailwindcss.com)**: Tailwind CSS es un framework de CSS utilitario que permite un desarrollo de interfaces de usuario rápido y eficiente. Su enfoque en clases utilitarias facilita la creación de componentes estilizados sin necesidad de escribir CSS personalizado, lo cual acelera el desarrollo y mantiene el código limpio y mantenible.

- **[Chakra UI](https://v2.chakra-ui.com/)**: Chakra UI es una biblioteca de componentes de React que ofrece una excelente experiencia de usuario y accesibilidad. Su diseño modular y personalizable, junto con su integración con temas de diseño, permite construir interfaces de usuario cohesivas y atractivas rápidamente.

- **[TanStack Query](https://tanstack.com/query/latest)**: TanStack Query (anteriormente conocido como React Query) es una biblioteca para la gestión de estado de servidor en aplicaciones React. Facilita la obtención, almacenamiento en caché, sincronización y actualización de datos del servidor, lo cual es esencial para una aplicación de chat en tiempo real que depende de datos actualizados constantemente.

#### Plataformas

- **[Vercel](https://vercel.com)**: Vercel es una plataforma de despliegue optimizada para aplicaciones front-end y JAMstack. Su integración perfecta con Next.js, junto con sus capacidades de despliegue continuo y escalabilidad automática, la convierten en la elección ideal para alojar nuestra aplicación de chat.

- **[Supabase](https://supabase.com/)**: Supabase proporciona una base de datos PostgreSQL con funcionalidades en tiempo real, autenticación y almacenamiento de archivos. Su capacidad para manejar suscripciones en tiempo real es crucial para nuestra aplicación de chat, donde la latencia mínima y la actualización instantánea de mensajes son esenciales.

Estas herramientas combinadas nos permiten construir una aplicación de chat robusta, escalable y fácil de mantener, asegurando una experiencia de usuario fluida y segura.

## Cómo configurar el entorno de desarrollo?

### Requisitos

1. Tener instalado `Node.js`
2. Tener instalado `Git`

### Pasos a seguir

Abrir una consola de comandos y ejecutar los siguiente

```bash
# Clonar el repositorio
git clone https://github.com/ratkey/web-chat.git
# Ingresar en la carpeta del proyecto
cd web-chat
# Instalar las dependencias de Node
npm install
```

Crear un archivo llamado `.env` en la raiz del proyecto como `web-chat/.env` en donde almacenarás las siguientes variables de entorno:

```js
// Todas las variables son confidenciales
NEXTAUTH_URL = "";
DATABASE_URL = "";
NEXTAUTH_SECRET = "";
GITHUB_CLIENT_ID = "";
GITHUB_CLIENT_SECRET = "";
GOOGLE_CLIENT_ID = "";
GOOGLE_CLIENT_SECRET = "";
```

```bash
# Correr el proyecto
npm run dev
```

## Cómo aportar al proyecto

Si deseas contribuir al proyecto, sigue estos pasos:

1. **Fork del repositorio**: Haz un fork del repositorio en tu cuenta de GitHub. Esto creará una copia del proyecto en tu propio perfil.

2. **Clona tu fork**: Clona el repositorio desde tu cuenta para trabajar en él localmente.

```bash
git clone https://github.com/tu-usuario/web-chat.git
cd web-chat
```

3. **Crear una nueva rama**: Crea una rama para tu nueva funcionalidad o corrección de errores. Es recomendable que uses un nombre de rama descriptivo.

```bash
git checkout -b nombre-de-tu-rama
```

4. **Realiza tus cambios**: Haz los cambios necesarios en tu rama local. Asegúrate de seguir las convenciones de código y las buenas prácticas establecidas en el proyecto.

5. **Realiza commits claros y descriptivos**: Asegúrate de agregar un mensaje de commit claro y que describa los cambios que realizaste.

```bash
git add .
git commit -m "Descripción clara de los cambios"
```

6. **Sincroniza con el repositorio original**: Si hay actualizaciones en el repositorio original mientras trabajas en tu rama, asegúrate de fusionarlas en tu rama local para evitar conflictos.

```bash
git fetch upstream
git merge upstream/main
```

7. **Push de la rama**: Envía tus cambios a tu repositorio forked en GitHub.

```bash
git push origin nombre-de-tu-rama
```

8. **Crea un Pull Request**: Desde GitHub, abre un Pull Request (PR) desde tu rama hacia la rama principal del repositorio original. Asegúrate de proporcionar una descripción detallada de los cambios realizados.

9. **Revisiones**: Participa en la discusión si el equipo del proyecto tiene comentarios o sugerencias sobre tu PR. Realiza los cambios adicionales si es necesario.

10. **Espera la aprobación**: Una vez que tu PR sea aprobado, se fusionará en la rama principal. Si tienes permisos de escritura, puedes hacerlo tú mismo; de lo contrario, el equipo del proyecto se encargará de ello.

11. **¡Felicitaciones!**: Ahora eres un colaborador del proyecto. ¡Gracias por tu contribución!
