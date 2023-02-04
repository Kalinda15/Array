let compras =["Arroz","Feijão","Salada","Carne","Macarrão"]
console.log(compras)

compras.unshift("Pão")
console.log(compras)

compras.pop()
console.log(compras)

compras.push("Refrigerante","Maçã")
console.log(compras)

compras.shift()
console.log(compras)

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()
console.log(numbers)

let info = {
    nome:"Isabella",
    idade:20,
    Cidade:"Rio de Janeiro"}
    console.log(info)

    info.frutaFavorita = "Morango"
    console.log(info)

  delete(info.idade)
  console.log(info)

  console.table(info)

  let cadastro=[{
    nome:"Ricardo",
    idade:23,
    telefone:1234-5678,
    amigos:["Renan","Rhuan","Bruno","Jailan"]
    },
    {
    nome:"Ana Laura",
    idade:19,
    telefone:1234-5678,
    amigos:["Camila","Yasmim","Bruna","Janaina"]
    },
    {
    nome:"Yasmin",
    idade:18,
    telefone:1234-5678,
    amigos:["Carol","Renata","Breno","Isabella"]
    },
    {
    nome:"Lucimara",
    idade:35,
    telefone:1234-5678,
    amigos:["Elaine","Simone","Luciana","Iris"]
    },
    {
     nome:"Gabriela",
     idade:21,
     telefone:1234-5678,
     amigos:["Robert","Bob","Thais","Junior"]
    },
]
console.log(cadastro)

console.log(cadastro[0].amigos[1])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[3])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[0])