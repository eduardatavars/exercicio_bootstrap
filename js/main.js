$(document).ready(function() {

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(99) 99999-9999'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            mensagem: {
                required: false
            },
            "aceito-termos": {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail',
            tel: 'Por favor, insira seu telefone',
            "aceito-termos": 'Você deve aceitar os termos do site'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(form, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })
})