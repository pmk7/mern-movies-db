const movies = [
  {
    "actors": [
      "Toshirô Mifune",
      "Eijirô Tôno",
      "Tatsuya Nakadai"
    ],
    "desc": "A crafty ronin comes to a town divided by two criminal gangs and decides to play them against each other to free the town.",
    "directors": [
      "Akira Kurosawa"
    ],
    "genre": [
      "Action",
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0055630/",
    "name": "Yôjinbô",
    "rating": 8.2,
    "year": 1961
  },
  {
    "actors": [
      "Tyrone Power",
      "Marlene Dietrich",
      "Charles Laughton"
    ],
    "desc": "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
    "directors": [
      "Billy Wilder"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0051201/",
    "name": "Witness for the Prosecution",
    "rating": 8.4,
    "year": 1958
  },
  {
    "actors": [
      "Miles Teller",
      "J.K. Simmons",
      "Melissa Benoist"
    ],
    "desc": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\u0026apos;s potential.",
    "directors": [
      "Damien Chazelle"
    ],
    "genre": [
      "Drama",
      "Music"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt2582802/",
    "name": "Whiplash",
    "rating": 8.5,
    "year": 2014
  },
  {
    "actors": [
      "Tom Hardy",
      "Nick Nolte",
      "Joel Edgerton"
    ],
    "desc": "The youngest son of an alcoholic former boxer returns home, where he\u0026apos;s trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.",
    "directors": [
      "Gavin O\u0026apos;Connor"
    ],
    "genre": [
      "Action",
      "Drama",
      "Sport"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1291584/",
    "name": "Warrior",
    "rating": 8.2,
    "year": 2011
  },
  {
    "actors": [
      "Ben Burtt",
      "Elissa Knight",
      "Jeff Garlin"
    ],
    "desc": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    "directors": [
      "Andrew Stanton"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0910970/",
    "name": "WALL·E",
    "rating": 8.4,
    "year": 2008
  },
  {
    "actors": [
      "James Stewart",
      "Kim Novak",
      "Barbara Bel Geddes"
    ],
    "desc": "A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.",
    "directors": [
      "Alfred Hitchcock"
    ],
    "genre": [
      "Mystery",
      "Romance",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0052357/",
    "name": "Vertigo",
    "rating": 8.3,
    "year": 1958
  },
  {
    "actors": [
      "Hugo Weaving",
      "Natalie Portman",
      "Rupert Graves"
    ],
    "desc": "In a future British dystopian society, a shadowy freedom fighter, known only by the alias of \u0026quot;V\u0026quot;, plots to overthrow the tyrannical government - with the help of a young woman.",
    "directors": [
      "James McTeigue"
    ],
    "genre": [
      "Action",
      "Drama",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0434409/",
    "name": "V for Vendetta",
    "rating": 8.2,
    "year": 2006
  },
  {
    "actors": [
      "Edward Asner",
      "Jordan Nagai",
      "John Ratzenberger"
    ],
    "desc": "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
    "directors": [
      "Pete Docter",
      "Bob Peterson"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1049413/",
    "name": "Up",
    "rating": 8.3,
    "year": 2009
  },
  {
    "actors": [
      "Clint Eastwood",
      "Gene Hackman",
      "Morgan Freeman"
    ],
    "desc": "Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner Ned Logan and a young man, The \u0026quot;Schofield Kid.\u0026quot;",
    "directors": [
      "Clint Eastwood"
    ],
    "genre": [
      "Drama",
      "Western"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0105695/",
    "name": "Unforgiven",
    "rating": 8.2,
    "year": 1992
  },
  {
    "actors": [
      "Chishû Ryû",
      "Chieko Higashiyama",
      "Sô Yamamura"
    ],
    "desc": "An old couple visit their children and grandchildren in the city, but receive little attention.",
    "directors": [
      "Yasujirô Ozu"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0046438/",
    "name": "Tôkyô monogatari",
    "rating": 8.2,
    "year": 1972
  },
  {
    "actors": [
      "Ewan McGregor",
      "Ewen Bremner",
      "Jonny Lee Miller"
    ],
    "desc": "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
    "directors": [
      "Danny Boyle"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0117951/",
    "name": "Trainspotting",
    "rating": 8.1,
    "year": 1996
  },
  {
    "actors": [
      "Tom Hanks",
      "Tim Allen",
      "Joan Cusack"
    ],
    "desc": "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it\u0026apos;s up to Woody to convince the other toys that they weren\u0026apos;t abandoned and to return home.",
    "directors": [
      "Lee Unkrich"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0435761/",
    "name": "Toy Story 3",
    "rating": 8.3,
    "year": 2010
  },
  {
    "actors": [
      "Tom Hanks",
      "Tim Allen",
      "Don Rickles"
    ],
    "desc": "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy\u0026apos;s bedroom.",
    "directors": [
      "John Lasseter"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0114709/",
    "name": "Toy Story",
    "rating": 8.3,
    "year": 1995
  },
  {
    "actors": [
      "Tom Cruise",
      "Jennifer Connelly",
      "Miles Teller"
    ],
    "desc": "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN\u0026apos;s elite graduates on a mission that demands the ultimate sacrifice from those chosen to ...",
    "directors": [
      "Joseph Kosinski"
    ],
    "genre": [
      "Action",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1745960/",
    "name": "Top Gun: Maverick",
    "rating": 8.4,
    "year": 2022
  },
  {
    "actors": [
      "Hitoshi Takagi",
      "Noriko Hidaka",
      "Chika Sakamoto"
    ],
    "desc": "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
    "directors": [
      "Hayao Miyazaki"
    ],
    "genre": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0096283/",
    "name": "Tonari no Totoro",
    "rating": 8.1,
    "year": 1990
  },
  {
    "actors": [
      "Gregory Peck",
      "John Megna",
      "Frank Overton"
    ],
    "desc": "Atticus Finch, a widowed lawyer in Depression-era Alabama, defends a black man against an undeserved rape charge, and his children against prejudice.",
    "directors": [
      "Robert Mulligan"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNmVmYzcwNzMtMWM1NS00MWIyLThlMDEtYzUwZDgzODE1NmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNmVmYzcwNzMtMWM1NS00MWIyLThlMDEtYzUwZDgzODE1NmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0056592/",
    "name": "To Kill a Mockingbird",
    "rating": 8.3,
    "year": 1963
  },
  {
    "actors": [
      "Carole Lombard",
      "Jack Benny",
      "Robert Stack"
    ],
    "desc": "During the Nazi occupation of Poland, an acting troupe becomes embroiled in a Polish soldier\u0026apos;s efforts to track down a German spy.",
    "directors": [
      "Ernst Lubitsch"
    ],
    "genre": [
      "Comedy",
      "Romance",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMGY3ZDgzY2MtNTllNi00ZWI1LTk1NTUtNWEzN2Q4YTA1ZGZiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMGY3ZDgzY2MtNTllNi00ZWI1LTk1NTUtNWEzN2Q4YTA1ZGZiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0035446/",
    "name": "To Be or Not to Be",
    "rating": 8.2,
    "year": 1942
  },
  {
    "actors": [
      "Frances McDormand",
      "Woody Harrelson",
      "Sam Rockwell"
    ],
    "desc": "A mother personally challenges the local authorities to solve her daughter\u0026apos;s murder when they fail to catch the culprit.",
    "directors": [
      "Martin McDonagh"
    ],
    "genre": [
      "Comedy",
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjI0ODcxNzM1N15BMl5BanBnXkFtZTgwMzIwMTEwNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjI0ODcxNzM1N15BMl5BanBnXkFtZTgwMzIwMTEwNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt5027774/",
    "name": "Three Billboards Outside Ebbing, Missouri",
    "rating": 8.1,
    "year": 2017
  },
  {
    "actors": [
      "Daniel Day-Lewis",
      "Paul Dano",
      "Ciarán Hinds"
    ],
    "desc": "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
    "directors": [
      "Paul Thomas Anderson"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0469494/",
    "name": "There Will Be Blood",
    "rating": 8.2,
    "year": 2008
  },
  {
    "actors": [
      "Leonardo DiCaprio",
      "Jonah Hill",
      "Margot Robbie"
    ],
    "desc": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    "directors": [
      "Martin Scorsese"
    ],
    "genre": [
      "Biography",
      "Comedy",
      "Crime"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0993846/",
    "name": "The Wolf of Wall Street",
    "rating": 8.2,
    "year": 2013
  },
  {
    "actors": [
      "Judy Garland",
      "Frank Morgan",
      "Ray Bolger"
    ],
    "desc": "Young Dorothy Gale and her dog Toto are swept away by a tornado from their Kansas farm to the magical Land of Oz, and embark on a quest with three new friends to see the Wizard, who can return her to her home and fulfill the other...",
    "directors": [
      "Victor Fleming",
      "George Cukor",
      "Mervyn LeRoy"
    ],
    "genre": [
      "Adventure",
      "Family",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0032138/",
    "name": "The Wizard of Oz",
    "rating": 8.1,
    "year": 1939
  },
  {
    "actors": [
      "Kevin Spacey",
      "Gabriel Byrne",
      "Chazz Palminteri"
    ],
    "desc": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
    "directors": [
      "Bryan Singer"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0114814/",
    "name": "The Usual Suspects",
    "rating": 8.5,
    "year": 1995
  },
  {
    "actors": [
      "Jim Carrey",
      "Ed Harris",
      "Laura Linney"
    ],
    "desc": "An insurance salesman discovers his whole life is actually a reality TV show.",
    "directors": [
      "Peter Weir"
    ],
    "genre": [
      "Comedy",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0120382/",
    "name": "The Truman Show",
    "rating": 8.2,
    "year": 1998
  },
  {
    "actors": [
      "Humphrey Bogart",
      "Walter Huston",
      "Tim Holt"
    ],
    "desc": "Two down-on-their-luck Americans searching for work in 1920s Mexico convince an old prospector to help them mine for gold in the Sierra Madre Mountains.",
    "directors": [
      "John Huston"
    ],
    "genre": [
      "Adventure",
      "Drama",
      "Western"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTJlZWMxYzEtMjlkMS00ODE0LThlM2ItMDI3NGQ2YjhmMzkxXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTJlZWMxYzEtMjlkMS00ODE0LThlM2ItMDI3NGQ2YjhmMzkxXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0040897/",
    "name": "The Treasure of the Sierra Madre",
    "rating": 8.2,
    "year": 1948
  },
  {
    "actors": [
      "Orson Welles",
      "Joseph Cotten",
      "Alida Valli"
    ],
    "desc": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
    "directors": [
      "Carol Reed"
    ],
    "genre": [
      "Film-Noir",
      "Mystery",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYjE2OTdhMWUtOGJlMy00ZDViLWIzZjgtYjZkZGZmMDZjYmEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYjE2OTdhMWUtOGJlMy00ZDViLWIzZjgtYjZkZGZmMDZjYmEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0041959/",
    "name": "The Third Man",
    "rating": 8.1,
    "year": 1949
  },
  {
    "actors": [
      "Kurt Russell",
      "Wilford Brimley",
      "Keith David"
    ],
    "desc": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
    "directors": [
      "John Carpenter"
    ],
    "genre": [
      "Horror",
      "Mystery",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0084787/",
    "name": "The Thing",
    "rating": 8.2,
    "year": 1982
  },
  {
    "actors": [
      "Arnold Schwarzenegger",
      "Linda Hamilton",
      "Michael Biehn"
    ],
    "desc": "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity\u0026apos;s future salvat...",
    "directors": [
      "James Cameron"
    ],
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0088247/",
    "name": "The Terminator",
    "rating": 8.1,
    "year": 1984
  },
  {
    "actors": [
      "Paul Newman",
      "Robert Redford",
      "Robert Shaw"
    ],
    "desc": "Two grifters team up to pull off the ultimate con.",
    "directors": [
      "George Roy Hill"
    ],
    "genre": [
      "Comedy",
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNGU3NjQ4YTMtZGJjOS00YTQ3LThmNmItMTI5MDE2ODI3NzY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNGU3NjQ4YTMtZGJjOS00YTQ3LThmNmItMTI5MDE2ODI3NzY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0070735/",
    "name": "The Sting",
    "rating": 8.3,
    "year": 1973
  },
  {
    "actors": [
      "Julie Andrews",
      "Christopher Plummer",
      "Eleanor Parker"
    ],
    "desc": "A young novitiate is sent by her convent in 1930s Austria to become a governess to the seven children of a widowed naval officer.",
    "directors": [
      "Robert Wise"
    ],
    "genre": [
      "Biography",
      "Drama",
      "Family"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BODIxNjhkYjEtYzUyMi00YTNjLWE1YjktNjAyY2I2MWNkNmNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BODIxNjhkYjEtYzUyMi00YTNjLWE1YjktNjAyY2I2MWNkNmNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0059742/",
    "name": "The Sound of Music",
    "rating": 8.1,
    "year": 1965
  },
  {
    "actors": [
      "Bruce Willis",
      "Haley Joel Osment",
      "Toni Collette"
    ],
    "desc": "A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist.",
    "directors": [
      "M. Night Shyamalan"
    ],
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0167404/",
    "name": "The Sixth Sense",
    "rating": 8.2,
    "year": 1999
  },
  {
    "actors": [
      "Jodie Foster",
      "Anthony Hopkins",
      "Lawrence A. Bonney"
    ],
    "desc": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    "directors": [
      "Jonathan Demme"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0102926/",
    "name": "The Silence of the Lambs",
    "rating": 8.6,
    "year": 1991
  },
  {
    "actors": [
      "Jack Nicholson",
      "Shelley Duvall",
      "Danny Lloyd"
    ],
    "desc": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    "directors": [
      "Stanley Kubrick"
    ],
    "genre": [
      "Drama",
      "Horror"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0081505/",
    "name": "The Shining",
    "rating": 8.4,
    "year": 1980
  },
  {
    "actors": [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton"
    ],
    "desc": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "directors": [
      "Frank Darabont"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0111161/",
    "name": "The Shawshank Redemption",
    "rating": 9.3,
    "year": 1994
  },
  {
    "actors": [
      "Christian Bale",
      "Hugh Jackman",
      "Scarlett Johansson"
    ],
    "desc": "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    "directors": [
      "Christopher Nolan"
    ],
    "genre": [
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0482571/",
    "name": "The Prestige",
    "rating": 8.5,
    "year": 2006
  },
  {
    "actors": [
      "Adrien Brody",
      "Thomas Kretschmann",
      "Frank Finlay"
    ],
    "desc": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    "directors": [
      "Roman Polanski"
    ],
    "genre": [
      "Biography",
      "Drama",
      "Music"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0253474/",
    "name": "The Pianist",
    "rating": 8.5,
    "year": 2003
  },
  {
    "actors": [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss"
    ],
    "desc": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    "directors": [
      "Lana Wachowski",
      "Lilly Wachowski"
    ],
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0133093/",
    "name": "The Matrix",
    "rating": 8.7,
    "year": 1999
  },
  {
    "actors": [
      "Elijah Wood",
      "Ian McKellen",
      "Viggo Mortensen"
    ],
    "desc": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\u0026apos;s new ally, Saruman, and his hordes of Isengard.",
    "directors": [
      "Peter Jackson"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0167261/",
    "name": "The Lord of the Rings: The Two Towers",
    "rating": 8.8,
    "year": 2002
  },
  {
    "actors": [
      "Elijah Wood",
      "Viggo Mortensen",
      "Ian McKellen"
    ],
    "desc": "Gandalf and Aragorn lead the World of Men against Sauron\u0026apos;s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "directors": [
      "Peter Jackson"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0167260/",
    "name": "The Lord of the Rings: The Return of the King",
    "rating": 9.0,
    "year": 2003
  },
  {
    "actors": [
      "Elijah Wood",
      "Ian McKellen",
      "Orlando Bloom"
    ],
    "desc": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "directors": [
      "Peter Jackson"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0120737/",
    "name": "The Lord of the Rings: The Fellowship of the Ring",
    "rating": 8.8,
    "year": 2001
  },
  {
    "actors": [
      "Matthew Broderick",
      "Jeremy Irons",
      "James Earl Jones"
    ],
    "desc": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    "directors": [
      "Roger Allers",
      "Rob Minkoff"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0110357/",
    "name": "The Lion King",
    "rating": 8.5,
    "year": 1994
  },
  {
    "actors": [
      "Charles Chaplin",
      "Edna Purviance",
      "Jackie Coogan"
    ],
    "desc": "The Tramp cares for an abandoned child, but events put their relationship in jeopardy.",
    "directors": [
      "Charles Chaplin"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Family"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0012349/",
    "name": "The Kid",
    "rating": 8.3,
    "year": 1921
  },
  {
    "actors": [
      "Eli Marienthal",
      "Harry Connick Jr.",
      "Jennifer Aniston"
    ],
    "desc": "A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.",
    "directors": [
      "Brad Bird"
    ],
    "genre": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYzBjZTNkMzQtZmNkOC00Yzk0LTljMjktZjk3YWVlZjY3NTk2XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYzBjZTNkMzQtZmNkOC00Yzk0LTljMjktZjk3YWVlZjY3NTk2XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0129167/",
    "name": "The Iron Giant",
    "rating": 8.1,
    "year": 1999
  },
  {
    "actors": [
      "Craig T. Nelson",
      "Samuel L. Jackson",
      "Holly Hunter"
    ],
    "desc": "While trying to lead a quiet suburban life, a family of undercover superheroes are forced into action to save the world.",
    "directors": [
      "Brad Bird"
    ],
    "genre": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0317705/",
    "name": "The Incredibles",
    "rating": 8.0,
    "year": 2004
  },
  {
    "actors": [
      "Viola Davis",
      "Emma Stone",
      "Octavia Spencer"
    ],
    "desc": "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African American maids\u0026apos; point of view on the white families for which they work, and the hardships they go through on a daily b...",
    "directors": [
      "Tate Taylor"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1454029/",
    "name": "The Help",
    "rating": 8.1,
    "year": 2011
  },
  {
    "actors": [
      "Tom Hanks",
      "Michael Clarke Duncan",
      "David Morse"
    ],
    "desc": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    "directors": [
      "Frank Darabont"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0120689/",
    "name": "The Green Mile",
    "rating": 8.6,
    "year": 1999
  },
  {
    "actors": [
      "Steve McQueen",
      "James Garner",
      "Richard Attenborough"
    ],
    "desc": "Allied prisoners of war plan for several hundred of their number to escape from a German camp during World War II.",
    "directors": [
      "John Sturges"
    ],
    "genre": [
      "Adventure",
      "Drama",
      "History"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzA2NmYxMWUtNzBlMC00MWM2LTkwNmQtYTFlZjQwODNhOWE0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzA2NmYxMWUtNzBlMC00MWM2LTkwNmQtYTFlZjQwODNhOWE0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0057115/",
    "name": "The Great Escape",
    "rating": 8.2,
    "year": 1963
  },
  {
    "actors": [
      "Charles Chaplin",
      "Paulette Goddard",
      "Jack Oakie"
    ],
    "desc": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel\u0026apos;s regime.",
    "directors": [
      "Charles Chaplin"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0032553/",
    "name": "The Great Dictator",
    "rating": 8.4,
    "year": 1941
  },
  {
    "actors": [
      "Henry Fonda",
      "Jane Darwell",
      "John Carradine"
    ],
    "desc": "An Oklahoma family, driven off their farm by the poverty and hopelessness of the Dust Bowl, joins the westward migration to California, suffering the misfortunes of the homeless in the Great Depression.",
    "directors": [
      "John Ford"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzJiOGI2MjctYjUyMS00ZjkzLWE2ZmUtOTg4NTZkOTNhZDc1L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzJiOGI2MjctYjUyMS00ZjkzLWE2ZmUtOTg4NTZkOTNhZDc1L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0032551/",
    "name": "The Grapes of Wrath",
    "rating": 8.1,
    "year": 1940
  },
  {
    "actors": [
      "Ralph Fiennes",
      "F. Murray Abraham",
      "Mathieu Amalric"
    ],
    "desc": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel\u0026apos;s glorious years under an exceptional concierge.",
    "directors": [
      "Wes Anderson"
    ],
    "genre": [
      "Adventure",
      "Comedy",
      "Crime"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt2278388/",
    "name": "The Grand Budapest Hotel",
    "rating": 8.1,
    "year": 2014
  },
  {
    "actors": [
      "Charles Chaplin",
      "Mack Swain",
      "Tom Murray"
    ],
    "desc": "A prospector goes to the Klondike during the 1890s gold rush in hopes of making his fortune, and is smitten with a girl he sees in a dance hall.",
    "directors": [
      "Charles Chaplin"
    ],
    "genre": [
      "Adventure",
      "Comedy",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0015864/",
    "name": "The Gold Rush",
    "rating": 8.2,
    "year": 1925
  },
  {
    "actors": [
      "Al Pacino",
      "Robert De Niro",
      "Robert Duvall"
    ],
    "desc": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    "directors": [
      "Francis Ford Coppola"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0071562/",
    "name": "The Godfather Part II",
    "rating": 9.0,
    "year": 1974
  },
  {
    "actors": [
      "Marlon Brando",
      "Al Pacino",
      "James Caan"
    ],
    "desc": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    "directors": [
      "Francis Ford Coppola"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0068646/",
    "name": "The Godfather",
    "rating": 9.2,
    "year": 1972
  },
  {
    "actors": [
      "Buster Keaton",
      "Marion Mack",
      "Glen Cavender"
    ],
    "desc": "After being rejected by the Confederate military, not realizing it was due to his crucial civilian role, an engineer must single-handedly recapture his beloved locomotive after it is seized by Union spies and return it through ene...",
    "directors": [
      "Clyde Bruckman",
      "Buster Keaton"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYmRiMDFlYjYtOTMwYy00OGY2LWE0Y2QtYzQxOGNhZmUwNTIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYmRiMDFlYjYtOTMwYy00OGY2LWE0Y2QtYzQxOGNhZmUwNTIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0017925/",
    "name": "The General",
    "rating": 8.2,
    "year": 1927
  },
  {
    "actors": [
      "Anthony Hopkins",
      "Olivia Colman",
      "Mark Gatiss"
    ],
    "desc": "A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.",
    "directors": [
      "Florian Zeller"
    ],
    "genre": [
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt10272386/",
    "name": "The Father",
    "rating": 8.2,
    "year": 2021
  },
  {
    "actors": [
      "Ellen Burstyn",
      "Max von Sydow",
      "Linda Blair"
    ],
    "desc": "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.",
    "directors": [
      "William Friedkin"
    ],
    "genre": [
      "Horror"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYWFlZGY2NDktY2ZjOS00ZWNkLTg0ZDAtZDY4MTM1ODU4ZjljXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYWFlZGY2NDktY2ZjOS00ZWNkLTg0ZDAtZDY4MTM1ODU4ZjljXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0070047/",
    "name": "The Exorcist",
    "rating": 8.1,
    "year": 1973
  },
  {
    "actors": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher"
    ],
    "desc": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    "directors": [
      "Irvin Kershner"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0080684/",
    "name": "The Empire Strikes Back",
    "rating": 8.7,
    "year": 1980
  },
  {
    "actors": [
      "Anthony Hopkins",
      "John Hurt",
      "Anne Bancroft"
    ],
    "desc": "A Victorian surgeon rescues a heavily disfigured man who is mistreated while scraping a living as a side-show freak. Behind his monstrous façade, there is revealed a person of kindness, intelligence and sophistication.",
    "directors": [
      "David Lynch"
    ],
    "genre": [
      "Biography",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDVjNjIwOGItNDE3Ny00OThjLWE0NzQtZTU3YjMzZTZjMzhkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMDVjNjIwOGItNDE3Ny00OThjLWE0NzQtZTU3YjMzZTZjMzhkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0080678/",
    "name": "The Elephant Man",
    "rating": 8.2,
    "year": 1980
  },
  {
    "actors": [
      "Leonardo DiCaprio",
      "Matt Damon",
      "Jack Nicholson"
    ],
    "desc": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    "directors": [
      "Martin Scorsese"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0407887/",
    "name": "The Departed",
    "rating": 8.5,
    "year": 2006
  },
  {
    "actors": [
      "Robert De Niro",
      "Christopher Walken",
      "John Cazale"
    ],
    "desc": "An in-depth examination of the ways in which the Vietnam War impacts and disrupts the lives of several friends in a small steel mill town in Pennsylvania.",
    "directors": [
      "Michael Cimino"
    ],
    "genre": [
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNDhmNTA0ZDMtYjhkNS00NzEzLWIzYTItOGNkMTVmYjE2YmI3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNDhmNTA0ZDMtYjhkNS00NzEzLWIzYTItOGNkMTVmYjE2YmI3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0077416/",
    "name": "The Deer Hunter",
    "rating": 8.1,
    "year": 1979
  },
  {
    "actors": [
      "Christian Bale",
      "Tom Hardy",
      "Anne Hathaway"
    ],
    "desc": "Eight years after the Joker\u0026apos;s reign of anarchy, Batman, with the help of the enigmatic Selina Kyle, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    "directors": [
      "Christopher Nolan"
    ],
    "genre": [
      "Action",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1345836/",
    "name": "The Dark Knight Rises",
    "rating": 8.4,
    "year": 2012
  },
  {
    "actors": [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart"
    ],
    "desc": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "directors": [
      "Christopher Nolan"
    ],
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0468569/",
    "name": "The Dark Knight",
    "rating": 9.0,
    "year": 2008
  },
  {
    "actors": [
      "William Holden",
      "Alec Guinness",
      "Jack Hawkins"
    ],
    "desc": "British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors in occupied Burma, not knowing that the allied forces are planning a daring commando raid through the jungle to destroy it.",
    "directors": [
      "David Lean"
    ],
    "genre": [
      "Adventure",
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOGY5NmNlMmQtYzRlYy00NGQ5LWFkYjYtNzExZmQyMTg0ZDA0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOGY5NmNlMmQtYzRlYy00NGQ5LWFkYjYtNzExZmQyMTg0ZDA0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0050212/",
    "name": "The Bridge on the River Kwai",
    "rating": 8.2,
    "year": 1957
  },
  {
    "actors": [
      "Jeff Bridges",
      "John Goodman",
      "Julianne Moore"
    ],
    "desc": "Ultimate L.A. slacker Jeff \u0026quot;The Dude\u0026quot; Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire\u0026apos;s miss...",
    "directors": [
      "Joel Coen",
      "Ethan Coen"
    ],
    "genre": [
      "Comedy",
      "Crime"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0118715/",
    "name": "The Big Lebowski",
    "rating": 8.1,
    "year": 1998
  },
  {
    "actors": [
      "Myrna Loy",
      "Dana Andrews",
      "Fredric March"
    ],
    "desc": "Three World War II veterans, two of them traumatized or disabled, return home to the American midwest to discover that they and their families have been irreparably changed.",
    "directors": [
      "William Wyler"
    ],
    "genre": [
      "Drama",
      "Romance",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BY2RmNTRjYzctODI4Ni00MzQyLWEyNTAtNjU0N2JkMTNhNjJkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BY2RmNTRjYzctODI4Ni00MzQyLWEyNTAtNjU0N2JkMTNhNjJkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0036868/",
    "name": "The Best Years of Our Lives",
    "rating": 8.1,
    "year": 1947
  },
  {
    "actors": [
      "Jack Lemmon",
      "Shirley MacLaine",
      "Fred MacMurray"
    ],
    "desc": "A Manhattan insurance clerk tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.",
    "directors": [
      "Billy Wilder"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzkwODFjNzItMmMwNi00MTU5LWE2MzktM2M4ZDczZGM1MmViXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzkwODFjNzItMmMwNi00MTU5LWE2MzktM2M4ZDczZGM1MmViXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0053604/",
    "name": "The Apartment",
    "rating": 8.3,
    "year": 1960
  },
  {
    "actors": [
      "Arnold Schwarzenegger",
      "Linda Hamilton",
      "Edward Furlong"
    ],
    "desc": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her 10-year old adolescent son John from an even more advanced and powerful cyborg.",
    "directors": [
      "James Cameron"
    ],
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0103064/",
    "name": "Terminator 2: Judgment Day",
    "rating": 8.6,
    "year": 1991
  },
  {
    "actors": [
      "Toshirô Mifune",
      "Yutaka Sada",
      "Tatsuya Nakadai"
    ],
    "desc": "An executive of a Yokohama shoe company becomes a victim of extortion when his chauffeur\u0026apos;s son is kidnapped by mistake and held for ransom.",
    "directors": [
      "Akira Kurosawa"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0057565/",
    "name": "Tengoku to jigoku",
    "rating": 8.4,
    "year": 1963
  },
  {
    "actors": [
      "Robert De Niro",
      "Jodie Foster",
      "Cybill Shepherd"
    ],
    "desc": "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
    "directors": [
      "Martin Scorsese"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0075314/",
    "name": "Taxi Driver",
    "rating": 8.2,
    "year": 1976
  },
  {
    "actors": [
      "Darsheel Safary",
      "Aamir Khan",
      "Tisca Chopra"
    ],
    "desc": "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
    "directors": [
      "Aamir Khan",
      "Amole Gupte"
    ],
    "genre": [
      "Drama",
      "Family"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0986264/",
    "name": "Taare Zameen Par",
    "rating": 8.4,
    "year": 2007
  },
  {
    "actors": [
      "William Holden",
      "Gloria Swanson",
      "Erich von Stroheim"
    ],
    "desc": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
    "directors": [
      "Billy Wilder"
    ],
    "genre": [
      "Drama",
      "Film-Noir"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0043014/",
    "name": "Sunset Blvd.",
    "rating": 8.4,
    "year": 1950
  },
  {
    "actors": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher"
    ],
    "desc": "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor\u0026apos;s...",
    "directors": [
      "Richard Marquand"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0086190/",
    "name": "Star Wars: Episode VI - Return of the Jedi",
    "rating": 8.3,
    "year": 1983
  },
  {
    "actors": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher"
    ],
    "desc": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\u0026apos;s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
    "directors": [
      "George Lucas"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0076759/",
    "name": "Star Wars",
    "rating": 8.6,
    "year": 1977
  },
  {
    "actors": [
      "Wil Wheaton",
      "River Phoenix",
      "Corey Feldman"
    ],
    "desc": "After the death of one of his friends, a writer recounts a childhood journey with his friends to find the body of a missing boy.",
    "directors": [
      "Rob Reiner"
    ],
    "genre": [
      "Adventure",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BODJmY2Y2OGQtMDg2My00N2Q3LWJmZTUtYTc2ODBjZDVlNDlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BODJmY2Y2OGQtMDg2My00N2Q3LWJmZTUtYTc2ODBjZDVlNDlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0092005/",
    "name": "Stand by Me",
    "rating": 8.1,
    "year": 1986
  },
  {
    "actors": [
      "Mark Ruffalo",
      "Michael Keaton",
      "Rachel McAdams"
    ],
    "desc": "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
    "directors": [
      "Tom McCarthy"
    ],
    "genre": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1895587/",
    "name": "Spotlight",
    "rating": 8.1,
    "year": 2015
  },
  {
    "actors": [
      "Tom Holland",
      "Zendaya",
      "Benedict Cumberbatch"
    ],
    "desc": "With Spider-Man\u0026apos;s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    "directors": [
      "Jon Watts"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt10872600/",
    "name": "Spider-Man: No Way Home",
    "rating": 8.3,
    "year": 2021
  },
  {
    "actors": [
      "Shameik Moore",
      "Jake Johnson",
      "Hailee Steinfeld"
    ],
    "desc": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    "directors": [
      "Bob Persichetti",
      "Peter Ramsey",
      "Rodney Rothman"
    ],
    "genre": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt4633694/",
    "name": "Spider-Man: Into the Spider-Verse",
    "rating": 8.4,
    "year": 2018
  },
  {
    "actors": [
      "Marilyn Monroe",
      "Tony Curtis",
      "Jack Lemmon"
    ],
    "desc": "After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.",
    "directors": [
      "Billy Wilder"
    ],
    "genre": [
      "Comedy",
      "Music",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0053291/",
    "name": "Some Like It Hot",
    "rating": 8.2,
    "year": 1959
  },
  {
    "actors": [
      "Jason Statham",
      "Brad Pitt",
      "Stephen Graham"
    ],
    "desc": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
    "directors": [
      "Guy Ritchie"
    ],
    "genre": [
      "Comedy",
      "Crime"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0208092/",
    "name": "Snatch",
    "rating": 8.2,
    "year": 2001
  },
  {
    "actors": [
      "Victor Sjöström",
      "Bibi Andersson",
      "Ingrid Thulin"
    ],
    "desc": "After living a life marked by coldness, an aging professor is forced to confront the emptiness of his existence.",
    "directors": [
      "Ingmar Bergman"
    ],
    "genre": [
      "Drama",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYWQxYzdhMDMtNjAyZC00NzE0LWFjYmQtYjk0YzMyYjA5NzZkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYWQxYzdhMDMtNjAyZC00NzE0LWFjYmQtYjk0YzMyYjA5NzZkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0050986/",
    "name": "Smultronstället",
    "rating": 8.1,
    "year": 1959
  },
  {
    "actors": [
      "Gene Kelly",
      "Donald O\u0026apos;Connor",
      "Debbie Reynolds"
    ],
    "desc": "A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood.",
    "directors": [
      "Stanley Donen",
      "Gene Kelly"
    ],
    "genre": [
      "Comedy",
      "Musical",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0045152/",
    "name": "Singin\u0026apos; in the Rain",
    "rating": 8.3,
    "year": 1952
  },
  {
    "actors": [
      "Leonardo DiCaprio",
      "Emily Mortimer",
      "Mark Ruffalo"
    ],
    "desc": "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    "directors": [
      "Martin Scorsese"
    ],
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1130884/",
    "name": "Shutter Island",
    "rating": 8.2,
    "year": 2010
  },
  {
    "actors": [
      "Toshirô Mifune",
      "Takashi Shimura",
      "Keiko Tsushima"
    ],
    "desc": "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him. As the samurai teach the peasants how to defend themselves, the village is attacked by an army of bandits.",
    "directors": [
      "Akira Kurosawa"
    ],
    "genre": [
      "Action",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0047478/",
    "name": "Shichinin no samurai",
    "rating": 8.6,
    "year": 1956
  },
  {
    "actors": [
      "Buster Keaton",
      "Kathryn McGuire",
      "Joe Keaton"
    ],
    "desc": "A film projectionist longs to be a detective, and puts his meagre skills to work when he is framed by a rival for stealing his girlfriend\u0026apos;s father\u0026apos;s pocketwatch.",
    "directors": [
      "Buster Keaton"
    ],
    "genre": [
      "Action",
      "Comedy",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZWFhOGU5NDctY2Q3YS00Y2VlLWI1NzEtZmIwY2ZiZjY4OTA2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZWFhOGU5NDctY2Q3YS00Y2VlLWI1NzEtZmIwY2ZiZjY4OTA2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0015324/",
    "name": "Sherlock Jr.",
    "rating": 8.2,
    "year": 1924
  },
  {
    "actors": [
      "Tatsuya Nakadai",
      "Akira Ishihama",
      "Shima Iwashita"
    ],
    "desc": "When a ronin requesting seppuku at a feudal lord\u0026apos;s palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan\u0026apos;s integrity.",
    "directors": [
      "Masaki Kobayashi"
    ],
    "genre": [
      "Action",
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0056058/",
    "name": "Seppuku",
    "rating": 8.6,
    "year": 1964
  },
  {
    "actors": [
      "Daveigh Chase",
      "Suzanne Pleshette",
      "Miyu Irino"
    ],
    "desc": "During her family\u0026apos;s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    "directors": [
      "Hayao Miyazaki"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0245429/",
    "name": "Sen to Chihiro no kamikakushi",
    "rating": 8.6,
    "year": 2003
  },
  {
    "actors": [
      "Morgan Freeman",
      "Brad Pitt",
      "Kevin Spacey"
    ],
    "desc": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    "directors": [
      "David Fincher"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0114369/",
    "name": "Se7en",
    "rating": 8.6,
    "year": 1995
  },
  {
    "actors": [
      "Liam Neeson",
      "Ralph Fiennes",
      "Ben Kingsley"
    ],
    "desc": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "directors": [
      "Steven Spielberg"
    ],
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0108052/",
    "name": "Schindler\u0026apos;s List",
    "rating": 9.0,
    "year": 1994
  },
  {
    "actors": [
      "Al Pacino",
      "Michelle Pfeiffer",
      "Steven Bauer"
    ],
    "desc": "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    "directors": [
      "Brian De Palma"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0086250/",
    "name": "Scarface",
    "rating": 8.3,
    "year": 1983
  },
  {
    "actors": [
      "Tom Hanks",
      "Matt Damon",
      "Tom Sizemore"
    ],
    "desc": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    "directors": [
      "Steven Spielberg"
    ],
    "genre": [
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0120815/",
    "name": "Saving Private Ryan",
    "rating": 8.6,
    "year": 1998
  },
  {
    "actors": [
      "Song Kang-ho",
      "Kim Sang-kyung",
      "Roe-ha Kim"
    ],
    "desc": "In a small Korean province in 1986, two detectives struggle with the case of multiple young women being found raped and murdered by an unknown culprit.",
    "directors": [
      "Bong Joon Ho"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0353969/",
    "name": "Salinui chueok",
    "rating": 8.1,
    "year": 2003
  },
  {
    "actors": [
      "Daniel Brühl",
      "Chris Hemsworth",
      "Olivia Wilde"
    ],
    "desc": "The merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
    "directors": [
      "Ron Howard"
    ],
    "genre": [
      "Action",
      "Biography",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1979320/",
    "name": "Rush",
    "rating": 8.1,
    "year": 2013
  },
  {
    "actors": [
      "Brie Larson",
      "Jacob Tremblay",
      "Sean Bridgers"
    ],
    "desc": "Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.",
    "directors": [
      "Lenny Abrahamson"
    ],
    "genre": [
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt3170832/",
    "name": "Room",
    "rating": 8.1,
    "year": 2016
  },
  {
    "actors": [
      "Sylvester Stallone",
      "Talia Shire",
      "Burt Young"
    ],
    "desc": "A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.",
    "directors": [
      "John G. Avildsen"
    ],
    "genre": [
      "Drama",
      "Sport"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNTBkMjg2MjYtYTZjOS00ODQ0LTg0MDEtM2FiNmJmOGU1NGEwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNTBkMjg2MjYtYTZjOS00ODQ0LTg0MDEtM2FiNmJmOGU1NGEwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0075148/",
    "name": "Rocky",
    "rating": 8.1,
    "year": 1976
  },
  {
    "actors": [
      "Harvey Keitel",
      "Tim Roth",
      "Michael Madsen"
    ],
    "desc": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    "directors": [
      "Quentin Tarantino"
    ],
    "genre": [
      "Crime",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0105236/",
    "name": "Reservoir Dogs",
    "rating": 8.3,
    "year": 1992
  },
  {
    "actors": [
      "Ellen Burstyn",
      "Jared Leto",
      "Jennifer Connelly"
    ],
    "desc": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
    "directors": [
      "Darren Aronofsky"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0180093/",
    "name": "Requiem for a Dream",
    "rating": 8.3,
    "year": 2000
  },
  {
    "actors": [
      "Darío Grandinetti",
      "María Marull",
      "Mónica Villa"
    ],
    "desc": "Six short stories that explore the extremities of human behavior involving people in distress.",
    "directors": [
      "Damián Szifron"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNGQzY2Y0MTgtMDA4OC00NjM3LWI0ZGQtNTJlM2UxZDQxZjI0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNGQzY2Y0MTgtMDA4OC00NjM3LWI0ZGQtNTJlM2UxZDQxZjI0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt3011894/",
    "name": "Relatos salvajes",
    "rating": 8.1,
    "year": 2014
  },
  {
    "actors": [
      "Laurence Olivier",
      "Joan Fontaine",
      "George Sanders"
    ],
    "desc": "A self-conscious woman juggles adjusting to her new role as an aristocrat\u0026apos;s wife and avoiding being intimidated by his first wife\u0026apos;s spectral presence.",
    "directors": [
      "Alfred Hitchcock"
    ],
    "genre": [
      "Drama",
      "Film-Noir",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYTcxYWExOTMtMWFmYy00ZjgzLWI0YjktNWEzYzJkZTg0NDdmL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYTcxYWExOTMtMWFmYy00ZjgzLWI0YjktNWEzYzJkZTg0NDdmL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0032976/",
    "name": "Rebecca",
    "rating": 8.1,
    "year": 1940
  },
  {
    "actors": [
      "James Stewart",
      "Grace Kelly",
      "Wendell Corey"
    ],
    "desc": "A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
    "directors": [
      "Alfred Hitchcock"
    ],
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0047396/",
    "name": "Rear Window",
    "rating": 8.5,
    "year": 1954
  },
  {
    "actors": [
      "Brad Garrett",
      "Lou Romano",
      "Patton Oswalt"
    ],
    "desc": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
    "directors": [
      "Brad Bird",
      "Jan Pinkava"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0382932/",
    "name": "Ratatouille",
    "rating": 8.1,
    "year": 2007
  },
  {
    "actors": [
      "Toshirô Mifune",
      "Machiko Kyô",
      "Masayuki Mori"
    ],
    "desc": "The rape of a bride and the murder of her samurai husband are recalled from the perspectives of a bandit, the bride, the samurai\u0026apos;s ghost and a woodcutter.",
    "directors": [
      "Akira Kurosawa"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjEzMzA4NDE2OF5BMl5BanBnXkFtZTcwNTc5MDI2NQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjEzMzA4NDE2OF5BMl5BanBnXkFtZTcwNTc5MDI2NQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0042876/",
    "name": "Rashômon",
    "rating": 8.2,
    "year": 1951
  },
  {
    "actors": [
      "Tatsuya Nakadai",
      "Akira Terao",
      "Jinpachi Nezu"
    ],
    "desc": "In Medieval Japan, an elderly warlord retires, handing over his empire to his three sons. However, he vastly underestimates how the new-found power will corrupt them and cause them to turn on each other...and him.",
    "directors": [
      "Akira Kurosawa"
    ],
    "genre": [
      "Action",
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMmU1NGYwZWYtOWExNi00ZTEyLTgwMmUtM2ZlMDVjNWM4YjVlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMmU1NGYwZWYtOWExNi00ZTEyLTgwMmUtM2ZlMDVjNWM4YjVlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0089881/",
    "name": "Ran",
    "rating": 8.2,
    "year": 1985
  },
  {
    "actors": [
      "Harrison Ford",
      "Karen Allen",
      "Paul Freeman"
    ],
    "desc": "Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis.",
    "directors": [
      "Steven Spielberg"
    ],
    "genre": [
      "Action",
      "Adventure"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0082971/",
    "name": "Raiders of the Lost Ark",
    "rating": 8.4,
    "year": 1981
  },
  {
    "actors": [
      "Robert De Niro",
      "Cathy Moriarty",
      "Joe Pesci"
    ],
    "desc": "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
    "directors": [
      "Martin Scorsese"
    ],
    "genre": [
      "Biography",
      "Drama",
      "Sport"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYjRmODkzNDItMTNhNi00YjJlLTg0ZjAtODlhZTM0YzgzYThlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYjRmODkzNDItMTNhNi00YjJlLTg0ZjAtODlhZTM0YzgzYThlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0081398/",
    "name": "Raging Bull",
    "rating": 8.2,
    "year": 1980
  },
  {
    "actors": [
      "John Travolta",
      "Uma Thurman",
      "Samuel L. Jackson"
    ],
    "desc": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "directors": [
      "Quentin Tarantino"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0110912/",
    "name": "Pulp Fiction",
    "rating": 8.9,
    "year": 1994
  },
  {
    "actors": [
      "Anthony Perkins",
      "Janet Leigh",
      "Vera Miles"
    ],
    "desc": "A Phoenix secretary embezzles $40,000 from her employer\u0026apos;s client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
    "directors": [
      "Alfred Hitchcock"
    ],
    "genre": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0054215/",
    "name": "Psycho",
    "rating": 8.5,
    "year": 1960
  },
  {
    "actors": [
      "Hugh Jackman",
      "Jake Gyllenhaal",
      "Viola Davis"
    ],
    "desc": "When Keller Dover\u0026apos;s daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
    "directors": [
      "Denis Villeneuve"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1392214/",
    "name": "Prisoners",
    "rating": 8.1,
    "year": 2013
  },
  {
    "actors": [
      "Charlie Sheen",
      "Tom Berenger",
      "Willem Dafoe"
    ],
    "desc": "Chris Taylor, a neophyte recruit in Vietnam, finds himself caught in a battle of wills between two sergeants, one good and the other evil. A shrewd examination of the brutality of war and the duality of man in conflict.",
    "directors": [
      "Oliver Stone"
    ],
    "genre": [
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMzRjZjdlMjQtODVkYS00N2YzLWJlYWYtMGVlN2E5MWEwMWQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMzRjZjdlMjQtODVkYS00N2YzLWJlYWYtMGVlN2E5MWEwMWQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0091763/",
    "name": "Platoon",
    "rating": 8.1,
    "year": 1987
  },
  {
    "actors": [
      "Johnny Depp",
      "Geoffrey Rush",
      "Orlando Bloom"
    ],
    "desc": "Blacksmith Will Turner teams up with eccentric pirate \u0026quot;Captain\u0026quot; Jack Sparrow to save his love, the governor\u0026apos;s daughter, from Jack\u0026apos;s former pirate allies, who are now undead.",
    "directors": [
      "Gore Verbinski"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0325980/",
    "name": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "rating": 8.1,
    "year": 2003
  },
  {
    "actors": [
      "Bibi Andersson",
      "Liv Ullmann",
      "Margaretha Krook"
    ],
    "desc": "A nurse is put in charge of a mute actress and finds that their personae are melding together.",
    "directors": [
      "Ingmar Bergman"
    ],
    "genre": [
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYmFlOTcxMWUtZTMzMi00NWIyLTkwOTEtNjIxNmViNzc2Yzc1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYmFlOTcxMWUtZTMzMi00NWIyLTkwOTEtNjIxNmViNzc2Yzc1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0060827/",
    "name": "Persona",
    "rating": 8.1,
    "year": 1967
  },
  {
    "actors": [
      "Clint Eastwood",
      "Lee Van Cleef",
      "Gian Maria Volontè"
    ],
    "desc": "Two bounty hunters with the same intentions team up to track down an escaped Mexican outlaw.",
    "directors": [
      "Sergio Leone"
    ],
    "genre": [
      "Western"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMzJlZTNkYjQtMTE1OS00YTJlLTgxNjItYzg4NTllODdkMzBiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMzJlZTNkYjQtMTE1OS00YTJlLTgxNjItYzg4NTllODdkMzBiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0059578/",
    "name": "Per qualche dollaro in più",
    "rating": 8.2,
    "year": 1967
  },
  {
    "actors": [
      "Kirk Douglas",
      "Ralph Meeker",
      "Adolphe Menjou"
    ],
    "desc": "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
    "directors": [
      "Stanley Kubrick"
    ],
    "genre": [
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0050825/",
    "name": "Paths of Glory",
    "rating": 8.4,
    "year": 1957
  },
  {
    "actors": [
      "Kanu Bannerjee",
      "Karuna Bannerjee",
      "Subir Banerjee"
    ],
    "desc": "Impoverished priest Harihar Ray, dreaming of a better life for himself and his family, leaves his rural Bengal village in search of work.",
    "directors": [
      "Satyajit Ray"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMmFkNDY5OTktNzY3Yy00OTFlLThhNjktOTRhMmZjZmIxYjAxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMmFkNDY5OTktNzY3Yy00OTFlLThhNjktOTRhMmZjZmIxYjAxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0048473/",
    "name": "Pather Panchali",
    "rating": 8.3,
    "year": 1955
  },
  {
    "actors": [
      "Jack Nicholson",
      "Louise Fletcher",
      "Michael Berryman"
    ],
    "desc": "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
    "directors": [
      "Milos Forman"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0073486/",
    "name": "One Flew Over the Cuckoo\u0026apos;s Nest",
    "rating": 8.7,
    "year": 1975
  },
  {
    "actors": [
      "Robert De Niro",
      "James Woods",
      "Elizabeth McGovern"
    ],
    "desc": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan 35 years later, where he must once again confront the ghosts and regrets of his old life.",
    "directors": [
      "Sergio Leone"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0087843/",
    "name": "Once Upon a Time in America",
    "rating": 8.3,
    "year": 1984
  },
  {
    "actors": [
      "Marlon Brando",
      "Karl Malden",
      "Lee J. Cobb"
    ],
    "desc": "An ex-prize fighter turned New Jersey longshoreman struggles to stand up to his corrupt union bosses, including his older brother, as he starts to connect with the grieving sister of one of the syndicate\u0026apos;s victims.",
    "directors": [
      "Elia Kazan"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BY2I0MWFiZDMtNWQyYy00Njk5LTk3MDktZjZjNTNmZmVkYjkxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BY2I0MWFiZDMtNWQyYy00Njk5LTk3MDktZjZjNTNmZmVkYjkxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0047296/",
    "name": "On the Waterfront",
    "rating": 8.1,
    "year": 1954
  },
  {
    "actors": [
      "Choi Min-sik",
      "Yoo Ji-tae",
      "Kang Hye-jeong"
    ],
    "desc": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    "directors": [
      "Park Chan-wook"
    ],
    "genre": [
      "Action",
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0364569/",
    "name": "Oldeuboi",
    "rating": 8.4,
    "year": 2003
  },
  {
    "actors": [
      "Philippe Noiret",
      "Enzo Cannavale",
      "Antonella Attili"
    ],
    "desc": "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema\u0026apos;s projectionist.",
    "directors": [
      "Giuseppe Tornatore"
    ],
    "genre": [
      "Drama",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0095765/",
    "name": "Nuovo Cinema Paradiso",
    "rating": 8.5,
    "year": 1990
  },
  {
    "actors": [
      "Cary Grant",
      "Eva Marie Saint",
      "James Mason"
    ],
    "desc": "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.",
    "directors": [
      "Alfred Hitchcock"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0053125/",
    "name": "North by Northwest",
    "rating": 8.3,
    "year": 1959
  },
  {
    "actors": [
      "Tommy Lee Jones",
      "Javier Bardem",
      "Josh Brolin"
    ],
    "desc": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    "directors": [
      "Ethan Coen",
      "Joel Coen"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0477348/",
    "name": "No Country for Old Men",
    "rating": 8.2,
    "year": 2007
  },
  {
    "actors": [
      "Faye Dunaway",
      "William Holden",
      "Peter Finch"
    ],
    "desc": "A television network cynically exploits a deranged former anchor\u0026apos;s ravings and revelations about the news media for its own profit, but finds that his message may be difficult to control.",
    "directors": [
      "Sidney Lumet"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzY0NjU5ODUtOTAzMC00NTU5LWJkZjctYWMyOWY2MTZmOWM1XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzY0NjU5ODUtOTAzMC00NTU5LWJkZjctYWMyOWY2MTZmOWM1XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0074958/",
    "name": "Network",
    "rating": 8.1,
    "year": 1976
  },
  {
    "actors": [
      "James Stewart",
      "Jean Arthur",
      "Claude Rains"
    ],
    "desc": "A naive youth leader is appointed to fill a vacancy in the U.S. Senate. His idealistic plans promptly collide with corruption at home and subterfuge from his hero in Washington, but he tries to forge ahead despite attacks on his c...",
    "directors": [
      "Frank Capra"
    ],
    "genre": [
      "Comedy",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZTYwYjYxYzgtMDE1Ni00NzU4LWJlMTEtODQ5YmJmMGJhZjI5L2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZTYwYjYxYzgtMDE1Ni00NzU4LWJlMTEtODQ5YmJmMGJhZjI5L2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0031679/",
    "name": "Mr. Smith Goes to Washington",
    "rating": 8.1,
    "year": 1939
  },
  {
    "actors": [
      "Graham Chapman",
      "John Cleese",
      "Eric Idle"
    ],
    "desc": "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.",
    "directors": [
      "Terry Gilliam",
      "Terry Jones"
    ],
    "genre": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BN2IyNTE4YzUtZWU0Mi00MGIwLTgyMmQtMzQ4YzQxYWNlYWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BN2IyNTE4YzUtZWU0Mi00MGIwLTgyMmQtMzQ4YzQxYWNlYWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0071853/",
    "name": "Monty Python and the Holy Grail",
    "rating": 8.2,
    "year": 1975
  },
  {
    "actors": [
      "Billy Crystal",
      "John Goodman",
      "Mary Gibbs"
    ],
    "desc": "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
    "directors": [
      "Pete Docter",
      "David Silverman",
      "Lee Unkrich"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0198781/",
    "name": "Monsters, Inc.",
    "rating": 8.1,
    "year": 2001
  },
  {
    "actors": [
      "Yôji Matsuda",
      "Yuriko Ishida",
      "Yûko Tanaka"
    ],
    "desc": "On a journey to find the cure for a Tatarigami\u0026apos;s curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
    "directors": [
      "Hayao Miyazaki"
    ],
    "genre": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0119698/",
    "name": "Mononoke-hime",
    "rating": 8.4,
    "year": 1997
  },
  {
    "actors": [
      "Charles Chaplin",
      "Paulette Goddard",
      "Henry Bergman"
    ],
    "desc": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
    "directors": [
      "Charles Chaplin"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0027977/",
    "name": "Modern Times",
    "rating": 8.5,
    "year": 1936
  },
  {
    "actors": [
      "Hilary Swank",
      "Clint Eastwood",
      "Morgan Freeman"
    ],
    "desc": "A determined woman works with a hardened boxing trainer to become a professional.",
    "directors": [
      "Clint Eastwood"
    ],
    "genre": [
      "Drama",
      "Sport"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0405159/",
    "name": "Million Dollar Baby",
    "rating": 8.1,
    "year": 2005
  },
  {
    "actors": [
      "Brigitte Helm",
      "Alfred Abel",
      "Gustav Fröhlich"
    ],
    "desc": "In a futuristic city sharply divided between the working class and the city planners, the son of the city\u0026apos;s mastermind falls in love with a working-class prophet who predicts the coming of a savior to mediate their differences.",
    "directors": [
      "Fritz Lang"
    ],
    "genre": [
      "Drama",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0017136/",
    "name": "Metropolis",
    "rating": 8.3,
    "year": 1927
  },
  {
    "actors": [
      "Guy Pearce",
      "Carrie-Anne Moss",
      "Joe Pantoliano"
    ],
    "desc": "A man with short-term memory loss attempts to track down his wife\u0026apos;s murderer.",
    "directors": [
      "Christopher Nolan"
    ],
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0209144/",
    "name": "Memento",
    "rating": 8.4,
    "year": 2001
  },
  {
    "actors": [
      "Toni Collette",
      "Philip Seymour Hoffman",
      "Eric Bana"
    ],
    "desc": "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
    "directors": [
      "Adam Elliot"
    ],
    "genre": [
      "Animation",
      "Comedy",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDgzYjQwMDMtNGUzYi00MTRmLWIyMGMtNjE1OGZkNzY2YWIzL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMDgzYjQwMDMtNGUzYi00MTRmLWIyMGMtNjE1OGZkNzY2YWIzL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0978762/",
    "name": "Mary and Max.",
    "rating": 8.1,
    "year": 2010
  },
  {
    "actors": [
      "Tom Hardy",
      "Charlize Theron",
      "Nicholas Hoult"
    ],
    "desc": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    "directors": [
      "George Miller"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1392190/",
    "name": "Mad Max: Fury Road",
    "rating": 8.1,
    "year": 2015
  },
  {
    "actors": [
      "Peter Lorre",
      "Ellen Widmann",
      "Inge Landgut"
    ],
    "desc": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
    "directors": [
      "Fritz Lang"
    ],
    "genre": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0022100/",
    "name": "M - Eine Stadt sucht einen Mörder",
    "rating": 8.3,
    "year": 1931
  },
  {
    "actors": [
      "Jean Reno",
      "Gary Oldman",
      "Natalie Portman"
    ],
    "desc": "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin\u0026apos;s trade.",
    "directors": [
      "Luc Besson"
    ],
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0110413/",
    "name": "Léon",
    "rating": 8.5,
    "year": 1994
  },
  {
    "actors": [
      "Hugh Jackman",
      "Patrick Stewart",
      "Dafne Keen"
    ],
    "desc": "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
    "directors": [
      "James Mangold"
    ],
    "genre": [
      "Action",
      "Drama",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt3315342/",
    "name": "Logan",
    "rating": 8.1,
    "year": 2017
  },
  {
    "actors": [
      "Jason Flemyng",
      "Dexter Fletcher",
      "Nick Moran"
    ],
    "desc": "Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.",
    "directors": [
      "Guy Ritchie"
    ],
    "genre": [
      "Action",
      "Comedy",
      "Crime"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0120735/",
    "name": "Lock, Stock and Two Smoking Barrels",
    "rating": 8.2,
    "year": 1998
  },
  {
    "actors": [
      "Graham Chapman",
      "John Cleese",
      "Michael Palin"
    ],
    "desc": "Born on the original Christmas in the stable next door to Jesus Christ, Brian of Nazareth spends his life being mistaken for a messiah.",
    "directors": [
      "Terry Jones"
    ],
    "genre": [
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDA1ZWI4ZDItOTRlYi00OTUxLWFlNWQtMzM5NDI0YjA4ZGI2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMDA1ZWI4ZDItOTRlYi00OTUxLWFlNWQtMzM5NDI0YjA4ZGI2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0079470/",
    "name": "Life of Brian",
    "rating": 8.0,
    "year": 1979
  },
  {
    "actors": [
      "Jean-Pierre Léaud",
      "Albert Rémy",
      "Claire Maurier"
    ],
    "desc": "A young boy, left without attention, delves into a life of petty crime.",
    "directors": [
      "François Truffaut"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0053198/",
    "name": "Les quatre cents coups",
    "rating": 8.1,
    "year": 1959
  },
  {
    "actors": [
      "Yves Montand",
      "Charles Vanel",
      "Peter van Eyck"
    ],
    "desc": "In a decrepit South American village, four men are hired to transport an urgent nitroglycerine shipment without the equipment that would make it safe.",
    "directors": [
      "Henri-Georges Clouzot"
    ],
    "genre": [
      "Adventure",
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZDdkNzMwZmUtY2Q5MS00ZmM2LWJhYjItYTBjMWY0MGM4MDRjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZDdkNzMwZmUtY2Q5MS00ZmM2LWJhYjItYTBjMWY0MGM4MDRjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0046268/",
    "name": "Le salaire de la peur",
    "rating": 8.2,
    "year": 1955
  },
  {
    "actors": [
      "Audrey Tautou",
      "Mathieu Kassovitz",
      "Rufus"
    ],
    "desc": "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
    "directors": [
      "Jean-Pierre Jeunet"
    ],
    "genre": [
      "Comedy",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0211915/",
    "name": "Le fabuleux destin d\u0026apos;Amélie Poulain",
    "rating": 8.3,
    "year": 2002
  },
  {
    "actors": [
      "Peter O\u0026apos;Toole",
      "Alec Guinness",
      "Anthony Quinn"
    ],
    "desc": "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
    "directors": [
      "David Lean"
    ],
    "genre": [
      "Adventure",
      "Biography",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0056172/",
    "name": "Lawrence of Arabia",
    "rating": 8.3,
    "year": 1962
  },
  {
    "actors": [
      "Lamberto Maggiorani",
      "Enzo Staiola",
      "Lianella Carell"
    ],
    "desc": "In post-war Italy, a working-class man\u0026apos;s bicycle is stolen, endangering his efforts to find work. He and his son set out to find it.",
    "directors": [
      "Vittorio De Sica"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNmI1ODdjODctMDlmMC00ZWViLWI5MzYtYzRhNDdjYmM3MzFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNmI1ODdjODctMDlmMC00ZWViLWI5MzYtYzRhNDdjYmM3MzFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0040522/",
    "name": "Ladri di biciclette",
    "rating": 8.3,
    "year": 1949
  },
  {
    "actors": [
      "Roberto Benigni",
      "Nicoletta Braschi",
      "Giorgio Cantarini"
    ],
    "desc": "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
    "directors": [
      "Roberto Benigni"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0118799/",
    "name": "La vita è bella",
    "rating": 8.6,
    "year": 1997
  },
  {
    "actors": [
      "Maria Falconetti",
      "Eugene Silvain",
      "André Berley"
    ],
    "desc": "In 1431, Jeanne d\u0026apos;Arc is placed on trial on charges of heresy. The ecclesiastical jurists attempt to force Jeanne to recant her claims of holy visions.",
    "directors": [
      "Carl Theodor Dreyer"
    ],
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNjBjNDJiYTUtOWY0OS00OGVmLTg2YzctMTE0NzVhODM1ZWJmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNjBjNDJiYTUtOWY0OS00OGVmLTg2YzctMTE0NzVhODM1ZWJmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0019254/",
    "name": "La passion de Jeanne d\u0026apos;Arc",
    "rating": 8.2,
    "year": 1928
  },
  {
    "actors": [
      "Vincent Cassel",
      "Hubert Koundé",
      "Saïd Taghmaoui"
    ],
    "desc": "24 hours in the lives of three young men in the French suburbs the day after a violent riot.",
    "directors": [
      "Mathieu Kassovitz"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTQxOGU0OWUtMzExYy00ZjIxLWJmMzAtNTI1Y2YxYTMxN2RkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTQxOGU0OWUtMzExYy00ZjIxLWJmMzAtNTI1Y2YxYTMxN2RkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0113247/",
    "name": "La haine",
    "rating": 8.1,
    "year": 1996
  },
  {
    "actors": [
      "Brahim Hadjadj",
      "Jean Martin",
      "Yacef Saadi"
    ],
    "desc": "In the 1950s, fear and violence escalate as the people of Algiers fight for independence from the French government.",
    "directors": [
      "Gillo Pontecorvo"
    ],
    "genre": [
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BN2M4YTA4ZTEtN2EyNy00YTlmLWE4YzYtYjYyYjRkMWM4ZDM0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BN2M4YTA4ZTEtN2EyNy00YTlmLWE4YzYtYjYyYjRkMWM4ZDM0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0058946/",
    "name": "La battaglia di Algeri",
    "rating": 8.1,
    "year": 1967
  },
  {
    "actors": [
      "Kevin Spacey",
      "Russell Crowe",
      "Guy Pearce"
    ],
    "desc": "As corruption grows in 1950s Los Angeles, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.",
    "directors": [
      "Curtis Hanson"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0119488/",
    "name": "L.A. Confidential",
    "rating": 8.2,
    "year": 1997
  },
  {
    "actors": [
      "Jason Schwartzman",
      "J.K. Simmons",
      "Rashida Jones"
    ],
    "desc": "A simple act of kindness always sparks another, even in a frozen, faraway place. When Smeerensburg\u0026apos;s new postman, Jesper, befriends toymaker Klaus, their gifts melt an age-old feud and deliver a sleigh full of holiday traditions.",
    "directors": [
      "Sergio Pablos",
      "Carlos Martínez López"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt4729430/",
    "name": "Klaus",
    "rating": 8.1,
    "year": 2019
  },
  {
    "actors": [
      "Ryûnosuke Kamiki",
      "Mone Kamishiraishi",
      "Ryô Narita"
    ],
    "desc": "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    "directors": [
      "Makoto Shinkai"
    ],
    "genre": [
      "Animation",
      "Drama",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt5311514/",
    "name": "Kimi no Na wa.",
    "rating": 8.4,
    "year": 2017
  },
  {
    "actors": [
      "Uma Thurman",
      "David Carradine",
      "Daryl Hannah"
    ],
    "desc": "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    "directors": [
      "Quentin Tarantino"
    ],
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0266697/",
    "name": "Kill Bill: Vol. 1",
    "rating": 8.2,
    "year": 2003
  },
  {
    "actors": [
      "Sam Neill",
      "Laura Dern",
      "Jeff Goldblum"
    ],
    "desc": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park\u0026apos;s cloned dinosaurs to run loose.",
    "directors": [
      "Steven Spielberg"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0107290/",
    "name": "Jurassic Park",
    "rating": 8.2,
    "year": 1993
  },
  {
    "actors": [
      "Spencer Tracy",
      "Burt Lancaster",
      "Richard Widmark"
    ],
    "desc": "In 1948, an American court in occupied Germany tries four Nazis judged for war crimes.",
    "directors": [
      "Stanley Kramer"
    ],
    "genre": [
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNDc2ODQ5NTE2MV5BMl5BanBnXkFtZTcwODExMjUyNA@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNDc2ODQ5NTE2MV5BMl5BanBnXkFtZTcwODExMjUyNA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0055031/",
    "name": "Judgment at Nuremberg",
    "rating": 8.3,
    "year": 1961
  },
  {
    "actors": [
      "Joaquin Phoenix",
      "Robert De Niro",
      "Zazie Beetz"
    ],
    "desc": "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    "directors": [
      "Todd Phillips"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt7286456/",
    "name": "Joker",
    "rating": 8.4,
    "year": 2019
  },
  {
    "actors": [
      "Payman Maadi",
      "Leila Hatami",
      "Sareh Bayat"
    ],
    "desc": "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer\u0026apos;s disease.",
    "directors": [
      "Asghar Farhadi"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BN2JmMjViMjMtZTM5Mi00ZGZkLTk5YzctZDg5MjFjZDE4NjNkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BN2JmMjViMjMtZTM5Mi00ZGZkLTk5YzctZDg5MjFjZDE4NjNkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1832382/",
    "name": "Jodaeiye Nader az Simin",
    "rating": 8.3,
    "year": 2011
  },
  {
    "actors": [
      "Roy Scheider",
      "Robert Shaw",
      "Richard Dreyfuss"
    ],
    "desc": "When a killer shark unleashes chaos on a beach community off Cape Cod, it\u0026apos;s up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
    "directors": [
      "Steven Spielberg"
    ],
    "genre": [
      "Adventure",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0073195/",
    "name": "Jaws",
    "rating": 8.1,
    "year": 1975
  },
  {
    "actors": [
      "Suriya",
      "Lijo Mol Jose",
      "Manikandan K."
    ],
    "desc": "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
    "directors": [
      "T.J. Gnanavel"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTM0NWFjNGYtNjExMS00ZTZlLWFiYmMtZmU4ZjZkMmMxZTNjXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTM0NWFjNGYtNjExMS00ZTZlLWFiYmMtZmU4ZjZkMmMxZTNjXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt15097216/",
    "name": "Jai Bhim",
    "rating": 8.9,
    "year": 2021
  },
  {
    "actors": [
      "Mads Mikkelsen",
      "Thomas Bo Larsen",
      "Annika Wedderkopp"
    ],
    "desc": "A teacher lives a lonely life, all the while struggling over his son\u0026apos;s custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent li...",
    "directors": [
      "Thomas Vinterberg"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt2106476/",
    "name": "Jagten",
    "rating": 8.3,
    "year": 2013
  },
  {
    "actors": [
      "James Stewart",
      "Donna Reed",
      "Lionel Barrymore"
    ],
    "desc": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
    "directors": [
      "Frank Capra"
    ],
    "genre": [
      "Drama",
      "Family",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0038650/",
    "name": "It\u0026apos;s a Wonderful Life",
    "rating": 8.6,
    "year": 1947
  },
  {
    "actors": [
      "Clark Gable",
      "Claudette Colbert",
      "Walter Connolly"
    ],
    "desc": "A renegade reporter trailing a young runaway heiress for a big story joins her on a bus heading from Florida to New York, and they end up stuck with each other when the bus leaves them behind at one of the stops.",
    "directors": [
      "Frank Capra"
    ],
    "genre": [
      "Comedy",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYzJmMWE5NjAtNWMyZS00NmFiLWIwMDgtZDE2NzczYWFhNzIzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYzJmMWE5NjAtNWMyZS00NmFiLWIwMDgtZDE2NzczYWFhNzIzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0025316/",
    "name": "It Happened One Night",
    "rating": 8.1,
    "year": 1934
  },
  {
    "actors": [
      "François Cluzet",
      "Omar Sy",
      "Anne Le Ny"
    ],
    "desc": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    "directors": [
      "Olivier Nakache",
      "Éric Toledano"
    ],
    "genre": [
      "Biography",
      "Comedy",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1675434/",
    "name": "Intouchables",
    "rating": 8.5,
    "year": 2011
  },
  {
    "actors": [
      "Emile Hirsch",
      "Vince Vaughn",
      "Catherine Keener"
    ],
    "desc": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way...",
    "directors": [
      "Sean Penn"
    ],
    "genre": [
      "Adventure",
      "Biography",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNjQ0ODlhMWUtNmUwMS00YjExLWI4MjQtNjVmMmE2Y2E0MGRmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNjQ0ODlhMWUtNmUwMS00YjExLWI4MjQtNjVmMmE2Y2E0MGRmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0758758/",
    "name": "Into the Wild",
    "rating": 8.1,
    "year": 2007
  },
  {
    "actors": [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain"
    ],
    "desc": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity\u0026apos;s survival.",
    "directors": [
      "Christopher Nolan"
    ],
    "genre": [
      "Adventure",
      "Drama",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0816692/",
    "name": "Interstellar",
    "rating": 8.6,
    "year": 2014
  },
  {
    "actors": [
      "Amy Poehler",
      "Bill Hader",
      "Lewis Black"
    ],
    "desc": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
    "directors": [
      "Pete Docter",
      "Ronnie Del Carmen"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt2096673/",
    "name": "Inside Out",
    "rating": 8.2,
    "year": 2015
  },
  {
    "actors": [
      "Brad Pitt",
      "Diane Kruger",
      "Eli Roth"
    ],
    "desc": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner\u0026apos;s vengeful plans for the same.",
    "directors": [
      "Quentin Tarantino"
    ],
    "genre": [
      "Adventure",
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0361748/",
    "name": "Inglourious Basterds",
    "rating": 8.3,
    "year": 2009
  },
  {
    "actors": [
      "Harrison Ford",
      "Sean Connery",
      "Alison Doody"
    ],
    "desc": "In 1938, after his father Professor Henry Jones, Sr. goes missing while pursuing the Holy Grail, Professor Henry \u0026quot;Indiana\u0026quot; Jones, Jr. finds himself up against Adolf Hitler\u0026apos;s Nazis again to stop them from obtaining its powers.",
    "directors": [
      "Steven Spielberg"
    ],
    "genre": [
      "Action",
      "Adventure"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BY2Q0ODg4ZmItNDZiYi00ZWY5LTg2NzctNmYwZjA5OThmNzE1XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BY2Q0ODg4ZmItNDZiYi00ZWY5LTg2NzctNmYwZjA5OThmNzE1XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0097576/",
    "name": "Indiana Jones and the Last Crusade",
    "rating": 8.2,
    "year": 1989
  },
  {
    "actors": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page"
    ],
    "desc": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    "directors": [
      "Christopher Nolan"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1375666/",
    "name": "Inception",
    "rating": 8.8,
    "year": 2010
  },
  {
    "actors": [
      "Lubna Azabal",
      "Mélissa Désormeaux-Poulin",
      "Maxim Gaudette"
    ],
    "desc": "Twins journey to the Middle East to discover their family history and fulfill their mother\u0026apos;s last wishes.",
    "directors": [
      "Denis Villeneuve"
    ],
    "genre": [
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMWE3MGYzZjktY2Q5Mi00Y2NiLWIyYWUtMmIyNzA3YmZlMGFhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMWE3MGYzZjktY2Q5Mi00Y2NiLWIyYWUtMmIyNzA3YmZlMGFhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1255953/",
    "name": "Incendies",
    "rating": 8.3,
    "year": 2011
  },
  {
    "actors": [
      "Daniel Day-Lewis",
      "Pete Postlethwaite",
      "Alison Crosbie"
    ],
    "desc": "A man\u0026apos;s coerced confession to an I.R.A. bombing he did not commit results in the imprisonment of his father as well. An English lawyer fights to free them.",
    "directors": [
      "Jim Sheridan"
    ],
    "genre": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMmYyOTgwYWItYmU3Ny00M2E2LTk0NWMtMDVlNmQ0MWZiMTMxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMmYyOTgwYWItYmU3Ny00M2E2LTk0NWMtMDVlNmQ0MWZiMTMxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0107207/",
    "name": "In the Name of the Father",
    "rating": 8.1,
    "year": 1994
  },
  {
    "actors": [
      "Clint Eastwood",
      "Eli Wallach",
      "Lee Van Cleef"
    ],
    "desc": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    "directors": [
      "Sergio Leone"
    ],
    "genre": [
      "Adventure",
      "Western"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0060196/",
    "name": "Il buono, il brutto, il cattivo",
    "rating": 8.8,
    "year": 1967
  },
  {
    "actors": [
      "Takashi Shimura",
      "Nobuo Kaneko",
      "Shin\u0026apos;ichi Himori"
    ],
    "desc": "A bureaucrat tries to find meaning in his life after he discovers he has terminal cancer.",
    "directors": [
      "Akira Kurosawa"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZTcyYmQ2NDMtNWI1NS00MTNiLTk0NDctNWMwNWExYTNlYzk3XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZTcyYmQ2NDMtNWI1NS00MTNiLTk0NDctNWMwNWExYTNlYzk3XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0044741/",
    "name": "Ikiru",
    "rating": 8.3,
    "year": 1956
  },
  {
    "actors": [
      "Aleksey Kravchenko",
      "Olga Mironova",
      "Liubomiras Laucevicius"
    ],
    "desc": "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
    "directors": [
      "Elem Klimov"
    ],
    "genre": [
      "Drama",
      "Thriller",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzU3OTI1MjItYTJiZC00NDI0LWFlNGYtOTQ1OTVhNDgwM2U3XkEyXkFqcGdeQXVyNTc2MDU0NDE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzU3OTI1MjItYTJiZC00NDI0LWFlNGYtOTQ1OTVhNDgwM2U3XkEyXkFqcGdeQXVyNTc2MDU0NDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0091251/",
    "name": "Idi i smotri",
    "rating": 8.4,
    "year": 1985
  },
  {
    "actors": [
      "Jay Baruchel",
      "Gerard Butler",
      "Christopher Mintz-Plasse"
    ],
    "desc": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
    "directors": [
      "Dean DeBlois",
      "Chris Sanders"
    ],
    "genre": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0892769/",
    "name": "How to Train Your Dragon",
    "rating": 8.1,
    "year": 2010
  },
  {
    "actors": [
      "Don Cheadle",
      "Sophie Okonedo",
      "Joaquin Phoenix"
    ],
    "desc": "Paul Rusesabagina, a hotel manager, houses over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda, Africa.",
    "directors": [
      "Terry George"
    ],
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZGJjYmIzZmQtNWE4Yy00ZGVmLWJkZGEtMzUzNmQ4ZWFlMjRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZGJjYmIzZmQtNWE4Yy00ZGVmLWJkZGEtMzUzNmQ4ZWFlMjRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0395169/",
    "name": "Hotel Rwanda",
    "rating": 8.1,
    "year": 2005
  },
  {
    "actors": [
      "Tsutomu Tatsumi",
      "Ayano Shiraishi",
      "Akemi Yamaguchi"
    ],
    "desc": "A young boy and his little sister struggle to survive in Japan during World War II.",
    "directors": [
      "Isao Takahata"
    ],
    "genre": [
      "Animation",
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0095327/",
    "name": "Hotaru no haka",
    "rating": 8.5,
    "year": 1989
  },
  {
    "actors": [
      "Al Pacino",
      "Robert De Niro",
      "Val Kilmer"
    ],
    "desc": "A group of high-end professional thieves start to feel the heat from the LAPD when they unknowingly leave a clue at their latest heist.",
    "directors": [
      "Michael Mann"
    ],
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYjZjNTJlZGUtZTE1Ny00ZDc4LTgwYjUtMzk0NDgwYzZjYTk1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYjZjNTJlZGUtZTE1Ny00ZDc4LTgwYjUtMzk0NDgwYzZjYTk1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0113277/",
    "name": "Heat",
    "rating": 8.3,
    "year": 1995
  },
  {
    "actors": [
      "Chieko Baishô",
      "Takuya Kimura",
      "Tatsuya Gashûin"
    ],
    "desc": "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    "directors": [
      "Hayao Miyazaki"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0347149/",
    "name": "Hauru no ugoku shiro",
    "rating": 8.2,
    "year": 2005
  },
  {
    "actors": [
      "Daniel Radcliffe",
      "Emma Watson",
      "Rupert Grint"
    ],
    "desc": "Harry, Ron, and Hermione search for Voldemort\u0026apos;s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    "directors": [
      "David Yates"
    ],
    "genre": [
      "Adventure",
      "Family",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1201607/",
    "name": "Harry Potter and the Deathly Hallows - Part 2",
    "rating": 8.1,
    "year": 2011
  },
  {
    "actors": [
      "Lin-Manuel Miranda",
      "Phillipa Soo",
      "Leslie Odom Jr."
    ],
    "desc": "The real life of one of America\u0026apos;s foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast.",
    "directors": [
      "Thomas Kail"
    ],
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt8503618/",
    "name": "Hamilton",
    "rating": 8.4,
    "year": 2020
  },
  {
    "actors": [
      "Andrew Garfield",
      "Sam Worthington",
      "Luke Bracey"
    ],
    "desc": "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
    "directors": [
      "Mel Gibson"
    ],
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt2119532/",
    "name": "Hacksaw Ridge",
    "rating": 8.1,
    "year": 2016
  },
  {
    "actors": [
      "Richard Gere",
      "Joan Allen",
      "Cary-Hiroyuki Tagawa"
    ],
    "desc": "A college professor bonds with an abandoned dog he takes into his home.",
    "directors": [
      "Lasse Hallström"
    ],
    "genre": [
      "Biography",
      "Drama",
      "Family"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzE4NDg5OWMtMzg3NC00ZDRjLTllMDMtZTRjNWZmNjBmMGZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzE4NDg5OWMtMzg3NC00ZDRjLTllMDMtZTRjNWZmNjBmMGZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1028532/",
    "name": "Hachi: A Dog\u0026apos;s Tale",
    "rating": 8.1,
    "year": 2010
  },
  {
    "actors": [
      "Bill Murray",
      "Andie MacDowell",
      "Chris Elliott"
    ],
    "desc": "A narcissistic, self-centered weatherman finds himself in a time loop on Groundhog Day, and the day keeps repeating until he gets it right.",
    "directors": [
      "Harold Ramis"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0107048/",
    "name": "Groundhog Day",
    "rating": 8.1,
    "year": 1993
  },
  {
    "actors": [
      "Viggo Mortensen",
      "Mahershala Ali",
      "Linda Cardellini"
    ],
    "desc": "A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.",
    "directors": [
      "Peter Farrelly"
    ],
    "genre": [
      "Biography",
      "Comedy",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt6966692/",
    "name": "Green Book",
    "rating": 8.2,
    "year": 2018
  },
  {
    "actors": [
      "Clint Eastwood",
      "Bee Vang",
      "Christopher Carley"
    ],
    "desc": "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, Thao Lor, a Hmong teenager who tried to steal Kowalski\u0026apos;s prized possession: a 1972 Gran Torino.",
    "directors": [
      "Clint Eastwood"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1205489/",
    "name": "Gran Torino",
    "rating": 8.1,
    "year": 2009
  },
  {
    "actors": [
      "Robert De Niro",
      "Ray Liotta",
      "Joe Pesci"
    ],
    "desc": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    "directors": [
      "Martin Scorsese"
    ],
    "genre": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0099685/",
    "name": "Goodfellas",
    "rating": 8.7,
    "year": 1990
  },
  {
    "actors": [
      "Robin Williams",
      "Matt Damon",
      "Ben Affleck"
    ],
    "desc": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    "directors": [
      "Gus Van Sant"
    ],
    "genre": [
      "Drama",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0119217/",
    "name": "Good Will Hunting",
    "rating": 8.3,
    "year": 1998
  },
  {
    "actors": [
      "Clark Gable",
      "Vivien Leigh",
      "Thomas Mitchell"
    ],
    "desc": "The manipulative daughter of a Georgia plantation owner conducts a turbulent romance with a roguish profiteer during the American Civil War and Reconstruction periods.",
    "directors": [
      "Victor Fleming",
      "George Cukor",
      "Sam Wood"
    ],
    "genre": [
      "Drama",
      "Romance",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0031381/",
    "name": "Gone with the Wind",
    "rating": 8.2,
    "year": 1940
  },
  {
    "actors": [
      "Ben Affleck",
      "Rosamund Pike",
      "Neil Patrick Harris"
    ],
    "desc": "With his wife\u0026apos;s disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it\u0026apos;s suspected that he may not be innocent.",
    "directors": [
      "David Fincher"
    ],
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt2267998/",
    "name": "Gone Girl",
    "rating": 8.1,
    "year": 2014
  },
  {
    "actors": [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen"
    ],
    "desc": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "directors": [
      "Ridley Scott"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0172495/",
    "name": "Gladiator",
    "rating": 8.5,
    "year": 2000
  },
  {
    "actors": [
      "Song Kang-ho",
      "Lee Sun-kyun",
      "Cho Yeo-jeong"
    ],
    "desc": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "directors": [
      "Bong Joon Ho"
    ],
    "genre": [
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt6751668/",
    "name": "Gisaengchung",
    "rating": 8.5,
    "year": 2019
  },
  {
    "actors": [
      "Ben Kingsley",
      "John Gielgud",
      "Rohini Hattangadi"
    ],
    "desc": "The life of the lawyer who became the famed leader of the Indian revolts against the British rule through his philosophy of nonviolent protest.",
    "directors": [
      "Richard Attenborough"
    ],
    "genre": [
      "Biography",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOGVmZGU2M2EtZTVjYy00OWU2LWI0YjEtZjQ4YjNmODhmMzhkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOGVmZGU2M2EtZTVjYy00OWU2LWI0YjEtZjQ4YjNmODhmMzhkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0083987/",
    "name": "Gandhi",
    "rating": 8.1,
    "year": 1983
  },
  {
    "actors": [
      "Matthew Modine",
      "R. Lee Ermey",
      "Vincent D\u0026apos;Onofrio"
    ],
    "desc": "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
    "directors": [
      "Stanley Kubrick"
    ],
    "genre": [
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0093058/",
    "name": "Full Metal Jacket",
    "rating": 8.3,
    "year": 1987
  },
  {
    "actors": [
      "Tom Hanks",
      "Robin Wright",
      "Gary Sinise"
    ],
    "desc": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood swe...",
    "directors": [
      "Robert Zemeckis"
    ],
    "genre": [
      "Drama",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0109830/",
    "name": "Forrest Gump",
    "rating": 8.8,
    "year": 1994
  },
  {
    "actors": [
      "Matt Damon",
      "Christian Bale",
      "Jon Bernthal"
    ],
    "desc": "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
    "directors": [
      "James Mangold"
    ],
    "genre": [
      "Action",
      "Biography",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1950186/",
    "name": "Ford v Ferrari",
    "rating": 8.1,
    "year": 2019
  },
  {
    "actors": [
      "Albert Brooks",
      "Ellen DeGeneres",
      "Alexander Gould"
    ],
    "desc": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    "directors": [
      "Andrew Stanton",
      "Lee Unkrich"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0266543/",
    "name": "Finding Nemo",
    "rating": 8.2,
    "year": 2003
  },
  {
    "actors": [
      "Brad Pitt",
      "Edward Norton",
      "Meat Loaf"
    ],
    "desc": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    "directors": [
      "David Fincher"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0137523/",
    "name": "Fight Club",
    "rating": 8.8,
    "year": 1999
  },
  {
    "actors": [
      "William H. Macy",
      "Frances McDormand",
      "Steve Buscemi"
    ],
    "desc": "Minnesota car salesman Jerry Lundegaard\u0026apos;s inept crime falls apart due to his and his henchmen\u0026apos;s bungling and the persistent police work of the quite pregnant Marge Gunderson.",
    "directors": [
      "Joel Coen",
      "Ethan Coen"
    ],
    "genre": [
      "Crime",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0116282/",
    "name": "Fargo",
    "rating": 8.1,
    "year": 1996
  },
  {
    "actors": [
      "Michelle Yeoh",
      "Stephanie Hsu",
      "Jamie Lee Curtis"
    ],
    "desc": "An aging Chinese immigrant is swept up in an insane adventure, in which she alone can save the world by exploring other universes connecting with the lives she could have led.",
    "directors": [
      "Dan Kwan",
      "Daniel Scheinert"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt6710474/",
    "name": "Everything Everywhere All at Once",
    "rating": 8.1,
    "year": 2022
  },
  {
    "actors": [
      "Jim Carrey",
      "Kate Winslet",
      "Tom Wilkinson"
    ],
    "desc": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories for ever.",
    "directors": [
      "Michel Gondry"
    ],
    "genre": [
      "Drama",
      "Romance",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0338013/",
    "name": "Eternal Sunshine of the Spotless Mind",
    "rating": 8.3,
    "year": 2004
  },
  {
    "actors": [
      "Ricardo Darín",
      "Soledad Villamil",
      "Pablo Rago"
    ],
    "desc": "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
    "directors": [
      "Juan José Campanella"
    ],
    "genre": [
      "Drama",
      "Mystery",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BY2FhZGI5M2QtZWFiZS00NjkwLWE4NWQtMzg3ZDZjNjdkYTJiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BY2FhZGI5M2QtZWFiZS00NjkwLWE4NWQtMzg3ZDZjNjdkYTJiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1305806/",
    "name": "El secreto de sus ojos",
    "rating": 8.2,
    "year": 2010
  },
  {
    "actors": [
      "Ivana Baquero",
      "Ariadna Gil",
      "Sergi López"
    ],
    "desc": "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    "directors": [
      "Guillermo del Toro"
    ],
    "genre": [
      "Drama",
      "Fantasy",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0457430/",
    "name": "El laberinto del fauno",
    "rating": 8.2,
    "year": 2007
  },
  {
    "actors": [
      "Peter Sellers",
      "George C. Scott",
      "Sterling Hayden"
    ],
    "desc": "An insane American general orders a bombing attack on the Soviet Union, triggering a path to nuclear holocaust that a war room full of politicians and generals frantically tries to stop.",
    "directors": [
      "Stanley Kubrick"
    ],
    "genre": [
      "Comedy",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0057012/",
    "name": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "rating": 8.4,
    "year": 1964
  },
  {
    "actors": [
      "Fred MacMurray",
      "Barbara Stanwyck",
      "Edward G. Robinson"
    ],
    "desc": "A Los Angeles insurance representative lets an alluring housewife seduce him into a scheme of insurance fraud and murder that arouses the suspicion of his colleague, an insurance investigator.",
    "directors": [
      "Billy Wilder"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Film-Noir"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTdlNjgyZGUtOTczYi00MDdhLTljZmMtYTEwZmRiOWFkYjRhXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTdlNjgyZGUtOTczYi00MDdhLTljZmMtYTEwZmRiOWFkYjRhXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0036775/",
    "name": "Double Indemnity",
    "rating": 8.3,
    "year": 1944
  },
  {
    "actors": [
      "Jamie Foxx",
      "Christoph Waltz",
      "Leonardo DiCaprio"
    ],
    "desc": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
    "directors": [
      "Quentin Tarantino"
    ],
    "genre": [
      "Drama",
      "Western"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1853728/",
    "name": "Django Unchained",
    "rating": 8.4,
    "year": 2012
  },
  {
    "actors": [
      "Bruce Willis",
      "Alan Rickman",
      "Bonnie Bedelia"
    ],
    "desc": "A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    "directors": [
      "John McTiernan"
    ],
    "genre": [
      "Action",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0095016/",
    "name": "Die Hard",
    "rating": 8.2,
    "year": 1988
  },
  {
    "actors": [
      "Ray Milland",
      "Grace Kelly",
      "Robert Cummings"
    ],
    "desc": "A former tennis star arranges the murder of his adulterous wife.",
    "directors": [
      "Alfred Hitchcock"
    ],
    "genre": [
      "Crime",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOWIwODIxYWItZDI4MS00YzhhLWE3MmYtMzlhZDIwOTMzZmE5L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOWIwODIxYWItZDI4MS00YzhhLWE3MmYtMzlhZDIwOTMzZmE5L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0046912/",
    "name": "Dial M for Murder",
    "rating": 8.2,
    "year": 1954
  },
  {
    "actors": [
      "Max von Sydow",
      "Gunnar Björnstrand",
      "Bengt Ekerot"
    ],
    "desc": "A knight returning to Sweden after the Crusades seeks answers about life, death, and the existence of God as he plays chess against the Grim Reaper during the Black Plague.",
    "directors": [
      "Ingmar Bergman"
    ],
    "genre": [
      "Drama",
      "Fantasy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOWM3MmE0OGYtOGVlNC00OWE1LTk5ZTAtYmUwMDIwM2ZlNWJiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOWM3MmE0OGYtOGVlNC00OWE1LTk5ZTAtYmUwMDIwM2ZlNWJiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0050976/",
    "name": "Det sjunde inseglet",
    "rating": 8.1,
    "year": 1958
  },
  {
    "actors": [
      "Maksim Munzuk",
      "Yuriy Solomin",
      "Mikhail Bychkov"
    ],
    "desc": "The Russian army sends an explorer on an expedition to the snowy Siberian wilderness where he makes friends with a seasoned local hunter.",
    "directors": [
      "Akira Kurosawa"
    ],
    "genre": [
      "Adventure",
      "Biography",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYWY0OWJlZTgtMWUzNy00MGJhLTk5YzQtNmY5MDEwOTIxNjMyXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYWY0OWJlZTgtMWUzNy00MGJhLTk5YzQtNmY5MDEwOTIxNjMyXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0071411/",
    "name": "Dersu Uzala",
    "rating": 8.2,
    "year": 1977
  },
  {
    "actors": [
      "Bruno Ganz",
      "Alexandra Maria Lara",
      "Ulrich Matthes"
    ],
    "desc": "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator\u0026apos;s final days in his Berlin bunker at the end of WWII.",
    "directors": [
      "Oliver Hirschbiegel"
    ],
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTU0NTU5NTAyMl5BMl5BanBnXkFtZTYwNzYwMDg2._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTU0NTU5NTAyMl5BMl5BanBnXkFtZTYwNzYwMDg2._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0363163/",
    "name": "Der Untergang",
    "rating": 8.2,
    "year": 2005
  },
  {
    "actors": [
      "Robin Williams",
      "Robert Sean Leonard",
      "Ethan Hawke"
    ],
    "desc": "Maverick teacher John Keating uses poetry to embolden his boarding school students to new heights of self-expression.",
    "directors": [
      "Peter Weir"
    ],
    "genre": [
      "Comedy",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0097165/",
    "name": "Dead Poets Society",
    "rating": 8.1,
    "year": 1989
  },
  {
    "actors": [
      "Ulrich Mühe",
      "Martina Gedeck",
      "Sebastian Koch"
    ],
    "desc": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
    "directors": [
      "Florian Henckel von Donnersmarck"
    ],
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0405094/",
    "name": "Das Leben der Anderen",
    "rating": 8.4,
    "year": 2007
  },
  {
    "actors": [
      "Jürgen Prochnow",
      "Herbert Grönemeyer",
      "Klaus Wennemann"
    ],
    "desc": "A German U-boat stalks the frigid waters of the North Atlantic as its young crew experience the sheer terror and claustrophobic life of a submariner in World War II.",
    "directors": [
      "Wolfgang Petersen"
    ],
    "genre": [
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0082096/",
    "name": "Das Boot",
    "rating": 8.4,
    "year": 1982
  },
  {
    "actors": [
      "Aamir Khan",
      "Sakshi Tanwar",
      "Fatima Sana Shaikh"
    ],
    "desc": "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    "directors": [
      "Nitesh Tiwari"
    ],
    "genre": [
      "Action",
      "Biography",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt5074352/",
    "name": "Dangal",
    "rating": 8.3,
    "year": 2016
  },
  {
    "actors": [
      "Paul Newman",
      "George Kennedy",
      "Strother Martin"
    ],
    "desc": "A laid back Southern man is sentenced to two years in a rural prison, but refuses to conform.",
    "directors": [
      "Stuart Rosenberg"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNjcwNTQ3Y2EtMjdmZi00ODBhLWFhNzQtOTc3MWU5NTZlMDViXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNjcwNTQ3Y2EtMjdmZi00ODBhLWFhNzQtOTc3MWU5NTZlMDViXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0061512/",
    "name": "Cool Hand Luke",
    "rating": 8.1,
    "year": 1967
  },
  {
    "actors": [
      "Anthony Gonzalez",
      "Gael García Bernal",
      "Benjamin Bratt"
    ],
    "desc": "Aspiring musician Miguel, confronted with his family\u0026apos;s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    "directors": [
      "Lee Unkrich",
      "Adrian Molina"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt2380307/",
    "name": "Coco",
    "rating": 8.4,
    "year": 2017
  },
  {
    "actors": [
      "Charles Chaplin",
      "Virginia Cherrill",
      "Florence Lee"
    ],
    "desc": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
    "directors": [
      "Charles Chaplin"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYzE1NjdhYjAtNzU5NS00ZjhiLWE4YjUtOGVjMjEzZjJmMDdlXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYzE1NjdhYjAtNzU5NS00ZjhiLWE4YjUtOGVjMjEzZjJmMDdlXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0021749/",
    "name": "City Lights",
    "rating": 8.5,
    "year": 1931
  },
  {
    "actors": [
      "Orson Welles",
      "Joseph Cotten",
      "Dorothy Comingore"
    ],
    "desc": "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: \u0026apos;Rosebud.\u0026apos;",
    "directors": [
      "Orson Welles"
    ],
    "genre": [
      "Drama",
      "Mystery"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0033467/",
    "name": "Citizen Kane",
    "rating": 8.3,
    "year": 1941
  },
  {
    "actors": [
      "Alexandre Rodrigues",
      "Leandro Firmino",
      "Matheus Nachtergaele"
    ],
    "desc": "In the slums of Rio, two kids\u0026apos; paths diverge as one struggles to become a photographer and the other a kingpin.",
    "directors": [
      "Fernando Meirelles",
      "Kátia Lund"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0317248/",
    "name": "Cidade de Deus",
    "rating": 8.6,
    "year": 2004
  },
  {
    "actors": [
      "Jack Nicholson",
      "Faye Dunaway",
      "John Huston"
    ],
    "desc": "A private detective hired to expose an adulterer in 1930s Los Angeles finds himself caught up in a web of deceit, corruption, and murder.",
    "directors": [
      "Roman Polanski"
    ],
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjJkMDZhYzItZTFhMi00ZGI4LThlNTAtZDNlYmEwNjFkNDYzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjJkMDZhYzItZTFhMi00ZGI4LThlNTAtZDNlYmEwNjFkNDYzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0071315/",
    "name": "Chinatown",
    "rating": 8.2,
    "year": 1974
  },
  {
    "actors": [
      "Leonardo DiCaprio",
      "Tom Hanks",
      "Christopher Walken"
    ],
    "desc": "Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
    "directors": [
      "Steven Spielberg"
    ],
    "genre": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0264464/",
    "name": "Catch Me If You Can",
    "rating": 8.1,
    "year": 2002
  },
  {
    "actors": [
      "Robert De Niro",
      "Sharon Stone",
      "Joe Pesci"
    ],
    "desc": "A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive compete against each other over a gambling empire, and over a fast-living and fast-loving socialite.",
    "directors": [
      "Martin Scorsese"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0112641/",
    "name": "Casino",
    "rating": 8.2,
    "year": 1995
  },
  {
    "actors": [
      "Humphrey Bogart",
      "Ingrid Bergman",
      "Paul Henreid"
    ],
    "desc": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    "directors": [
      "Michael Curtiz"
    ],
    "genre": [
      "Drama",
      "Romance",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0034583/",
    "name": "Casablanca",
    "rating": 8.5,
    "year": 1943
  },
  {
    "actors": [
      "Zain Al Rafeea",
      "Yordanos Shiferaw",
      "Boluwatife Treasure Bankole"
    ],
    "desc": "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
    "directors": [
      "Nadine Labaki"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt8267604/",
    "name": "Capharnaüm",
    "rating": 8.4,
    "year": 2018
  },
  {
    "actors": [
      "Henry Fonda",
      "Charles Bronson",
      "Claudia Cardinale"
    ],
    "desc": "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    "directors": [
      "Sergio Leone"
    ],
    "genre": [
      "Western"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0064116/",
    "name": "C\u0026apos;era una volta il West",
    "rating": 8.5,
    "year": 1969
  },
  {
    "actors": [
      "Mel Gibson",
      "Sophie Marceau",
      "Patrick McGoohan"
    ],
    "desc": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    "directors": [
      "Mel Gibson"
    ],
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0112573/",
    "name": "Braveheart",
    "rating": 8.4,
    "year": 1995
  },
  {
    "actors": [
      "Harrison Ford",
      "Rutger Hauer",
      "Sean Young"
    ],
    "desc": "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    "directors": [
      "Ridley Scott"
    ],
    "genre": [
      "Action",
      "Drama",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0083658/",
    "name": "Blade Runner",
    "rating": 8.1,
    "year": 1982
  },
  {
    "actors": [
      "Charlton Heston",
      "Jack Hawkins",
      "Stephen Boyd"
    ],
    "desc": "After a Jewish prince is betrayed and sent into slavery by a Roman friend in 1st-century Jerusalem, he regains his freedom and comes back for revenge.",
    "directors": [
      "William Wyler"
    ],
    "genre": [
      "Adventure",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNjgxY2JiZDYtZmMwOC00ZmJjLWJmODUtMTNmNWNmYWI5ODkwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNjgxY2JiZDYtZmMwOC00ZmJjLWJmODUtMTNmNWNmYWI5ODkwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0052618/",
    "name": "Ben-Hur",
    "rating": 8.1,
    "year": 1959
  },
  {
    "actors": [
      "Ethan Hawke",
      "Julie Delpy",
      "Vernon Dobtcheff"
    ],
    "desc": "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse\u0026apos;s book tour.",
    "directors": [
      "Richard Linklater"
    ],
    "genre": [
      "Drama",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0381681/",
    "name": "Before Sunset",
    "rating": 8.1,
    "year": 2004
  },
  {
    "actors": [
      "Ethan Hawke",
      "Julie Delpy",
      "Andrea Eckert"
    ],
    "desc": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
    "directors": [
      "Richard Linklater"
    ],
    "genre": [
      "Drama",
      "Romance"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0112471/",
    "name": "Before Sunrise",
    "rating": 8.1,
    "year": 1995
  },
  {
    "actors": [
      "Christian Bale",
      "Michael Caine",
      "Ken Watanabe"
    ],
    "desc": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    "directors": [
      "Christopher Nolan"
    ],
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0372784/",
    "name": "Batman Begins",
    "rating": 8.2,
    "year": 2005
  },
  {
    "actors": [
      "Ryan O\u0026apos;Neal",
      "Marisa Berenson",
      "Patrick Magee"
    ],
    "desc": "An Irish rogue wins the heart of a rich widow and assumes her dead husband\u0026apos;s aristocratic position in 18th-century England.",
    "directors": [
      "Stanley Kubrick"
    ],
    "genre": [
      "Adventure",
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0072684/",
    "name": "Barry Lyndon",
    "rating": 8.1,
    "year": 1975
  },
  {
    "actors": [
      "Michael J. Fox",
      "Christopher Lloyd",
      "Lea Thompson"
    ],
    "desc": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    "directors": [
      "Robert Zemeckis"
    ],
    "genre": [
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0088763/",
    "name": "Back to the Future",
    "rating": 8.5,
    "year": 1985
  },
  {
    "actors": [
      "Mohammad Amir Naji",
      "Amir Farrokh Hashemian",
      "Bahare Seddiqi"
    ],
    "desc": "After a boy loses his sister\u0026apos;s pair of shoes, he goes on a series of adventures in order to find them. When he can\u0026apos;t, he tries a new way to \u0026quot;win\u0026quot; a new pair.",
    "directors": [
      "Majid Majidi"
    ],
    "genre": [
      "Drama",
      "Family",
      "Sport"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZTYwZWQ4ZTQtZWU0MS00N2YwLWEzMDItZWFkZWY0MWVjODVhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZTYwZWQ4ZTQtZWU0MS00N2YwLWEzMDItZWFkZWY0MWVjODVhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0118849/",
    "name": "Bacheha-Ye aseman",
    "rating": 8.2,
    "year": 1999
  },
  {
    "actors": [
      "Çetin Tekindor",
      "Fikret Kuskan",
      "Hümeyra"
    ],
    "desc": "The family of a left-wing journalist is torn apart after the military coup of Turkey in 1980.",
    "directors": [
      "Çagan Irmak"
    ],
    "genre": [
      "Drama",
      "Family"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNjAzMzEwYzctNjc1MC00Nzg5LWFmMGItMTgzYmMyNTY2OTQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNjAzMzEwYzctNjc1MC00Nzg5LWFmMGItMTgzYmMyNTY2OTQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0476735/",
    "name": "Babam ve Oglum",
    "rating": 8.2,
    "year": 2005
  },
  {
    "actors": [
      "Robert Downey Jr.",
      "Chris Hemsworth",
      "Mark Ruffalo"
    ],
    "desc": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    "directors": [
      "Anthony Russo",
      "Joe Russo"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt4154756/",
    "name": "Avengers: Infinity War",
    "rating": 8.4,
    "year": 2018
  },
  {
    "actors": [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo"
    ],
    "desc": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\u0026apos; actions and restore balance to the universe.",
    "directors": [
      "Anthony Russo",
      "Joe Russo"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt4154796/",
    "name": "Avengers: Endgame",
    "rating": 8.4,
    "year": 2019
  },
  {
    "actors": [
      "Martin Sheen",
      "Marlon Brando",
      "Robert Duvall"
    ],
    "desc": "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
    "directors": [
      "Francis Ford Coppola"
    ],
    "genre": [
      "Drama",
      "Mystery",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0078788/",
    "name": "Apocalypse Now",
    "rating": 8.5,
    "year": 1979
  },
  {
    "actors": [
      "Emilio Echevarría",
      "Gael García Bernal",
      "Goya Toledo"
    ],
    "desc": "A horrific car accident connects three stories, each involving characters dealing with loss, regret, and life\u0026apos;s harsh realities, all in the name of love.",
    "directors": [
      "Alejandro G. Iñárritu"
    ],
    "genre": [
      "Drama",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZjUxNmEwOGItMTBmYi00MWQ1LWExY2MtNDUxMjI0OWM4M2NiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZjUxNmEwOGItMTBmYi00MWQ1LWExY2MtNDUxMjI0OWM4M2NiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0245712/",
    "name": "Amores perros",
    "rating": 8.1,
    "year": 2001
  },
  {
    "actors": [
      "Edward Norton",
      "Edward Furlong",
      "Beverly D\u0026apos;Angelo"
    ],
    "desc": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    "directors": [
      "Tony Kaye"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0120586/",
    "name": "American History X",
    "rating": 8.5,
    "year": 1998
  },
  {
    "actors": [
      "Kevin Spacey",
      "Annette Bening",
      "Thora Birch"
    ],
    "desc": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter\u0026apos;s best friend.",
    "directors": [
      "Sam Mendes"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0169547/",
    "name": "American Beauty",
    "rating": 8.4,
    "year": 1999
  },
  {
    "actors": [
      "F. Murray Abraham",
      "Tom Hulce",
      "Elizabeth Berridge"
    ],
    "desc": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was deeply jealous of Mozart\u0026apos;s talent and claimed to have murdered him.",
    "directors": [
      "Milos Forman"
    ],
    "genre": [
      "Biography",
      "Drama",
      "Music"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0086879/",
    "name": "Amadeus",
    "rating": 8.4,
    "year": 1984
  },
  {
    "actors": [
      "Bette Davis",
      "Anne Baxter",
      "George Sanders"
    ],
    "desc": "A seemingly timid but secretly ruthless ingénue insinuates herself into the lives of an aging Broadway star and her circle of theater friends.",
    "directors": [
      "Joseph L. Mankiewicz"
    ],
    "genre": [
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0042192/",
    "name": "All About Eve",
    "rating": 8.2,
    "year": 1950
  },
  {
    "actors": [
      "Sigourney Weaver",
      "Michael Biehn",
      "Carrie Henn"
    ],
    "desc": "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
    "directors": [
      "James Cameron"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0090605/",
    "name": "Aliens",
    "rating": 8.4,
    "year": 1986
  },
  {
    "actors": [
      "Sigourney Weaver",
      "Tom Skerritt",
      "John Hurt"
    ],
    "desc": "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
    "directors": [
      "Ridley Scott"
    ],
    "genre": [
      "Horror",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0078748/",
    "name": "Alien",
    "rating": 8.5,
    "year": 1979
  },
  {
    "actors": [
      "Scott Weinger",
      "Robin Williams",
      "Linda Larkin"
    ],
    "desc": "A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
    "directors": [
      "Ron Clements",
      "John Musker"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0103639/",
    "name": "Aladdin",
    "rating": 8.0,
    "year": 1992
  },
  {
    "actors": [
      "Kim Min-hee",
      "Ha Jung-woo",
      "Cho Jin-woong"
    ],
    "desc": "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.",
    "directors": [
      "Park Chan-wook"
    ],
    "genre": [
      "Drama",
      "Romance",
      "Thriller"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt4016934/",
    "name": "Ah-ga-ssi",
    "rating": 8.1,
    "year": 2016
  },
  {
    "actors": [
      "Malcolm McDowell",
      "Patrick Magee",
      "Michael Bates"
    ],
    "desc": "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
    "directors": [
      "Stanley Kubrick"
    ],
    "genre": [
      "Crime",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0066921/",
    "name": "A Clockwork Orange",
    "rating": 8.3,
    "year": 1972
  },
  {
    "actors": [
      "Russell Crowe",
      "Ed Harris",
      "Jennifer Connelly"
    ],
    "desc": "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
    "directors": [
      "Ron Howard"
    ],
    "genre": [
      "Biography",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0268978/",
    "name": "A Beautiful Mind",
    "rating": 8.2,
    "year": 2002
  },
  {
    "actors": [
      "Aamir Khan",
      "Madhavan",
      "Mona Singh"
    ],
    "desc": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \u0026quot;idiots\u0026quot;.",
    "directors": [
      "Rajkumar Hirani"
    ],
    "genre": [
      "Comedy",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt1187043/",
    "name": "3 Idiots",
    "rating": 8.4,
    "year": 2009
  },
  {
    "actors": [
      "Keir Dullea",
      "Gary Lockwood",
      "William Sylvester"
    ],
    "desc": "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.",
    "directors": [
      "Stanley Kubrick"
    ],
    "genre": [
      "Adventure",
      "Sci-Fi"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0062622/",
    "name": "2001: A Space Odyssey",
    "rating": 8.3,
    "year": 1970
  },
  {
    "actors": [
      "Dean-Charles Chapman",
      "George MacKay",
      "Daniel Mays"
    ],
    "desc": "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    "directors": [
      "Sam Mendes"
    ],
    "genre": [
      "Action",
      "Drama",
      "War"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt8579674/",
    "name": "1917",
    "rating": 8.2,
    "year": 2020
  },
  {
    "actors": [
      "Chiwetel Ejiofor",
      "Michael Kenneth Williams",
      "Michael Fassbender"
    ],
    "desc": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
    "directors": [
      "Steve McQueen"
    ],
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt2024544/",
    "name": "12 Years a Slave",
    "rating": 8.1,
    "year": 2013
  },
  {
    "actors": [
      "Henry Fonda",
      "Lee J. Cobb",
      "Martin Balsam"
    ],
    "desc": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    "directors": [
      "Sidney Lumet"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "image_url": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    "thumb_url": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "imdb_url": "/title/tt0050083/",
    "name": "12 Angry Men",
    "rating": 9.0,
    "year": 1957
  }
]

export default movies