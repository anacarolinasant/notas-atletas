class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
  
    calcularCategoria() {
      if (this.idade >= 9 && this.idade <= 11) 
        return "Infantil";
      else if (this.idade >= 12 && this.idade <= 13)
        return "Juvenil";
      else if (this.idade >= 14 && this.idade <= 15) 
        return "Intermediário";
      else if (this.idade >= 16 && this.idade <= 30) 
        return "Adulto";
      else 
        return "Sem categoria";
    }
  
    calculaIMC() {
      return this.peso / (this.altura * this.altura);
    }
  
    ordenarNotas() {
      return this.notas.slice().sort((a, b) => a - b);
    }
  
    notasValidas() {
      let ord = this.ordenarNotas();
      return ord.slice(1, 4);
    }
  
    calculaMediaValida() {
      let validas = this.notasValidas();
      let soma = 0;
  
      validas.forEach(n => soma += n);
  
      return soma / validas.length;
    }
  
    obterNomeAtleta() { return this.nome; }
    obterIdadeAtleta() { return this.idade; }
    obterPesoAtleta() { return this.peso; }
    obterAlturaAtleta() { return this.altura; }
    obterNotasAtleta() { return this.notas; }
    obterCategoria() { return this.calcularCategoria(); }
    obtemIMC() { return this.calculaIMC(); }
    obtemMediaValida() { return this.calculaMediaValida(); }
  }
  
  // AGORA SIM você pode criar o atleta
  const atleta = new Atleta(
    "Cesar Abascal",
    30,
    80,
    1.70,
    [10, 9.34, 8.42, 10, 7.88]
  );
  
  console.log("Nome:", atleta.obterNomeAtleta());
  console.log("Idade",atleta.obterIdadeAtleta())
  console.log("Peso:", atleta.obterPesoAtleta())
  console.log("Altura:",atleta.obterAlturaAtleta())
  console.log("Notas:",atleta.obterNotasAtleta())
  console.log("Categoria:", atleta.obterCategoria());
  console.log("IMC:", atleta.obtemIMC());
  console.log("Média válida:", atleta.obtemMediaValida());
  