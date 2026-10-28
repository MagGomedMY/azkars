/* ============================================================
   ДАННЫЕ АЗКАРОВ
   ============================================================ */
const AZKAR = {
  morning: [
    {
      id: "m1",
      title: "Утро наступило",
      count: 1,
      arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      translit: "Асбахна ва асбаха-ль-мульку лиллях, валь-хамду лиллях, ля иляха илля-ллаху вахдаху ля шарика ляху, ляху-ль-мульку ва ляху-ль-хамду ва хува 'аля кулли шай'ин кадир",
      translation: "Мы дожили до утра, и власть принадлежит Аллаху. Хвала Аллаху! Нет божества, кроме Аллаха, Единственного, у Которого нет сотоварища. Ему принадлежит власть, Ему — хвала, и Он над всякой вещью мощен.",
      source: "Муслим, 2723"
    },
    {
      id: "m2",
      title: "Благодарность за утро",
      count: 1,
      arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
      translit: "Аллахумма бика асбахна, ва бика амсайна, ва бика нахйа, ва бика намуту, ва иляйка-н-нушур",
      translation: "О Аллах, благодаря Тебе мы дожили до утра и благодаря Тебе дожили до вечера. Благодаря Тебе мы живём и благодаря Тебе умираем, и к Тебе предстоит воскрешение.",
      source: "Ат-Тирмизи, 3391"
    },
    {
      id: "m3",
      title: "Защита на весь день",
      count: 3,
      arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ",
      translit: "Бисмилляхи-ллязи ля йадурру ма'а-смихи шай'ун филь-арди ва ля фис-сама'и, ва хува-с-Сами'у-ль-'Алим",
      translation: "С именем Аллаха, с именем Которого ничто не причинит вред ни на земле, ни на небе. Он — Всеслышащий, Всезнающий.",
      source: "Абу Дауд, 5088; ат-Тирмизи, 3388"
    },
    {
      id: "m4",
      title: "Довольство",
      count: 1,
      arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
      translit: "Радыту билляхи раббан, ва биль-ислями динан, ва би-Мухаммадин салля-ллаху 'аляйхи ва салляма набиййан",
      translation: "Я доволен Аллахом как Господом, исламом как религией и Мухаммадом (мир ему и благословение Аллаха) как пророком.",
      source: "Абу Дауд, 5072"
    },
    {
      id: "m5",
      title: "Тасбих",
      count: 100,
      arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
      translit: "Субхана-Ллахи ва бихамдих",
      translation: "Пречист Аллах и хвала Ему.",
      source: "Муслим, 2691"
    },
    {
      id: "m6",
      title: "Единобожие",
      count: 10,
      arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      translit: "Ля иляха илля-ллаху вахдаху ля шарика ляху, ляху-ль-мульку ва ляху-ль-хамду ва хува 'аля кулли шай'ин кадир",
      translation: "Нет божества, кроме Аллаха, Единственного, у Которого нет сотоварища. Ему принадлежит власть, Ему — хвала, и Он над всякой вещью мощен.",
      source: "Аль-Бухари, 6403"
    }
  ],
  evening: [
    {
      id: "e1",
      title: "Вечер наступил",
      count: 1,
      arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      translit: "Амсайна ва амса-ль-мульку лиллях, валь-хамду лиллях, ля иляха илля-ллаху вахдаху ля шарика ляху, ляху-ль-мульку ва ляху-ль-хамду ва хува 'аля кулли шай'ин кадир",
      translation: "Мы дожили до вечера, и власть принадлежит Аллаху. Хвала Аллаху! Нет божества, кроме Аллаха, Единственного, у Которого нет сотоварища. Ему принадлежит власть, Ему — хвала, и Он над всякой вещью мощен.",
      source: "Муслим, 2723"
    },
    {
      id: "e2",
      title: "Благодарность за вечер",
      count: 1,
      arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
      translit: "Аллахумма бика амсайна, ва бика асбахна, ва бика нахйа, ва бика намуту, ва иляйка-ль-масыр",
      translation: "О Аллах, благодаря Тебе мы дожили до вечера и благодаря Тебе дожили до утра. Благодаря Тебе мы живём и благодаря Тебе умираем, и к Тебе возвращение.",
      source: "Ат-Тирмизи, 3391"
    },
    {
      id: "e3",
      title: "Защита от зла",
      count: 3,
      arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
      translit: "А'узу би-калимати-Ллахи-т-таммати мин шарри ма халяк",
      translation: "Прибегаю к совершенным словам Аллаха от зла того, что Он сотворил.",
      source: "Муслим, 2708"
    },
    {
      id: "e4",
      title: "Исцеление",
      count: 1,
      arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
      translit: "Аллахумма 'афини фи бадани, Аллахумма 'афини фи сам'и, Аллахумма 'афини фи басари, ля иляха илля анта",
      translation: "О Аллах, исцели моё тело, о Аллах, исцели мой слух, о Аллах, исцели моё зрение. Нет божества, кроме Тебя.",
      source: "Абу Дауд, 5090"
    },
    {
      id: "e5",
      title: "Тасбих",
      count: 100,
      arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
      translit: "Субхана-Ллахи ва бихамдих",
      translation: "Пречист Аллах и хвала Ему.",
      source: "Муслим, 2691"
    },
    {
      id: "e6",
      title: "Единобожие",
      count: 10,
      arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      translit: "Ля иляха илля-ллаху вахдаху ля шарика ляху, ляху-ль-мульку ва ляху-ль-хамду ва хува 'аля кулли шай'ин кадир",
      translation: "Нет божества, кроме Аллаха, Единственного, у Которого нет сотоварища. Ему принадлежит власть, Ему — хвала, и Он над всякой вещью мощен.",
      source: "Аль-Бухари, 6403"
    }
  ]
};

