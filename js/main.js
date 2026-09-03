document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // Tabs system
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      const group = btn.closest('.tabs-container') || document;
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const tc = group.querySelector(`.tab-content[data-tab="${target}"]`);
      if (tc) tc.classList.add('active');
    });
  });

  // Form submit mock alert
  const forms = document.querySelectorAll('form');
  forms.forEach(f => {
    if (f.dataset.noAlert) return;
    f.addEventListener('submit', e => {
      e.preventDefault();
      alert('✅ บันทึกข้อมูลสำเร็จ (Mock: Frontend only)');
    });
  });

  // Delete confirm
  document.querySelectorAll('.btn-delete, [data-confirm]').forEach(el => {
    el.addEventListener('click', e => {
      const msg = el.dataset.confirm || 'ยืนยันการดำเนินการนี้?';
      if (!confirm(msg)) e.preventDefault();
    });
  });

  // Contact team buttons mock
  document.querySelectorAll('.chat-btn, a[data-i18n="topbar_contact"]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      alert('💬 เปิดหน้าต่างแชทกับทีมงาน Line ID: @มุ่งเรียน (Mockup)');
    });
  });

  // Hero Slider (Announcements Carousel)
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-arrow');
  const nextBtn = document.querySelector('.next-arrow');

  if (slides.length > 0) {
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    function showSlide(index) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));

      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
        resetTimer();
      });
    });

    function resetTimer() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
  }
});

