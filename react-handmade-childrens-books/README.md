# Coding Challenge: Handmade Children's Books

In this coding challenge, you'll be helping an online bookmaking service called
Handmade Children's Books. They are a small but growing company, and they are
starting to feel their current website is a bit inadequate. The site serves as a
first point of interaction for customers, but they prefer customers call so that
they can provide a personalized experience. They'd like to make some improvements
to accommodate _ALL_ of their visitors and to make site management a little easier.

## Install dependencies

This is a fairly vanilla setup, but some of the dependencies require a fairly new
Node.js version. Please make sure you have a compatible version installed. [Download Node](https://nodejs.org/en/download)

After Node is installed, you should be able to install the NPM dependencies.

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
npm run dev
```

Once the server is running, open your browser and navigate to `http://localhost:5173/`.
The application will automatically reload whenever you modify any of the source files.

## References

The site uses React with [React Router](https://reactrouter.com/), [Vite](https://vite.dev/),
and [Bootstrap 5](https://getbootstrap.com/).

## Client Requests

### 1: Fix the footer

It's really frustrating that our footer sometimes has whitespace under it if there
isn't a lot of content on the page. We'd like it to always be aligned at the bottom
of the window, even if the content doesn't go down that far. Also, we've had complaints
from some users that it's hard to read the info in the footer. One mentioned that
we should be following accessibility guidelines for color contrast. Could you help
us correct these issues?

Topics: CSS layout, accessibility concerns

### 2: Move the book list

We'd like to reserve our landing page for custom content and move our list of
books to a separate page under "/books". Please follow the organization of the
current code.

Also, we would like an easier way to make changes to the table. Right now we copy
and paste an existing row and then edit the values. Is there a simpler way to
provide data in the table?

Topics: Routing, components, organization

### 3: Ingest data from API

Based on our recent increase in revenue, we decided to scale up our team as well
as offerring new books. We started using a new service to manage our inventory that
also provides some API endpoints. We don't have the endpoint yet, but it returns
a list of books like you see in `./src/app/data/books-1.json`. Could you incorporate
the data from that file for now, but in anticipation of us having that data returned
from an API? Also, since we have a longer list of books now, we'd like to be able
to sort the books by title, author, or price.

Topics: Ingesting API, local state

### 4: Clearance Sale

We have a couple books that haven't been selling well, so we are running a sale
on them. The service we use allows us to set a sale price (the "current" value)
and we've done that for a couple books. Can you incorporate the new data in
`./src/app/data/books-2.json`, and give us some ideas of how we could draw
attention to the fact that these books are on sale? We were thinking about having
a special color for a sale row. Can we do that?

Topics: Ambiguous requirements, accessibility concerns, Bootstrap knowledge

### 5: Switching to Sass

Our marketing team is complaining that our site seems very "Bootstrap-y". We've
hired a designer who is familiar with Sass. Please add Sass support to our project
and update the project to override the default Bootstrap variable values. We were
thinking of using the really popular purple we see everywhere--what are your
thoughts?

Topics: Package management, tool familiarity, Sass, client pushback

### 6: Automation

We keep forgetting to put the files on the server when you make changes. Could you
help us automate this process so we don't forget about it. The owner is really hesitant
to do this because she is afraid something will be put on the site by mistake. How
can we avoid that issue?

Topics: Task automation, repo configuration
