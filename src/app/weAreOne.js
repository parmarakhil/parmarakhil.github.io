const entries = [
    {
      date: "10 Mar 2023",
      image: "images/chai-meet.jpg",
      desc: "We first met over chai near MG Road. You smiled despite my lateness.",
      icon: "☕"
    },
    {
      date: "25 Apr 2023",
      image: "images/bike-adventure.jpg",
      desc: "Our first bike ride to the outskirts of Bangalore – windy roads and laughter.",
      icon: "🏍️"
    },
    // Add more entries here as:
    // { date: "Date", image: "path/to.jpg", desc: "Your memory…", icon: "🚗" }
  ];
  
  const container = document.getElementById("timeline");
  
  entries.forEach((e, i) => {
    const card = document.createElement("div");
    card.className = "entry";
    if (e.icon) {
      const ic = document.createElement("span");
      ic.className = "icon";
      ic.textContent = e.icon;
      card.appendChild(ic);
    }
    card.innerHTML += `
      <div class="date">${e.date}</div>
      <img src="${e.image}" alt="memory photo ${i+1}" />
      <div class="desc">${e.desc}</div>
    `;
    container.appendChild(card);
  });
  