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

    if(cliente == null)
    {
        alert("Preenche todos os campos")
    } 
    else
    {
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
    }


    
    
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


    AddBtnRemover(cellBtnRemover, cliente);

}


//Função remover

function RemoverCliente(rowIndex, cliente){

    document.getElementById("IdTabelaCliente").deleteRow(rowIndex); 

}






//Botão remover
function AddBtnRemover(cell, cliente){

    let BtnRemover           = document.createElement("BUTTON");
    BtnRemover.innerHTML     = "Excluir";
    BtnRemover.name          = "BtnRemover";
    BtnRemover.class         = "btn btn-primary";
    BtnRemover.onclick       = function(){

        RemoverCliente(cell.parentNode.rowIndex, cliente)

    }

    cell.appendChild(BtnRemover);

    cell.appendChild(document.createTextNode(" "));

}



//Função limpar

function Limpar(){

    document.getElementById("IdForm").reset();

}





//mascaras para form

const masks = {
    cpf (value){
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .replace(/(-\d{2})\d+$/, '$1')
    }
}

/*cnpj (value) {

    return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+$/, '$1')

}*/


telefone (value){
    return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
}









document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})










