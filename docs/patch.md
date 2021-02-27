# Update Todo

This route will allow to change the isCompleted property of a todo
> This Api doesn't allow you to edit the title of the todo but only the fact if it is completed or still incomplete

URL : `/api/v1/todo/:id`

Method : `PATCH`

## Data Example
```javascript
{
    isCompleted: true
}
```

## Success Response
---
Code : `200`

Content Example
```javascript
{
    status : "success",
    message: "Todo Updated",
    data: {
        todo: {
            isCompleted : true
        },
    },  
    
}
```
## Error Response
---
Code : `400`

The request body of this request is required to have a isCompleted property of boolean to update the the state of this specific todo.

Content Example
```javascript
{
    status: "fail",
    message: "Request Body is not acceptable!",
    err : {},
}
```

Code : `500`

Content Example
```javascript
{
    status: "fail",
    message: "Some Error Occured please reffer the error",
    err : {},
}
```
