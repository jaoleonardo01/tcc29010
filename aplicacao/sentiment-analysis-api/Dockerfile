FROM python:3.8-slim-buster
WORKDIR /api
#ENV TZ=America/sao_paulo

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY bin/start_server bin/start_server
COPY api.py api.py
COPY classifier.py classifier.py

#Configure aqui a sua APIKEY
#RUN echo 'export OPENAI_API_KEY="API_KEY"' >> ~/.zshrc
#RUN ["/bin/bash", "-c", "source ~/.zshrc"]
#RUN echo $OPENAI_API_KEY

EXPOSE 8000
#RUN mkdir -p ./assets
RUN chmod 777 bin/start_server
CMD ["bin/start_server"]