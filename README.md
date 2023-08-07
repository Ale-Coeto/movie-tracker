# Movie and show tracker
Website to keep track of trending shows and movies, make a watch list, rate shows and videos and keep discussion groups with friends and the community.


# Features
**Authentication**
User login and registration with Next-Auth.

**Dashboard**
Top ten trending and popular tv shows and movies fetched from The MovieDB API.

**Explore**
Section to search for any movie or show title, showing other possible or related options.

**Discussions**
Space for group discussions to comment about or rate movies and shows. Users can see and comment in the general discussion (available to all users), create a new one, or join an existing one through a code.  


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
    │
    ├─ (pages)
    │   ├─ dashboard
    │   ├─ explore
    │   ├─ discussions
    │   └─ (lists)
    │         ├─ show-list
    │         └─ movie-list
    │
    ├─ components
    │
    ├─ api
    │   └─ routes
    │    
    └─ utils
        ├─ actions
        ├─ context
        ├─ hooks
        └─ libs
```


# Check it out
https://movies-and-series-tracker.vercel.app/

