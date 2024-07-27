// normal object function
user = {
    name:'Eswar',
    age:24,
    getName : function(){
        console.log('hello ' + this.name );
    }
}
user.getName()

// accessing object1 function in object2
user2 = {
    name:'Keerthini',
    age:11
}

// using bind method
var x = user.getName.bind(user2)
x();

// using call and apply method
user.getName.call(user2)
user.getName.apply(user2)


// PASSIND ARGUMENT IN BIND ,CALL , APPLY function
obj1 = {
    name:'Eswar',
    age:23,
    getName2 : function(sirname){
        console.log("Hello "+this.name + ' ' + sirname);
    }
}

obj2 = {
    name : 'keerthini',
    age : 13
}

// bind method
var y = obj1.getName2.bind(obj2,'S');
y()

// call and apply method
obj1.getName2.call(obj2,'S');
obj1.getName2.apply(obj2,['s']);