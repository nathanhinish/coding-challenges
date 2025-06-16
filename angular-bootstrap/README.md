# Coding Challenge

In this coding challenge, you'll be helping a custom book store build a new version
of their site that allows for easier management of data. This site is a first point
of contact for customers, which the client hopes will lead to potential customers
calling them to place orders so that they can provide a personalized experience.

## Install dependencies

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.
The application will automatically reload whenever you modify any of the source files.

## Client Requests

### 1: Move the book list

We'd like to reserve our landing page for custom content and move our list of
books to a separate page under "/books". Also, we would like an easier way to make
changes to the table. Right now we copy and paste an existing row and then edit
the values. Can we use some simpler data structure like JSON to provide data in
the table?

Topics: Routing, Components

### 2: Ingest data from API

We have started scaling up our team, so we can provide more books. We started using
a new service to manage our inventory that also provides some API endpoints. We
don't have the endpoint yet, but it returns a list of books like you see in
`./src/app/data/books-1.json`. Could you incorporate the data from that file for
now, but in anticipation of us having that data returned from an API? Also, since
we have a longer list of books now, we'd like to be able to sort the books by title,
author, or price.

Topics: Ingesting API, local state

### 3: Clearance Sale

We have a couple books that haven't been selling well, so we are running a sale
on them. The service we use allows us to set a sale price (the "current" value)
and we've done that for a couple books. Can you incorporate the new data, and
give us a couple ideas of how we could draw attention to the fact that these books
are on sale? We were thinking about having a special color for a sale row. Can we
do that?

Topics: Ambiguous requirements, a11y concerns, Bootstrap knowledge
