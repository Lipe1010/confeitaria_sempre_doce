function validarLogin() {
    // dados do usuario da pagina
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    //acessar a lista do local storage
    let lista = window.localStorage.getItem('usuarios')

    //fazer o parse da lista
    lista = JSON.parse(lista)

    //Vai controlar o erro do login
    let logado = false

    //verificar se o usuario esta na lista e se a senha confere
    for (let i=0; i < lista.length; i++) {
        
        const usuario = lista[i]
        const emailLista = usuario.email
        const passwordLista = usuario.password

        if (emailLista == email.value) {
            //comparar as senhas 
            if (passwordLista == password.value) {
                alert('Sucesso, você está logado!')
                logado = true
                break
            } else {
                logado = false
            }
        } else {
            logado = false
        }
    } //for
    // mostra a mensagem de n logado
    if (logado == false) {
        alert('Login inválido!')
    } else {
        //vai para pagina home admin
        window.location.href = '../../pages/home-admin.html'
    }
}