const models = [
  {
    name: "MARQ Athlete",
    edition: "Gen 2 · Титан",
    material: "titanium",
    badge: "Спорт",
    tagline: "Створений для тих, хто перетворює тренування на результат.",
    image: "assets/images/marq-athlete-thumb.webp",
    features: ["Training Readiness", "PacePro™ та Real-Time Stamina", "Безель VO₂ max і recovery time", "Спортивний вентильований силіконовий ремінець"],
    wide: false
  },
  {
    name: "MARQ Adventurer",
    edition: "Gen 2 · Титан",
    material: "titanium",
    badge: "Активний відпочинок",
    tagline: "Класична естетика інструментального годинника для нових маршрутів.",
    image: "assets/images/marq-adventurer-thumb.webp",
    features: ["TopoActive maps", "NextFork™", "Компасний безель 360°", "Гібридний ремінець зі шкіри та FKM"],
    wide: false
  },
  {
    name: "MARQ Golfer",
    edition: "Gen 2 · Титан",
    material: "titanium",
    badge: "Гольф",
    tagline: "Преміальна точність для гри, у якій важливий кожен метр.",
    image: "assets/images/marq-golfer-thumb.webp",
    features: ["Понад 42 000 полів", "Virtual Caddie", "Green Contours", "Три датчики Approach CT10 у комплекті"],
    wide: false
  },
  {
    name: "MARQ Captain",
    edition: "Gen 2 · Титан",
    material: "titanium",
    badge: "Море",
    tagline: "Штурман, таймер і командний центр — безпосередньо на зап’ясті.",
    image: "assets/images/marq-captain-thumb.webp",
    features: ["Regatta Timer", "Керування автопілотом", "Marine data streaming", "Смугастий французький жакардовий ремінець"],
    wide: false
  },
  {
    name: "MARQ Aviator",
    edition: "Gen 2 · Титан",
    material: "titanium",
    badge: "Авіація",
    tagline: "Авіаційні дані, глобальний час і високе годинникове ремесло.",
    image: "assets/images/marq-aviator-thumb.webp",
    features: ["Direct-To navigation", "NEXRAD, METAR і TAF", "24-годинний GMT-безель", "Титановий браслет swept-wing"],
    wide: false
  },
  {
    name: "MARQ Athlete Carbon",
    edition: "Carbon Edition",
    material: "carbon",
    badge: "Карбон",
    tagline: "Максимальна спортивна функціональність у найлегшому корпусі MARQ.",
    image: "assets/images/marq-carbon-athlete.webp",
    features: ["130 шарів Fused Carbon Fiber™", "До 16 днів автономності", "Розширені метрики продуктивності", "Купольне сапфірове скло"],
    wide: true
  },
  {
    name: "MARQ Golfer Carbon",
    edition: "Carbon Edition",
    material: "carbon",
    badge: "Карбон",
    tagline: "Технології для гольфу в корпусі з виразною карбоновою архітектурою.",
    image: "assets/images/marq-carbon-golfer.webp",
    features: ["Fused Carbon Fiber™", "Virtual Caddie", "Enhanced PlaysLike Distance", "Перфорований гібридний FKM-ремінець"],
    wide: false
  },
  {
    name: "MARQ Commander Carbon",
    edition: "Carbon Edition",
    material: "carbon",
    badge: "Тактичний",
    tagline: "Преміальний тактичний інструмент із непомітним профілем.",
    image: "assets/images/marq-carbon-commander.webp",
    features: ["Stealth Mode", "Kill Switch", "Dual-position format", "Жакардовий тактичний нейлоновий ремінець"],
    wide: false
  },
  {
    name: "MARQ Adventurer Damascus",
    edition: "Виконання з дамаської сталі",
    material: "steel",
    badge: "Лімітоване виконання",
    tagline: "Кожен корпус має унікальний природний рисунок кованої сталі.",
    image: "assets/images/marq-adventurer-damascus.webp",
    features: ["Багатошарова дамаська сталь", "Унікальний візерунок кожного корпусу", "Компасний безель 360°", "Гібридний шкіряний FKM-ремінець"],
    wide: false,
    texture: true
  }
];

const grid = document.querySelector("[data-model-grid]");
const modal = document.querySelector("[data-modal]");

function createCard(model, index) {
  const article = document.createElement("article");
  article.className = "model-card reveal";
  article.dataset.material = model.material;
  article.dataset.wide = String(model.wide);
  article.setAttribute("tabindex", "0");
  article.setAttribute("role", "button");
  article.setAttribute("aria-label", `Детальніше про ${model.name}`);

  const image = model.texture
    ? `<div class="model-card__media"><div class="damascus-wave"></div></div>`
    : `<div class="model-card__media"><img src="${model.image}" alt="${model.name}" loading="lazy" ${model.fallback ? `onerror="this.onerror=null;this.src='${model.fallback}'"` : ""}></div>`;

  article.innerHTML = `
    ${image}
    <span class="model-card__badge">${model.badge}</span>
    <div class="model-card__body">
      <span class="section-kicker">${model.edition}</span>
      <h3>${model.name}</h3>
      <p>${model.tagline}</p>
      <div class="model-card__meta"><span>Детальніше</span><span>↗</span></div>
    </div>`;

  const open = () => openModal(index);
  article.addEventListener("click", open);
  article.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
  return article;
}

models.forEach((model, index) => grid.appendChild(createCard(model, index)));

function openModal(index) {
  const model = models[index];
  const modalImage = modal.querySelector("[data-modal-image]");
  const media = modal.querySelector(".model-modal__media");

  modal.querySelector("[data-modal-material]").textContent = model.edition;
  modal.querySelector("[data-modal-title]").textContent = model.name;
  modal.querySelector("[data-modal-tagline]").textContent = model.tagline;
  modal.querySelector("[data-modal-features]").innerHTML = model.features.map(item => `<li>${item}</li>`).join("");

  if (model.texture) {
    modalImage.hidden = true;
    media.classList.add("material-panel__visual--texture");
    if (!media.querySelector(".damascus-wave")) media.insertAdjacentHTML("afterbegin", '<div class="damascus-wave"></div>');
  } else {
    modalImage.hidden = false;
    media.classList.remove("material-panel__visual--texture");
    media.querySelector(".damascus-wave")?.remove();
    modalImage.src = model.image;
    modalImage.alt = model.name;
    modalImage.onerror = () => {
      modalImage.onerror = null;
      modalImage.src = model.fallback || "assets/images/marq-collection-hero.webp";
    };
  }

  modal.showModal();
}

modal.querySelector("[data-modal-close]").addEventListener("click", () => modal.close());
modal.addEventListener("click", event => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) modal.close();
});
modal.querySelector("[data-modal-link]").addEventListener("click", () => modal.close());

const filterButtons = document.querySelectorAll("[data-filter]");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".model-card").forEach(card => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.material !== filter);
    });
  });
});

const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 30), { passive: true });
toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Відкрити меню" : "Закрити меню");
  nav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("is-menu-open", !isOpen);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  toggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  document.body.classList.remove("is-menu-open");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -45px" });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
