FROM python:3.10.5-slim-buster

WORKDIR /backend

RUN pip install --upgrade pip

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

# https://docs.docker.com/language/python/build-images/
