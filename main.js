document.addEventListener('DOMContentLoaded', () => {
    const animes = [
        {
            title: "Kimetsu No Yaiba",
            img: "https://imgs.search.brave.com/U2caEoMx35v6AI-mIH_Lsm0cWmfUnTwpNAKbQ3Zb93A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2tp/bWV0c3Utbm8teWFp/YmEvaW1hZ2VzLzEv/MTMvS25ZX2FyY29f/ZGVfbGFfYWxkZWFf/ZGVsX2hlcnJlcm9f/a3ZfMy5qcGVnL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzE4/MD9jYj0yMDIzMDMw/MTEyMjUxMiZwYXRo/LXByZWZpeD1lcw.jpeg",
            info: "3 seasons"
        },
        {
            title: "Attack on Titan",
            img: "https://imgs.search.brave.com/0mloHhGa4ktNA-fl_BMcZicX-96r7RTI92ZHqFsDPJE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxdDlpZTMxamdM/LmpwZw",
            info: "4 seasons"
        },
        {
            title: "My Hero Academia",
            img: "https://imgs.search.brave.com/sVYKgZpW3E_7Knbw-8_JM5rvnpUzLqbPOeWwskUGHvE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFNeWczU0lxQ0wu/anBn",
            info: "6 seasons"
        },
        {
            title: "Black Clover",
            img: "https://imgs.search.brave.com/ph4PugEjAc0yp_MRLa1N80SpeGEVVPI8foS1rs3eMc8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFYNjA4NEpNc0wu/anBn",
            info: "4 seasons"
        },
        {
            title: "Fire force",
            img: "https://imgs.search.brave.com/LBiD45xCUM9xlMQtUU_XauSeXxSSmrgyb2jFQRs--_A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF3dDVkSDB5N0wu/anBn",
            info: "2 seasons"
        },
        {
            title: "Chainsaw Man",
            img: "https://imgs.search.brave.com/oSRZc5LiURrLd5vSdiH-Ts-AIvcR_rmwsFoXtLp3pYI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFET0dGU1I2Ykwu/anBn",
            info: "3 seasons"
        },
        {
            title: "Solo leveling",
            img: "https://imgs.search.brave.com/kimtjnYnDCBbIkLnv4gJ_6F5jWIRYJTAs5zIlFcx6nc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb21p/Y2Jvb2suY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9zaXRlcy80/LzIwMjMvMDkvYzEx/OWY5MWYtZTI4Zi00/ODVmLWIzN2YtMTJh/MGFjYmUwMjA4Lmpw/Zz93PTEwMjQ",
            info: "4 seasons"
        },
        {
            title: "Hunter x Hunter",
            img: "https://imgs.search.brave.com/lZUArmfyjGRq-7rN1nrj3iAdGh2cpSh3Je9gilH4mCg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE3WjlUTmJ5Tkwu/anBn",
            info: "6 seasons"
        }
    ];
    

    const container = document.getElementById('cards-container')

    animes.forEach(anime => {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
        <div class = "title">${anime.title}</div>
        <img src="${anime.img}" alt="">
        <div class = "info">${anime.info}</div>
        <div class = "rating" >
        <i class="bi bi-fire"></i>
        <i class="bi bi-fire"></i>
        <i class="bi bi-fire"></i>
        <i class="bi bi-fire"></i>
        <i class="bi bi-fire"></i>
        </div>
        `;
        container.appendChild(card);
    });


const ratingAnime = document.querySelectorAll(".rating .bi-fire")
const  searchElement = document.querySelector("#searchbar");

searchElement.addEventListener("input", () => {
    const query = searchElement.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const title = card.querySelector(".title").textContent.toLowerCase();

        if(title.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

function saveRating(ratingId, index) {
    localStorage.setItem(ratingId, index)
}

function loadRating(ratingId) {
    return localStorage.getItem(ratingId)
}

let ratings = document.querySelectorAll(".rating");
console.log("rating list", ratings);

ratings.forEach(rating => {
    const savedRaing = loadRating()
    const fires = rating.querySelectorAll(".bi-fire");
    fires.forEach((fire, index) => {
        fire.addEventListener('click', () => {
            fires.forEach((fire, index2) => {
                index2 <= index 
                ? fire.classList.add('active') 
                : fire.classList.remove('active');
            });
        });
        fire.addEventListener('mouseover', () =>{
            fires.forEach((fire, index2) => {
                index2 <= index
                ? fire.classList.add('hovered')
                : fire.classList.remove('hovered')
            });
        });
        fire.addEventListener('mouseout', () => {
            fires.forEach(fire => {
                fire.classList.remove('hovered')
            });
        });
    });
});
});
