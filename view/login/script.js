const btn = document.querySelector('.ckeckboxCadastroLogin');
        const conteiner = document.querySelector('.card-login');
        const cadastro = document.querySelector('.cadastro-login');
        
        
        btn.onclick = function(){
            this.classList.toggle('active')
            conteiner.classList.toggle('active')
            cadastro.classList.toggle('active')

        }