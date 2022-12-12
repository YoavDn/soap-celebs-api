# Introduction

This documentation will help you get familiar with the resources of the Soap Celebs API and show you how to make different queries, so that you can get the most out of it.

**Base url**: `https://soap-celebs-api-production.up.railway.app/api`

The base url contains information about all available API's resources. All requests are GET requests and go over https. All responses will return data in json.

```
GET  https://soap-celebs-api-production.up.railway.app/api
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
