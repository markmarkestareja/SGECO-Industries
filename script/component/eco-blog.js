const ecoBlog = [
    {
        img: "asset/img/resources-menu/eco-blog/Worldbex 2015 - 04 1.jpg",
        title: "Why Should you Choose SG ECO Products?",
        desc: "Climate change is a global issue. We may not stop it from happening over the next 10 to 20 years but we can find ways to mitigate its potentially huge impact on humanity.",
        date: "June 22, 2014",
        link: "eco-blog-list?ecoBlog=Why-Should-you-Choose-SG-ECO-Products"
    },
    {
        img: "asset/img/resources-menu/eco-blog/website.jpg",
        title: "SG ECO Industries Premieres Newly Designed Website",
        desc: "Clark, Pampanga, May 2014 — SG Eco Industries, a leading manufacturer of tubular skylights and ventilators, recently announced the launch of their newly redesigned website which can be viewed by visiting www.eco.ph.",
        date: "May 27, 2014",
        link: "eco-blog-list?ecoBlog=SG-ECO-Industries-Premieres-Newly-Designed-Website"
    },
    {
        img: "asset/img/resources-menu/eco-blog/CO-02.jpg",
        title: "Sky Tunnel - Energy Efficient Skylight Indoor Lighting",
        desc: "Sky Tunnel is a tubular skylight which allows for the transfer of daylight from above the roof to pass into the interior of the building or office. The device requires no electricity to function and...",
        date: "June 22, 2014",
        link: "eco-blog-list?ecoBlog=Sky-Tunnel-Energy-Efficient-Skylight-Indoor-Lighting"
    },
    {
        img: "asset/img/resources-menu/eco-blog/IMG_9890.jpg",
        title: "How SG Eco Ventilators Promote a Better Working Environment within Commercial Spaces",
        desc: "Ventilators improve the indoor air quality and energy efficiency of any building. The functionality of ventilation systems vary depending on the kind of ventilators used and the area that it covers.  SG Eco provides a",
        date: "July 21, 2014",
        link: "eco-blog-list?ecoBlog=How-SG-Eco-Ventilators-Promote-a-Better-Working-Environment-within-Commercial-Spaces"
    },
    {
        img: "asset/img/resources-menu/eco-blog/sge office.webp",
        title: "Welcome to the SG Eco Green Construction Blog",
        desc: "SG Eco Industries is a pioneering manufacturer and distributor of tubular Skylights, Ventilation Systems, their components and custom OEM manufacturing for the green energy industry. With more than 2 decades of experience, we are specialists...",
        date: "May 12, 2014",
        link: "eco-blog-list?ecoBlog=Welcome-to-the-SG-Eco-Green-Construction-Blog"
    },
    {
        img: "asset/img/resources-menu/eco-blog/gvw.jpg",
        title: "Solve Your Ventilation Issues with SG Eco Ventilators",
        desc: "Ventilators improve the indoor air quality and energy efficiency of any building.",
        date: "July 6, 2014",
        link: "eco-blog-list?ecoBlog=Solve-Your-Ventilation-Issues-with-SG-Eco-Ventilators"
    },
    {
        img: "asset/img/resources-menu/eco-blog/man working.jpg",
        title: "Natural Light in Offices Boosts Health",
        desc: "A study conducted by researchers at the Northwest Medicine and the University of Illinois at Urbana-Champaign shows how natural light can boost workers' health in the office.  SG Eco's Skylights are designed to...",
        date: "August 11, 2014",
        link: "eco-blog-list?ecoBlog=Natural-Light-in-Offices-Boosts-Health"
    },
    {
        img: "asset/img/resources-menu/eco-blog/man working.jpg",
        title: "The Benefits of Installing Skylights in Your Property",
        desc: "Since moving into the age of the ‘green revolution’, property owners have been looking for ways to improve the safety and comfort of their homes and buildings utilizing environmentally friendly products.",
        date: "August 28, 2014",
        link: "eco-blog-list?ecoBlog=The-Benefits-of-Installing-Skylights-in-Your-Property"
    }

]


function createEcoBlogCard(img, title, desc, date, link){
    const ecoBlogCard = document.createElement("div");
    ecoBlogCard.classList.add("eco-blog-card");

    ecoBlogCard.innerHTML = `
        <div class="eco-blog-img">
            <img src="${img}" alt="">
        </div>
        <div class="eco-blog-text">
            <div class="eco-blog-text-top">
                <h2>${title}</h2>
                <p>${desc}</p>
            </div>
            <div class="eco-blog-text-footer">
                <p>${date}</p>
                <a href="${link}">Read More ↗</a>
            </div>
        </div>
    `;

    document.querySelector(".eco-blog-card-container").appendChild(ecoBlogCard);

}

ecoBlog.forEach(post => {
    createEcoBlogCard(post.img, post.title, post.desc, post.date, post.link);
});