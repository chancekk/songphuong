


function RoleOption () {
    
    fetch ('https://api.github.com/users');
    .then ( respone => respone.json())
    .then (data => data.map(el =>el.type))
    .then (data => console.log(data.filter(function(item,pos){
        return( data.IndexOf(item)===pos);

    })))
    
   
   



}