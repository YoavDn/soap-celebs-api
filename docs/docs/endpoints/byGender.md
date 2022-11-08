# By Gender
`https://soapcelebsapi.com/api/celeb/${gender}`
This will return an array of all the soap celebs with the desire gender. You can choose the number of celebs with the `limit` param.

For example: `https://soapcelebsapi.com/api/celeb/female?limit=3` will return an list of three female soap celebs

### json 
``` json 
[
  {
    "_id": "6364f58dbfd1c3fc6a400c85",
    "name": "Kylie Jenner",
    "imgUrl": "https://res.cloudinary.com/soap-celebs/image/upload/v1667480275/ce8ae1ktn9bom7np7ylu.png",
    "scent": "Bondi Breeze",
    "gender": "female",
  },
  {
    "_id": "6367aec7ee975ea8e0c35a6e",
    "name": "Emma Stone",
    "imgUrl": "https://res.cloudinary.com/soap-celebs/image/upload/v1667561750/kn8hegdqvufuwhl98jpn.png",
    "scent": "Luv Spell",
    "gender": "female",
  },
  {
    "_id": "6367af27ee975ea8e0c35a71",
    "name": "Emma Watson",
    "imgUrl": "https://res.cloudinary.com/soap-celebs/image/upload/v1667561340/ujuunetoxskjvfiyscec.png",
    "scent": "Black Raspberry Vanilla",
    "gender": "female",
  }
]

```

## Query params
| Param | Description |
| :---- | :---------- |
| limit | Limit the result to a specific number of celebs


Not adding the query params will result all soap celebs with the target gender