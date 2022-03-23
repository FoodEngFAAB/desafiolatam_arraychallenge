
var radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
]

var radiologiaTabla = "<th scope = 'col' >Hora</th ><th scope='col'>Especialista</th><th scope='col'>Paciente</th><th scope='col'>RUT</th><th scope='col''>Previsión</th>"

for (var i = 0; i < radiologia.length; i++) {

    radiologiaTabla += `<tr>
        <td>${radiologia[i].hora}
        <td>${radiologia[i].especialista}
        <td>${radiologia[i].paciente}
        <td>${radiologia[i].rut}
        <td>${radiologia[i].prevision}
        </tr>`
}

document.getElementById(`servRx`).innerHTML = radiologiaTabla;

var traumatologia = [
    { hora: '08:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
]

var traumatologiaTabla = "<th scope = 'col' >Hora</th ><th scope='col'>Especialista</th><th scope='col'>Paciente</th><th scope='col'>RUT</th><th scope='col''>Previsión</th>"

for (var i = 0; i < traumatologia.length; i++) {

    traumatologiaTabla += `<tr>
        <td>${traumatologia[i].hora}
        <td>${traumatologia[i].especialista}
        <td>${traumatologia[i].paciente}
        <td>${traumatologia[i].rut}
        <td>${traumatologia[i].prevision}
        </tr>`
}

document.getElementById(`servTr`).innerHTML = traumatologiaTabla;

var dental = [
    { hora: '08:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
]

var dentalTabla = "<th scope = 'col' >Hora</th ><th scope='col'>Especialista</th><th scope='col'>Paciente</th><th scope='col'>RUT</th><th scope='col''>Previsión</th>"

for (var i = 0; i < dental.length; i++) {

    dentalTabla += `<tr>
        <td>${dental[i].hora}
        <td>${dental[i].especialista}
        <td>${dental[i].paciente}
        <td>${dental[i].rut}
        <td>${dental[i].prevision}
        </tr>`
}

document.getElementById(`servDt`).innerHTML = dentalTabla;

document.write(`<h3>Primeras y últimas atenciones</h3>`)

document.write(`<br><h4>Servicio de Radiología</h4>`)

document.write(`Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision}<br>`)
document.write(`Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}`)

document.write(`<br><br><h4>Servicio de Traumatología</h4>`)

document.write(`Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision}<br>`)
document.write(`Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}`)

document.write(`<br><br><h4>Servicio Dental</h4>`)

document.write(`Primera atención: ${dental[0].paciente} - ${dental[0].prevision}<br>`)
document.write(`Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}<br><br>`)