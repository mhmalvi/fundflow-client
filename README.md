# FundFlow Client

The frontend application for FundFlow, a crowdfunding platform where users can discover, support, and manage fundraising campaigns. Built with Next.js 13 and featuring a modern, responsive UI with Tailwind CSS and Ant Design.

## Tech Stack

- **Next.js** 13 (React 18)
- **Redux Toolkit** with Redux Persist for state management
- **Ant Design** 5 component library
- **Tailwind CSS** for utility-first styling
- **Framer Motion** & React Awesome Reveal for animations
- **React Quill** for rich text editing
- **React Slick** for carousel/slider components
- **Sass** for extended styling
- **Day.js** for date handling

## Features

- Campaign discovery and browsing
- Campaign creation with rich text editor
- User authentication and profile management
- Responsive design across all devices
- State persistence for seamless user experience
- Video embedding support (YouTube)
- Deployed on Netlify

## Getting Started

### Prerequisites

- Node.js >= 16
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mhmalvi/fundflow-client.git
cd fundflow-client

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Project Structure

```
fundflow-client/
├── app/                # Next.js app directory
├── public/             # Static assets
├── redux/              # Redux store, slices, and API configuration
├── netlify.toml        # Netlify deployment configuration
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

## Deployment

This project is configured for deployment on **Netlify** with the `@netlify/plugin-nextjs` plugin.

## Related

- [FundFlow Server](https://github.com/mhmalvi/fundflow-server) — Backend API

## License

This project is private.