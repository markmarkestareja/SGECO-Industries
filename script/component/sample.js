const menuToggle = document.getElementById("menu-toggle"),
  nav = document.getElementById("nav");
(menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
}),
  document.querySelectorAll(".dropdown-sub > a").forEach((e) => {
    e.addEventListener("click", (t) => {
      window.innerWidth < 1300 &&
        (t.preventDefault(), e.parentElement.classList.toggle("open"));
    });
  }),
  document.querySelectorAll(".dropdown > a").forEach((e) => {
    e.addEventListener("click", (t) => {
      window.innerWidth < 1300 &&
        (t.preventDefault(), e.parentElement.classList.toggle("open"));
    });
  }));
const carousel2 = document.querySelector(".carousel2"),
  nextBtn2 = document.querySelector(".next-2"),
  prevBtn2 = document.querySelector(".prev-2");
carousel2 &&
  nextBtn2 &&
  prevBtn2 &&
  (nextBtn2.addEventListener("click", () => {
    carousel2.scrollBy({ left: 300, behavior: "smooth" });
  }),
  prevBtn2.addEventListener("click", () => {
    carousel2.scrollBy({ left: -300, behavior: "smooth" });
  }),
  carousel2.addEventListener("touchmove", (e) => {
    const t = startX - e.touches[0].clientX;
    carousel2.scrollLeft += 0.8 * t;
  }));
class Card1 extends HTMLElement {
  connectedCallback() {
    const e = this.getAttribute("title") || "This is an untitled card",
      t = this.getAttribute("img") || "",
      o = this.getAttribute("link") || "#";
    this.innerHTML = `\n            <div class="card2">\n                <div class="card2-img">\n                    <img src="${t}" alt="${e}" loading="lazy">\n                </div>\n                <div class="card2-content">\n                    <h3>${e}</h3>\n                    <a href="${o}">Discover More →</a>\n                </div>\n            </div>\n            `;
  }
}
customElements.define("card-2", Card1);
class newsUpdateCard extends HTMLElement {
  connectedCallback() {
    const e = this.getAttribute("title") || "This is an untitled card",
      t = this.getAttribute("img") || "",
      o = this.getAttribute("link") || "#",
      i = this.getAttribute("publishedDate") || "#";
    this.innerHTML = `\n                <div class="news-update-card">\n                    <div class="news-update-card-img">\n                        <img src="${t}" alt="${e}" loading="lazy">\n                    </div>\n                    <div class="news-update-content">\n                        <h3>${e}</h3>\n                        <div class="news-update-foot">\n                            <p>${i}</p>\n                            <a href="${o}">Read <span>→</span></a>\n                        </div>\n                    </div>\n                </div>\n            `;
  }
}
customElements.define("news-update-card", newsUpdateCard);
class CardSmall1 extends HTMLElement {
  connectedCallback() {
    const e = this.getAttribute("svg") || "",
      t = this.getAttribute("title") || "This is untitled",
      o = this.getAttribute("desc") || "";
    this.innerHTML = `\n            <div class="card-small-1">\n                <img src="${e}" alt="${t}">\n                <h3>${t}</h3>\n                <p>${o}</p>\n            </div>\n        `;
  }
}
customElements.define("card-small-1", CardSmall1);
class ProductCard extends HTMLElement {
  connectedCallback() {
    const e = this.getAttribute("title") || "This is an untitled card",
      t = this.getAttribute("img") || "",
      o = this.getAttribute("link") || "#";
    this.innerHTML = `\n        <div class="prod-category-card">\n            <div class="prod-category-img">\n                <img src="${t}" alt="${e}" loading="lazy">\n            </div>\n\n            <div class="prod-category-text">\n                <h3>${e}</h3>\n                <a href="${o}">Discover More →</a>\n            </div>\n        </div>\n        `;
  }
}
customElements.define("product-card", ProductCard);
const fullImgBox = document.getElementById("full-img-box"),
  fullImg = document.getElementById("full-img"),
  fullImgClass = document.querySelector(".full-img");
