### Informe de Frontend StarCinema App

#### Generalidades del Proyecto

**Descripción:** La aplicación StarCinema es una plataforma web desarrollada con Next.js para la gestión de un cine. Permite a los usuarios registrarse, iniciar sesión, buscar películas y visualizar información sobre las mismas. Además, ofrece un panel de administración para gestionar usuarios, películas y salas de cine.

**Tecnologías Utilizadas:**
- **Framework:** Next.js
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Estado Global:** Redux Toolkit
- **Autenticación:** NextAuth.js
- **Validaciones:** Zod
- **Componentes de UI:** NextUI, Radix UI
- **Otras Bibliotecas:** React Hook Form, Framer Motion, js-cookie, jwt-decode

---

### Funcionalidades Implementadas

1. **Autenticación y Autorización:**
   - **Registro de Usuarios:** Los usuarios pueden registrarse proporcionando su información básica.
   - **Inicio de Sesión:** Los usuarios pueden iniciar sesión con sus credenciales.
   - **Cerrar Sesión:** Los usuarios pueden cerrar sesión.
   - **Autorización Basada en Roles:** Diferentes paneles y funcionalidades disponibles para administradores, empleados y clientes

2. **Gestión de Películas:**
   - **Listado de Películas:** Visualización de todas las películas disponibles.
   - **Detalles de Películas:** Vista detallada de una película específica.
   - **Gestión de Películas (Admin):** Los administradores pueden agregar, editar y eliminar películas.

3. **Gestión de Usuarios:**
   - **Listado de Usuarios:** Visualización de todos los usuarios registrados.
   - **Detalles de Usuarios:** Vista detallada de un usuario específico.
   - **Gestión de Usuarios (Admin):** Los administradores pueden añadir empleados.

4. **Gestión de Salas:**
   - **Listado de Salas:** Visualización de todas las salas de cine.
   - **Detalles de Salas:** Vista detallada de una sala específica.
   - **Gestión de Salas (Admin):** Los administradores pueden agregar, editar y eliminar salas.
  
5. **Gestion de Funciones:**
   - **Listado de Funciones:** Ver las funciones disponibles.
   - **Gestion de Funciones:** Los empleados pueden crear, editar y añadir funciones.


6. **Barra de Búsqueda:**
   - **Búsqueda de Películas:** Los usuarios pueden buscar películas por título utilizando la barra de búsqueda.

7. **Panel de Control:**
   - **Dashboard Admin:** Panel de control para administradores con acceso a gestión de películas, empleados y salas.
   - **Dashboard Employee:** Panel de control para empleados con acceso limitado a ciertas funcionalidades.

---

### Implementación de Autenticación, Autorización y Gestión del Estado

#### Autenticación

**Tecnología:** NextAuth.js

**Descripción:**
NextAuth.js se utiliza para manejar la autenticación en la aplicación. Proporciona un mecanismo robusto para el inicio de sesión, registro y cierre de sesión.

**Implementación:**
- **Configuración:** Se configura NextAuth con proveedores, callbacks y páginas personalizadas.
- **Inicio de Sesión y Registro:** Utiliza componentes `LoginForm.tsx` y `RegisterForm.tsx` en `src/components/auth` para manejar las interfaces de usuario.
- **Protección de Rutas:** Las rutas sensibles están protegidas utilizando middleware que verifica la autenticación del usuario antes de permitir el acceso.
- - **Componentes Condicionales:** Se utilizan condicionales en los componentes de UI para mostrar diferentes contenidos según la autenticación del usuario. Por ejemplo, en `NavBar.tsx`, se muestran diferentes opciones en base a si el usuario está autenticado o no.

#### Autorización

**Tecnología:** NextAuth.js junto con Redux

**Descripción:**
La autorización se gestiona mediante roles definidos para usuarios (administradores y empleados) y componentes condicionales que renderizan contenido basado en estos roles.

**Implementación:**
- **Roles de Usuario:** Los roles se definen en el estado del usuario y se almacenan en Redux.
- **Componentes Condicionales:** Se utilizan condicionales en los componentes de UI para mostrar diferentes contenidos según el rol del usuario. Por ejemplo, en `app/(movies)/page.tsx`, se muestran diferentes opciones de menú para administradores y empleados y clientes.

#### Gestión del Estado

**Tecnología:** Redux Toolkit

**Descripción:**
Redux se utiliza para manejar el estado global de la aplicación, permitiendo una gestión centralizada del estado del usuario, películas, salas y funciones.

**Implementación:**
- **Configuración del Store:** En `src/store/index.ts`, se configura el store de Redux utilizando `configureStore` de Redux Toolkit.
- **Slices:** Se crean slices específicos para manejar diferentes partes del estado, como `userSlice.ts` para el estado del usuario.
- **Servicios:** En `src/store/services`, se configuran API slices para manejar la interacción con las API de películas, salas y usuarios utilizando `createApi` de Redux Toolkit.

### Conclusión

Nuestro proyecto StarCinema App utiliza una combinación de tecnologías modernas para ofrecer una experiencia de usuario fluida y eficiente. La implementación de la autenticación y autorización es robusta y segura, mientras que la gestión del estado con Redux garantiza un manejo centralizado y eficiente del estado de la aplicación. Los componentes de UI están bien diseñados y reutilizables, lo que facilita el mantenimiento y la escalabilidad del proyecto.