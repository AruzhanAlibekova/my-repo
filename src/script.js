 console.log("SoftBloom сайт загружен!");

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert("Спасибо за заказ! Мы свяжемся с вами.");
  });
});

window.addEventListener('load', () => {
  const quote = document.querySelector('blockquote');
  if (quote) {
    quote.classList.add('show');
  }
});