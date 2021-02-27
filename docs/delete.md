# Delete Todo

This route will delete a todo in the database using given id

URL : `/api/v1/todo/:id`

Method : `DELETE`

## Success Response
---
Code : `200`

Content Example
```javascript
{
    status : "success",
    message : "Todos is deleted",
    data : {
        todo : {
            title : "Some title",
            isComplete : false/true
        },
    }
    
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
