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

    
    clientes.push(cliente)
    AddCliente(cliente);
    Limpar();
    alert("Cadastrado com sucesso!");
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
    let cellNumero     = linha.insertCell(6);
    let cellBairro     = linha.insertCell(7);
    let cellCidade     = linha.insertCell(8)
    let cellEstado     = linha.insertCell(9);
    let cellBtnRemover = linha.insertCell(10);

    cellNome.innerHTML       = cliente.nome;
    cellEmail.innerHTML      = cliente.email;
    cellCPF.innerHTML        = cliente.cpf;
    cellTelefone.innerHTML   = cliente.telefone;
    cellCEP.innerHTML        = cliente.cep;
    cellLogradouro.innerHTML = cliente.logradouro;
    cellNumero.innerHTML     = cliente.numero;
    cellBairro.innerHTML     = cliente.bairro;
    cellCidade.innerHTML     = cliente.cidade;
    cellEstado.innerHTML     = cliente.estado; 

}




//Função limpar

function Limpar(){

    document.getElementById("IdForm").reset();

}
















