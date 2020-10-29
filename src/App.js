import { useState } from 'react';
import './App.css';

import fotoMerchan from './merchan.png'
import ReactDOM from 'react-dom';



const App = () => {
  const [cep, setCep] = useState(0)
  const [cidade, setCidade] = useState("Sem resultado")
  const [estado, setEstado] = useState('Sem resultado')
  const [endereco, setEndereco] = useState("Sem resultado")
  const [bairro, setBairro] = useState("Sem resultado")
  const [ddd, setDDD] = useState("Sem resultado")

  const [coords, setCoords] = useState("")


  const teste = () =>{   
    var valorCep = document.getElementById('cepValue')
    const url = "https://cep.awesomeapi.com.br/json/"+valorCep.value
    fetch(url)
    .then(res =>{
          
          return res.json()
      }).then(json =>{
          let cepp = json.cep
          let cidade = json.city
          let endereço = json.address_name
          let bairro = json.district
          let estado = json.state
          let ddd = json.ddd
          let coords = String(json.lat +","+json.lng)
          if(json.status == 400){
            return setCidade('Cep não encontrado'), setEstado('Cep não encontrado'), setEndereco('Cep não encontrado'),setBairro('Cep não encontrado'),setCoords('Cep não encontrado'), setDDD('Cep não encontrado')
          }
          if(json.status == 404){
            return setCidade('Cep não encontrado'), setEstado('Cep não encontrado'), setEndereco('Cep não encontrado'),setBairro('Cep não encontrado'),setCoords('Cep não encontrado'), setDDD('Cep não encontrado')
          }
          setCep(cepp)
          setCidade(cidade)
          setEstado(estado)
          setEndereco(endereço)
          setBairro(bairro)
          setCoords(coords)
          setDDD(ddd)
      })
  }



  return (
    <div>
      <header className="body">
      <div className="header">
          <p className="logoEscrita">BUSCAR CEP</p>
          <p className="inicio">Você está em início</p>
          <p className="dev">Site em desenvolvimento</p>
        </div>
        <div className="informacoesCep">
            <div className="boxInput">
              <input placeholder="Digite seu CEP aqui..." type='text' className="inputCep" id="cepValue"/>
              <button onClick={teste} className="botaoInput" id="botaoInputt">
                  <p>PESQUISAR CEP</p>                
              </button>
              {/* <a id="show" href={`https://www.google.com.br/maps/search/${cep}/@${coords}z`}>Ok</a> */}
            </div>
        </div>
        <div className="resultadosInput">
            <div className="barraRoxa">
            </div>
            <div>
              <h1 className="resultadoEstaticos">Cidade</h1>
              <p  className="resultadoNonEstatico">{cidade}</p>
            </div>

            <div className="barraRoxa">
            </div>
            <div>
              <h1 className="resultadoEstaticos">Estado</h1>
              <p  className="resultadoNonEstatico">{estado}</p>
            </div>

            <div className="barraRoxa">
            </div>
            <div>
              <h1 className="resultadoEstaticos">Bairro</h1>
              <p  className="resultadoNonEstatico">{bairro}</p>
            </div> 

            <div className="barraRoxa">
            </div>
            <div>
              <h1 className="resultadoEstaticosTipo">Endereço</h1>
              <p  className="resultadoNonEstaticoEnd">{endereco}</p>
            </div>

            <div className="barraRoxa">
            </div>
            <div>
              <h1 className="resultadoEstaticos">DDD</h1>
              <p  className="resultadoNonEstatico">{ddd}</p>
            </div> 
        </div>  
        <div className="merchan">
          <img src={fotoMerchan} className="fotoMerchan" />
          <div>
          <h1 className="tituloMerchan">Motivos de nos escolher! ;0</h1>
            <p className="subtitulosMechan">°Site em constante mudança</p>
            <p className="subtitulosMechan2">°Plataforma ativa 24/7</p>
            <p className="subtitulosMechan3">°Confiança e segurança nas suas buscas.</p>
            <p className="subtitulosMechan4">°Não armazenamos nenhum tipo de dado</p>
          </div>
          
        </div>
        <div className="anunciosAd">
            <h1 className="tituloAnun">Informações sobre CEP:</h1>
            <p className="descAnun">O CEP (Código de Endereçamento Postal) é um sistema de códigos que visa racionalizar o processo de encaminhamento e entrega de correspondências através da divisão do país em regiões postais. O Código de Endereçamento Postal brasileiro foi criado em 1972 e tinha apenas cinco dígitos. Atualmente, o CEP é composto por oito dígitos, cinco de um lado e três de outro.</p>
            <h1  className="tituloAnun">Regiões:</h1>
            <p  className="descAnun">O Brasil é dividido em dez regiões postais, que compõem o primeiro dos números do CEP:

            <p>°Região 0 - Grande São Paulo;</p>
            <p>°Região 1 - Interior de São Paulo;</p>
            <p>°Região 2 - Rio de Janeiro e Espírito Santo;</p>
            <p>°Região 3 - Minas Gerais;</p>
            <p>°Região 4 - Bahia e Sergipe;</p>
            <p>°Região 5 - Pernambuco, Alagoas, Paraíba e Rio Grande do Norte;</p>
            <p>°Região 6 - Ceará, Piauí, Maranhão, Pará, Amazonas, Acre, Amapá e Roraima;</p>
            <p>°Região 7 - Distrito Federal, Goiás, Tocantins, Mato Grosso, Mato Grosso do Sul e Rondônia;</p>
            <p> °Região 8 - Paraná e Santa Catarina;</p>
            <p> °Região 9 - Rio Grande do Sul.</p>
            </p>
        </div>
        <div  className="anunciosAd">
          <h1 className="tituloAnun">Entidades geográficas designadas pelo CEP:</h1>
          <p  className="descAnun">Do ponto de vista geográfico, até 1992, o CEP podia ser entendido como um código numérico para a designação de grandes áreas urbanas, formalmente identificando área de "Divisor de Subsetor" nos códigos de 5 dígitos. Desse modo fazia sentido a representação (alternativa) dos CEPs através de mapas.

          Com a inclusão dos 3 dígitos de sufixo, o CEP, por ser um recurso de apoio logístico nas entregas, passou a designar elementos mais arbitrários, sem uma representação em mapa. Para fins de geocodificação, todavia, mesmo sem uma representação oficial, o CEP pode ser conceituado como entidade geográfica condicionada ao seu tipo. Em particular o CEP comum (sufixos de 001 a 899) designa, como exposto acima, uma região delimitada por um conjunto de faces de quadra.</p>
          <h1 className="tituloAnun">Quantidade de combinações:</h1>
          <p  className="descAnun">Quantos CEPs podem ser formados para logradouros codificados no Brasil? 90000000 ou 9.107 CEPs

          <p>Para cada região e divisão de subsetor:</p>

          <p>°Região x sub-região x setor x subsetor x divisor de subsetor = 10 x 10 x 10 x 10 x 10 = 105</p>
          <p>°O primeiro sufixo tem: [0,8] = 9 algarismos</p>
          <p>°O segundo sufixo: [0,9] = 10 algarismos</p>
          <p>°E o terceiro: [0,9] = 10 algarismos</p>
          <p>°Formando: 9 . 10 . 10 . 105 = 9.107 = 90000000 CEPs</p></p>
        </div>
      </header>

    </div>
  );
}

export default App;
