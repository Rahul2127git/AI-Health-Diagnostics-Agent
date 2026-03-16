from fastapi import FastAPI, UploadFile
from pdf_parser import extract_pdf
from csv_parser import extract_csv
from image_ocr import extract_image
from model1_parameter_analysis import analyze_parameters
from report_generator import generate_report

app = FastAPI()

@app.post("/analyze")
async def analyze(file: UploadFile):

    if file.filename.endswith(".pdf"):
        data = extract_pdf(file)

    elif file.filename.endswith(".csv"):
        data = extract_csv(file)

    else:
        data = extract_image(file)

    analysis = analyze_parameters(data)

    report = generate_report(analysis)

    return {"report": report}
