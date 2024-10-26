# Hirely

```shell
docker run --name hirely-postgres \
    -p 5432:5432 \
    -e POSTGRES_PASSWORD=test \
    -e POSTGRES_USER=test \
    -e POSTGRES_DB=hirely \
    -d postgres
```

```shell
cp ./app/core/.env.example ./app/core/.env
```

```shell
npm run dev
```