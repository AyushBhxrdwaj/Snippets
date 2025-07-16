# Snippets: A Simple Snippet Manager

Snippets is a minimalist web application designed to solve a common problem for developers: managing and quickly accessing reusable pieces of code. Instead of digging through old project files or scattered notes, this app provides a clean, centralized, and straightforward interface to keep your most-used code for languages like JavaScript and Python organized. Built with Next.js and Prisma, it's a powerful tool for boosting productivity and maintaining a personal code library.

## Key Features

* **Create & Save:** Quickly write and store new code snippets, ensuring your valuable code is never lost and is always available when you need it.
* **View All Snippets:** A central homepage lists all your saved snippets, providing at-a-glance access to your entire library.
* **View Individual Snippets:** Click on any snippet to see its full code with proper formatting in a dedicated view.
* **Edit & Update:** Easily modify existing snippets to refine them, fix bugs, or adapt them for new use cases.
* **Delete Snippets:** Remove snippets you no longer need with a single click to keep your collection clean and relevant.
* **Persistent Storage:** Uses the powerful Prisma ORM to reliably manage and save your data in a robust database, ensuring your snippets are safe.

## Tech Stack

This project is built using a modern and powerful set of technologies, chosen for their efficiency and developer-friendly features:

* **Framework:** [Next.js](https://nextjs.org/) - Chosen for its powerful server-side rendering capabilities, file-based routing, and excellent developer experience, making the app fast and scalable.
* **Language:** [TypeScript](https://www.typescriptlang.org/) - Used to add static typing to JavaScript, which helps catch errors early in development and improves overall code quality and maintainability.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework that allows for rapid and consistent UI development directly within your markup, keeping styling organized and easy to manage.
* **ORM:** [Prisma](https://www.prisma.io/) - A next-generation ORM that makes database access intuitive, type-safe, and easy to manage through a declarative schema.
* **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) - A collection of beautifully designed and accessible components that can be easily copied, pasted, and customized to fit the project's needs.

## Getting Started

Follow these instructions to get a local copy of the project up and running on your machine for development and testing purposes.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.x or later) and a compatible package manager like `npm` or `yarn` installed on your system.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/AyushBhxrdwaj/Snippets.git
    ```

2.  **Navigate into the project directory:**
    ```sh
    cd Snippets
    ```

3.  **Install the dependencies:**
    This command will install all the necessary packages defined in `package.json`.
    ```sh
    npm install
    ```

4.  **Set up your environment variables:**
    Create a `.env` file in the root of your project. Copy the contents of `.env.example` (if available) or add your database connection URL directly.
    ```env
    # Example for a SQLite database
    DATABASE_URL="file:./dev.db"
    ```

5.  **Push the database schema:**
    This command reads your `schema.prisma` file and automatically creates the necessary tables in your database to match your data model.
    ```sh
    npx prisma db push
    ```

## How to Run the Application

To start the development server and run the application on your local machine, use the following command:
```sh
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. You can now start creating, viewing, and managing your code snippets!

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Whether it's reporting a bug, proposing a new feature, improving documentation, or submitting a pull request, all efforts are welcome. Please feel free to fork the repo and create a pull request, or simply open an issue with the tag "enhancement" or "bug".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`)
3.  Commit your Changes (`git commit -m 'Add some NewFeature'`)
4.  Push to the Branch (`git push origin feature/NewFeature`)
5.  Open a Pull Request
