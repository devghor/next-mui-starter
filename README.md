## Getting Started

> [!NOTE]  
> We are using **Next 15** with **React 19**, follow these steps:

Clone the repo:

```
git clone https://github.com/devghor/next-mui-starter.git
```

- `pnpm install` ( we have legacy-peer-deps=true added in the .npmrc)
- Create a `.env.local` file by copying the example environment file:
  `cp env.example.txt .env.local`
- Add the required environment variables to the `.env.local` file.
- `pnpm run dev`

You should now be able to access the application at http://localhost:3000.

> [!WARNING]
> After cloning or forking the repository, be cautious when pulling or syncing with the latest changes, as this may result in breaking conflicts.

## Features

- Modern admin dashboard interface
- Responsive layout with sidebar navigation
- User management table with search
- Ready-to-use components (Breadcrumb, Dashboard, Navbar, etc.)
- Pre-configured theme system
- Optimized font loading with next/font

![Admin Dashboard Screenshot](docs/Screenshot.png)
