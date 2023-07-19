
  

# ecommerce-admin

This project is for learning next js and is based on *Code with Antonio* [tutorial](https://www.youtube.com/watch?v=5miHyP6lExg&t=2896s)

I will **try** to document each setup for creating this project here 😊 😅

  
  

# Project Setup

Using [shadcn](https://ui.shadcn.com/) , *best Next.js 13 UI Library* to initialize [Next JS](https://ui.shadcn.com/docs/installation/next) project

  

`npx create-next-app@latest ecommerce-admin --typescript --tailwind --eslint`

  
  

**Also,** using [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups).

You can use `(foldername)` to create a folder. This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.

  

# Authentication

Using Clerk form authentication https://clerk.com/

Allows both configurations for **App router** and **Pages** 🥳

  

👉 **[Get started with Next.js](https://clerk.com/docs/nextjs/get-started-with-nextjs)**

👉 **[Build your Sign-up and Sign-in pages](https://clerk.com/docs/nextjs/signup)** ( how easy is that? )

  

You can find the pages on *[/app/(auth)/(routes)/](https://github.com/bullseye405/ecommerce-admin/tree/clerk-auth/app/%28auth%29/%28routes%29)*

  

***  *Notice how I route groups are used to organized the folders*

  

Get code in this branch : [clerk-auth](https://github.com/bullseye405/ecommerce-admin/tree/clerk-auth)

  

# Modal component

Created a global modal where users can add store for their e-commerce.
Using [Dialog](https://ui.shadcn.com/docs/components/dialog) component from shadcn/ui to create a custom Modal

  

Using [zustand](https://github.com/pmndrs/zustand) for global state management

  

Get code in this branch : [modal-component](https://github.com/bullseye405/ecommerce-admin/tree/modal-component)

  

***...TO BE CONTINUED***