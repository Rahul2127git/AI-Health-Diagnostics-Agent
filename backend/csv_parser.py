import pandas as pd

def extract_csv(file):

    df = pd.read_csv(file.file)

    return df.to_dict()
