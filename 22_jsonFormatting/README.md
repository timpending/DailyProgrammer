# JSON Formatting

When pulling relational data out (i.e. when doing a join query), the information is flat, meaning, it does not follow an object-like model. To add an object, first the relational data needs to be unpacked and then restructured to contain nested objects.

This is what ORM's solve.

### Task

Create a function that nicely formats a JSON from:

```
{
    "books": [
    {
        "id": 1,
        "name": "You don't know JS",
        "author_id": 1,
        "author_name": "Bonnie"
    },
    {
        "id": 1,
        "name": "You don't know JS",
        "author_id": 2,
        "author_name": "Eiseman"
    },
}
```

to:

```
{
    "books": [
    {
        "id": 1,
        "name": "You don't know JS",
        "author": [
            {
                "id": 1,
                "name": "Bonnie"
            },
            {
                "id": 2,
                "name": "Eiseman"
            }
        ]
    },
    ]
}
```

Use the JSON that can be found in books.json to format it from https://salty-thicket-7816.herokuapp.com/books/unformatted to https://salty-thicket-7816.herokuapp.com/books/
