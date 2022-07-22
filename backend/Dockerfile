FROM python:3.10.5-slim-buster

RUN mkdir -p /app/backend

WORKDIR /app/backend

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]

# https://docs.docker.com/language/python/build-images/
