# Rick and Morty Tracker

Check out all the Rick and Morty episodes from seasons 1 through 4 and put them in your favorites. From your favorites page, you can check out all the characters in each episode.

### Installation Instructions

Clone the following repos and follow instructions:

- Backend: [rick_and_morty_api](https://github.com/jazminmatos/rick_and_morty_api)
  - Run bundle install
  - Start the PG database server: /usr/local/opt/postgresql/bin/pg_ctl -D /usr/local/var/postgres -l logfile start
  - Run rails db:create
  - Run rails db:migrate
  - Run rails s to start the Rails server
  - PostgreSQL troubleshooting:
    - Stop the PG database server: pg_ctl stop -D /usr/local/var/postgres -m fast
    - See all the servers that are running: ps -ef | grep postgres
    - Kill servers: brew services stop postgres
- Frontend: [rick_and_morty_client](https://github.com/jazminmatos/rick_and_morty_client)
  - Run npm install
  - Run npm start

### Contributer's Guide

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License

This is available as open source under the terms of the [MIT License](https://choosealicense.com/licenses/mit/).
