**_API DOCUMENTATION_**

## **Create Comment**

Create anonymous comment on a star wars episode

- **URL**

/comment/create

- **Method:**

`POST`

- **URL Params**

None

- **Data Params**

  **Required:**

  `episode_id=[integer][range from 1 - 6]`
  `comment=[string][max 500 characters]`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```
    { "result": { "id": 55, "ip_address": "190.1.95.232", "episode_id": 2, "comment": "Another Comment for Episode 2", "updatedAt": "2021-09-26T17:34:54.241Z", "createdAt": "2021-09-26T17:34:54.241Z" } }
    ```

- **Error Response:**

  - **Code:** 400<br />
    **Content:** `{ error : "Error Message" }`

## **Get Comments**

Get anonymous comments on a star wars episode

- **URL**

/comment/episode/:episode_id

- **Method:**

`GET`

- **URL Params**

  **Required:**

  `episode_id=[integer]`

- **Data Params**

None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```
    { "result": [ { "id": 55, "comment": "Another Comment for Episode 2", "ip_address": "190.1.95.232", "episode_id": 2, "createdAt": "2021-09-26T17:34:54.000Z", "updatedAt": "2021-09-26T17:34:54.000Z" }, { "id": 45, "comment": "Another Comment for Episode 2", "ip_address": "209:10.1.36.203", "episode_id": 2, "createdAt": "2021-09-26T17:04:39.000Z", "updatedAt": "2021-09-26T17:04:39.000Z" } ] }
    ```

- **Error Response:**

  - **Code:** 400<br />
    **Content:** `{ error : "Error Message" }`

## **Get All Movies**

Get all star wars episodes

- **URL**

/movies/

- **Method:**

`GET`

- **URL Params**

None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```
    { "result": [ { "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", "comment_count": 0, "release_date": "1977-05-25" }, { "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....", "comment_count": 0, "release_date": "1980-05-17" }, { "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...", "comment_count": 0, "release_date": "1983-05-25" }, { "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....", "comment_count": 0, "release_date": "1999-05-19" }, { "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....", "comment_count": 3, "release_date": "2002-05-16" }, { "opening_crawl": "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....", "comment_count": 2, "release_date": "2005-05-19" } ] }
    ```

- **Error Response:**

  - **Code:** 400<br />
    **Content:** `{ error : "Error Message" }`

## **Get Character**

Get character list from a movie

- **URL**

/movies/character/:episode_id

- **Method:**

`GET`

- **URL Params**

  **Required:**

  `episode_id=[integer]`

- **Query Params**

  **Optional:**

  `sort=[string]['name' | 'height' | 'gender']`
  `order=[string]['asc', 'desc']`
  `filter=[string]['male', 'female', 'n/a']`

- **Data Params**
  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```
    { "result": { "characters": [ { "name": "Anakin Skywalker", "height": "188", "mass": "84", "hair_color": "blond", "skin_color": "fair", "eye_color": "blue", "birth_year": "41.9BBY", "gender": "male", "homeworld": "https://swapi.dev/api/planets/1/", "films": [ "https://swapi.dev/api/films/4/", "https://swapi.dev/api/films/5/", "https://swapi.dev/api/films/6/" ], "species": [], "vehicles": [ "https://swapi.dev/api/vehicles/44/", "https://swapi.dev/api/vehicles/46/" ], "starships": [ "https://swapi.dev/api/starships/39/", "https://swapi.dev/api/starships/59/", "https://swapi.dev/api/starships/65/" ], "created": "2014-12-10T16:20:44.310000Z", "edited": "2014-12-20T21:17:50.327000Z", "url": "https://swapi.dev/api/people/11/" }, { "name": "Ben Quadinaros", "height": "163", "mass": "65", "hair_color": "none", "skin_color": "grey, green, yellow", "eye_color": "orange", "birth_year": "unknown", "gender": "male", "homeworld": "https://swapi.dev/api/planets/41/", "films": [ "https://swapi.dev/api/films/4/" ], "species": [ "https://swapi.dev/api/species/19/" ], "vehicles": [], "starships": [], "created": "2014-12-20T10:08:33.777000Z", "edited": "2014-12-20T21:17:50.417000Z", "url": "https://swapi.dev/api/people/50/" }, { "name": "Darth Maul", "height": "175", "mass": "80", "hair_color": "none", "skin_color": "red", "eye_color": "yellow", "birth_year": "54BBY", "gender": "male", "homeworld": "https://swapi.dev/api/planets/36/", "films": [ "https://swapi.dev/api/films/4/" ], "species": [ "https://swapi.dev/api/species/22/" ], "vehicles": [ "https://swapi.dev/api/vehicles/42/" ], "starships": [ "https://swapi.dev/api/starships/41/" ], "created": "2014-12-19T18:00:41.929000Z", "edited": "2014-12-20T21:17:50.403000Z", "url": "https://swapi.dev/api/people/44/" },... ], "metadata": { "total_characters": 27, "total_height_cm": 4623, "total_height_feet_inches": "151 ft 8 3/32 in" } } }
    ```

- **Error Response:**

  - **Code:** 400<br />
    **Content:** `{ error : "Error Message" }`

## **Get Movie Details**

Get Movie details with the episode id

- **URL**

/movies/episode/:episode_id

- **Method:**

`GET`

- **URL Params**

  **Required:**

  `episode_id=[integer]`

- **Data Params**

None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```
    { "result": { "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....", "comment_count": 3, "release_date": "2002-05-16" } }
    ```

- **Error Response:**

  - **Code:** 400<br />
    **Content:** `{ error : "Error Message" }`
