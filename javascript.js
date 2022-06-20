// --------------------------
var carta1 = {
    nome: "Globin",
    imagem:
      "https://pm1.narvii.com/6547/497b3625f161b4847a9eb557813023526a339886_hq.jpg",
    atributos: {
      ataque: 4,
      defesa: 2,
      magia: 1,
      velocidade: 10
    }
  };
  // --------------------------
  var carta2 = {
    nome: "Cyclop",
    imagem: "https://newtonrocha.files.wordpress.com/2018/08/ciclope.jpg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 1,
      velocidade: 3
    }
  };
  // -------------------------
  var carta3 = {
    nome: "Minotauro",
    imagem:
      "https://i.pinimg.com/originals/99/6a/1b/996a1b15406ebafbeff89d1d0167cb64.jpg",
    atributos: {
      ataque: 7,
      defesa: 6,
      magia: 2,
      velocidade: 5
    }
  };
  // --------------------------
  var carta4 = {
    nome: "Orc",
    imagem:
      "https://i.pinimg.com/originals/d1/ae/d4/d1aed4f59dc732bc09bb42d520b15293.jpg",
    atributos: {
      ataque: 6,
      defesa: 4,
      magia: 3,
      velocidade: 5
    }
  };
  // --------------------------
  var carta5 = {
    nome: "Lobisomem",
    imagem:
      "https://i.pinimg.com/736x/b3/5b/f9/b35bf94a33976732671fb4db9876d82e.jpg",
    atributos: {
      ataque: 9,
      defesa: 2,
      magia: 3,
      velocidade: 12
    }
  };
  // --------------------------
  var carta6 = {
    nome: "Mago eletrico",
    imagem:
      "https://i.pinimg.com/236x/4c/0c/b9/4c0cb9f3e8371d7419a4aefdf02a32da.jpg",
    atributos: {
      ataque: 8,
      defesa: 2,
      magia: 15,
      velocidade: 5
    }
  };
  // --------------------------
  var carta7 = {
    nome: "Dragão de Fogo",
    imagem:
      "https://i.pinimg.com/236x/88/28/04/88280437f5b2e912a391ece35b1aa9ee--fantasy-creatures-mythical-creatures.jpg",
    atributos: {
      ataque: 12,
      defesa: 4,
      magia: 17,
      velocidade: 2
    }
  };
  // --------------------------
  var carta8 = {
    nome: "Dragão eletrico",
    imagem:
      "http://pm1.narvii.com/6933/b9652304f00eec1adb69e018850c51208ba8bde0r1-183-275v2_00.jpg",
    atributos: {
      ataque: 14,
      defesa: 5,
      magia: 18,
      velocidade: 5
    }
  };
  // --------------------------
  var carta9 = {
    nome: "Volibear",
    imagem: "https://pbs.twimg.com/media/EVR5Q-nXYAAypkx.png",
    atributos: {
      ataque: 9,
      defesa: 5,
      magia: 14,
      velocidade: 15
    }
  };
  // --------------------------
  var carta10 = {
    nome: "Gigante",
    imagem:
      "https://pm1.narvii.com/6570/a5ac6886c9e14e6b7cf7eadf9c3884585cb2c47b_hq.jpg",
    atributos: {
      ataque: 12,
      defesa: 17,
      magia: 3,
      velocidade: 2
    }
  };
  // --------------------------
  var carta11 = {
    nome: "Ghost",
    imagem:
      "https://4.bp.blogspot.com/-Ob7lOi6_EQg/WfTiL6uH2NI/AAAAAAAAzZg/5lIHeFQr4oAuY95W4f-GmeuArUIcJwfJQCLcBGAs/s1600/elena-barbu-kingofh-ghost.jpg",
    atributos: {
      ataque: 5,
      defesa: 1,
      magia: 7,
      velocidade: 8
    }
  };
  // --------------------------
  var carta12 = {
    nome: "Esqueleto",
    imagem:
      "http://pm1.narvii.com/6307/f8d427d7c2e569a7de38c7f4321e52e9f593b218_00.jpg",
    atributos: {
      ataque: 6,
      defesa: 4,
      magia: 1,
      velocidade: 10
    }
  };
  // --------------------------
  var carta13 = {
    nome: "Demon",
    imagem:
      "https://i.pinimg.com/originals/24/06/c3/2406c3a2b28c53160e2819a96dab34de.jpg",
    atributos: {
      ataque: 12,
      defesa: 6,
      magia: 17,
      velocidade: 10
    }
  };
  // --------------------------
  var carta14 = {
    nome: "Zumbi",
    imagem:
      "https://i.pinimg.com/474x/00/ca/d1/00cad148813f749c12c79e5775c983af.jpg",
    atributos: {
      ataque: 6,
      defesa: 2,
      magia: 0,
      velocidade: 2
    }
  };
  // --------------------------
