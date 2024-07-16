// Seleciona o formulário, os labels, inputs e spans que serão usados na validação
const form = document.getElementById("form");
const labels = document.querySelectorAll(".labels_required");
const inputs = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span_required");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Adiciona um listener para o evento 'submit' do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();  // Impede o envio padrão do formulário para realizar validações
    let valid = true;
    valid &= usernameValidate();
    valid &= emailValidate();
    valid &= passwordValidate();
    valid &= cPasswordValidate();
    if (valid) {
        form.submit();  // Se todas as validações passarem, o formulário é enviado
    }
});

// Define os estilos de erro para inputs, spans e labels
function setError(index) {
    inputs[index].style.border = '0.2rem solid #e63636';
    spans[index].style.display = 'block';
    labels[index].style.color = "#e63636";
}

// Remove os estilos de erro para inputs, spans e labels
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

// Valida o email usando regex
function emailValidate() {
    if (!emailRegex.test(inputs[1].value)) {
        setError(1);
        return false;
    } else {
        removeError(1);
        return true;
    }
}

// Valida a senha (deve ter pelo menos 8 caracteres)
function passwordValidate() {
    if (inputs[2].value.length < 8) {
        setError(2);
        return false;
    } else {
        removeError(2);
        return true;
    }
}

// Valida a confirmação da senha (deve ser igual à senha e ter pelo menos 8 caracteres)
function cPasswordValidate() {
    if (inputs[2].value !== inputs[3].value || inputs[3].value.length < 8) {
        setError(3);
        return false;
    } else {
        removeError(3);
        return true;
    }
}
