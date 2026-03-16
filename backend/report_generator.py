def generate_report(results):

    report = "Health Diagnostic Report\n\n"

    for k,v in results.items():

        report += f"{k} : {v}\n"

    report += "\nRecommendation: Consult healthcare professional."

    return report
