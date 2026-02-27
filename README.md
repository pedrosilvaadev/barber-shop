# Barber Schedule
<img width="1684" height="945" alt="image" src="https://github.com/user-attachments/assets/c4af61a3-6e7c-4b89-80e0-7d00ed3e52f9" />
<img width="1678" height="928" alt="image" src="https://github.com/user-attachments/assets/a059fdfd-5587-4b98-affb-28e71cf755bd" />
<img width="1523" height="906" alt="image" src="https://github.com/user-attachments/assets/d371d958-6fd9-48b7-9ef3-cf9be948849c" />



A modern web application for booking barber services. Users can browse barbershops, view available services, and schedule appointments seamlessly.

## 🎯 Features

- **Browse Barbershops**: Discover and explore available barbershops with detailed information
- **Service Listings**: View services offered by each barbershop with descriptions and pricing
- **Booking System**: Schedule appointments with your preferred barber shops
- **Authentication**: Secure user authentication powered by NextAuth
- **User Dashboard**: View and manage your confirmed and pending bookings
- **Search Functionality**: Quick search to find barbershops and services
- **Responsive Design**: Mobile-friendly interface for all devices

## 🛠️ Technology Stack

### Frontend

- **Next.js 14** - React framework for production
- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives
- **React Hook Form** - Performant form state management
- **Zod** - TypeScript-first schema validation
- **Lucide React** - Beautiful icon library
- **Sonner** - Toast notification library
- **Date-fns** - Modern date utility library

### Backend

- **Next.js API Routes** - Serverless API endpoints
- **Prisma ORM** - Type-safe database client
- **PostgreSQL** - Reliable relational database
- **NextAuth.js** - Authentication library for Next.js

### Development

- **ESLint** - Code quality and style linting
- **Husky** - Git hooks framework
- **ts-node** - TypeScript execution for Node.js

## 📦 Installation

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd barber-schedule
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/barber_schedule"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Set up the database**

```bash
npm run prisma:migrate
npm run prisma:seed
```

5. **Generate Prisma Client**

```bash
npm run postinstall
```

6. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prepare` - Setup Husky git hooks

## 🗄️ Database Schema

### Core Models

**User**

- Manages user authentication and profile information
- Links to bookings and authentication sessions

**Barbershop**

- Stores barbershop information (name, address, description, contact)
- Contains multiple services offered

**BarbershopService**

- Individual services provided by a barbershop
- Includes price, description, and image

**Booking**

- Represents a user's service booking
- Links user to specific services with date/time

**Authentication Models** (NextAuth)

- Account, Session, VerificationToken for secure authentication

## 📁 Project Structure

```
app/
├── _actions/          # Server actions for mutations
├── _constants/        # Application constants
├── _data/            # Data fetching functions
├── api/              # API routes and auth
├── barbershop/       # Barbershop pages
├── bookings/         # Booking management pages
└── fonts/            # Custom fonts

components/
├── ui/               # Reusable UI components
└── [components]      # Feature-specific components

lib/
├── auth.ts          # Authentication configuration
├── prisma.ts        # Prisma client setup
└── utils.ts         # Utility functions

prisma/
├── schema.prisma    # Database schema
├── seed.ts          # Database seeding
└── migrations/      # Database migrations
```

## 🔐 Authentication

The application uses **NextAuth.js** with Prisma adapter for secure authentication:

- OAuth provider integration ready
- Session management
- Email verification support
- Secure credential storage

## 🎨 Styling

Tailwind CSS is configured with:

- Custom color schemes
- Responsive design utilities
- Animation support
- Dark mode ready (via next-themes)

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile devices
- Tablets
- Desktop screens

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start
```

The application is ready to deploy to platforms like:

- Vercel (Recommended for Next.js)
- Railway
- Heroku
- AWS EC2

## 📝 Environment Variables

Required environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Secret key for NextAuth (generate with `openssl rand -base64 32`)
- `NEXTAUTH_URL` - Application URL for authentication callbacks

## 🤝 Contributing

Contributions are welcome! Please follow the commit message guidelines set by `git-commit-msg-linter`.

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

Created by Pedro Silva

---

**Happy Booking! 💈**
