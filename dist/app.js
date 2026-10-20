'use strict';
const form = document.getElementById('booking-form');
const result = document.getElementById('request-result');
const message = document.getElementById('request-message');
const status = document.getElementById('copy-status');
const dateInput = form.elements.date;
const now = new Date();
dateInput.min = [now.getFullYear(), String(now.getMonth()+1).padStart(2,'0'), String(now.getDate()).padStart(2,'0')].join('-');
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
 form.querySelectorAll('[name="service"]').forEach(input => input.checked = input.value === link.dataset.service);
 result.hidden = true; form.hidden = false;
}));
form.addEventListener('submit', event => {
 event.preventDefault();
 if(!form.reportValidity()) return;
 const data = new FormData(form);
 const lines = ['¡Hola, Ysha! Me gustaría coordinar una cita.','',`Nombre: ${data.get('name').trim()}`,`Servicio: ${data.get('service')}`,`Pueblo: ${data.get('town').trim()}`,`Horario preferido: ${data.get('time')}`];
 if(data.get('date')) {
  const [year,month,day] = data.get('date').split('-');
  lines.push(`Fecha preferida: ${day}/${month}/${year}`);
 }
 if(data.get('notes').trim()) lines.push(`El look que busco: ${data.get('notes').trim()}`);
 lines.push('', '¿Me confirmas precio, cobertura y disponibilidad? ¡Gracias!');
 message.value = lines.join('\n'); status.textContent='';
 form.hidden=true;result.hidden=false;result.scrollIntoView({behavior:'smooth',block:'center'});
});
document.getElementById('copy-request').addEventListener('click', async () => {
 try {await navigator.clipboard.writeText(message.value);status.textContent='Mensaje copiado. Ahora abre Instagram y pégalo en el chat de Ysha.';}
 catch {message.focus();message.select();status.textContent='Seleccionamos el mensaje. Usa la opción Copiar de tu dispositivo y pégalo en Instagram.';}
});
document.getElementById('edit-request').addEventListener('click',()=>{result.hidden=true;form.hidden=false;form.elements.name.focus();});
const dialog=document.getElementById('privacy-dialog');
document.getElementById('privacy-open').addEventListener('click',()=>dialog.showModal());
['privacy-close','privacy-ok'].forEach(id=>document.getElementById(id).addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();}});
