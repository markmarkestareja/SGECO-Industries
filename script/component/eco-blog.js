const ecoBlog = [
    {
        img: "asset/img/resources-menu/eco-blog/Worldbex 2015 - 04 1.jpg",
        title: "Why Should you Choose SG ECO Products?",
        desc: "Climate change is a global issue. We may not stop it from happening over the next 10 to 20 years but we can find ways to mitigate its potentially huge impact on humanity.",
        date: "2019-06-04",
        link: "#"
    },
    {
        img: "asset/img/resources-menu/eco-blog/Worldbex.webp",
        title: "SG ECO Industries Premieres Newly Designed Website",
        desc: "Clark, Pampanga, May 2014 — SG Eco Industries, a leading manufacturer of tubular skylights and ventilators, recently announced the launch of their newly redesigned website which can be viewed by visiting www.eco.ph.",
        date: "2019-06-04",
        link: "#"
    },
    {
        img: "asset/img/resources-menu/eco-blog/CO-02.jpg",
        title: "Sky Tunnel - Energy Efficient Skylight Indoor Lighting",
        desc: "Sky Tunnel is a tubular skylight which allows for the transfer of daylight from above the roof to pass into the interior of the building or office. The device requires no electricity to function and...",
        date: "2019-06-04",
        link: "#"
    },
    {
        img: "asset/img/resources-menu/eco-blog/IMG_9890.jpg",
        title: "How SG Eco Ventilators Promote a Better Working Environment within Commercial Spaces",
        desc: "Ventilators improve the indoor air quality and energy efficiency of any building. The functionality of ventilation systems vary depending on the kind of ventilators used and the area that it covers.  SG Eco provides a",
        date: "2019-06-04",
        link: "#"
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