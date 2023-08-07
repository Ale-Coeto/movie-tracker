# Movie and show tracker
Website to keep track of trending shows and movies, make a watch list, rate shows and videos and keep discussion groups with friends and the community.

First, run the development server:

# Tools
Built with:
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Headless UI](https://headlessui.com/)
- [The Movie DB](https://developer.themoviedb.org/docs)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
  
Deployed with [Vercel](https://vercel.com/)

# Structure
```bash
├─ prisma
│   └─ schema.prisma
│
├─ public
│
└─ src/app
    ├─ (main)
    |
    ├─ (pages)
    |   ├─ dashboard
    |   ├─ discussions
    |   ├─ explore
    |   └─ (lists)
    |         ├─ show-list
    |         └─ movie-list
    |
    ├─ components
    |
    ├─ api
    |   └─ routes
    |    
    └─ utils
        ├─ actions
        ├─ context
        ├─ hooks
        └─ libs
```

# Check it out
https://movies-and-series-tracker.vercel.app/

