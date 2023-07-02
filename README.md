### Instituto Federal de Santa Catarina
Aluno: João Leonardo Martins\
TCC 29010\
Orientador: Prof. Mario de Noronha Neto, Dr.

### APLICAÇÃO WEB PARA ANÁLISE DE SENTIMENTOS UTILIZANDO A TECNOLOGIA TRANSFORMERS
Repositório com códigos de testes de desenvolvimento e aplicação do trabalho de conclusão de curso.

**Para download dos arquivos do projeto:**
> git clone https://github.com/jaoleonardo01/tcc29010

**Para códigos relacionados a testes:**
> cd tcc29010/testes_desenvolvimento


**Para execução dos contêineres com a aplicação:**

Edite o arquivo <ins>classifier.py</ins> com a sua OpenAI API key, obtida através de https://platform.openai.com/account/api-keys:

> vi tcc29010/aplicacao/sentiment-analysis-api/classifier.py

Inicialize os contêineres:

> cd tcc29010/aplicacao\
> sudo docker-compose up --build

**Para acesso à aplicação:**
> http://localhost:3000

**Caso prefira testar através da API:**
> curl -X 'POST'   'http://localhost:8000/predict?text=TEXTO%20DE%20EXEMPLO'   -H 'accept: application/json'   -d ''

ou, para detalhes da API:

> http://localhost:8000/docs



Referências:\
https://medium.com/data-hackers/an%C3%A1lise-de-sentimentos-em-portugu%C3%AAs-utilizando-pytorch-e-python-91a232165ec0
https://www.kaggle.com/code/evilmage93/gpt-2-finetuning-on-sentiment-classification/notebook
