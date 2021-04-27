[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url-gabriel]
[![LinkedIn][linkedin-shield]][linkedin-url-josh]
[![LinkedIn][linkedin-shield]][linkedin-url-jevon]
[![GNU License][license-shield]][license-url]


<br />
<p align="center">
  <a href="https://cloudify-aa.herokuapp.com/">
    <img src="favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Cloudify</h3>

  <p align="center">
    A music sharing platform inspired by Soundcloud
    <br />
    <a href="https://github.com/gch910/cloudify-aa"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/gch910/cloudify-aa">View Demo</a>
    ·
    <a href="https://github.com/gch910/cloudify-aa/issues">Report a Bug</a>
    ·
    <a href="https://github.com/gch910/cloudify-aa/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<a href="https://cloudify-aa.herokuapp.com/">
  <img src="https://i.gyazo.com/26167b24155ea8ed1fc79b3587542161.png" alt="Logo" >
</a>

## Summary

Cloudify is a web application inspired by SoundCloud built using Python / Flask utilizing React.js/Redux architecture. Cloudify allows users to:

- Create an account / profile
- Log in / Log out
- Upload / share music
- Listen to music
- View artist profiles
- Search for artists / music
- View song pages and comment on songs
- Add a like to a song

### Built With

- Javascript
- React
- Redux
- Python
- Flask
- SQLAlchemy
- PostgreSQL
- CSS
- [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel)

## Overall Structure

#### Back end
The app was built using Python / Flask on the back end with a postgreSQL database. Back end structure is RESTful and all the data requests use AJAX and are fulfilled with a JSON API. Associations are used to prefetch data in order to minimize SQL queries to the database.

#### Front end
The front end is built completely in React / JavaScript and utilizes Redux for global state management. React's virtual DOM allows for very fast rerendering without requiring new pages to be sent from the server. Even modals appear/disappear using React rather than toggling CSS display properties.


<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Installations

- npm

  ```sh
  npm install npm@latest -g
  ```

- pipenv

  ```sh
  pipenv install
  ```

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/gch910/cloudify-aa.git

   ```

2. Install Pipenv dependencies

   ```sh
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. Install NPM packages - cd into react-app

   ```sh
   npm install
   ```

7. While still in the react-app folder
   ```sh
   npm start
   ```

## Primary Components


#### User Authorization
User authentication is handled in Flask using the flask_login package. The werkzeug.security package is used for password hashing. Passwords are not saved to the database, only password hashes. When users log in, the password they provide is rehashed and checked against the original encrypted password hash to verify credentials.

![signin]

#### Home Page

The Cloudify homepage features sliding carousels of songs sorted by genre.  These carousels dynamically update to include music that has been recently uploaded to the platform.  All album images are active links that immediately play the song when clicked and take you to that artist's user page.  

![homepage]

#### Song Page

On navigation to the song page, if the specified song is not already present in the redux store, a fetch request will be made to the backend which will respond with queried results of relevent song information.  This information, such as the song's artist, artist image, album art, genre, comments and likes will be rendered extremely quickly thanks to React's virtual DOM.  A logged in user can interact with the song page by liking it, unliking it and adding/deleting comments, with page updates happening instantly.  All of the updated song data is saved to the postgreSQL database where it can be retreived later on.

![songpage]

#### Artist Page

Artist / User pages (they are synonymous in this app) function similarly to song pages.  The data is handled the same way, but the primary focus of this page is rendering all of the songs uploaded by this user. Album art and realease date are included for each song as well as a play button that updates the state of the global playbar when clicked.  The clicked song will become the new "playing" song and the playbar, which persists music playback and information through re-renders, will update to reflect the current audio.  The navigation bar utilizes React state to create seemless filtering of songs based on the active link.  

![songpage]

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/gch910/cloudify-aa/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the GNU License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Gabriel - gharris910@icloud.com \

Josh - joshua.miller2289@gmail.com

Project Link: [https://cloudify-aa.herokuapp.com/](https://cloudify-aa.herokuapp.com/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [App Academy](https://www.appacademy.io/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[signin]: ./readme_images/cloudify-login.PNG
[homepage]: ./readme_images/cloudify-homepage.PNG
[songpage]: ./readme_images/cloudify-songpage.PNG
[artistpage]: ./readme_images/cloudify-artistpage.PNG

[contributors-shield]: https://img.shields.io/github/contributors/gch910/cloudify-aa.svg?style=for-the-badge
[contributors-url]: https://github.com/gch910/cloudify-aa/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gch910/cloudify-aa.svg?style=for-the-badge
[forks-url]: https://github.com/gch910/cloudify-aa/network/members
[stars-shield]: https://img.shields.io/github/stars/gch910/cloudify-aa.svg?style=for-the-badge
[stars-url]: https://github.com/gch910/cloudify-aa/stargazers
[issues-shield]: https://img.shields.io/github/issues/gch910/cloudify-aa.svg?style=for-the-badge
[issues-url]: https://github.com/gch910/cloudify-aa/issues
[license-shield]: https://img.shields.io/badge/License-GPL%20v3-blue.svg
[license-url]: https://github.com/gch910/cloudify-aa/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-gabriel]: https://www.linkedin.com/in/gabriel-harris-249231208/
[linkedin-url-josh]: https://www.linkedin.com/in/joshua-miller-625685154/
[linkedin-url-jevon]: https://www.linkedin.com/in/jevon-timmons/
[product-screenshot]: images/screenshot.png
