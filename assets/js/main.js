const models = [
  {
    name: "MARQ Athlete",
    edition: "Gen 2 · Титан",
    material: "titanium",
    badge: "Спорт",
    tagline: "Преміальний спортивний годинник для тих, хто прагне краще розуміти свою форму, відновлення та тренувальну готовність. Титановий корпус Grade 5, яскравий AMOLED-дисплей і розширені показники продуктивності поєднують технологічність із вишуканою естетикою.",
    image: "assets/images/marq-athlete-thumb.webp",
    features: ["Training Readiness", "PacePro™ та Real-Time Stamina", "Безель VO₂ max і recovery time", "Спортивний вентильований силіконовий ремінець"],
    descriptionUrl: "model-descriptions/marq-athlete.html",
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
    descriptionUrl: "model-descriptions/marq-adventurer.html",
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
    descriptionUrl: "model-descriptions/marq-golfer.html",
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
    descriptionUrl: "model-descriptions/marq-captain.html",
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
    descriptionUrl: "model-descriptions/marq-aviator.html",
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
    descriptionUrl: "model-descriptions/marq-athlete-carbon.html",
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
    descriptionUrl: "model-descriptions/marq-golfer-carbon.html",
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
    descriptionUrl: "model-descriptions/marq-commander-carbon.html",
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
    descriptionUrl: "model-descriptions/marq-adventurer-damascus.html",
    wide: false
  }
];

const grid = document.querySelector("[data-model-grid]");
const modal = document.querySelector("[data-modal]");

if (!grid || !modal) {
  console.error("MARQ: не знайдено [data-model-grid] або [data-modal].");
  throw new Error("Неповна структура index.html");
}

const modalImage = modal.querySelector("[data-modal-image]");
const modalMedia = modal.querySelector(".model-modal__media");
const specificationsPanel = modal.querySelector("[data-modal-specifications]");
const descriptionPanel = modal.querySelector("#model-description-panel");
const descriptionContainer = modal.querySelector("[data-modal-description]");
const descriptionButton = modal.querySelector('[data-modal-tab="description"]');
const specificationsButton = modal.querySelector('[data-modal-tab="specifications"]');
const modalCloseButton = modal.querySelector("[data-modal-close]");

const requiredModalElements = {
  modalImage,
  modalMedia,
  specificationsPanel,
  descriptionPanel,
  descriptionContainer,
  descriptionButton,
  specificationsButton,
  modalCloseButton
};

const missingModalElements = Object.entries(requiredModalElements)
  .filter(([, element]) => !element)
  .map(([name]) => name);

if (missingModalElements.length) {
  console.error(
    "MARQ: у модальному вікні відсутні елементи:",
    missingModalElements.join(", ")
  );
  throw new Error("Структура модального вікна не відповідає main.js");
}

const descriptionCache = new Map();
let currentModel = null;

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

function setModalTab(mode, { scroll = true } = {}) {
  const showDescription = mode === "description";
  const showSpecifications = mode === "specifications";

  descriptionButton.classList.toggle("is-active", showDescription);
  specificationsButton.classList.toggle("is-active", showSpecifications);
  descriptionButton.setAttribute("aria-selected", String(showDescription));
  specificationsButton.setAttribute("aria-selected", String(showSpecifications));

  descriptionPanel.hidden = !showDescription;
  specificationsPanel.hidden = !showSpecifications;
  modal.classList.toggle("is-description-expanded", showDescription || showSpecifications);

  if (showDescription && currentModel) {
    loadModelDescription(currentModel);
  }

  if (!scroll || (!showDescription && !showSpecifications)) return;

  requestAnimationFrame(() => {
    const target = showDescription ? descriptionPanel : specificationsPanel;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

async function loadModelDescription(model) {
  const url = model.descriptionUrl;
  if (!url) {
    descriptionContainer.innerHTML = '<p class="model-modal__error">Опис не знайдено.</p>';
    return;
  }

  if (descriptionContainer.dataset.loadedUrl === url) return;

  descriptionContainer.setAttribute("aria-busy", "true");
  descriptionContainer.innerHTML = '<p class="model-modal__loading">Завантаження опису…</p>';

  try {
    let html = descriptionCache.get(url);

    if (!html) {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      html = await response.text();
      descriptionCache.set(url, html);
    }

    if (!currentModel || currentModel.descriptionUrl !== url) return;

    descriptionContainer.innerHTML = html;
    descriptionContainer.dataset.loadedUrl = url;
  } catch (error) {
    console.error(`Не вдалося завантажити ${url}:`, error);

    if (!currentModel || currentModel.descriptionUrl !== url) return;

    descriptionContainer.innerHTML = `
      <p class="model-modal__error">
        Не вдалося завантажити опис. Перевірте, чи файл «${url}» завантажений на сервер.
      </p>`;
    delete descriptionContainer.dataset.loadedUrl;
  } finally {
    if (currentModel?.descriptionUrl === url) {
      descriptionContainer.removeAttribute("aria-busy");
    }
  }
}

function openModal(index) {
  const model = models[index];
  currentModel = model;

  modal.querySelector("[data-modal-material]").textContent = model.edition;
  modal.querySelector("[data-modal-title]").textContent = model.name;
  modal.querySelector("[data-modal-tagline]").textContent = model.tagline;
  modal.querySelector("[data-modal-features]").textContent = "Інформація готується";

  descriptionContainer.innerHTML = "";
  delete descriptionContainer.dataset.loadedUrl;
  descriptionContainer.removeAttribute("aria-busy");
  setModalTab("none", { scroll: false });

  if (model.texture) {
    modalImage.hidden = true;
    modalMedia.classList.add("material-panel__visual--texture");
    if (!modalMedia.querySelector(".damascus-wave")) {
      modalMedia.insertAdjacentHTML("afterbegin", '<div class="damascus-wave"></div>');
    }
  } else {
    modalImage.hidden = false;
    modalMedia.classList.remove("material-panel__visual--texture");
    modalMedia.querySelector(".damascus-wave")?.remove();
    modalImage.src = model.image;
    modalImage.alt = model.name;
    modalImage.onerror = () => {
      modalImage.onerror = null;
      modalImage.src = model.fallback || "assets/images/marq-collection-hero.webp";
    };
  }

  modal.showModal();
}

function closeModal() {
  modal.close();
}

function clearLoadedDescription() {
  descriptionContainer.querySelectorAll("iframe").forEach(iframe => {
    iframe.src = "about:blank";
  });
  descriptionContainer.innerHTML = "";
  delete descriptionContainer.dataset.loadedUrl;
  descriptionContainer.removeAttribute("aria-busy");
  modal.classList.remove("is-description-expanded");
  descriptionPanel.hidden = true;
  specificationsPanel.hidden = true;
  descriptionButton.classList.remove("is-active");
  specificationsButton.classList.remove("is-active");
  descriptionButton.setAttribute("aria-selected", "false");
  specificationsButton.setAttribute("aria-selected", "false");
  currentModel = null;
}

modalCloseButton.addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) closeModal();
});
modal.addEventListener("close", clearLoadedDescription);

descriptionButton.addEventListener("click", () => setModalTab("description"));
specificationsButton.addEventListener("click", () => setModalTab("specifications"));

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

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -45px"
  });

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("is-visible"));
}
