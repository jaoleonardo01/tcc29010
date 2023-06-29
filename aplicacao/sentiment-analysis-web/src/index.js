import * as Plotly from 'plotly.js';

document.getElementById("submit").addEventListener("click", process_input);

// Configuring how to handle the API Requests
// function to handle success
function success() {
    var data = JSON.parse(this.responseText); //parse the string to JSON
    update_image(data['Sentimento'])
    print_all(data['Sentimento'],data['Raiva'],data['Produto'],data['Marca'],data['Avaliacao'])
    //print_sentimento(data['Sentimento'])
    //update_plot(data['probabilities'])
}

// function to handle error
function error(err) {
    console.log('Request Failed', err); //error details will be in the "err" object
}

var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
xhr.onload = success; // call success function if request is successful
xhr.onerror = error;  // call error function if request failed


function process_input() {
    var user_input = document.getElementById('user_input').value;
    // open a POST request
    xhr.open('POST', "http://127.0.0.1:8000/predict?text=" + JSON.stringify({'text': user_input}));
    xhr.send(JSON.stringify({'text': user_input})); // send the request to the server.
}

function update_plot(predicted_data){
    var layout = {  margin: {l: 25, r: 20, b: 25, t: 25, pad: 5 },
                    title: 'Probabilities',
                    font:{ family: 'Raleway, sans-serif'},
                }

    var data = [{predicted_data,
            x: Object.keys(predicted_data),
            y: Object.values(predicted_data),
            type: 'bar'
        }];
      Plotly.newPlot('myDiv', data, layout, {displayModeBar: false});
}

function update_image(Sentimento){
    if (Sentimento === "positivo"){
        document.getElementById("imgClickAndChange").src = "assets/positive.png";
    }
    else if (Sentimento === "neutro"){
        document.getElementById("imgClickAndChange").src = "assets/neutral.png";
    }
    else if (Sentimento === "negativo"){
        document.getElementById("imgClickAndChange").src = "assets/negative.png";
    }
}

function print_all(Sentimento,Raiva,Produto,Marca,Texto){
    var divResultadoSentimento = document.getElementById('resultadoSentimento');
    var divResultadoRaiva = document.getElementById('resultadoRaiva');
    var divResultadoProduto = document.getElementById('resultadoProduto');
    var divResultadoMarca = document.getElementById('resultadoMarca');
    var divResultadoTexto = document.getElementById('resultadoTexto');
    divResultadoSentimento.textContent = 'Sentimento: ' + Sentimento;
    divResultadoRaiva.textContent = 'Raiva: ' + Raiva;
    divResultadoProduto.textContent = 'Produto: ' + Produto;
    divResultadoMarca.textContent = 'Marca: ' + Marca;
    divResultadoTexto.textContent = 'Avaliação: ' + Texto;
}