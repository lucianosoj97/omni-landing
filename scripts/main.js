document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".services-track");
  const nextBtn = document.querySelector(".carousel-arrow.next");
  const prevBtn = document.querySelector(".carousel-arrow.prev");

  if (!track || !nextBtn || !prevBtn) return;

  const scrollAmount = 360;

  function updateArrows() {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    // Início
    if (track.scrollLeft <= 0) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }

    // Fim
    if (track.scrollLeft >= maxScrollLeft - 1) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
  }

  nextBtn.addEventListener("click", () => {
    if (nextBtn.classList.contains("disabled")) return;
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    if (prevBtn.classList.contains("disabled")) return;
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  track.addEventListener("scroll", updateArrows);

  // Estado inicial
  updateArrows();
});
