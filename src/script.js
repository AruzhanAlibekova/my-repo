document.addEventListener('DOMContentLoaded', () => {

  // Плавный скролл
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Модальное окно
  const modal = document.getElementById('order-modal');
  const closeModal = document.querySelector('.modal .close');
  const itemField = document.getElementById('item');
  const form = document.getElementById('order-form');

  document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemName = btn.getAttribute('data-item');
      itemField.value = itemName;
      modal.style.display = 'block';
    });
  });

  closeModal.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => {
    if(e.target == modal) modal.style.display = 'none';
  });

  // Категории
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      document.querySelectorAll('.flower-item').forEach(f => {
        if(f.getAttribute('data-category') === cat || cat === 'all'){
          f.style.display = 'inline-block';
        } else {
          f.style.display = 'none';
        }
      });
      window.scrollTo({top: document.getElementById('flowers').offsetTop, behavior:'smooth'});
    });
  });

  // Форма заказа
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Спасибо за заказ, " + document.getElementById('name').value +
          "!\nТовар: " + document.getElementById('item').value +
          "\nМы свяжемся с вами по номеру " + document.getElementById('phone').value);
    form.reset();
    modal.style.display = 'none';
  });

  // Анимация цитаты
  const quote = document.querySelector('blockquote');
  if(quote) quote.classList.add('show');

});
