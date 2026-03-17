# Kontur Barbershop — GitHub Pages ready

Этот архив подготовлен для деплоя на GitHub Pages.

## Что исправлено
- убраны monorepo/Replit-зависимости `catalog:` и `workspace:*`
- `vite.config.ts` переведён на standalone-конфиг
- `base` выставлен в `./`, чтобы сайт открывался из GitHub Pages без ручной правки имени репозитория
- убрана зависимость роутера от `BASE_URL`
- добавлен workflow `.github/workflows/deploy.yml`

## Как залить
1. Создай новый репозиторий на GitHub.
2. Залей содержимое этого архива в ветку `main`.
3. В GitHub открой **Settings → Pages**.
4. В разделе **Build and deployment** выбери **GitHub Actions**.
5. После пуша сайт соберётся автоматически.

## Локальный запуск
```bash
npm install
npm run dev
```

## Продакшн-сборка
```bash
npm install
npm run build
```
Готовый сайт появится в папке `dist`.
