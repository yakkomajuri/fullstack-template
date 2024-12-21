# Fullstack Template

## Backend

The backend is setup with a Django app using the `myapp` name. Replace this name everywhere with the app name you'd like to use.

Once you've done this, you need to create the initial migration. Create a local Postgres database and update the relevant config so you can run:

```sh
python manage.py makemigrations myapp
```

And after that:

```sh
python manage.py migrate
```

To run the server use:

```sh
DEBUG=1 python manage.py runserver
```

And to create a super user that you can use to access the admin dashboard at `/admin/`, run:

```sh
python manage.py createsuperuser
```