const vacancies = [
  {
    stackTitle: "Машинное обучение",
    stackDescription: "Разработка моделей машинного обучения",
    vacancyName: "ML Engineer / Data Scientist",
    vacancyAbout: "Мы ищем Junior-level ML-инженера. Обязательно понимание основ машинного обучения и знание современных архитектур нейронных сетей",
  },
];

const vacancyStack = document.createElement("div");
vacancyStack.classList.add("vacancies-stack");
vacancyStack.innerHTML = `
        <div class="vacancies-stack_titles-block">
                <p class="stack-title">${vacancies[0].stackTitle}</p>
                <p class="stack-description">${vacancies[0].stackDescription}</p>
              </div>
              <ul class="vacancies-list-items">
                <li class="vacancies-item">
                  <h3>${vacancies[0].vacancyName}</h3>
                  <p class="vacancy-about">
                   ${vacancies[0].vacancyAbout}
                  </p>
                  <div class="title-content__links hh-link">
                    <p class="title-content-link team">hh.ru</p>
                    <div class="title-content-link join">
                      <p>Откликнуться на вакансию</p>
                      <img src="assets/images/join-link.svg" alt="Join" />
                    </div>
                  </div>
                </li>
                <li class="vacancies-item">
                  <h3>Senior ML Engineer (Computer Vision)</h3>
                  <p class="vacancy-about">
                    Имеет опыт работы в качестве ML Engineer или CV Engineer от 3 лет и опыт обучения production ready GAN моделей, обладает отличным
                    математическим бэкграундом - линейная алгебра, теория вероятностей, мат. анализ, идеально знает Pytorch, numpy, opencv
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
