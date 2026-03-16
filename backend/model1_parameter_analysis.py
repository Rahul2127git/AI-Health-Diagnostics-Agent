reference_ranges = {

    "glucose": (70,100),
    "cholesterol": (0,200),
    "triglycerides": (0,150),
    "hemoglobin": (12,18)
}

def analyze_parameters(data):

    results = {}

    for key,value in reference_ranges.items():

        if key in str(data):

            results[key] = "Detected"

    return results
