from typing import Dict
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from classifier import *
import time

app = FastAPI()

#Allowing CORS
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SentimentRequest(BaseModel):
    text:str

class SentimentResponse(BaseModel):
    Sentimento: str
    Raiva: str
    Produto: str
    Marca: str
    Avaliacao: str

@app.get("/")
async def root():
    return {"message": "Funcionou!"}

@app.post("/predict",response_model = SentimentResponse)
async def getpredict(text: str):
    JSONResponse  = predict(str(text))
    print(JSONResponse)
    DicResponse  = json.loads(JSONResponse)
    return SentimentResponse(
        Sentimento = DicResponse["sentimento"].lower(),
        Raiva = DicResponse["raiva"].lower(),
        Produto = DicResponse["produto"].lower(),
        Marca = DicResponse["marca"].lower(),
        Avaliacao = DicResponse["texto"].lower()
    )