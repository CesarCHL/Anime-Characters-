const animes = [
    {title: "Kimetsu No Yaiba", img:"https://imgs.search.brave.com/U2caEoMx35v6AI-mIH_Lsm0cWmfUnTwpNAKbQ3Zb93A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2tp/bWV0c3Utbm8teWFp/YmEvaW1hZ2VzLzEv/MTMvS25ZX2FyY29f/ZGVfbGFfYWxkZWFf/ZGVsX2hlcnJlcm9f/a3ZfMy5qcGVnL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzE4/MD9jYj0yMDIzMDMw/MTEyMjUxMiZwYXRo/LXByZWZpeD1lcw.jpeg",
        info: "3 seasons"
    }
]

const container = document.getElementById('cards-container')

animes.forEach(anime => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <div class = "title">${anime.title}</div>
    <img src="${anime.img}" alt="">
    <div class = "info">${anime.info}</div>
    `;
    container.appendChild(card);
});

