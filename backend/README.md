# Animal Network - Backend

Welcome!

## Technical Implementation

So, the big boy for the runtime of the Animal Network Backend is Docker. Unfortunately, a docker-compose was not made (which would have made testing, iteration, and deployment of this application way more easier...) because this project was suspended.

However, that does not mean the backend is useless! I made a few commands that has allowed me to actually work on this monstrous application.

### Runtime

> HEY! Before you continue, PLEASE note that these commands are native to `powershell` ONLY! You're tasked to convert it based on your command line interface.

Creation of networks

```sh
docker network create animal-network-net
```

Creation of volumes

> This is done automatically while creating the Postgres database.

Creation of PostgreSQL database

```sh
docker run `
-d --rm --network animal-network-net `
--network-alias postgres        `
--name animal-network-postgres  `
-v animal-network-postgres-volume:/var/lib/postgresql/data `
-e POSTGRES_PASSWORD='<YOUR CUSTOM POSTGRES PASSWORD>' `
-e POSTGRES_DB='animal-network-db' `
postgres:14.22-trixie 
```

Creation of Animal Network backend server

> Please build the image using the `Dockfile` before running this pls! or better yet, here's the command below.
>
> ```sh
> docker build -t animal-network-backend .
> ```

```sh
docker run `
-p 8080:8080 `
-d --network animal-network-net `
-e DATABASE_URL='postgresql://postgres:<YOUR CUSTOM POSTGRES PASSWORD>@postgres:5432/animal-network-db?schema=public' `
animal-network-backend
```

### Sample Data

> This must be executed in the docker container

Access postgres user and animal-network-db

```sh
psql -U postgres -d animal-network-db
```

Verify if the `animals` table exist

```sh
SELECT * FROM animals;
```

Insert an animal!

```sh
INSERT INTO animals(id, name, legs, fact, likes)
```

```sh
VALUES (1, 'Cat', 4, 'Cats can rotate their ears 180 degrees and file formal complaints with a stare.', 10);
```

Verify if it was added!

```sh
SELECT * FROM animals;
```

### Conclusion

Well that's all from me! I'm praying that everything went smoothly with implementing, running, and testing this backend with Docker. In another life, I'll be sure to include the docker-compose and importing of sample data!

Thank you!!
