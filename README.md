# Smart Support Inbox

A simple customer support inbox built with Django REST Framework and Next.js.

## Features

- JWT Authentication
- View all conversations
- View conversation details and messages
- Send replies to customers
- AI reply suggestion (rule-based)
- Lock and unlock conversations
- Simple Next.js frontend
- Login and logout functionality

## Tech Stack

### Backend

- Python
- Django
- Django REST Framework
- Simple JWT
- SQLite

### Frontend

- Next.js
- React
- Axios
- TypeScript

## Project Structure

```
smart-support-inbox/
│
├── backend/
├── frontend/
└── README.md
```

## Backend Setup

```bash
cd backend

python -m venv ../venv

source ../venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Create a superuser :

```bash
python manage.py createsuperuser
```

Run the server:

```bash
python manage.py runserver
```

The backend will run on:

```
http://127.0.0.1:8000
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

The frontend will run on:

```
http://localhost:3000
```

## Login

Use the Django superuser account to log in.

## API Endpoints

| Method | Endpoint                                 | Description             |
| ------ | ---------------------------------------- | ----------------------- |
| POST   | `/api/token/`                            | Login                   |
| GET    | `/api/conversations/`                    | List conversations      |
| GET    | `/api/conversations/<id>/`               | Conversation details    |
| POST   | `/api/conversations/<id>/reply/`         | Send reply              |
| GET    | `/api/conversations/<id>/suggest-reply/` | Get AI reply suggestion |
| POST   | `/api/conversations/<id>/lock/`          | Lock conversation       |
| POST   | `/api/conversations/<id>/unlock/`        | Unlock conversation     |

## Notes

- AI reply suggestions are generated using a simple rule-based approach.
- Celery and Redis were planned for asynchronous processing but are not included in this version.
- SQLite is used for simplicity.

## Future Improvements

- Add Celery and Redis for background tasks
- Replace rule-based suggestions with an LLM
- Improve frontend UI
- Add automated tests
- Deploy the application
