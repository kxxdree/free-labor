const vacancies = [
  {
    stackTitle: "Машинное обучение",
    stackDescription: "Разработка моделей машинного обучения",
    vacancyName: "ML Engineer",
    vacancyRequirements: ["Опыт работы от 3х лет", "Глубокое понимание Python, FastAPI и PostgreSQL", "Опыт работы с Docker"],
  },
  {
    stackTitle: "Frontend-разработка",
    stackDescription: "Создание интерфейсов веб-сайтов и приложений",
    vacancyName: "Frontend-разработчик",
    vacancyRequirements: ["Опыт работы от 3х лет", "Глубокое понимание Python, FastAPI и PostgreSQL", "Опыт работы с Docker"],
  },

  {
    stackTitle: "Backend-разработка",
    stackDescription: "Разработка бизнес-логики продукта",
    vacancyName: "Backend-разработчик",
    vacancyRequirements: ["Опыт работы от 3х лет", "Глубокое понимание Python, FastAPI и PostgreSQL", "Опыт работы с Docker"],
  },
  {
    stackTitle: "Аналитика данных",
    stackDescription: "Подготовка технических заданий/проектов",
    vacancyName: "Аналитик данных Middle+ / Data Analyst",
    vacancyRequirements: ["Опыт работы от 3х лет", "Глубокое понимание Python, FastAPI и PostgreSQL", "Опыт работы с Docker"],
  },
];

for (let i = 0; i < vacancies.length; i++) {
  const vacancyStack = document.createElement("div");
  vacancyStack.classList.add("vacancies-stack");
  const vacancyReqString = vacancies[i].vacancyRequirements.map((req) => `<li class="vacancy-req">${req}</li>`).join("");
  vacancyStack.innerHTML = `
  <div class="vacancies-stack_titles-block">
          <p class="stack-title">${vacancies[i].stackTitle}</p>
          <p class="stack-description">${vacancies[i]?.stackDescription}</p>
        </div>
        <ul class="vacancies-list-items">
          <li class="vacancies-item">
            <h3>${vacancies[i].vacancyName}</h3>
              <ul class='vacancy-req-list'>
                ${vacancyReqString}
              </ul>
            <a href='https://t.me/okovale' target='_blank' style='text-decoration: none'>
            <div class="title-content__links tg-link" style='background-color: #27A6E51A;'>
              <p class="title-content-link team" style='color: #0988C7'>Telegram</p>
              <div class="title-content-link join">
                <p style='color: #0988C7'>Написать по вакансии</p>
                <img src="assets/images/join-link-tg.svg" alt="Join" style='width: 0.625rem'/>
              </div>
            </div>
            </a>
          </li>
        </ul>
`;

  document.querySelector(".vacancies-list").appendChild(vacancyStack);
}

function copyText(elem) {
  elem.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.innerHTML);
    e.target.innerHTML = "Скопировано";
  });
}

const email = document.querySelector(".contacts-email");
copyText(email);

const phone = document.querySelector(".contacts-phone");
copyText(phone);

setInterval(() => {
  if (phone.innerHTML === "Скопировано") {
    phone.innerHTML = "+7 (900) 600 10 42";
  }
  if (email.innerHTML === "Скопировано") {
    email.innerHTML = "dr_lipetsk@admlr.lipetsk.ru";
  }
}, 3000);
