from google.oauth2 import id_token
from google.auth.transport.requests import Request
from config import Config
import logging

# Configure basic logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def verify_google_token(token):
    try:
        idinfo = id_token.verify_oauth2_token(token, Request(), Config.GOOGLE_CLIENT_ID)
        return idinfo
    except Exception as e:
        logging.error(f"Error verifying Google token: {e}")
        return None