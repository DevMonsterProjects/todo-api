# Create Todo

This route will create a new todo with given title and isCompleted if given.

URL : `/api/v1/todo`

Method : `POST`

## Data Example
```javascript
{
    title : "Some Title",
    isCompleted:? false
}
```

## Success Response
---
Code : `201`

Content Example
```javascript
{
    status : "success",
    message: "Todo Created",
    data: {
        todo: {
            title : "Some Title",
            isCompleted : false
        },
    },  
    
}
```
## Error Response
---
Code : `500`

Content Example
```javascript
{
    status: "fail",
    message: "Some Error Occured please reffer the error",
    err : {},
}
```
