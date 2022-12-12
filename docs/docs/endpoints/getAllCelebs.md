# Get all celebs

## All Celebs

`https://soap-celebs-api-production.up.railway.app/api/celeb`

result

```json
[
  {
    "_id": "63643f8803f788de9486ded2",
    "name": "Brad Pitt",
    "imgUrl": "https://res.cloudinary.com/soap-celebs/image/upload/v1667481618/ygeduphia6cqasyqxpuc.png",
    "scent": "Lavender",
    "gender": "male",
  },
  {
    "_id": "6364e3144b9157bd6e4acb79",
    "name": "Tom Cruise",
    "imgUrl": "https://res.cloudinary.com/soap-celebs/image/upload/v1667481607/dywe2rerjvq78slsnlkm.png",
    "scent": "Bamboo and Coconut",
    "gender": "male",
  },
  ...more
]

```

## Quering Celebs

quering the celebs has two optional params

| Param | Description                                  |
| :---- | :------------------------------------------- |
| name  | getting the celebs by it's name              |
| limit | Limit the result a specific number of celebs |

Not adding the query params will result all soap celebs
