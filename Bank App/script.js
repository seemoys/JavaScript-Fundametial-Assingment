let users=[
    {name:"sanu",balance:5000},
    {name:"don",balance:7000},
    {name:"bunty",balance:9000},
    {name:"billa",balance:11000},
    {name:"buthru",balance:10000}
    ];

    function deposit(name,amount){
        for(let i=0;i<users.length;i++){
            if(users[i].name===name){
                users[i].balance+=amount;
            }
        }
        return users;
    }
    
    function withdraw(name,amount){
        for(let i=0;i<users.length;i++){
            if(users[i].name===name){
                users[i].balance-=amount;
            }
        }
        return users;
    }

    console.log(deposit("don",5000));
    console.log(withdraw("sanu",5000));
  