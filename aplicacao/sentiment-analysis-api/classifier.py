# import
import re
import json
import torch
import random
import os
#import pandas as pd
from tqdm import tqdm
from torch.utils.data import Dataset
#from sklearn.metrics import f1_score
#from sklearn.model_selection import train_test_split
#imports OpenAI
import openai
from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file

#openai.api_key = os.environ["OPENAI_API_KEY"]

#configure aqui sua apikey da openai
openai.api_key = 'SUA_API_KEY'

def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]

def predict(text):
    prompt_text = f"""
        Analyze the sentiment (positive, neutral or negative) of the following text: '''{text}'''.

        The response, in JSON format, must only contain the sentiment, anger (yes or no), product, brand and \
            text with the '''{text}''' value translated to brazilian portuguese.

        The default value is 'Não fornecido'.

        Please translate keys and values to portuguese from brazil.

        Do not explain this.
        """
    response = get_completion(prompt_text)

    return response

    #prompt_text = f"""
    #Please keep {response} JSON format, but translate keys and values to portuguese from brazil. 
    
    #No explanation is needed.
    #"""
    #response = get_completion(prompt_text)