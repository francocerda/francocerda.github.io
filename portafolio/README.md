# Franco Cerda Álvarez - Portafolio Profesional

![Portafolio Preview](assets/images/preview.png)

## 🚀 Sobre el Proyecto

Este es mi portafolio profesional donde muestro mis habilidades, proyectos y experiencia como estudiante de Ingeniería Civil Informática especializado en Inteligencia Artificial y Ciencia de Datos.

## 🌟 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Rendimiento Optimizado**: Código limpio y carga rápida
- **SEO Optimizado**: Meta tags y estructura semántica
- **Animaciones**: Efectos visuales atractivos con AOS y CSS personalizado

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5
- **Animaciones**: AOS (Animate On Scroll)
- **Iconos**: Font Awesome 6
- **Tipografías**: Google Fonts (Inter, JetBrains Mono)
- **Hosting**: GitHub Pages

## 📁 Estructura del Proyecto

```
mi_portafolio/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos personalizados
│   ├── js/
│   │   └── script.js       # JavaScript personalizado
│   └── images/             # Imágenes y recursos
├── README.md               # Este archivo
├── .gitignore             # Archivos ignorados por Git
└── CNAME                  # Dominio personalizado (opcional)
```

## 🚀 Instalación y Uso

### Para desarrollo local:

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/francocerda/francocerda.github.io.git
   cd francocerda.github.io
   ```

2. **Abre el proyecto**
   - Abre `index.html` directamente en tu navegador, o
   - Usa un servidor local como Live Server en VS Code

### Para producción (GitHub Pages):

1. **Fork este repositorio**
2. **Personaliza el contenido** con tu información
3. **Habilita GitHub Pages** en la configuración del repositorio
4. **Tu sitio estará disponible** en `https://tuusuario.github.io`

## 🎨 Personalización

### Colores y Temas

Los colores están definidos en variables CSS en `assets/css/styles.css`:

```css
:root {
    --primary-bg: #ffffff;
    --accent-color: #3b82f6;
    --text-primary: #1e293b;
    /* ... más variables */
}
```

### Contenido

1. **Información personal**: Edita las secciones en `index.html`
2. **Proyectos**: Actualiza la sección de proyectos con tus trabajos
3. **Habilidades**: Modifica los iconos y tecnologías
4. **Contacto**: Cambia los enlaces de redes sociales

### Imágenes

- Agrega tu foto de perfil en `assets/images/`
- Actualiza las referencias en el HTML
- Optimiza las imágenes para web (WebP recomendado)

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 **Mobile**: 320px - 768px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1024px+

## ⚡ Optimizaciones de Rendimiento

- **Lazy loading** de imágenes
- **CDN** para librerías externas
- **Minificación** de CSS y JS en producción
- **Preconnect** a recursos externos
- **Service Worker** (opcional)

## 🔧 Scripts Disponibles

Si usas un bundler como Webpack o Vite:

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build

## 📊 Analytics

Para agregar Google Analytics:

1. Crea una cuenta en Google Analytics
2. Agrega el código de seguimiento en el `<head>` de `index.html`

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🌐 Deploy

### GitHub Pages (Recomendado)
1. Push tu código al repositorio
2. Ve a Settings > Pages
3. Selecciona la rama `main` como source
4. ¡Listo! Tu sitio estará en línea

### Otros servicios
- **Netlify**: Conecta tu repo y deploy automático
- **Vercel**: Import desde GitHub y deploy
- **Firebase Hosting**: `firebase deploy`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: amazing feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📧 Contacto

Franco Cerda Álvarez
- 📧 Email: franco.cerda@sansano.usm.cl
- 💼 LinkedIn: [linkedin.com/in/franco-cerda](https://linkedin.com/in/franco-cerda)
- 🐙 GitHub: [github.com/francocerda](https://github.com/francocerda)
- 🌐 Portfolio: [francocerda.github.io](https://francocerda.github.io)

---

⭐ Si este proyecto te fue útil, ¡dale una estrella en GitHub!

## 📝 Changelog

### v1.0.0 (2025-09-15)
- ✨ Versión inicial del portafolio
- 🎨 Diseño moderno y responsivo
- ⚡ Optimizaciones de rendimiento
- 📱 Soporte completo móvil