var carta15 = {
    nome: "Zeus",
    imagem:
      "https://1.bp.blogspot.com/-c7JgV7_oDbo/YJcnRIaevRI/AAAAAAAAWZA/xAaxhcdUEBIrhh31oNpyFRLYFBDMXs4HgCLcBGAsYHQ/w1200-h630-p-k-no-nu/agatan-g-zeus.jpg",
    atributos: {
      ataque: 100,
      defesa: 100,
      magia: 100,
      velocidade: 100
    }
  };
  // --------------------------
  var listaCartas = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10,
    carta11,
    carta12,
    carta13,
    carta14,
    carta15
  ];
  
  var pontosJogador = 0;
  var pontosMaquina = 0;
  
  atualizaPlacar();
  atualizaQuantidadeDeCartas();
  
  function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById("quantidade-cartas");
    var html = "Quantidade de cartas no jogo: " + listaCartas.length;
  
    divQuantidadeCartas.innerHTML = html;
  }
  
  function atualizaPlacar() {
    var divPlacar = document.getElementById("placar");
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina";
  
    divPlacar.innerHTML = html;
  }
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * listaCartas.length);
    cartaMaquina = listaCartas[numeroCartaMaquina];
    listaCartas.splice(numeroCartaMaquina, 1);
  
    var numeroCartaJogador = parseInt(Math.random() * listaCartas.length);
    cartaJogador = listaCartas[numeroCartaJogador];
    listaCartas.splice(numeroCartaJogador, 1);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibeCartaJogador();
  }
  
  function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' checked value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
  
    var html = "<div id='opcoes' class='carta-status'>";
  
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
  }
  
  function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id = 'opcoes' class = 'carta-status'>";
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    var opcoesTexto = "";
  
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "<br>";
    }
  
    var html = "<div id='opcoes' class='carta-status --spacing'>";
  
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var divResultado = document.getElementById("resultado");
    var atributoSelecionado = obtemAtributoSelecionado();
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = '<p class="resultado-final">Você Venceu</p>';
      pontosJogador++;
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado =
        '<p class="resultado-final">Gamer Over,a carta do inimigo tem mais poder</p>';
      pontosMaquina++;
    } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>';
    }
  
    if (cartas.length == 0) {
      alert("Fim de jogo!");
      if (pontosJogador > pontosMaquina) {
        htmlResultado = '<p class="resultado-final">Você Venceu</p>';
      } else if (pontosMaquina > pontosJogador) {
        htmlResultado =
          '<p class="resultado-final">Gamer Over,a carta do inimigo tem mais poder</p>';
      } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>';
      }
    } else {
      document.getElementById("btnProximaRodada").disabled = false;
    }
  
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
  
    atualizaPlacar();
    exibeCartaMaquina();
    atualizaQuantidadeDeCartas();
  }
  
  function proximaRodada() {
    var divCartas = document.getElementById("cartas");
  
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`;
  
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnProximaRodada").disabled = true;
  
    var divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
  }
  