/* ============================================================
   ХРАНИЛИЩЕ
   ============================================================ */
const STORE_KEY = "azkar_progress_v2";

function todayKey() {
  const d = new Date();
  return d.getFullYear() + "-" +
    String(d.getMonth() + 1).padStart(2, "0") + "-" +
    String(d.getDate()).padStart(2, "0");
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return { date: todayKey(), data: {} };
    const parsed = JSON.parse(raw);
    if (parsed.date !== todayKey()) return { date: todayKey(), data: {} };
    return parsed;
  } catch {
    return { date: todayKey(), data: {} };
  }
}

let progress = loadProgress();

function saveProgress() {
  try {
    progress.date = todayKey();
    localStorage.setItem(STORE_KEY, JSON.stringify(progress));
  } catch { /* silent */ }
}

function getDone(id) { return progress.data[id] || 0; }
function setDone(id, v) { progress.data[id] = v; saveProgress(); }

/* ============================================================
   УТИЛИТЫ
   ============================================================ */
const toastEl = document.getElementById("toast");
let toastTimer = null;

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

function vibrate(ms = 15) {
  if (navigator.vibrate) navigator.vibrate(ms);
}

/* ============================================================
   РЕНДЕР
   ============================================================ */
function renderList(mode) {
  const list = AZKAR[mode];
  const container = document.getElementById("content-" + mode);
  const complete = list.every(z => getDone(z.id) >= z.count);

  let html = "";

  if (complete) {
    html += `
      <div class="complete-banner">
        <span class="icon">✓</span>
        <b>${mode === "morning" ? "Утренние азкары" : "Вечерние азкары"} прочитаны</b>
        <small>Да вознаградит тебя Аллах благом</small>
      </div>`;
  }

  list.forEach(z => {
    const done = getDone(z.id);
    const isDone = done >= z.count;
    const remaining = Math.max(0, z.count - done);
    const displayText = isDone
      ? "Выполнено ✓"
      : (z.count > 1 ? `${done} / ${z.count}` : "Готово к чтению");

    html += `
      <article class="azkar-card ${isDone ? "done" : ""}" data-id="${z.id}">
        <h3>${z.title}</h3>
        <div class="arabic">${z.arabic}</div>
        <p class="transcription">${z.translit}</p>
        <p class="translation">${z.translation}</p>
        <p class="source">${z.source}</p>
        <div class="counter">
          <button class="counter-btn ${isDone ? "done" : ""}" 
                  data-action="read" data-id="${z.id}"
                  ${isDone ? "disabled" : ""}
                  aria-label="Отметить прочтение">
            ${isDone ? "✓" : (z.count > 1 ? "+" : "✓")}
          </button>
          <span class="counter-display ${isDone ? "complete" : ""}">
            ${displayText}
          </span>
          <button class="counter-reset" 
                  data-action="reset" data-id="${z.id}"
                  aria-label="Сбросить">↺</button>
        </div>
      </article>`;
  });

  container.innerHTML = html;
}

function renderAll() {
  renderList("morning");
  renderList("evening");
  updateProgressUI();
}

function updateProgressUI() {
  const total = AZKAR.morning.length + AZKAR.evening.length;
  const done = Object.values(progress.data).filter((v, i) => {
    // Подсчёт: считаем выполненные из обоих списков
    return false;
  }).length;

  const all = [...AZKAR.morning, ...AZKAR.evening];
  const completedCount = all.filter(z => getDone(z.id) >= z.count).length;
  const pct = total ? Math.round((completedCount / total) * 100) : 0;

  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressText").textContent = pct + "%";
}

/* ============================================================
   СОБЫТИЯ
   ============================================================ */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  const id = btn.dataset.id;
  const action = btn.dataset.action;

  // Найти азкар в обоих списках
  const all = [...AZKAR.morning, ...AZKAR.evening];
  const z = all.find(x => x.id === id);
  if (!z) return;

  if (action === "read") {
    const current = getDone(id);
    if (current >= z.count) return;

    const next = current + 1;
    setDone(id, next);
    vibrate(next >= z.count ? 40 : 12);

    if (next >= z.count) {
      showToast("Азкар выполнен ✓");
    }

    // Обновляем только нужный список
    const mode = AZKAR.morning.some(x => x.id === id) ? "morning" : "evening";
    renderList(mode);
    updateProgressUI();
  }

  if (action === "reset") {
    setDone(id, 0);
    vibrate(20);
    showToast("Сброшено");
    const mode = AZKAR.morning.some(x => x.id === id) ? "morning" : "evening";
    renderList(mode);
    updateProgressUI();
  }
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
    tab.classList.add("active");

    const mode = tab.dataset.mode;
    const content = document.getElementById("content-" + mode);
    content.classList.add("active");

    // Перерисовка для свежей анимации появления
    renderList(mode);
    updateProgressUI();
  });
});

/* ============================================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================================ */
(function init() {
  // Автовыбор таба по времени
  const h = new Date().getHours();
  const autoMode = (h >= 16 || h < 4) ? "evening" : "morning";

  if (autoMode === "evening") {
    document.querySelectorAll(".tab").forEach(t => {
      t.classList.toggle("active", t.dataset.mode === "evening");
    });
    document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
    document.getElementById("content-evening").classList.add("active");
  }

  // Дата в подвале
  const dateStr = new Date().toLocaleDateString("ru-RU", {
    weekday: "long", day: "numeric", month: "long"
  });
  document.getElementById("footerDate").textContent = dateStr;

  renderAll();
})();