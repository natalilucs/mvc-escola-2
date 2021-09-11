   
    function validaPeriodo(){
        var periodo1 = document.getElementById('periodo').value;
        periodo1 = periodo1.toUpperCase();
        
        if(periodo != MANHA || periodo != NOITE || periodo != TARDE){
            alert("Informe o período se for MANHA, TARDE OU NOITE")
        }
    }

    function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf('@')); 
    dominio = field.value.substring(
        field.value.indexOf('@') + 1,
        field.value.length
    );
    if (
        usuario.length >= 1 && 
        dominio.length >= 3 &&
        usuario.search('@') == -1 &&
        dominio.search('@') == -1 &&
        usuario.search(' ') == -1 &&
        dominio.search(' ') == -1 &&
        dominio.search('.') != -1 &&
        dominio.indexOf('.') >= 1 &&
        dominio.lastIndexOf('.') < dominio.length - 1 
    ) {
        document.getElementById('email').style.border = 'green solid 3px';
        alert('E-mail valido');
    } else {
        document.getElementById('email').style.border = 'red solid 3px';
        alert('E-mail invalido');
    }
    }
    
 