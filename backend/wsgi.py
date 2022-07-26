from app import app
import os

if __name__ == "__main__":
    ENVIRONMENT_PORT = os.environ.get("APP_PORT", 5001)
    app.run(host='0.0.0.0', port=ENVIRONMENT_PORT)