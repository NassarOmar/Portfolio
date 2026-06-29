let projects = [];
let reviews = [];
let openModalId = null;
async function loadReviews() {
  try {
    const res = await fetch('data/reviews.json');
    reviews = await res.json();
    renderReviews();
    observeReveal();
  } catch (err) {
    console.error('Failed to load reviews:', err);
  }
}

function renderStars(count) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="review-card__star${i < count ? ' review-card__star--filled' : ''}">★</span>`
  ).join('');
}

function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;

  grid.innerHTML = reviews.map((r, i) => `
    <a href="${r.url}" target="_blank" rel="noopener noreferrer"
       class="review-card reveal visible" style="transition-delay: ${i * 0.08}s">
      <div class="review-card__header">
        <div class="review-card__stars" aria-label="${t('reviews.stars')}">${renderStars(r.rating)}</div>
        <span class="review-card__platform">Mostaql</span>
      </div>
      <p class="review-card__text">"${localized(r.text)}"</p>
      <div class="review-card__footer">
        <span class="review-card__client">${localized(r.client)}</span>
        <span class="review-card__link">${t('reviews.viewOnMostaql')} ↗</span>
      </div>
    </a>
  `).join('');
}

async function loadProjects() {
  let data = null;

  try {
    const res = await fetch(`data/projects.json?t=${Date.now()}`, { cache: 'no-store' });
    if (res.ok) data = await res.json();
  } catch (err) {
    console.warn('Fetch projects.json failed, using embedded data:', err);
  }

  if (!data && typeof PROJECTS_DATA !== 'undefined') {
    data = PROJECTS_DATA;
  }

  if (!data) {
    document.getElementById('projects-grid').innerHTML =
      `<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1;">${t('projects.loadError')}</p>`;
    return;
  }

  projects = data;
  renderProjects();
}

function assetUrl(path) {
  if (!path) return '';
  return encodeURI(path);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const locale = currentLang === 'ar' ? 'ar-EG' : currentLang === 'it' ? 'it-IT' : 'en-US';
  return new Date(dateStr + 'T00:00:00').toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function linkLabel(link) {
  if (link.label) return localized(link.label);
  try {
    const host = new URL(link.url).hostname.replace('www.', '');
    if (host.includes('itch.io')) return `${t('projects.tryDemo')} — itch.io`;
    if (host.includes('google')) return `${t('projects.tryDemo')} — Google Play`;
    if (host.includes('apple')) return `${t('projects.tryDemo')} — App Store`;
    return t('projects.tryDemo');
  } catch {
    return t('projects.tryDemo');
  }
}

function renderSkillBlocks(tags) {
  return tags.map(tag => `<span class="skill-block">${tag}</span>`).join('');
}

function renderProjectLinks(links) {
  if (!links || !links.length) return '';
  const buttons = links.map(link =>
    `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn--demo">${linkLabel(link)} ↗</a>`
  ).join('');
  return `<div class="modal__actions">${buttons}</div>`;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = projects.map((p, i) => `
    <article class="project-card reveal visible" data-id="${p.id}" style="transition-delay: ${i * 0.1}s">
      <div class="project-card__cover">
        <img src="${assetUrl(p.cover)}" alt="${p.title}" loading="lazy">
        <div class="project-card__overlay">
          <span class="project-card__view">${t('projects.viewDetails')}</span>
        </div>
      </div>
      <div class="project-card__body">
        <div class="project-card__tags">
          ${p.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
        </div>
        <h3 class="project-card__title">${p.title}</h3>
        ${p.completedDate ? `<p class="project-card__date">${formatDate(p.completedDate)}</p>` : ''}
        <p class="project-card__desc">${localized(p.description)}</p>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
  });
}

function openModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  openModalId = id;
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-body');
  const desc = localized(project.description);

  body.innerHTML = `
    <div class="modal__cover">
      <img src="${assetUrl(project.cover)}" alt="${project.title}">
    </div>
    <div class="modal__body">
      <h2 class="modal__title">${project.title}</h2>
      ${project.completedDate ? `
        <p class="modal__date">
          <span class="modal__date-label">${t('projects.completed')}:</span>
          ${formatDate(project.completedDate)}
        </p>
      ` : ''}
      <p class="modal__desc">${desc}</p>

      ${project.tags.length ? `
        <h3 class="modal__skills-title">${t('projects.skills')}</h3>
        <div class="modal__skills">${renderSkillBlocks(project.tags)}</div>
      ` : ''}

      ${(project.gallery && project.gallery.length) ? `
        <h3 class="modal__gallery-title">${t('projects.gallery')}</h3>
        <div class="modal__gallery">
          ${project.gallery.map((img, i) => `
            <img src="${assetUrl(img)}" alt="${project.title} - ${i + 1}" data-lightbox>
          `).join('')}
        </div>
      ` : ''}

      ${project.video ? `
        <h3 class="modal__video-title">${t('projects.video')}</h3>
        <div class="modal__video">
          <iframe src="${project.video}" allowfullscreen loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>
      ` : ''}

      ${renderProjectLinks(project.links)}
    </div>
  `;

  body.querySelectorAll('[data-lightbox]').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(img.src);
    });
  });

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function refreshOpenModal() {
  if (openModalId) openModal(openModalId);
  document.getElementById('modal-close').setAttribute('aria-label', t('modal.close'));
  document.querySelector('#lightbox img').alt = t('lightbox.alt');
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
  openModalId = null;
  const iframe = modal.querySelector('iframe');
  if (iframe) iframe.src = iframe.src;
}

function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  lb.querySelector('img').src = src;
  lb.querySelector('img').alt = t('lightbox.alt');
  lb.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  links.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
}

function observeReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.dataset.animated) return;
      el.dataset.animated = 'true';

      const target = parseInt(el.dataset.count, 10);
      const duration = 2000;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const CONTACT_EMAIL = 'tlttthnwy@gmail.com';

async function copyContactEmail() {
  try {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = CONTACT_EMAIL;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  }
}

function initContactEmail() {
  const btn = document.getElementById('contact-email');
  if (!btn) return;

  const label = btn.querySelector('.contact-email__label');
  let resetTimer;

  btn.addEventListener('click', async () => {
    const copied = await copyContactEmail();
    if (!copied) return;

    clearTimeout(resetTimer);
    btn.classList.add('copied');
    label.textContent = t('contact.copied');

    resetTimer = setTimeout(() => {
      btn.classList.remove('copied');
      label.textContent = t('contact.email');
    }, 2000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNav();
  initCounters();
  initScrollTop();
  initContactEmail();
  observeReveal();
  loadProjects();
  loadReviews();

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', closeModal);
  document.getElementById('lightbox').addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeLightbox();
    }
  });
});
