

# e-commerce admin
Follow the steps to get started with your admin setup

## Clone the admin app

Admin app allows you to create your own store and manage products for your store! 

 **Clone the repo**
 `git clone https://github.com/bullseye405/ecommerce-admin.git`
 
**Go to the project**
	`cd ecommerce-admin/`
	
**Install the dependencies**
	`npm install`

**Setup Clerk for authentication**
Create a new file named `.env` in the root directory of your project

Go to [Clerk](https://clerk.com/) Dashboard and create your application
On the home page, you can see the environment variables.
Copy the environment variables from Clerk homepage and paste it into your `.env` file

**Setup Database**
Go to [PlanetScale](https://planetscale.com/) and create a new database
`ecommerce-admin`
Wait until the database has been initialized
Click `connect to your database`
Create a password ( you can leave the form exactly as it is)
In Connect with section, select prisma to get your `DATABASE_URL`

Copy `DATABASE_URL` in your `.env` file

**Setup Cloudinary**
Go to [Cloudinary](https://cloudinary.com/) and setup your project
Go to Dashboard screen, copy Cloud Name and paste it in .env file
`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""`

**Setup Stripe**
Go to [Stripe](https://stripe.com/) and create a new account `ecommerce-admin` from top left
Copy the secret key and add it to `.env` file 
`STRIPE_API_KEY=""`

Add `FRONTEND_STORE_URL="http://localhost:3001"` to redirect after checkout from stripe. This should be your front-end store URL
Front-end guide : [ecommerce-store](https://github.com/bullseye405/ecommerce-store)

Deploy your Admin and Store project to vercel:

 - Admin : `https://ecommerce-admin-three-rose.vercel.app` 
 - Store : `https://ecommerce-store-three-rosy.vercel.app`

Go to Webhook in developers section in Stripe
In the Hosted endpoint, click Add endpoint
Enpoint url is the deplyod dashboard  url with `/api/webhook` at the end
i.e.   `https://ecommerce-admin-three-rose.vercel.app/api/webhook`

on Select events to send, select `checkout.session.completed` and click `Add endpoint`
Now click Reveal Signing Secret, copy it and paste it into your `.env` file
`STRIPE_WEBHOOK_SECRET=""`

You can start the application by running
`npm run dev`
