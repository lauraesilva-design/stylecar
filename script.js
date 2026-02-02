function enviar(){

    const nome = document.getElementById('nome').value
    const assunto = document.getElementById('assunto').value
    const mensagem = `Gostaria de entrar em contado!\n\n Nome: ${nome} \nAssunto: ${assunto}` 
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/?text=${msg}`)
}