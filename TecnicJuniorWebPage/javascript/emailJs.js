const btn = document.getElementById('btn_enviar');

document.getElementById('formulariojs').addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_0ivppre';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                alert('Mensaje enviado correctamente!');
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    });