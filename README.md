This is a [Next.js](https://nextjs.org/) project using [Ghost](https://ghost.org/) as a headless CMS.

## Getting Started

### Prerequisites

#### Node & npm

Make sure you have Node.js installed on your local development machine. You can download the latest version of Node.js from the [official website](https://nodejs.org/en).

#### Ghost CMS

You need to have a Ghost CMS instance running.
This project was developed using the [official Ghost Docker Image](https://hub.docker.com/_/ghost).
You can also use the [official Ghost(Pro) service](https://ghost.org/pricing/) or [install Ghost on your own server](https://ghost.org/docs/install/).

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

5. Be prepared to copy the `Content API Key` and `API URL` and update the environment variables in the `.env.local` file of the web client (see below).

### Web Client

1. Clone the repository

```bash
git clone https://github.com/kensonjohnson/next-with-ghost-cms.git
```

2. Install dependencies

```bash
npm install
```

3. Rename the `.env.local.example` file to `.env.local` and update the environment variables for your setup.

4. Start the development server

```bash
npm run dev
```

5. Project will be running at [localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org/)
- [Ghost](https://ghost.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
