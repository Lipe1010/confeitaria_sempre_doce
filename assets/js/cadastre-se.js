const password = document.getElementById('password')
const confirmaPassword = document.getElementById('confirma-password')

function cadastrarUsuario() {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')

    if (password.value == confirmaPassword.value) {
        // Cadastrar no local storage

        //verifica de a lista existe no local storage
        let lista = window.localStorage.getItem('usuarios')

        if (lista == undefined) {
            //Não existe a lista, ent cria e adiciona o usuário
            lista = []

            //adicionar o usuario na lista
            let usuario = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value
            }
            lista.push(usuario)

            //salvar no local storage a lista
            window.localStorage.setItem('usuarios', JSON.stringify(lista))
            alert('usuario cadastrado')
        } else {
            // Adicionar novos usuarios
            // Primeiro buscar a lista no local storage
            let listaE = window.localStorage.getItem('usuarios')
            listaE = JSON.parse(listaE)

            let usuarioA = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value
            }

            //adiciona na lista
            listaE.push(usuarioA)

            // salvar no local storage
            window.localStorage.setItem('usuarios', JSON.stringify(listaE))
            alert('Usuário cadastrado')

            //limpar os dados dos formulários
            nome.value = ''
            email.value = ''
            password.value = ''
            confirmaPassword.value = ''
        }
        
    } else {
        alert('Senha não confere,  verifique seus dados')
        password.value = ''
        confirmaPassword = ''
    }    
}

function toggleSenha() {
    const exibirSenha = document.getElementById('exibir-senha')

    if (exibirSenha.checked == true) {
        //Mostrar as senhas 
        password.type = 'text'
        confirmaPassword.type = 'text'
    } else {
        //Esconder as senha
        password.type = 'password'
        confirmaPassword.type = 'password'
    }
}