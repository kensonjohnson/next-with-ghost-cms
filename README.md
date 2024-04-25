This is a [Next.js](https://nextjs.org/) project using [Ghost](https://ghost.org/) as a headless CMS.

## Built With

- [Next.js](https://nextjs.org/)
- [Ghost](https://ghost.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

#### Node & npm

Make sure you have Node.js installed on your local development machine. You can download the latest version of Node.js from the [official website](https://nodejs.org/en).

#### Docker

You need to create a Ghost CMS instance.
Instructions below use the [official Ghost Docker Image](https://hub.docker.com/_/ghost).
If you don't have Docker installed, you can download it from the [official website](https://www.docker.com/products/docker-desktop).

You can also use the [official Ghost(Pro) service](https://ghost.org/pricing/) or [install Ghost on your own server](https://ghost.org/docs/install/).
Simply skip the first three steps of hte "Ghost CMS" instructions below and use your own setup for the `.env.local` file.

## Installation

### Ghost CMS

1. Pull the latest Ghost Docker image

```bash
docker pull ghost
```

2. Start a new Ghost container

```bash
 docker run -d --name some-ghost -e NODE_ENV=development -p 2368:2368 ghost
```

3. Visit [localhost:2368/ghost](http://localhost:2368/ghost) to complete the Ghost setup.

4. Create a new Ghost API key by visiting the Ghost Admin panel and navigating to `Integrations` > `Add custom integration`. Give your integration a name, e.g. "Web Client" and click on `Create`. Description is optional.

5. Be prepared to copy the `Content API Key` and `API URL` to update the environment variables in the `.env.local` file of the web client (see below).

### Web Client

1. Clone the repository

```bash
git clone https://github.com/kensonjohnson/next-with-ghost-cms.git
```

2. Install dependencies

```bash
npm install
```

3. Make a copy of `.env.local.example` and name it `.env.local`, then update the environment variables for your setup.

4. Start the development server

```bash
npm run dev
```

5. Project will be running at [localhost:3000](http://localhost:3000) by default.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
