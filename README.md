[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
Gabriel's [![LinkedIn][linkedin-shield]][linkedin-url-gabriel]
Joshua's [![LinkedIn][linkedin-shield]][linkedin-url-josh]
Jevon's [![LinkedIn][linkedin-shield]][linkedin-url-jevon]

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

### User Authorization

User authentication is handled in Python using the Flask Login package.

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

Your Name - gharris910@icloud.com

Project Link: [https://github.com/gch910/cloudify-aa](https://github.com/gch910/cloudify-aa)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [App Academy](https://www.appacademy.io/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/gch910/cloudify-aa.svg?style=for-the-badge
[contributors-url]: https://github.com/gch910/cloudify-aa/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gch910/cloudify-aa.svg?style=for-the-badge
[forks-url]: https://github.com/gch910/cloudify-aa/network/members
[stars-shield]: https://img.shields.io/github/stars/gch910/cloudify-aa.svg?style=for-the-badge
[stars-url]: https://github.com/gch910/cloudify-aa/stargazers
[issues-shield]: https://img.shields.io/github/issues/gch910/cloudify-aa.svg?style=for-the-badge
[issues-url]: https://github.com/gch910/cloudify-aa/issues
[license-shield]: https://img.shields.io/github/license/gch910/cloudify-aa.svg?style=for-the-badge
[license-url]: https://github.com/gch910/cloudify-aa/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-gabriel]: https://www.linkedin.com/in/gabriel-harris-249231208/
[linkedin-url-josh]: https://www.linkedin.com/in/joshua-miller-625685154/
[linkedin-url-jevon]: https://www.linkedin.com/in/jevon-timmons/
[product-screenshot]: images/screenshot.png
