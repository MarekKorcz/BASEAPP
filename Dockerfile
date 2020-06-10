FROM node:14
WORKDIR /app

# uncomment it when running for the first time after clone repo
# RUN npm install

EXPOSE 5000

# run when deployed (for development use "npm run dev")
# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]