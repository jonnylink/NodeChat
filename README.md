# ChatGPT Wrapper
A super simple Node.js wrapper for ChatGPT using OpenAI's API to use for Fun™

## Setup
1. Clone the repository.
2. Run `yarn install`.
3. Create a `.env` file by copying the `.env.example` file and updating the values.
4. Run `yarn start`

## Requirements
1. ChatGPT API key
2. Weather.com API key (if using the /what-to-wear route)

## Routes
### health
To see if the server is running as expected:
Send a GET request to `/health`

### Generic hat
To write open-ended prompts:
Send a POST request to `/chat` with a JSON body:
```json
{"message": "Tell me a funny joke."}
```

### What to wear
To get advice on what to wear today:
Send a GET request to `/what-to-wear`

### Zen koan
To get a zen koan:
Send a GET request to `/koan`

### Magical realism
To read a short piece of sort of ok magical realism:
Send a GET request to `/magic`
