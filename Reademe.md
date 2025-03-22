Como iniciar um projeto em desenvolvimento de api's

npm init -y

npm i typescript ts-node-dev --save-dev

npm i @types/node @types/express --save-dev

npm i express   

no json muda o script para mudar de test para dev 

npx ts-node-dev --respawn index.ts

teste comit

Para começar a migração basta usar o comando

npx prisma migrate dev