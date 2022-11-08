# Introduction
This documentation will help you get familiar with the resources of the Soap Celebs API and show you how to make different queries, so that you can get the most out of it.

**Base url**: `https://soapcelebsapi.onrender.com/api`

The base url contains information about all available API's resources. All requests are GET requests and go over https. All responses will return data in json.


```  
GET  https://soapcelebsapi.com/api
```

``` json 
{
  "celebs": "https://soapcelebsapi.onrender.com/api/celeb",
  "randomCeleb": "https://soapcelebsapi.onrender.com/api/celeb/random",
  "maleCeleb": "https://soapcelebsapi.onrender.com/api/celeb/male",
  "femaleCeleb": "https://soapcelebsapi.onrender.com/api/celeb/female",
  "celebsList": "https://soapcelebsapi.onrender.com/api/celeb/list"
}
```