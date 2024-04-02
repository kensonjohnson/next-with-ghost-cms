This is a [Next.js](https://nextjs.org/) project using [Ghost](https://ghost.org/) as a headless CMS.

## Getting Started

### Prerequisites

#### Node & npm

Make sure you have Node.js installed on your local development machine. You can download the latest version of Node.js from the [official website](https://nodejs.org/en).

#### Ghost CMS

You need to have a Ghost CMS instance running.
This project was developed using the [official Ghost Docker Image](https://hub.docker.com/_/ghost).
You can also use the [official Ghost(Pro) service](https://ghost.org/pricing/) or [install Ghost on your own server](https://ghost.org/docs/install/).

### Installation

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
