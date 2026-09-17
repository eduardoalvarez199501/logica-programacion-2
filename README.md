# 🌡️ Conversor de Temperatura

<p align="center">
  <strong>Proyecto de Lógica de Programación 2</strong>
</p>

<p align="center">
  Aplicación web interactiva para realizar conversiones de temperatura de forma rápida, sencilla y visual.
</p>

<p align="center">
 GitHub pages (LIVE DEMO)
https://eduardoalvarez199501.github.io/logica-programacion-2/</p>
---
## 📋 Descripción

Este proyecto consiste en una aplicación web desarrollada con **HTML, CSS, Bootstrap y JavaScript**, cuyo objetivo es practicar conceptos fundamentales de lógica de programación mediante la conversión de unidades de temperatura.

La aplicación permite al usuario seleccionar el tipo de temperatura que desea ingresar mediante un **switch interactivo** y obtener automáticamente los valores equivalentes.

### 🔄 Conversiones disponibles

* 🌡️ **Celsius → Fahrenheit + Kelvin**
* 🌡️ **Fahrenheit → Celsius + Kelvin**

Los resultados se muestran directamente en la interfaz mediante el **DOM** y también pueden consultarse desde la **consola del navegador**.

---

## ✨ Características

* 🔢 Entrada de temperaturas mediante un campo de texto.
* 🔄 Switch interactivo para cambiar el tipo de conversión.
* ⚡ Conversión instantánea mediante JavaScript.
* ✅ Validación de los datos ingresados.
* ⚠️ Mensajes de error cuando se introduce información inválida.
* 🎨 Interfaz moderna y visualmente atractiva.
* 📱 Diseño completamente responsive.
* 💻 Resultados mostrados mediante el DOM.
* 🖥️ Resultados disponibles también en la consola del navegador.
* 📐 Resultados mostrados con hasta dos decimales.
* 🧩 Código separado en HTML, CSS y JavaScript.

---

## 🧮 Fórmulas utilizadas

### Celsius → Fahrenheit

```text
°F = (°C × 9/5) + 32
```

### Celsius → Kelvin

```text
K = °C + 273.15
```

### Fahrenheit → Celsius

```text
°C = (°F - 32) × 5/9
```

### Fahrenheit → Kelvin

Primero se convierte Fahrenheit a Celsius:

```text
°C = (°F - 32) × 5/9
```

Después:

```text
K = °C + 273.15
```

---

## 🧪 Ejemplos de prueba

| Temperatura | Conversión | Resultado |
| ----------: | ---------- | --------: |
|       45 °C | Fahrenheit |    113 °F |
|       45 °C | Kelvin     |  318.15 K |
|       14 °C | Fahrenheit |   57.2 °F |
|       14 °C | Kelvin     |  287.15 K |
|        0 °C | Fahrenheit |     32 °F |
|        0 °C | Kelvin     |  273.15 K |
|      100 °C | Fahrenheit |    212 °F |
|      100 °C | Kelvin     |  373.15 K |
|      -10 °C | Fahrenheit |     14 °F |
|      -10 °C | Kelvin     |  263.15 K |

---

## ⚠️ Validación de datos

La aplicación verifica que el usuario introduzca una temperatura válida.

Por ejemplo, si el usuario escribe:

```text
hola
```

o:

```text
abc123
```

la aplicación muestra un mensaje de error y solicita nuevamente una entrada válida.

También se verifica que el campo no esté vacío.

### ¿Por qué se utiliza `Number()`?

Los valores obtenidos mediante un `<input>` HTML llegan inicialmente como texto (`String`).

Por ejemplo:

```javascript
const valor = input.value;
```

Aunque el usuario escriba:

```text
45
```

JavaScript recibe:

```javascript
"45"
```

Por eso se realiza la conversión:

```javascript
const temperatura = Number(valor);
```

Ahora el valor es:

```javascript
45
```

y puede utilizarse en operaciones matemáticas.

### ¿Por qué se utiliza `Number.isFinite()`?

`typeof` por sí solo no es suficiente para validar un número, ya que en JavaScript:

```javascript
typeof NaN
```

devuelve:

```text
"number"
```

Por esta razón se utiliza:

```javascript
Number.isFinite(temperatura)
```

para comprobar que el valor sea realmente un número válido.

---

## 🛠️ Tecnologías utilizadas

### HTML5

Utilizado para crear la estructura y los elementos de la aplicación.

### CSS3

Utilizado para personalizar colores, tamaños, tarjetas, botones, switch y efectos visuales.

### Bootstrap 5

Utilizado para facilitar:

* Diseño responsive.
* Grid de resultados.
* Componentes visuales.
* Adaptación a diferentes tamaños de pantalla.

### JavaScript

Utilizado para:

* Obtener los datos del usuario.
* Validar entradas.
* Realizar las conversiones.
* Manejar eventos.
* Cambiar dinámicamente el contenido de la página.
* Mostrar resultados en el DOM.
* Mostrar información en la consola.

---

## 📁 Estructura del proyecto

```text
logica-programacion-2/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

### `index.html`

Contiene la estructura principal de la aplicación:

* Título.
* Switch.
* Campo de entrada.
* Botón de conversión.
* Área de resultados.
* Fórmulas.

### `styles.css`

Contiene los estilos personalizados:

* Fondo.
* Tarjetas.
* Switch.
* Botones.
* Resultados.
* Diseño responsive.
* Tipografía y tamaños.

### `script.js`

Contiene toda la lógica de programación:

* Eventos.
* Validaciones.
* Conversiones.
* Manipulación del DOM.
* Mensajes de error.

---

## 🚀 Cómo utilizar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/logica-programacion-2.git
```

### 2. Entrar a la carpeta

```bash
cd logica-programacion-2
```

### 3. Abrir el proyecto

Abrir el archivo:

```text
index.html
```

en un navegador web.

También puedes utilizar **Visual Studio Code + Live Server** para ejecutar el proyecto.

---

## 🖥️ Funcionamiento

El flujo principal de la aplicación es:

```text
┌──────────────────────┐
│ Usuario ingresa dato │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Validar entrada      │
└──────────┬───────────┘
           ↓
      ¿Es válido?
       /       \
     NO         SÍ
     ↓           ↓
  Mostrar      Aplicar
   error       fórmula
                 ↓
          Mostrar resultado
                 ↓
          Mostrar en DOM
                 ↓
          Mostrar en consola
```

---

## 🎯 Objetivo académico

Este proyecto fue desarrollado como práctica de **Lógica de Programación 2**, con el objetivo de aplicar conceptos fundamentales de programación y desarrollo web.

### Conceptos practicados

* Variables.
* Tipos de datos.
* Conversión de tipos.
* Operadores matemáticos.
* Condicionales `if / else`.
* Funciones.
* Eventos.
* Manipulación del DOM.
* Validación de datos.
* Entrada y salida de información.
* Uso de Bootstrap.
* Diseño responsive.
* Separación de responsabilidades entre HTML, CSS y JavaScript.

---

## 👨‍💻 Autor

**Eduardo Alvarez**

🎓 Generation México — Cohorte 71

📚 Proyecto: **Lógica de Programación 2**

---

<p align="center">
  🌡️ <strong>Convertir • Validar • Aprender • Programar</strong> 💻
</p>

