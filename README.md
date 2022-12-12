# Soap Celebs

### **Please don't take this seriously**

**No more rick and morty/recipe boring apis!**
introducing the Soap celebs API - the api for getting celebs that looks like soap
I'm still working on the images and the api is not yet ready.

in the meantime here's an image to know what to expect

![Soap Cruise](https://res.cloudinary.com/soap-celebs/image/upload/v1667481607/dywe2rerjvq78slsnlkm.png)

Read The [Docs](https://soap-celebs-api.vercel.app/)

Base url: https://soap-celebs-api-production.up.railway.app/api

The base url contains information about all available API's resources. All requests are GET requests and go over https. All responses will return data in json.

```
GET  https://soap-celebs-api-production.up.railway.app/api/
```

```json
{
  "celebs": "https://soap-celebs-api-production.up.railway.app/api/celeb",
  "randomCeleb": "https://soap-celebs-api-production.up.railway.app/api/celeb/random",
  "maleCeleb": "https://soap-celebs-api-production.up.railway.app/api/celeb/male",
  "femaleCeleb": "https://soap-celebs-api-production.up.railway.app/api/celeb/female",
  "celebsList": "https://soap-celebs-api-production.up.railway.app/api/celeb/list"
}
```
