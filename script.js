function toggleData(button) {
  var card = button.parentNode;
  var dataSection = card.querySelector('.datos');
  var historySection = card.querySelector('.historia');

  dataSection.classList.toggle('hidden');
  historySection.classList.add('hidden');
}

function toggleHistory(button) {
  var card = button.parentNode;
  var dataSection = card.querySelector('.datos');
  var historySection = card.querySelector('.historia');

  dataSection.classList.add('hidden');
  historySection.classList.toggle('hidden');
}

function scrollToTopOrClose() {
  // Si el scroll actual es mayor a 0, hacemos scroll hacia arriba
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Si estamos en la parte superior, cierra el contenido oculto
    toggleData(document.querySelector('.toggle-btn-up')); // Llama a tu función toggleData o toggleHistory dependiendo de tus necesidades
  }
}
