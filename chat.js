document.addEventListener("DOMContentLoaded", () => {
    const botUrlImg = "https://clck.ru/355ZVc";
    const meUrlImg = "https://clck.ru/345PmN";
  
    const robotPhrases = new Map([
      ["1", "Привет"],
      ["2", "Отлично"],
      [
        "3",
        "В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
      ],
      [
        "4",
        "Задача организации, в особенности же социально-экономическое развитие играет важную роль в формировании ключевых компонентов планируемого обновления.",
      ],
      [
        "5",
        "С другой стороны постоянное информационно-техническое обеспечение нашей деятельности обеспечивает широкому кругу специалистов",
      ],
      [
        "6",
        "В основе данного скрипта для производства текста рыбы лежит универсальный код составления речей.",
      ],
      [
        "7",
        "Из сказанного выше ясно, что генератор Lorem Ipsum не подойдёт для получения логичных читаемых текстов.",
      ],
      [
        "8",
        "Также эффекта рандомного уникального текста можно добиться в сервисе размножения текстов. В этом случае текст получится логичным и читабельным",
      ],
      [
        "9",
        "Скрипт поддерживает произвольную расстановку знаков препинания и отображение HTML тэгов абзацев.",
      ],
    ]);
  
    const sendMessageInput = document.querySelector(".send");
    const content = document.querySelector(".content");
    const date = document.querySelector(".date");
  
    sendMessageInput.addEventListener("keydown", (e) => {
      if (e.keyCode === 13 || e.code === "Enter" || e.key === 13) {
        const value = e.target.value;
        if (!value) return;
  
        if (robotPhrases.get(value)) {
          const loading = document.createElement("div");
          // Me message
          const itemWrapMe = document.createElement("div");
          const itemImgMe = document.createElement("img");
          const itemMessageMe = document.createElement("div");
          // Me message
  
          // Bot message
          const itemWrapBot = document.createElement("div");
          const itemImgBot = document.createElement("img");
          // Bot message
  
          // Me message
          itemMessageMe.innerText = value;
          itemImgMe.src = meUrlImg;
          itemWrapMe.appendChild(itemMessageMe);
          itemWrapMe.appendChild(itemImgMe);
          content.appendChild(itemWrapMe);
          // Me message
  
          // Bot message
          itemImgBot.src = botUrlImg;
          itemWrapBot.appendChild(itemImgBot);
          itemWrapBot.appendChild(loading);
          content.appendChild(itemWrapBot);
          itemWrapBot.classList.add("wrap");
          itemImgBot.classList.add("img");
          // Bot message
  
          // Me message
          itemWrapMe.classList.add("wrap");
          itemMessageMe.classList.add("me-message");
          itemImgMe.classList.add("img");
          // Me message
  
          loading.classList.remove("on-loading");
          loading.classList.add("loader");
  
          setTimeout(() => {
            // Bot message
  
            itemWrapBot.removeChild(loading);
  
            const itemMessageBot = document.createElement("div");
  
            itemMessageBot.innerText = robotPhrases.get(value);
  
            itemWrapBot.appendChild(itemMessageBot);
            itemMessageBot.classList.add("bot-message");
            // Bot message
  
            loading.classList.remove("loader");
            loading.classList.add("on-loading");
          }, 3000);
        } else {
          //Error message
          const itemMessage = document.createElement("div");
          itemMessage.innerText = "Я не понимаю вас";
          itemMessage.classList.add("error-message");
          content.appendChild(itemMessage);
        }
        sendMessageInput.value = "";
      }
      // Add Date
      if (content.childNodes.length === 1) {
        const time = new Date();
        date.textContent = `Сегодня в ${time.getHours()}:${time.getMinutes()}`;
      }
      // Add Date
    });
  });
  