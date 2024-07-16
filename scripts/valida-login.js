// Seleciona o formulário, labels, inputs e spans necessários para validação
const form = document.getElementById("form");
const labels = document.querySelectorAll(".labels_required");
const inputs = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span_required");

// Adiciona um listener para o evento 'submit' do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();  // Impede o envio padrão do formulário para realizar validações

    let valid = true; 

    // Executa as funções de validação e atualiza a variável 'valid'
    valid &= usernameValidate();
    valid &= passwordValidate(); 

    // Se todas as validações passarem, o formulário é enviado
    if (valid) {
        form.submit();
    }
});

// Função para definir os estilos de erro nos inputs, spans e labels
function setError(index) {
    inputs[index].style.border = '0.2rem solid #e63636';  
    spans[index].style.display = 'block';  
    labels[index].style.color = "#e63636";  
}

// Função para remover os estilos de erro nos inputs, spans e labels
function removeError(index) {
    inputs[index].style.border = ''; 
    spans[index].style.display = 'none';
    labels[index].style.color = "#f0f0f0";  
}

// Função para validar o nome de usuário
function usernameValidate() {
    // Verifica se o nome de usuário tem pelo menos 3 caracteres
    if (inputs[0].value.length < 3) {
        setError(0);  // Define o estilo de erro para o campo de nome de usuário
        return false;  // Retorna false indicando que a validação falhou
    } else {
        removeError(0);  // Remove o estilo de erro para o campo de nome de usuário
        return true;  // Retorna true indicando que a validação foi bem-sucedida
    }
}

// Função para validar a senha
function passwordValidate() {
    // Verifica se a senha tem pelo menos 8 caracteres
    if (inputs[1].value.length < 8) {
        setError(1);
        return false;
    } else {
        removeError(1);
        return true; 
    }
}
