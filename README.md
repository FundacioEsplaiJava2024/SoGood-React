# Proyecto React - Estructura y Descripción

Este proyecto está desarrollado con React utilizando Vite como herramienta de construcción. La estructura del proyecto está organizada de manera modular para facilitar el desarrollo y mantenimiento del código.

## Estructura del Proyecto

```
.
├── api
│   ├── productApi.ts
│   └── userApi.ts
├── assets
│   └── react.svg
├── components
├── index.css
├── main.tsx
├── pages
│   ├── App.tsx
│   ├── EnterpriseMode.tsx
│   ├── Home.tsx
│   ├── LogIn.tsx
│   ├── ProductSimple.tsx
│   └── UserMode.tsx
├── styles
│   └── form.css
└── vite-env.d.ts
```

### Descripción de Carpetas y Archivos

- **api/**: Contiene los archivos relacionados con las llamadas a las APIs.
  - `productApi.ts`: Gestiona las interacciones con la API de productos.
  - `userApi.ts`: Gestiona las interacciones con la API de usuarios.

- **assets/**: Incluye los recursos estáticos utilizados en la aplicación.
  - `react.svg`: Un ejemplo de recurso gráfico utilizado en la aplicación.

- **components/**: (Vacío) Carpeta destinada a almacenar los componentes reutilizables de la aplicación.

- **index.css**: Archivo de estilos globales para la aplicación.

- **main.tsx**: Punto de entrada principal de la aplicación React, donde se monta el componente raíz (`App`).

- **pages/**: Contiene los diferentes componentes de página que representan las vistas principales de la aplicación.
  - `App.tsx`: Componente raíz que estructura la aplicación y gestiona las rutas.
  - `EnterpriseMode.tsx`: Página destinada al modo empresa.
  - `Home.tsx`: Página principal o de inicio de la aplicación.
  - `LogIn.tsx`: Página de inicio de sesión.
  - `ProductSimple.tsx`: Página para la visualización simple de productos.
  - `UserMode.tsx`: Página destinada al modo usuario.

- **styles/**: Carpeta que contiene archivos de estilos específicos para ciertas partes de la aplicación.
  - `form.css`: Estilos específicos para formularios.

- **vite-env.d.ts**: Archivo de definición de tipos para la integración con Vite.

## Requisitos Previos

- Node.js (versión recomendada: 14.x o superior)
- npm o yarn como gestor de paquetes

## Instalación

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/nombre-del-repositorio.git
    cd nombre-del-repositorio
    ```

2. Instalar las dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```

3. Ejecutar la aplicación en modo de desarrollo:
    ```bash
    npm run dev
    # o
    yarn dev
    ```

4. Abrir el navegador y visitar `http://localhost:3000` para ver la aplicación en funcionamiento.

## Scripts Disponibles

- `npm run dev` o `yarn dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build` o `yarn build`: Compila la aplicación para producción.
- `npm run serve` o `yarn serve`: Sirve la aplicación compilada localmente.

## Contribución

Las contribuciones son bienvenidas. Por favor, sigue las pautas del proyecto y asegúrate de que las pruebas y la documentación estén actualizadas.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
