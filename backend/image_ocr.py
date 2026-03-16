import pytesseract
from PIL import Image
import io

def extract_image(file):

    img = Image.open(io.BytesIO(file.file.read()))

    text = pytesseract.image_to_string(img)

    return text
