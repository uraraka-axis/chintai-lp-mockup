(function() {
  // FAQ Accordion
  var faqItems = document.querySelectorAll('[data-faq]');
  faqItems.forEach(function(item) {
    var btn = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    btn.addEventListener('click', function() {
      var isOpen = item.classList.contains('open');
      // Close all
      faqItems.forEach(function(otherItem) {
        otherItem.classList.remove('open');
        var otherAnswer = otherItem.querySelector('.faq-answer');
        otherAnswer.style.maxHeight = null;
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
