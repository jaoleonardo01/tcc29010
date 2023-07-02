### Instituto Federal de Santa Catarina
Aluno: João Leonardo Martins\
TCC 29010\
Orientador: Prof. Mário de Noronha Neto, Dr.

### APLICAÇÃO WEB PARA ANÁLISE DE SENTIMENTOS UTILIZANDO A TECNOLOGIA TRANSFORMERS
Repositório com códigos de testes de desenvolvimento e aplicação do trabalho de conclusão de curso.

**Para download dos arquivos do projeto:**
> git clone https://github.com/jaoleonardo01/tcc29010

**Para códigos relacionados a testes:**
> cd tcc29010/testes_desenvolvimento


**Para execução dos contêineres com a aplicação:**
> cd tcc29010/aplicacao\
> sudo docker-compose up --build

**Para acesso à aplicação:**
> http://localhost:3000

**Caso prefira testar através da API:**
> curl -X 'POST'   'http://localhost:8000/predict?text=TEXTO%20DE%20EXEMPLO'   -H 'accept: application/json'   -d ''
