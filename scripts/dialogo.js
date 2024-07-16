// Seleciona os elementos do DOM necessários para controlar o modal e os botões de ação
const openButton = document.querySelector(".open_modal");
const modal = document.querySelector("dialog");
const closeButton = document.querySelector(".close_modal");
const confirmButton = document.querySelector(".confirm_modal");


// Ao clicar no botão "Comprar", abre o modal e calcula as parcelas
openButton.onclick = function () {
    modal.showModal();
    calculateInstallment();
}

// Ao mudar a opção de pagamento, recalcula o preço correspondente
const select = document.querySelector(".installment-select");
select.onchange = function () {
    calculateInstallment();
}

// Função para calcular e exibir o preço com base na opção de pagamento selecionada
function calculateInstallment() {
 
    const installments = parseInt(select.value); // Pega o valor da opção selecionada

    if(installments == 0){ //Pagamento via pix
        const discount =0.15;
        totalPrice = parseFloat(document.querySelector('#price_avista').innerText);

        // Calcula o preço com desconto de 15%
        let priceResult = totalPrice - totalPrice * discount;
        document.getElementById("price_result").innerHTML = `15% de desconto<span>R$ ${priceResult.toFixed(2)}</span>`;
    }
    else {
        if(installments == 1){ // Pagamento à vista
            totalPrice = parseFloat(document.querySelector('#price_avista').innerText)
        }
        else{ // Pagamento parcelado
            totalPrice = parseFloat(document.querySelector('#price_parcelado').innerText)
        }
        // Calcula o preço por parcela
        let priceResult = totalPrice / installments;
        document.getElementById("price_result").innerHTML = `${installments}x sem juros de R$ <span>R$ ${priceResult.toFixed(2)}</span>`;
    }
    // Exibe o preço total
    document.getElementById("price_total").innerHTML = `Preço total <span>R$ ${totalPrice.toFixed(2)}</span>`;
    }


// Ao clicar no botão "Confirmar", fecha o modal, exibe um alerta de confirmação e redireciona para a página inicial
confirmButton.onclick = function (event){
    event.preventDefault();
    modal.close();
    alert("Compra realizada! A VR Comercios agradece pela preferência!!");
    window.location.href = 'index.html';
}

// Ao clicar no botão "Cancelar", fecha o modal
closeButton.onclick = function (event){
    event.preventDefault();
    modal.close();
}