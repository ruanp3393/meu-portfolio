document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona a barra de navegação
    const navbar = document.getElementById('navbar');

    // Adiciona um evento de rolagem (scroll)
    window.addEventListener('scroll', () => {
        // Se a página rolar mais de 50 pixels para baixo
        if (window.scrollY > 50) {
            navbar.classList.remove('glass-card');
            navbar.classList.add('bg-slate-900/95', 'shadow-md', 'border-b', 'border-slate-800');
        } else {
            // Se voltar para o topo
            navbar.classList.add('glass-card');
            navbar.classList.remove('bg-slate-900/95', 'shadow-md', 'border-b', 'border-slate-800');
        }
    });

});