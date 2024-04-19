// Create Movies/Series Collection
const movieCollection = [
    {
        title: "My Demon",
        director: "Kim Jang-han Kwon Da-som",
        releaseYear: "2024",
        picture: "The-Collection/Assets/img/My_Demon.jpg",
        genre:"Fantasy Romantic comedy",
        cast: "	 Kim Yoo-jung, Song Kang, Lee Sang-yi, Kim Hae-sook",
        description: "The series depicts the story of a contract marriage between Do Do-hee (Kim Yoo-jung), the devilish heiress of a conglomerate, and Jeong Gu-won (Song Kang), a demon who temporarily loses his powers. This momentary loss brings them happiness.",
        trailerLink: "https://www.youtube.com/watch?v=D-bAfFqvxZg&ab_channel=NetflixK-Content",
    },

    {
        title: "The Beekeeper",
        director: "	David Yesterday",
        releaseYear: "2024",
        picture: "The-Collection/Assets/img/TheBeekeeper.jpg",
        genre:"Action Thriller",
        cast: "	Jason Statham, Emmy Raver-Lampman, Josh Hutcherson, Bobby Naderi, Phylicia Rashad,Jeremy Irons",
        description: "The story revolves around Adam Clay, a wraithlike ex-commando who seeks vengeance against tech bros using the latest inventions to rob people online. When Adam’s good-hearted landlady, Eloise Parker (played by Phylicia Rashad), falls victim to a phishing scam that empties her bank account and a nonprofit’s funds, he trades his beekeeper uniform for commando gear. Adam embarks on a brutal campaign for revenge, targeting those responsible for the tragedy.",
        trailerLink: "https://www.youtube.com/watch?v=SzINZZ6iqxY&ab_channel=MGM", 
    },

    {
        title: "Détective Conan",
        director: "	Gōshō Aoyama",
        releaseYear: "1994",
        picture: "The-Collection/Assets/img/conan.jpg",
        genre:"Anime/Detective Romance",
        cast: "Animation Studio: TMS Entertainment",
        description: "The manga traces the journey of Shinichi Kudo, a high school detective rejuvenated following the ingestion of a mysterious drug which makes him rejuvenate to the stage of a 7-year-old schoolboy. Staying with his childhood friend Ran and his father Kogoro Mouri, he will have to secretly try to find his former body and put the Organization responsible for his condition behind bars.",
        trailerLink: "https://www.youtube.com/watch?v=HSow7Ep6l_4&ab_channel=GSCMovies", 
    },

    {
        title: "Criminal Minds",
        director: "Jeff Davis",
        releaseYear: "2005",
        picture: "The-Collection/Assets/img/Criminal Minds.jpg",
        genre:"	Criminal Profiling",
        cast: "		Joe Mantegna, Paget Brewster, AJ Cook, Kirsten Vangsness, Aisha Tyler, Adam Rodríguez",
        description: "A team of profilers , initially led by agent Aaron Hotchner (seasons 1 to 12) then by Emily Prentiss (from episode 3 of season 12) is required to travel throughout the United States ( sometimes as far as Canada or Mexico ), responsible for locally investigating criminals and serial killers . Each of these agents has their own specialty and personality, which makes them complementary..",
        trailerLink: "https://www.youtube.com/watch?v=d73rBmyRNH4&ab_channel=HippoHippo", 
    },

    {
        title: "The Mechanic",
        director: "	David Yesterday",
        releaseYear: "January 12, 2024",
        picture: "The-Collection/Assets/img/the Mechanic.jpg",
        genre:"Action Thriller",
        cast: "	Jason Statham, Emmy Raver-Lampman, Josh Hutcherson, Bobby Naderi, Phylicia Rashad,Jeremy Irons",
        description: "Hitman Arthur Bishop sneaks into the home of a Colombian cartel boss and drowns him in his own pool. Upon returning home to Louisiana, he meets with his friend and mentor Harry McKenna.",
        trailerLink: "https://www.youtube.com/watch?v=39L8egLr518&ab_channel=IGN", 
    },

    {
        title: "Elementary",
        director: "	David Yesterday",
        releaseYear: "2019",
        picture: "The-Collection/Assets/img/Elementary.jpg",
        genre:"Detective Series",
        cast: "	Jonny Lee Miller, Lucy Liu, Aidan Quinn, Jon Michael Hill",
        description: "The famous detective who came from London where he was a consultant for Scotland Yard , Sherlock Holmes , now lives in New York , in a brownstone residence in Brooklyn . Just out of detoxification , at the request of his wealthy father, with whom he is in conflict, Sherlock is forced to live with Dr. Joan  Watson, a former surgeon converted into a sobriety companion, hired by Sherlock's father . Holmes's phenomenal powers of observation and deduction, combined with Watson's excellent medical skills, are put to the service of the NYPD , tasked with investigating seemingly unsolvable crimes.",
        trailerLink: "https://www.youtube.com/watch?v=ff-XiZzJLxw&ab_channel=CBS", 
    },

    {
        title: "Bad Boys For Life",
        director: "	Adil El Arbi, Bilall Fallah",
        releaseYear: "2020",
        picture: "The-Collection/Assets/img/Bad Boys 2.jpg",
        genre:"	Police Comedy",
        cast: "	Jason Statham, Emmy Raver-Lampman, Josh Hutcherson, Bobby Naderi, Phylicia Rashad,Jeremy Irons",
        description: "The story revolves around Adam Clay, a wraithlike ex-commando who seeks vengeance against tech bros using the latest inventions to rob people online. When Adam’s good-hearted landlady, Eloise Parker (played by Phylicia Rashad), falls victim to a phishing scam that empties her bank account and a nonprofit’s funds, he trades his beekeeper uniform for commando gear. Adam embarks on a brutal campaign for revenge, targeting those responsible for the tragedy.",
        trailerLink: "https://www.youtube.com/watch?v=jKCj3XuPG8M", 
    },

    {
        title: "Bullet Train",
        director: "David Leitch",
        releaseYear: "2022",
        picture: "The-Collection/Assets/img/Bullet Train.jpg",
        genre:"	Action Comedy",
        cast: "Brad Pit,Joey King,Aaron Taylor-Johnson,Brian Tyree Henry,Andrew Koji",
        description: "n the bullet train ( Shinkansen ) traveling between Tokyo and Kyoto , he must grab a mysterious suitcase then get off at the next bullet train stop . For their part, “Lemon” and “Tangerine” must bring back a young man, recently kidnapped, to his father. But nothing will go as planned, with the arrival of other killers like “the Wolf” and “the Hornet” and the presence of a mysterious teenage girl and a very venomous boomslang snake . Everyone wonders who will come out alive and what awaits them at Kyoto station.",
        trailerLink: "https://www.youtube.com/watch?v=0IOsk2Vlc4o&ab_channel=SonyPicturesEntertainment", 
    },

    {
        title: "The Mentalist",
        director: "	Bruno Heller",
        releaseYear: "January 12, 2024",
        picture: "The-Collection/Assets/img/the mentalist.jpg",
        genre:"Crime Comedy-Drama ",
        cast: "Simon Baker,Robin Tunney,Tim Kang,Owain Yeoman,Amanda Righetti,Rockmond Dunbar,Emily Swallow,Joe Adler,Josie Loren",
        description: "The major crimes unit of the California Bureau of Investigation (CBI) , led by Teresa Lisbon , investigates crimes, with the collaboration of Patrick Jane , consultant for the CBI, using his faculties of mentalism .",
        trailerLink: "https://www.youtube.com/watch?v=nn2Q69pSC_M", 
    },

    {
        title: "Tale of the Nine Tailed 구미호뎐",
        director: "Lee Myung-han (tvN)",
        releaseYear: "2020",
        picture: "The-Collection/Assets/img/tale-of-the-nine-tailed-.webp",
        genre:"	Fantasy Action Romance Drama",
        cast: "Lee Dong-wook, Jo Bo-ah, Kim Bum",
        description: "Lee Yeon (Lee Dong-wook), an over 1000-year-old Gumiho and the former guardian mountain spirit of Baekdu-daegan, is now a city dweller. He works with Taluipa (Kim Jung-nan), an agent in the Afterlife Immigration Office and the protector of the Samdo River, to eradicate supernatural beings that threaten the mortal world. He lives in the city where he is assisted by his loyal subject, veterinarian, and fellow Gumiho, Goo Shin-joo (Hwang Hee).",
        trailerLink: "https://www.youtube.com/watch?v=E7s9pHnIH9E&ab_channel=VikiGlobalTV", 
    },

    {
        title: "Trese",
        director: "Budjette Tan, Kajo Baldisimo",
        releaseYear: "2021",
        picture: "The-Collection/Assets/img/TRESE-netflix-social.avif",
        genre:"Crime Fantasy Mystery",
        cast: "	Jason Statham, Emmy Raver-Lampman, Josh Hutcherson, Bobby Naderi, Phylicia Rashad,Jeremy Irons",
        description: "Trese[4] (Tagalog: [ˈtrɛsɛ]) is a Filipino anime-influenced television series based on the Filipino[5][6] comic series of the same name by Budjette Tan and Kajo Baldisimo.[4] Produced by BASE Entertainment,[7] the series was released on June 10, 2021 on Netflix in the United States, which was followed by a global release the next day.",
        trailerLink: "https://www.youtube.com/watch?v=3IhCjxVjM-A&ab_channel=NetflixAnime", 
    },
];


const movieCardsContainer = document.getElementsByTagName("main")[0];

function createMovieCard(movie){
    const section = document.createElement("section");
    section.className = "card";

    section.innerHTML = `

        <img class="movie-img"src="${movie.picture}" alt="${movie.title}" width="200"></img>
        <section class= "informations">
            <button class="p1">Release Year: ${movie.releaseYear}</button>
            <button class="p2">Genre: ${movie.genre}</button>
        </section>
        <section class="movie-description"> 
        <h2>${movie.title}</h2>
        <p>Director: <br>  ${movie.director}</p>    
        <p>${movie.description}</p>
        <p>Cast: <br> ${movie.cast}</p>
        <section class="link">
        <a href="${movie.trailerLink}" 
        target="_blank"><svg class="icon" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"/></svg></a></section>
        </section>
        </section>
        `;

        movieCardsContainer.appendChild(section);

}

for (movie of movieCollection){
    createMovieCard(movie);
}
