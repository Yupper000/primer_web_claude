(() => {
  const list = document.getElementById("reel-list");
  const count = document.getElementById("reel-count");
  const dialog = document.getElementById("reel-dialog");
  const dialogBody = document.getElementById("dialog-body");
  const chips = document.querySelectorAll(".chip");

  let filter = "all";

  const pad = (n) => String(n).padStart(2, "0");

  function renderList() {
    const items = window.REELS.filter(
      (reel) => filter === "all" || reel.category === filter
    );

    count.textContent = `${window.REELS.length} reels indexados`;

    list.innerHTML = items
      .map((reel, i) => {
        const tags = reel.tags
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join("");
        return `
          <button class="reel-row" type="button" data-id="${reel.id}">
            <span class="reel-index">${pad(i + 1)}</span>
            <span class="reel-copy">
              <h3>${reel.title}</h3>
              <p>${reel.blurb}</p>
              <span class="reel-tags">${tags}</span>
            </span>
            <span class="reel-open">Abrir →</span>
          </button>
        `;
      })
      .join("");
  }

  function openReel(id) {
    const reel = window.REELS.find((item) => item.id === id);
    if (!reel) return;

    const enBlock = reel.transcript_en
      ? `<section class="dialog-section">
          <h3>Transcript (EN)</h3>
          <pre>${reel.transcript_en}</pre>
        </section>`
      : "";

    dialogBody.innerHTML = `
      <h2>${reel.title}</h2>
      <p class="dialog-meta">
        ${reel.author} · <a href="${reel.url}" target="_blank" rel="noopener">Ver en Instagram</a>
      </p>
      <section class="dialog-section quote">
        <h3>Resumen</h3>
        <p>${reel.summary_es}</p>
      </section>
      <section class="dialog-section">
        <h3>Lo que dice (ES)</h3>
        <pre>${reel.transcript_es}</pre>
      </section>
      ${enBlock}
    `;

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    }
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      filter = chip.dataset.filter;
      renderList();
    });
  });

  list.addEventListener("click", (event) => {
    const row = event.target.closest(".reel-row");
    if (!row) return;
    openReel(row.dataset.id);
  });

  renderList();
})();
