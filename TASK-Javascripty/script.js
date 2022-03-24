//EstruturaSequencial

//1.Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 
/*  
let nome = prompt("Escreva seu nome")

alert("Seu nome é " + nome)

console.log(nome)*/

//2.Crie um script que leia do usuário dois números e mostre a soma desses dois números.
/*
let num1 = parseInt(prompt("Digite um numero")) 
let num2 = parseInt(prompt("Digite outro numero"))

console.log(num1+num2)*/

//3.Crie um script que leia duas notas do usuário e calcule a média do aluno.
/*
let num1 = parseInt(prompt("Digite a nota 1")) 
let num2 = parseInt(prompt("Digite a nota 2"))

console.log((num1+num2) / 2)*/

//4.Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele. 
/*
ano = "2022";
let ano_nascimento = parseInt(prompt("Digite seu ano de nascimento"))

console.log(ano - ano_nascimento)*/

//5.Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
/*
let valor_hora = parseInt(prompt("Digite o valor da hora de trabalho"))
let horas_mes = parseInt(prompt("Digite quantas horas trabalha por mês"))
let salario = valor_hora*horas_mes

console.log("O salario de acordo com essas horas trabalhadas é " + salario)*/

//6.Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).
/*
let F = parseInt(prompt("Digite uma temperatura em Fahrenheit"))
let C = 5 * ((F-32) / 9)

console.log("Convertida em Celcius a temperatura é " + C)*/

//EstruturaDeDecisao
//1.Faça um Programa que peça dois números e imprima o maior deles.
/*
let num1 = parseInt(prompt("Digite o primeiro numero"))
let num2 = parseInt(prompt("Digite o segundo numero"))

if( num1<num2){
    console.log("Esse número é o maior número " + num2)
}
else{
    console.log("Esse número é o maior número " + num1)
}*/

//2.Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
/*
let num = parseInt(prompt("Digite um numero"))

if( num <= 0){
    console.log("Esse número é negativo")
}
else{
    console.log("Esse número é positivo")
}*/

//3.Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

/*
let texto = prompt("Digite uma letra")

if( texto === "F" || texto === "f"){
    console.log("Feminino")
}
else if(texto ==="M" || texto === "m")
{
    console.log("Masculino")}
else{
    console.log("Inválido")
}*/

/*4.Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
2.	A mensagem "Reprovado", se a média for menor do que sete;
3.	A mensagem "Aprovado com Distinção", se a média for igual a dez.*/
/*
let num1 = parseInt(prompt("Digite a nota 1")) 
let num2 = parseInt(prompt("Digite a nota 2"))
let media = ((num1+num2) / 2)

//4.1
if(media >= 7 && media <= 10){
    console.log(media + " = Aprovado")
}
//4.2
else if(media < 7 && media >= 0){
    console.log(media + " = Reprovado")
}
//4.3
else if(media === 10){
    console.log(media + " = Aprovado com Distinção")
}
else{
    console.log("Média inválida. Notas 1 e 2 devem ser de 0 a 10")
}*/

//5.Faça um Programa que leia três números e mostre o maior e o menor deles.
/*
let num1 = parseInt(prompt("Digite o primeiro numero"))
let num2 = parseInt(prompt("Digite o segundo numero"))
let num3 = parseInt(prompt("Digite o terceiro numero"))

if( num1<num2 && num1<num3){
    console.log("Esse número é o menor número " + num1)
}
else if( num2<num1 && num2<num3){
    console.log("Esse número é o menor número " + num2)
}
else if( num3<num1 && num3<num2){
    console.log("Esse número é o menor número " + num3)
}
if( num1>num2 && num1>num3){
    console.log("Esse número é o maior número " + num1)
}
else if( num2>num1 && num2>num3){
    console.log("Esse número é o maior número " + num2)
}
else{
    console.log("Esse número é o maior número " + num3)
}*/

//6.Faça um Programa que leia dois números e mostre se ele é par ou ímpar.
/*
let num = parseInt(prompt("Digite um numero"))

if( num % 2 === 0){
    console.log("Esse número é par")
}
else{
    console.log("Esse número é impar")
}*/