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

// variavel global 
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

    alert("Cadastrado com sucesso!");
    AddCliente(cliente);
}


//Adicionae objeto cliente
function AddCliente(cliente)
{
    let tabela = document.getElementById("IdTabelaCliente");
    let linha  = tabela.insertRow(clientes.length);

    let cellNome       = linha.insertCell(0);
    let cellEmail      = linha.insertCell(1);
    let cellCPF        = linha.insertCell(2);
    let cellTelefone   = linha.insertCell(3);
    let cellCEP        = linha.insertCell(4);
    let cellLogradouro = linha.insertCell(5);
    let cellNumero     = linha.insertCell(5);
    let cellBairro     = linha.insertCell(6);
    let cellEstado     = linha.insertCell(6);
    let cellBtnRemover = linha.insertCell(6);

    cellNome       = cliente.nome;
    cellEmail      = cliente.email;
    cellCPF        = cliente.cpf;
    cellTelefone   = cliente.telefone;
    cellCEP        = cliente.cep;
    cellLogradouro = cliente.logradouro;
    cellNumero     = cliente.numero;
    cellBairro     = cliente.bairro;
    cellCidade     = cliente.cidade;
    cellEstado     = cliente.estado;

    AddCliente(cliente);

}





















