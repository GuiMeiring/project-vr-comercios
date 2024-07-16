// Seleciona todos os elementos que possuem a classe 'hidden' para aplicar animações
const elements = document.querySelectorAll('.hidden');

// Cria uma instância de IntersectionObserver para observar quando os elementos entram ou saem da visão
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Se o elemento está visível na tela (intersecting), adiciona a classe 'show' para aplicar a animação
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        // Caso contrário, remove a classe 'show' para ocultar a animação
        else {
            entry.target.classList.remove('show');
        }
    });
});

// Observa cada elemento selecionado, aplicando o IntersectionObserver
elements.forEach((element) => myObserver.observe(element));
