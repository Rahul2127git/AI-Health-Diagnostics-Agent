from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pdf_parser import extract_pdf
from csv_parser import extract_csv
from image_ocr import extract_image
from model1_parameter_analysis import analyze_parameters
from report_generator import generate_report

app = FastAPI()

# Enable CORS so frontend (Vercel) can call backend (Render)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Optional homepage
@app.get("/")
def home():
    return {"message": "AI Health Diagnostics API is running"}

# Main analyze endpoint
@app.post("/analyze")
async def analyze(file: UploadFile):

    # Detect file type
    if file.filename.endswith(".pdf"):
        data = extract_pdf(file)

    elif file.filename.endswith(".csv"):
        data = extract_csv(file)

    else:
        data = extract_image(file)

    # Run AI parameter analysis
    analysis = analyze_parameters(data)

    # Generate health report
    report = generate_report(analysis)

    return {"report": report}
