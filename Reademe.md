### Como iniciar um projeto em desenvolvimento de api's

npm init -y

npm i typescript ts-node-dev --save-dev

npm i @types/node @types/express --save-dev

npm i express   

### Inicializar 

npx tsc --init

no json muda o script para mudar de test para dev 

npx ts-node-dev --respawn index.ts

### Como baixar e inicializar o prisma

npm i prisma -D

npx prisma init

Para começar a migração basta usar o comando

npx prisma migrate dev --name nome_migration

npm i @prisma/client

### No arquivo do prisma

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()