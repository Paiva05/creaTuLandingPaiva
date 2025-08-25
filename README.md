# Mi Tienda Online

¡Bienvenido al repositorio de **Mi Tienda Online**! Esta es una aplicación web de e-commerce construida con React, que muestra una barra de navegación con un logo, un carrito de compras y enlaces a diferentes categorías de productos.

## Características

* **Componentes Modulares:** La aplicación está dividida en componentes reutilizables como `NavBar`, `CartWidget` e `ItemListContainer`.

* **Estilos en Línea:** Los estilos se aplican directamente a los componentes usando la propiedad `style`.

* **Navegación por Categorías:** La barra de navegación incluye enlaces para categorías de productos, como "Celulares", "Laptops" y "Accesorios".

* **Contador de Carrito:** El `CartWidget` incluye una burbuja estática que simula la cantidad de productos en el carrito.

## Tecnologías Utilizadas

* **React:** Biblioteca principal para la construcción de la interfaz de usuario.

* **JavaScript (JSX):** Para la lógica y la estructura de los componentes.

* **CSS en Línea:** Para estilizar los componentes directamente en el código.

## Cómo Empezar

Para correr el proyecto localmente, sigue estos pasos:

1.  Clona este repositorio:

    ```
    git clone https://github.com/Paiva05/creaTuLandingPaiva.git
    ```

2.  Navega al directorio del proyecto:

    ```
    cd creaTuLandingPaiva
    ```

3.  Instala las dependencias necesarias:

    ```
    npm install
    ```

4.  Inicia el servidor de desarrollo:

    ```
    npm run dev
    ```

## Estructura del Proyecto

* `src/App.js`: Componente principal que renderiza toda la aplicación.

* `src/components/NavBar.js`: Contiene la barra de navegación y los enlaces de categorías.

* `src/components/CartWidget.js`: Contiene el ícono del carrito de compras con su burbuja de notificación.

* `src/components/ItemListContainer.js`: Componente que muestra el mensaje de bienvenida.
