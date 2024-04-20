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
