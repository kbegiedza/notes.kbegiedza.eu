# PostgreSQL Cheat Sheet

### Connect to database:
```bash
psql -h <host> -d <database> -U <user> -W
```

- `-h` - database adress
- `-d` - database to connect to
- `-U` - user
- `-W` - force to ask for password

### List all databases:
```
\l
```

### Connect to different database:
```
\c <database>
```

### List tables in database:
```
\dt
```

### Describe table:
```
\d
```

- `\d+` - to show even more info

