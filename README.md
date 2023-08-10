[
  

  

# ecommerce-admin

  

  

  

This project is for learning next js and is based on _Code with Antonio_ \[tutorial\](https://www.youtube.com/watch?v=5miHyP6lExg&t=2896s)

  

  

  

I will "**try**" to document each setup for creating this project here 😊 😅

  

  

  

# Project Setup

  

  

  

Using \[shadcn\](https://ui.shadcn.com/) , _best Next.js 13 UI Library_ to initialize \[Next JS\](https://ui.shadcn.com/docs/installation/next) project

  

  

  

`npx create-next-app@latest ecommerce-admin --typescript --tailwind --eslint`

  

  

  

**Also,** using \[Route Groups\](https://nextjs.org/docs/app/building-your-application/routing/route-groups).

  

  

  

You can use `(foldername)` to create a folder. This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.

  

  

  

Get code in this branch : \[evn-setup\](https://github.com/bullseye405/ecommerce-admin/tree/evn-setup)

  

  

  

# Authentication

  

  

  

Using Clerk form authentication https://clerk.com/

  

  

  

Allows both configurations for **App router** and **Pages** 🥳

  

  

  

👉 **\[Get started with Next.js\](https://clerk.com/docs/nextjs/get-started-with-nextjs)**

  

  

  

👉 **\[Build your Sign-up and Sign-in pages\](https://clerk.com/docs/nextjs/signup)** ( how easy is that? )

  

  

  

You can find the pages on _\[/app/(auth)/(routes)/\](https://github.com/bullseye405/ecommerce-admin/tree/clerk-auth/app/%28auth%29/%28routes%29)_

  

  

  

*** ***Notice** how route groups are used to organized the folders*

  

  

  

Get code in this branch : \[clerk-auth\](https://github.com/bullseye405/ecommerce-admin/tree/clerk-auth)

  

  

  

# Modal component

  

  

  

Create a global modal where users can add store for their e-commerce.

  

  

  

Using \[Dialog\](https://ui.shadcn.com/docs/components/dialog) component from shadcn/ui to create a custom Modal

  

  

  

Using \[zustand\](https://github.com/pmndrs/zustand) for global state management

  

  

  

Get code in this branch : \[modal-component\](https://github.com/bullseye405/ecommerce-admin/tree/modal-component)

  

  

  

# Form Component

  

  

  

Add a \[form\](https://ui.shadcn.com/docs/components/form) to create store.

  

  

  

Building forms with \[`react-hook-form`\](https://react-hook-form.com/) and \[`zod`\](https://zod.dev/)

  

  

  

Get code in this branch : \[form-components\](https://github.com/bullseye405/ecommerce-admin/tree/form-components)

  

  

  

# Prisma, PlanetScale, MySQL setup

  

  

  

Add \[Prisma\](https://www.prisma.io/), a Next-generation **Node.js** and **TypeScript** ORM.

  

  

`npm i prisma`

  

`npm i @prisma/client`

  

  

  

This creates a Prisma schema at \[`prisma/schema.prisma`\](https://github.com/bullseye405/ecommerce-admin/tree/prisma-mysql-setup/prisma)

  

  

Also adds `DATABASE_URL` in our env without changing previous env variables

  

  

  

Next, created prisma client at \[`lib/prismadb.ts`\](https://github.com/bullseye405/ecommerce-admin/blob/prisma-mysql-setup/lib/prismadb.ts)

  

  

  

***  *Notice how client is created in such a way that we don't initialize bunch of primsa instances causing warnings and performace issues.*

  

  

  

Next, setup \[PlanetScale\](https://planetscale.com/), the world’s most advanced **serverless** MySQL platform

  

  

  

Create a new database

  

  

Connect to database -> Connect with `Prisma`

  

  

Add `DATABASE_URL`

  

  

Modify provider according to connection string in PlanetScale

  

  

  

Create a model \[Store\](https://github.com/bullseye405/ecommerce-admin/blob/prisma-mysql-setup/prisma/schema.prisma)

  

  

  

Run `npx prisma generate`

  

  

This doesn't send anything to database but node_module/@prisma/client gets updated

  

  

It adds our model to prisma so that we can safely use it in our code

  

  

  

Run `npx prisma db push`

  

  

Syncs database with Prisma schema. If you check PlanetScale, you should see tables has been created.

  

  

  

**Create api route**

  

  

Create new folder for your api inside `app/api`

  

  

e.g. \[`app/api/stores`\](https://github.com/bullseye405/ecommerce-admin/tree/prisma-mysql-setup/app/api/stores)

  

  

  

To use this api, install \[axios\](https://axios-http.com/docs/intro)

  

  

The endpoint for api is `/api/stores`

  

  

  

***  *`api` is a reserved folder*

  

  

  

Install \[`react-hot-toast`\](https://react-hot-toast.com/) to show toast messages, (_The best toast in town_)

  

  

Create prodiver \[`toast-provider.tsx`\](https://github.com/bullseye405/ecommerce-admin/blob/prisma-mysql-setup/providers/toast-provider.tsx) and add it in \[`Layout.tsx`\](https://github.com/bullseye405/ecommerce-admin/blob/prisma-mysql-setup/app/layout.tsx)

  

  

  

Get code in this branch : \[prisma-mysql-setup\](https://github.com/bullseye405/ecommerce-admin/tree/prisma-mysql-setup)

  

# Dashboard setup

Create route for dashboard with storeId ( \[`app/(dashboard)/\\[storeId\\]`\](https://github.com/bullseye405/ecommerce-admin/tree/dashboard-setup/app/%28dashboard%29/%5BstoreId%5D) )

  

Few things done here:

- Check if the user is authenticated or not

- Check if the store exist or not

- After creating store, redirect to dashboard with newly created store `id`

  

## Resetting the database

  

To reset the database, `npx prisma migrate reset`

This is going to delete your entire database

  

Run `npx prisma generate` and `npx prisma db push` like we did previously

Get code in this branch : \[dashboard-setup\](https://github.com/bullseye405/ecommerce-admin/tree/dashboard-setup)

# Navbar

Create \[`navigation bar`\](https://github.com/bullseye405/ecommerce-admin/blob/navigation-bar/components/navbar.tsx)
For now, just create a Settings route to the navbar and \[`UserButton`\](https://clerk.com/docs/component-reference/user-button?utm_source=www.google.com&utm_medium=referral&utm_campaign=none) from Clerk

## Store switcher on navbar
Next install Popover and Command from shadcn ui since we are ***not*** going to use *\[ComboBox\](https://ui.shadcn.com/docs/components/combobox)*

\[`store-switcher.tsx`\](https://github.com/bullseye405/ecommerce-admin/blob/navigation-bar/components/store-switcher.tsx)

Few things done here:
 - Show popover list for existing store, select store
 - Handle store modal created in previous branch
 - Create store option

Get code in this branch : \[navigation-bar\](https://github.com/bullseye405/ecommerce-admin/tree/navigation-bar)


**_...TO BE CONTINUED_**](README.md)