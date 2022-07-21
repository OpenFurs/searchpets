<h1 align="center">
  <img width="128" alt="searchpets-peanut-transparent" src="https://user-images.githubusercontent.com/94678583/170873665-9d07cb32-abb9-45b6-8aea-8e361da84bd7.png">
  <br>
  Searchpets
</h1>
<p align="center">
  <img src="https://img.shields.io/github/license/OpenFurs/searchpets?style=flat" alt="GPL 2.0 License" />
  <img src="https://img.shields.io/github/issues/OpenFurs/searchpets?style=flat" alt="Searchpets' open issues" />
  <img src="https://img.shields.io/github/last-commit/OpenFurs/searchpets" />
  <img src="https://img.shields.io/website?label=searchpets.xyz&up_message=up%20and%20running%21&url=https%3A%2F%2Fsearchpets.xyz%2F" />
  <img src="https://img.shields.io/github/contributors/OpenFurs/searchpets" />
</p>
<p align="center">
Searchpets is an open source search engine to find characters and texts from comics (coming soon) from <i>Housepets!</i> written in Next.js and FastAPI.
</p>
<p align="center">
This project was taken inspiration from this <a href="https://www.housepetscomic.com/forums/viewtopic.php?f=13&t=5434&p=938783&hilit=search+engine#p938783">forum post</a>.
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/94678583/163629497-9f5c4921-5a39-4dfe-8729-e56705efb2f7.gif" alt="Searchpets Dev Demo">
</p>

## Tech stack

![Searchpets Stack](https://skillicons.dev/icons?i=react,nextjs,ts,js,sass,tailwind,py,flask,redis,cloudflare)

The front-end is written in a React framework, Next.js + TypeScript;
with Tailwind CSS and Sass as CSS painkillers. For the back-end, it's powered
with Python with the lightweight and fast web framework, FastAPI - the
database is powered by Redis.

The website is currently being hosted from a custom Linode server and
delivered through the interwebs with CloudFlare.

## Project structure

- `app` - Next.js app, bootstrapped with Tailwind CSS and Sass
- `server` - Python backend, mostly responsible with auto-updaters and gathering
  Housepets database
- `scripts` - Automated Bash scripts to bulk install Python and Node packages and
  for deployment from the server

## Running the app locally

### Prerequisites

- Node.js 14 or higher (LTS recommended)
- Python 3.9 or higher
- Git Bash or WSL (for Windows only, required to execute Bash scripts)
- Yarn Package Manager (npm can still be used but we strongly recommend using
  yarn!)

### Installation

The installation was complicated and will be automated via Bash script.
To install all the required Node and Python libraries, execute the `setup.sh`
file.

```console
sh scripts/setup.sh
```

Once all the libraries have been installed, it will execute `gen.py` to
generate a JSON file containing Housepets! data. (This will take a while!)

Once it's finished, simply run `yarn dev` or `npm run dev` to
concurrently start both Node and Python servers.

## Copyright notice

The use of third-party content is heavily transformative, and therefore, subject
of Fair Use. _Housepets!_ and its story and characters is a trademark of Rick Griffin.

## License

GPL-2.0
