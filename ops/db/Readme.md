# Installation

## Install docker on windows

```bash
choco install docker-cli
choco install docker-compose
choco install docker-machine
```

## Install docker on Mac

```bash
brew install colima
```

## Start all Applications

```
cd ops/db && docker compose up
```

- this will start the postgresDB && the PgAdmin UI

- you can sign into the **pgadmin** http://localhost:5050 by
  - user: admin@admin.de
  - pwd: admin
- you can than create a server by:
  - host: host.docker.internal (mac)
  - host: localhost (windows)
  - user: postgres
  - pwd: EMPTY/NOT SET ALREADY FOR DEV
