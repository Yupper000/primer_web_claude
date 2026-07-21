# primer_web_claude

Sitio web estático (HTML/CSS + imágenes y PDFs) para "Motores Emocionales / YOS". No hay
gestor de paquetes, build ni tests: son archivos estáticos que se ven en el navegador,
en GitHub Pages (carpeta `docs/`) o con Quick-Look en Mac.

## Cursor Cloud specific instructions

- Este repo NO tiene dependencias, build ni suite de tests. No hay `package.json`,
  `requirements.txt` ni similar. El "entorno de desarrollo" es simplemente un servidor de
  archivos estáticos.
- La rama base `main` solo contiene `README.md`. El contenido real del sitio
  (`docs/index.html`, `docs/v9x16/`, `HANDOFF/`, `yos/`) vive en las ramas de feature
  (por ejemplo `cursor/taller-motores-emocionales-paz-2654`). Para previsualizar ese
  contenido sin ensuciar tu rama, usa un worktree:
  `git worktree add /tmp/site-preview origin/<rama-con-contenido>`.
- Servir el sitio en desarrollo (Python ya está instalado, sin dependencias):
  `python3 -m http.server 8080` desde la raíz del contenido, luego abre
  `http://localhost:8080/docs/index.html`.
- El HTML carga Google Fonts desde CDN externo; sin acceso a internet las fuentes hacen
  fallback a serif/sans-serif del sistema (no rompe el render).
- No hay lint/test/build que ejecutar. Verificación = servir los archivos y comprobar en
  el navegador que la página y los assets (imágenes/PDF) cargan (HTTP 200).
