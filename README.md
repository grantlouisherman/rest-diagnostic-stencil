# rest-diagnostic-stencil

File Type:

You can use either a JSON file or a Yaml file, but it has to be in the format below. The calls that you want to test have to be on the "calls" key that has an Array of values.  The keys inside of each call are:

```
Method: GET, POST, PUT
Headers: any key value headers you want to pass in
Url: endpoint you want to test
Body: This is for PUT or POST calls

```

## JSON
```
{
  "calls": [
    {
      "headers": {},
      "url": "https://jsonplaceholder.typicode.com/posts",
      "body": "",
      "method": "GET"
    },
    {
      "headers": {
        "account_token": "MOCK"
      },
      "url": " https://jsonplaceholder.typicode.com/posts",
      "body": "",
      "method": "GET"
    }
  ]
}
```
## Yaml
```
---
calls:
  - headers: !!map {"Content-Type": "application/json"}
    "url": "https://jsonplaceholder.typicode.com/posts"
    "method": "GET"
  - headers: !!map {"Content-Type": "application/json"}
    "url": "https://jsonplaceholder.typicode.com/posts"
    "method": "GET"
 ```
 
 Once you upload the file you should be able to see all of the items populated in application.
 
 You can manipulate the values based on what you see. Once you hit run you have to wait for them to finish and once they are done you will see a `Download Report` button appear. 
 
 You can then download the outcome of the running all of the calls. A typical report will look like this:
 
 ```
 [
  {
    "headers": {
      "Content-Type": "application/json"
    },
    "url": "https://jsonplaceholder.typicode.com/posts",
    "method": "GET",
    "fileId": "0",
    "response": {
      "status": 200,
      "responseBody": [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
 
 ```
 
 It will have all of the aspects of the call as well as the body and the call status. 
