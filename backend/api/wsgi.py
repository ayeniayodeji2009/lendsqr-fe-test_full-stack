from backend.api.tmp.lendsqr_backend_server import app
import os


application = app

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    application.run(host="0.0.0.0", port=port)  # Pass the variable `port` directly