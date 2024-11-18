An AI-powered PDF chat built with Next.js 13, Vercel's AI SDK, Langchain, and PineconeDB

## Demo

https://


## 👩‍🚀 Description

Built with:
- ✅ Next.js 13
- ✅ Vercel's AI SDK
- ✅ Shadcn-ui
- ✅ Langchain TypeScript integration
- ✅ PineconeDB as the knowledge store
- ✅ Dark Mode with persistent theme-switching


## 💬 Good to know
- The PineconeDB index creation happens when we run `npm run prepare:data`, but its better to create it manually if you dont want the command to fail.
- If the command fails, then give sometime for pinecone index to get initialized and try to run the command again, it should work eventually.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                          |
| :-------------------- | :-----------------------------------------------|
| `npm install`         | Installs dependencies                           |
| `npm run prepare:data`| Splits your PDF file under the /docs folder into chunks, embeds them, uploads them to Pinecone|
| `npm run dev`         | Starts the local dev server at `localhost:3000` |


