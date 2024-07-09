const vacancies = [
  {
    stackTitle: "Машинное обучение",
    stackDescription: "Разработка моделей машинного обучения",
    vacancyName: "ML Engineer / Data Scientist",
    vacancyAbout: "Мы ищем Junior-level ML-инженера. Обязательно понимание основ машинного обучения и знание современных архитектур нейронных сетей",
  },
  {
    stackTitle: "",
    stackDescription: " ",
    vacancyName: "Senior ML Engineer (Computer Vision)",
    vacancyAbout:
      "Имеет опыт работы в качестве ML Engineer или CV Engineer от 3 лет и опыт обучения production ready GAN моделей, обладает отличным математическим бэкграундом - линейная алгебра, теория вероятностей, мат. анализ, идеально знает Pytorch, numpy, opencv",
  },
  {
    stackTitle: "Frontend-разработка",
    stackDescription: "Создание интерфейсов веб-сайтов и приложений",
    vacancyName: "Frontend-разработчик (React, Next.js)",
    vacancyAbout:
      " Разработка и поддержка High-Load фронтендов на React/Next.js, вёрстка дизайна и компонентов, знание React, Next.js, TypeScript, JavaScript, понимание микросервисного подхода, умение использовать паттерны только там, где это необходимо",
  },
  {
    stackTitle: "",
    stackDescription: "",
    vacancyName: "Frontend-разработчик (Vue.js)",
    vacancyAbout: " Понимание семантики супер важно, уверенные знания и опыт работы с Vue.js, опыт работы на чистом JavaScript от 3 лет",
  },
  {
    stackTitle: "Backend-разработка",
    stackDescription: "Создание интерфейсов веб-сайтов и приложений",
    vacancyName: "Разработка бизнес-логики продукта",
    vacancyAbout:
      "Знание C++17 и STL, от 3-х лет опыта коммерческой разработки, опыт работы с высоконагруженными системами, микросервисной архитектурой и Docker",
  },
  {
    stackTitle: "Аналитика данных",
    stackDescription: "Сбор, обработка, изучение и интерпретация данных",
    vacancyName: "Аналитик данных Middle+ / Data Analyst",
    vacancyAbout:
      " Уверенное знание SQL (Clickhouse, Postgres, MS SQL) и Python, понимание статистики и применения в АБ тестах, навыки работы с BI-системами (Datalens), умение проводить встречи с заказчиками, снимать бизнес-требования и презентовать результаты",
  },
];

for (let i = 0; i < vacancies.length; i++) {
  const vacancyStack = document.createElement("div");
  vacancyStack.classList.add("vacancies-stack");
  vacancyStack.innerHTML = `
  <div class="vacancies-stack_titles-block">
          <p class="stack-title">${vacancies[i].stackTitle}</p>
          <p class="stack-description">${vacancies[i]?.stackDescription}</p>
        </div>
        <ul class="vacancies-list-items">
          <li class="vacancies-item">
            <h3>${vacancies[i].vacancyName}</h3>
            <p class="vacancy-about">
             ${vacancies[i].vacancyAbout}
            </p>
            <div class="title-content__links hh-link">
              <p class="title-content-link team">hh.ru</p>
              <div class="title-content-link join">
                <p>Откликнуться на вакансию</p>
                <img src="assets/images/join-link.svg" alt="Join" />
              </div>
            </div>
          </li>
        </ul>
`;

  document.querySelector(".vacancies-list").appendChild(vacancyStack);
}

const email = document.querySelector(".contacts-email");
email.addEventListener("click", (e) => {
  e.target.innerHTML = "Скопировано";
});

const phone = document.querySelector(".contacts-phone");
phone.addEventListener("click", (e) => {
  e.target.innerHTML = "Скопировано";
});

setInterval(() => {
  if (phone.innerHTML === "Скопировано") {
    phone.innerHTML = "+7 (900) 600 10 42";
  }
  if (email.innerHTML === "Скопировано") {
    email.innerHTML = "dr_lipetsk@admlr.lipetsk.ru";
  }
}, 3000);