function openFullImg(e) {
  ((fullImg.src = e),
    fullImgBox.classList.add("show"),
    (fullImgClass.style.height = "100vh"),
    (headerNav.style.display = "none"),
    (document.body.style.overflow = "hidden"),
    window.lenis && lenis.stop());
}
function closeFullImg() {
  (fullImgBox.classList.remove("show"),
    (fullImgClass.style.height = "0"),
    setTimeout(() => {
      ((headerNav.style.display = "block"),
        (document.body.style.overflow = "auto"),
        window.lenis && lenis.start());
    }, 350));
}
const galleryBasePath = "asset/img/resources-menu/gallery/",
  galleryFolders = {
    residential: "skylight-residential/",
    industrial: "skylight-industrial/",
    gvs: "gvs/",
    gvw: "gvw/",
    hatchway: "hatchway/",
  },
  galleryData = {
    residential: [
      "Bathroom 2.webp",
      "Bathroom 3.webp",
      "C-Orb2 (sml).webp",
      "Couple on sofa copy.webp",
      "Dining sml.webp",
      "Hallway.webp",
      "Les Walk In Robe.webp",
      "Suntrenz - 05.webp",
      "Suntrenz - 06.webp",
      "Suntrenz - After.webp",
      "Tile - 01.webp",
      "VL Open Kitchen.webp",
    ],
    industrial: [
      "After - Pulu Amsic (Sml).webp",
      "APF - 03.webp",
      "APF - 05.webp",
      "Art Centre (Sml).webp",
      "Avanti - 02.webp",
      "CO-01.webp",
      "CO-03.webp",
      "Factory 1.webp",
      "Jotun (sml).webp",
      "Jumbo Jenra - 03.webp",
      "Lucena Bus Terminal.webp",
      "Office Toilets.webp",
      "SG Eco Factory 2.webp",
      "SG Eco Factory 3.webp",
    ],
    gvs: [
      "GVS - Panel Adjust.webp",
      "GVS - Panel Swivel.webp",
      "In the Roof 4.webp",
      "GVS x 3.webp",
      "GVS - 01.webp",
    ],
    gvw: [
      "GVW - 09.webp",
      "GVW - Hamilton 2.webp",
      "GVW - Hamilton 1.webp",
      "GVW - 07.webp",
      "GV - SG Eco.webp",
      "GVW - 04.webp",
      "IMG_9891.webp",
      "IMG_9890.webp",
      "GVW - 06.webp",
      "AGA - Peoples Air Cargo.webp",
      "SG ECO - 02.webp",
      "SG ECO - 01.webp",
    ],
    hatchway: [
      "Hatch - Climbing 2.webp",
      "Hatch - Climbing out.webp",
      "Hatch & Ladder.webp",
      "81996270_662524937850068_2353140378783186944_n.webp",
      "83027098_3295719483776868_7159180453402902528_n.webp",
      "IMG-b51698b48f216cb39cf8684b1d99c931-V.webp",
      "IMG-d09d36844db663ba514e0d30090b5808-V.webp",
    ],
  };
function createGalleryImgCard(e, t) {
  if (!document.querySelector(t)) return;
  const o = document.createElement("div");
  o.classList.add("gallery-img-card");
  const i = document.createElement("img");
  ((i.src = e),
    (i.alt = "gallery image"),
    (i.onclick = () => openFullImg(e)),
    o.appendChild(i),
    document.querySelector(t).appendChild(o));
}
function loadGallery(e, t) {
  const o = galleryFolders[e];
  galleryData[e].forEach((e) => {
    createGalleryImgCard(galleryBasePath + o + e, t);
  });
}
(loadGallery("residential", "#residential-gallery"),
  loadGallery("industrial", "#industrial-gallery"),
  loadGallery("gvs", "#gvs-gallery"),
  loadGallery("gvw", "#gvw-gallery"),
  loadGallery("hatchway", "#hatchway-gallery"));
