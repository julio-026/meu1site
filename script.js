const avanca = document.querySelectorAll('.btn-proximo')

avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo')
        
        atual.classList.remove('ativo')
        document.getElementById(proximoPasso).classList.add('ativo')
    })
})      
const tela = document.querySelectorAll('.btn-tela')

tela.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo')
        const proximatela = 'passo-' + this.getAttribute('data-tela')

        atual.classList.remove('ativo')
        document.getElementById(proximatela).classList.add('ativo')
    })
})


