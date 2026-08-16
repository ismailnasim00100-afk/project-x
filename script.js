// ===============================
// شاشة الدخول
// ===============================

const intro = document.getElementById("intro");
const website = document.getElementById("website");
const enterBtn = document.getElementById("enterBtn");

document.body.classList.add("locked");

enterBtn.addEventListener("click", () => {

  intro.classList.add("hidden");

  document.body.classList.remove("locked");

  setTimeout(() => {
    intro.style.display = "none";
  }, 1000);

});


// ===============================
// ظهور العناصر أثناء النزول
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.15
  }
);

sections.forEach((section) => {
  observer.observe(section);
});


// ===============================
// زر الأغنية
// ===============================

const playBtn = document.querySelector(".play-btn");
const vinyl = document.querySelector(".vinyl");

if (playBtn && vinyl) {

  playBtn.addEventListener("click", () => {

    vinyl.classList.toggle("playing");

  });

}


// ===============================
// تأثير القلوب
// ===============================

function createHeart() {

  const heart = document.createElement("div");

  heart.innerHTML = "♥";

  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.fontSize =
    Math.floor(Math.random() * 18 + 12) + "px";

  heart.style.color = "rgba(217, 140, 167, 0.7)";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "9998";

  heart.style.transition =
    "transform 5s linear, opacity 5s linear";

  document.body.appendChild(heart);

  requestAnimationFrame(() => {

    heart.style.transform =
      `translateY(-110vh) rotate(${Math.random() * 360}deg)`;

    heart.style.opacity = "0";

  });

  setTimeout(() => {

    heart.remove();

  }, 5000);

}


// إنشاء قلب كل فترة
setInterval(createHeart, 900);


// ===============================
// منع القفز المفاجئ عند الضغط
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId =
      link.getAttribute("href");

    const target =
      document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


// ===============================
// تأثير الكتابة في النهاية
// ===============================

const finalTitle =
  document.querySelector(".final-content h1");

if (finalTitle) {

  const originalText =
    finalTitle.textContent.trim();

  finalTitle.textContent = "";

  let index = 0;

  const typeText = () => {

    if (index < originalText.length) {

      finalTitle.textContent +=
        originalText.charAt(index);

      index++;

      setTimeout(typeText, 120);

    }

  };


  const finalSection =
    document.querySelector("#final");

  const finalObserver =
    new IntersectionObserver(
      (entries) => {

        if (
          entries[0].isIntersecting &&
          index === 0
        ) {

          typeText();

        }

      },
      {
        threshold: 0.5
      }
    );

  finalObserver.observe(finalSection);

}
