# Electron-BrainBox

BrainBox is a cross-platform desktop application built with Electron and TypeScript that allows users to efficiently take and store notes.

## Screenshots

![App Screenshot](https://i.ibb.co/2MWGR9j/img.png)
![App Screenshot](https://i.ibb.co/R9JvKz2/img2.png)

## Tech Stack

**Client:** Electron, TypeScript, Tailwind, Mdxeditor, jotai

**Server:** Node.js

## Features

- Simple Interface: Clean and user-friendly interface for easy note-taking.
- Markdown Support: Write notes in Markdown format for enhanced formatting.
- Multiple Notebooks: Organize notes into different notebooks for better categorization.
- Cross-Platform: Works seamlessly on Windows, macOS, and Linux.

## Run Locally

Clone the project

```bash
  git clone https://github.com/JoelDeonDsouza/Electron-BrainBox.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Local Storage

- This modification instructs users to create a local folder named `IdeaMark` to store files. Alternatively, it mentions the possibility of changing the storage location by modifying the `getRootDir()` function in the `lib/index.ts` file.

## Usage

- Create a New Note: Click on the "New Note" button to create a new note. Write your content in the text editor.
- Edit Note: Double-click on a note in the list to edit it.
