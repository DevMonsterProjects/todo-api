# Get Todos

This route will get all the todos in the database

URL : `/api/v1/todo`

Method : `GET`

## Success Response
---
Code : `200`

Content Example
```javascript
{
    status : "success",
    message : "Todos Found",
    data : {
        todos : [
            {
            title : "Some title",
            isComplete : false/true
            },
        ]
    }
    
}
```
Code : `204`

Content Example
```javascript
{
    status : "success",
    message : "No Todos in database",
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
