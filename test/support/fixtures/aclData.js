
module.exports = function(){
    return [
        {
            "model" : "Author",
            "property" : "*",
            "accessType" : "*",
            "permission" : "ALLOW",
            "principalType" : "ROLE",
            "principalId" : "admin"
        },
        {
            "model" : "Author",
            "property" : "*",
            "accessType" : "READ",
            "permission" : "ALLOW",
            "principalType" : "ROLE",
            "principalId" : "reader"
        }
    ]
}
