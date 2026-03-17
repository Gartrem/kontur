# Kontur Barbershop — static GitHub Pages version

Это полностью статическая версия сайта без React, Vite, npm и GitHub Actions.

## Как загрузить на GitHub Pages

1. Загрузите содержимое этой папки в репозиторий.
2. Откройте **Settings → Pages**.
3. В разделе **Build and deployment** выберите:
   - **Source** → `Deploy from a branch`
   - **Branch** → `main`
   - **Folder** → `/ (root)`
4. Сохраните настройки.
5. Откройте ссылку Pages через 1–2 минуты.

## Почему это должно убрать белый экран

Здесь нет сборки, зависимостей и рантайма Vite. GitHub Pages просто открывает `index.html` и статические файлы из `public/`.
