FROM python:3.10.5-slim-buster

WORKDIR /backend

RUN pip install --upgrade pip

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

RUN pip install gunicorn

EXPOSE 5002

# 4 workers
CMD [ "gunicorn", "--bind", "0.0.0.0:5002", "wsgi:app"]

# https://docs.docker.com/language/python/build-images/