const ecoBlog = [
  {
    img: "asset/img/resources-menu/eco-blog/Worldbex 2015 - 04 1.webp",
    title: "Why Should you Choose SG ECO Products?",
    desc: "Climate change is a global issue. We may not stop it from happening over the next 10 to 20 years but we can find ways to mitigate its potentially huge impact on humanity.",
    date: "June 22, 2014",
    link: "eco-blog-list?ecoBlog=Why-Should-you-Choose-SG-ECO-Products",
  },
  {
    img: "asset/img/resources-menu/eco-blog/website.webp",
    title: "SG ECO Industries Premieres Newly Designed Website",
    desc: "Clark, Pampanga, May 2014 — SG Eco Industries, a leading manufacturer of tubular skylights and ventilators, recently announced the launch of their newly redesigned website which can be viewed by visiting www.eco.ph.",
    date: "May 27, 2014",
    link: "eco-blog-list?ecoBlog=SG-ECO-Industries-Premieres-Newly-Designed-Website",
  },
  {
    img: "asset/img/resources-menu/eco-blog/CO-02.webp",
    title: "Sky Tunnel - Energy Efficient Skylight Indoor Lighting",
    desc: "Sky Tunnel is a tubular skylight which allows for the transfer of daylight from above the roof to pass into the interior of the building or office. The device requires no electricity to function and...",
    date: "June 22, 2014",
    link: "eco-blog-list?ecoBlog=Sky-Tunnel-Energy-Efficient-Skylight-Indoor-Lighting",
  },
  {
    img: "asset/img/resources-menu/eco-blog/IMG_9890.webp",
    title:
      "How SG Eco Ventilators Promote a Better Working Environment within Commercial Spaces",
    desc: "Ventilators improve the indoor air quality and energy efficiency of any building. The functionality of ventilation systems vary depending on the kind of ventilators used and the area that it covers.  SG Eco provides a",
    date: "July 21, 2014",
    link: "eco-blog-list?ecoBlog=How-SG-Eco-Ventilators-Promote-a-Better-Working-Environment-within-Commercial-Spaces",
  },
  {
    img: "asset/img/resources-menu/eco-blog/sge office.webp",
    title: "Welcome to the SG Eco Green Construction Blog",
    desc: "SG Eco Industries is a pioneering manufacturer and distributor of tubular Skylights, Ventilation Systems, their components and custom OEM manufacturing for the green energy industry. With more than 2 decades of experience, we are specialists...",
    date: "May 12, 2014",
    link: "eco-blog-list?ecoBlog=Welcome-to-the-SG-Eco-Green-Construction-Blog",
  },
  {
    img: "asset/img/resources-menu/eco-blog/gvw.webp",
    title: "Solve Your Ventilation Issues with SG Eco Ventilators",
    desc: "Ventilators improve the indoor air quality and energy efficiency of any building.",
    date: "July 6, 2014",
    link: "eco-blog-list?ecoBlog=Solve-Your-Ventilation-Issues-with-SG-Eco-Ventilators",
  },
  {
    img: "asset/img/resources-menu/eco-blog/man working.webp",
    title: "Natural Light in Offices Boosts Health",
    desc: "A study conducted by researchers at the Northwest Medicine and the University of Illinois at Urbana-Champaign shows how natural light can boost workers' health in the office.  SG Eco's Skylights are designed to...",
    date: "August 11, 2014",
    link: "eco-blog-list?ecoBlog=Natural-Light-in-Offices-Boosts-Health",
  },
  {
    img: "asset/img/resources-menu/eco-blog/Tile - 01.webp",
    title: "The Benefits of Installing Skylights in Your Property",
    desc: "Since moving into the age of the ‘green revolution’, property owners have been looking for ways to improve the safety and comfort of their homes and buildings utilizing environmentally friendly products.",
    date: "August 28, 2014",
    link: "eco-blog-list?ecoBlog=The-Benefits-of-Installing-Skylights-in-Your-Property",
  },
  {
    img: "asset/img/resources-menu/eco-blog/a new green wave.webp",
    title: "A New Green Wave",
    desc: "A few pioneering businesses are developing “sustainability policies” worthy of the name. Sustainability plans focus on saving energy, cutting waste and streamlining logistics.",
    date: "August 28, 2014",
    link: "eco-blog-list?ecoBlog=A-New-Green-Wave",
  },
  {
    img: "asset/img/resources-menu/eco-blog/china-air-pollution.webp",
    title: "'Alarm bells' as greenhouse gases hit new high – UN",
    desc: "AIR POLLUTION. Midday traffic moves slowly through air pollution which exceeds the level of 400 on the air quality index, rating a hazardous warning, in Beijing, China, 26 March 2014. Adrian Bradshaw/EPA",
    date: "September 10, 2014",
    link: "eco-blog-list?ecoBlog=Alarm-bells-as-greehouse-gases-hit-new-high-un",
  },
  {
    img: "asset/img/resources-menu/eco-blog/Hatch - Climbing out.webp",
    title: "Access Hatchways: The Safer Way to Access Rooftops",
    desc: "Roof works always involve risk and potential injuries especially if you are not using the right equipment for roof access. According to the Occupational Safety and Health Administration (OSHA), more than 100,000 workers in",
    date: "September 25, 2014",
    link: "eco-blog-list?ecoBlog=Access-Hatchways-The-Safer-Way-to-Access-Rooftops",
  },
  {
    img: "asset/img/resources-menu/eco-blog/about-img-1.webp",
    title: "New Report Links Office Design with Staff Health and Productivity",
    desc: "Another recent study shows how a well-designed office can improve employees’ productivity inside the building… World GBC finds that a range of factors – from air",
    date: "October 08, 2014",
    link: "eco-blog-list?ecoBlog=New-Report-Links-Office-Design-with-Staff-Health-and-Productivity",
  },
  {
    img: "asset/img/resources-menu/eco-blog/GVS - Summer and Winter.webp",
    title: "Common Signs that You Need a Roof Ventilation System",
    desc: "Scientific studies show that indoor air quality plays an essential role in raising and maintaining the health, safety and productivity of occupants. According to the World Green Building Council (WGBC)",
    date: "October 19, 2014",
    link: "eco-blog-list?ecoBlog=Common-Signs-that-You-Need-a-Roof-Ventilation-System",
  },
  {
    img: "asset/img/resources-menu/eco-blog/prison.webp",
    title: "Lack of Natural Light Causing Officers 'Emotional Suffering'",
    desc: 'An absence of natural light in some police custody suites causes personnel and detainees "emotional suffering" as well as headaches and eye strain, it has been claimed.',
    date: "November 03, 2014",
    link: "eco-blog-list?ecoBlog=Lack-of-Natural-Light-Causing-Officers-Emotional-Suffering",
  },
  {
    img: "asset/img/resources-menu/eco-blog/wind-farm.webp",
    title: "Investment in Australian Renewables Declining?",
    desc: "The key point isn’t the politics, policies or subsidies……it’s about incentive and if your objective is to save money by tapping into the world’s most abundant and free energy source by accessing technologies available right",
    date: "November 12, 2014",
    link: "eco-blog-list?ecoBlog=Investment-in-Australian-Renewables-Declining",
  },
  {
    img: "asset/img/resources-menu/eco-blog/solarfarm.webp",
    title: "Africa's Largest Solar Farm Comes Online",
    desc: "Size doesn’t matter……but why not cut out the middle man and tap directly into the most abundantly available energy source for free utilizing SG Eco’s ground breaking ventilation and lighting technologies…..visit us at www.eco.ph today!",
    date: "November 18, 2014",
    link: "eco-blog-list?ecoBlog=Africas-Largest-Solar-Farm-Comes-Online",
  },
  {
    img: "asset/img/resources-menu/eco-blog/limabuilding.webp",
    title:
      "PH Green Council Cites Rise of ‘Green’ Buildings Amid Complex Environmental Problems",
    desc: "CERTIFIED ‘GREEN’ – Net Lima of The Net Group, a boutique office building located at Bonifacio Global City, is a 4-Star Building for Ecologically Responsive Design Excellence (BERDE) Project under the BERDE for New Construction",
    date: "November 24, 2014",
    link: "eco-blog-list?ecoBlog=PH-Green-Council-Cites-Rise-of-Green-Buildings-Amid-Complex-Environmental-Problems",
  },
  {
    img: "asset/img/resources-menu/eco-blog/electric post.webp",
    title: "Boom-time for renewable energy in Asia",
    desc: "Demand for renewable energy in Asia is set to grow, and in this fast-growing landscape, utilizing the best RE technology can help save the day!",
    date: "December 02, 2014",
    link: "eco-blog-list?ecoBlog=Boom-time-for-renewable-energy-in-Asia",
  },
  {
    img: "asset/img/resources-menu/eco-blog/wind power.webp",
    title: "Green Energy is Scotland’s Leading Source of Power",
    desc: "Renewable energy is taking off around the world, see how you can benefit today from SG Eco’s range of solar and wind driven lighting and ventilation solutions, visit our site at www.eco.ph",
    date: "December 09, 2014",
    link: "eco-blog-list?ecoBlog=Green-Energy-is-Scotlands-Leading-Source-of-Power",
  },
  {
    img: "asset/img/resources-menu/eco-blog/windenergy.webp",
    title: "December Hailed as Record Output Month for Wind Power in Scotland",
    desc: 'December was a record month for wind power in Scotland, according to environmentalists who have hailed 2014 as a "massive year" for renewable energy. Renewable energy',
    date: "January 08, 2015",
    link: "eco-blog-list?ecoBlog=December-Hailed-as-Record-Output-Month-for-Wind-Power-in-Scotland",
  },
  {
    img: "asset/img/resources-menu/eco-blog/windmills.webp",
    title: "China's Renewable Energy Use Ranks Top in the World",
    desc: "China’s investment in renewable energy hit a record high of  US$89.5 billion   in 2014. This clearly shows the country’s vigorous efforts to cut down their energy",
    date: "January 20, 2015",
    link: "eco-blog-list?ecoBlog=Chinas-Renewable-Energy-Use-Ranks-Top-in-the-World",
  },
  {
    img: "asset/img/resources-menu/eco-blog/Series 3 Tile Roof.webp",
    title:
      "Questions to Consider Before Installing Skylights in Your House or Workspace",
    desc: "Skylights are considered to be one of the most reliable energy-saving devices utilizing the renewable energy of the sun in order to provide natural lighting inside an office or home.",
    date: "February 02, 2015",
    link: "eco-blog-list?ecoBlog=Questions-to-Consider-Before-Installing-Skylights-in-Your-House-or-Workspace",
  },
  {
    img: "asset/img/resources-menu/eco-blog/wind_and_solar_energy.webp",
    title: "Solar, Wind Power to Become Cheapest In Asia: Scientists",
    desc: "Finland: Renewable energy brings a cheaper yet more efficient way to supply the energy needs not only in Asia but across the globe! Start saving energy",
    date: "February 04, 2015",
    link: "eco-blog-list?ecoBlog=Solar-Wind-Power-to-Become-Cheapest-In-Asia-Scientists",
  },
  {
    img: "asset/img/resources-menu/eco-blog/windenergy2.webp",
    title: "Why the Smart Money is looking at Clean Energy in Asia",
    desc: "Energy demand in Asia is rising – how to get yours for free. Visit us today at eco.ph!",
    date: "February 12, 2015",
    link: "eco-blog-list?ecoBlog=Why-the-Smart-Money-is-looking-at-Clean-Energy-in-Asia",
  },
  {
    img: "asset/img/resources-menu/eco-blog/Renewableenergy.webp",
    title: "UK on Track to Meet its Renewable Energy Targets",
    desc: "15% of the UK’s electricity came from renewable sources in 2013, according to new analyses.",
    date: "February 24, 2015",
    link: "eco-blog-list?ecoBlog=UK-on-Track-to-Meet-its-Renewable-Energy-Targets",
  },
  {
    img: "asset/img/resources-menu/eco-blog/solar panel.webp",
    title:
      "Farms, Small Businesses Eligible for More Renewable Energy Assistance",
    desc: "Share the bounty! Subsidy-free! Harvest free energy and improve your lighting and ventilation by accessing our range of tried and tested and easy to install products, visit us at eco.ph",
    date: "March 16, 2015",
    link: "eco-blog-list?ecoBlog=Farms-Small-Businesses-Eligible-for-More-Renewable-Energy-Assistance",
  },
  {
    img: "asset/img/resources-menu/eco-blog/office.webp",
    title: "Employees without ‘Natural Light’ are More Stressed",
    desc: "Want to reduce your team’s stress levels? Try giving them a seating spot with more access to natural light.",
    date: "March 22, 2015",
    link: "eco-blog-list?ecoBlog=Employees-without-Natural-Light-are-More-Stressed",
  },
  {
    img: "asset/img/resources-menu/eco-blog/roofsolar.webp",
    title:
      "Families Warm to Solar Power: Rising energy bills mean 60% of households are now considering installing panels",
    desc: "Demand is being fuelled by solar panels provided through 'rent-a-roof'",
    date: "May 11, 2015",
    link: "eco-blog-list?ecoBlog=Families-warm-to-solar-power-Rising-energy-bills-mean-60-percent-of-households-are-now-considering-installing-panels",
  },
  {
    img: "asset/img/resources-menu/eco-blog/lamps.webp",
    title:
      "Cheap Solar lamps help villagers keep their health, and cut emissions",
    desc: "Just further evidence of how solar lamps have helped improve the health of one community’s people, save on expensive and harmful fuel whilst reducing",
    date: "June 17, 2015",
    link: "eco-blog-list?ecoBlog=Cheap-Solar-lamps-help-villagers-keep-their-health-and-cut-emissions",
  },
  {
    img: "asset/img/resources-menu/eco-blog/holding bulb.webp",
    title: "3 Energy Efficiency Myths Debunked",
    desc: "Common misconceptions about efficiency not only can increase energy use, but actually can end up costing consumers and business money.",
    date: "July 9, 2015",
    link: "eco-blog-list?ecoBlog=3-Energy-Efficiency-Myths-Debunked",
  },
  {
    img: "asset/img/resources-menu/eco-blog/man speaking.webp",
    title: "Data shows efficient energy saved 250m",
    desc: "The UK economy saved nearly £250m in fuel costs last year by generating its energy more efficiently, Government figures show.",
    date: "August 06, 2015",
    link: "eco-blog-list?ecoBlog=Data-shows-efficient-energy-saved-250m",
  },
  {
    img: "asset/img/resources-menu/eco-blog/NZ Project.webp",
    title: "Customized Sky Tunnel for NZ Project",
    desc: "SG Eco makes customized Sky Tunnels with 3 x Ventilation Outlets for New Zealand. This unique system allows just one roof flashing for 4 separate items. Venting from 3 x separate rooms, and then also",
    date: "November 15, 2015",
    link: "eco-blog-list?ecoBlog=Customized-Sky-Tunnel-for-NZ-Project",
  },
  {
    img: "asset/img/resources-menu/eco-blog/contact.webp",
    title:
      "Department of Labor & Employment issues NEW guidelines on ventilation for workspaces",
    desc: "Contact SG Eco Industries to help get your workspace compliant.",
    date: "March 23, 2021",
    link: "eco-blog-list?ecoBlog=Department-of-Labor-and-Employment-issues-NEW-guidelines-on-ventilation-for-workspaces",
  },
];
function createEcoBlogCard(e, t, o, i, n) {
  if (!document.querySelector(".eco-blog-card-container")) return;
  const s = document.createElement("div");
  (s.classList.add("eco-blog-card"),
    (s.innerHTML = `\n        <div class="eco-blog-img">\n            <img src="${e}" alt="">\n        </div>\n        <div class="eco-blog-text">\n            <div class="eco-blog-text-top">\n                <h2>${t}</h2>\n                <p>${o}</p>\n            </div>\n            <div class="eco-blog-text-footer">\n                <p>${i}</p>\n                <a class="btn-3 btn-light" href="${n}">Read More ↗</a>\n            </div>\n        </div>\n    `),
    document.querySelector(".eco-blog-card-container").appendChild(s));
}
(ecoBlog.sort((e, t) => new Date(e.date) - new Date(t.date)),
  ecoBlog.forEach((e) => {
    createEcoBlogCard(e.img, e.title, e.desc, e.date, e.link);
  }));
