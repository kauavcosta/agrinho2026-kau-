// Seleciona o botão de inversão usando a classe que você definiu no HTML
const botaoInversao = document.querySelector('.cabecalho-titulo-inversao');

// Função para ativar o Modo Escuro
const ativarDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('tema', 'escuro');
};

// Função para desativar o Modo Escuro
const desativarDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('tema', 'claro');
};

// Verifica se o usuário já visitou o site e ativou o modo escuro antes
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
    ativarDarkMode();
}

// Evento de clique para inverter as cores
botaoInversao.addEventListener('click', () => {
    // Se o body já tem a classe 'dark-mode', nós a removemos. Se não tem, adicionamos.
    if (document.body.classList.contains('dark-mode')) {
        desativarDarkMode();
    } else {
        ativarDarkMode();
    }
});