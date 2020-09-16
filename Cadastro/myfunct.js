class Cliente
{
    constructor(nome, email, cpf, telefone, cep, logradouro, numero, bairro, cidade, estado)
    {
        this.nome       = nome;
        this.email      = email;
        this.cpf        = cpf;
        this.telefone   = telefone;
        this.cep        = cep;
        this.logradouro = logradouro;
        this.numero     = numero;
        this.bairro     = bairro;
        this.cidade     = cidade;
        this.estado     = estado;

    }

}

var clientes = [];


//Função Cadastrar
function Cadastrar()
{

    let cliente = new Cliente();

    cliente.nome       = document.getElementById("IdNome").value;
    cliente.email      = document.getElementById("IdEmail").value;
    cliente.cpf        = parseInt(document.getElementById("IdCPF").value);
    cliente.telefone   = parseInt(document.getElementById("IdTelefone").value);
    cliente.cep        = parseInt(document.getElementById("IdCEP").value);
    cliente.logradouro = document.getElementById("IdLogradouro").value;
    cliente.numero     = parseInt(document.getElementById("IdNumero").value);
    cliente.bairro     = document.getElementById("IdBairro").value;
    cliente.cidade     = document.getElementById("IdCidade").value; 
    cliente.estado     = document.getElementById("IdEstado").value;

    clientes.push(cliente)

}











