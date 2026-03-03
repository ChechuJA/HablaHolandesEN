# 🇪🇸 HablaHolandésEN 🇳🇱

## Diccionario Español-Holandés con Modo EN

Una aplicación web interactiva para aprender holandés de forma divertida con el juego lingüístico "Modo EN".

![Preview](https://github.com/user-attachments/assets/7fc2d216-29c8-42a3-8efd-733e76b9edaf)

## ✨ Características

### 📚 Diccionario Trilingüe
- **Español**: Palabra original
- **Nederlands**: Traducción al holandés
- **Modo EN**: Transformación según la regla EN

### 🎮 Funcionalidades Interactivas
- **🔍 Búsqueda en Tiempo Real**: Busca palabras en cualquiera de los tres idiomas
- **🎲 Palabra Aleatoria**: Descubre nuevas palabras al azar
- **🌙 Modo Oscuro**: Alterna entre tema claro y oscuro (se guarda tu preferencia)

### 🎨 Diseño Moderno
- Interfaz limpia y profesional
- Tarjetas animadas con efectos hover
- Totalmente responsive
- Transiciones suaves

### 📖 ¿Qué es el Modo EN?

El **Modo EN** es un divertido juego lingüístico que transforma palabras españolas siguiendo estas reglas:

1. Toma cualquier palabra en español
2. Elimina la última vocal (a, e, i, o, u)
3. Añade "EN" al final

**Ejemplos:**
- Rápido → Rápid~~o~~ → **RápidEN**
- Casa → Cas~~a~~ → **CasEN**
- Perro → Perr~~o~~ → **PerrEN**
- Grande → Grand~~e~~ → **GrandEN**

## 🚀 Uso

Simplemente abre `index.html` en tu navegador web favorito. No requiere instalación ni dependencias.

### Opción 1: Abrir directamente
```bash
# Doble clic en index.html
# o desde la terminal:
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Opción 2: Servidor local
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (con http-server instalado)
npx http-server

# Luego visita http://localhost:8000
```

## 📁 Estructura del Proyecto

```
HablaHolandesEN/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos y temas (claro/oscuro)
├── script.js       # Lógica de la aplicación
└── README.md       # Documentación
```

## 🎯 Diccionario

El diccionario incluye más de 100 palabras en categorías como:
- Saludos y expresiones básicas
- Animales y naturaleza
- Colores y números
- Días de la semana y meses
- Familia y relaciones
- Lugares y objetos cotidianos
- Adjetivos comunes

## 🛠️ Tecnologías

- HTML5
- CSS3 (con variables CSS y animaciones)
- JavaScript vanilla (sin frameworks)
- localStorage para persistencia de preferencias

## 🌟 Características Técnicas

- ✅ Sin dependencias externas
- ✅ 100% JavaScript vanilla
- ✅ Responsive design
- ✅ Búsqueda en tiempo real con rendimiento optimizado
- ✅ Persistencia de tema con localStorage
- ✅ Animaciones CSS fluidas
- ✅ Accesible y semántico

## 📝 Licencia

Este proyecto está disponible para uso educativo y personal.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de:
- Añadir más palabras al diccionario
- Mejorar el diseño
- Agregar nuevas características
- Reportar bugs

---

Creado con ❤️ para aprender holandés de forma divertida