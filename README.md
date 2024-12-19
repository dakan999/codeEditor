# Online Code Editor

## Требования
- Node.js версии 16.x или выше
- npm версии 7.x или выше
- Браузер с поддержкой ES6

## Установка
1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/your-username/code-editor.git
    cd code-editor
    ```

2. Установите зависимости:
    ```bash
    npm install
    ```

3. Запустите приложение:
    ```bash
    npm start
    ```

Приложение будет доступно на [http://localhost:3000](http://localhost:3000).

## Разработка

1. Для имитации сервера используйте `json-server`:
    ```bash
    npm run start-server
    ```

## Структура проекта
- `/src` — исходный код приложения
   - `/components` — React-компоненты
   - `/utils` — вспомогательные функции
- `/server` — данные для json-server

## Планы на расширение
1. Добавить поддержку следующих языков программирования:
   - Python
   - Java
2. Реализовать возможность запуска тестов кода с использованием популярных библиотек.
3. Добавить авторизацию для сохранения проектов.
4. Улучшить интерфейс редактора, включая светлую/темную тему.
