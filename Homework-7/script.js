function copy(obj1, obj2){
    for (let key in obj2){
        obj1[key] = obj2[key];
    }
};

function isEqual(obj1, obj2){
    if ( JSON.stringify(obj1) === JSON.stringify(obj2) ){
        return true;
    }
    else{
        return false;
    }
};

let origin = {
    name : "Andrew",
    age : 20,
    isAdmin : true
};

let target = {};

copy(target, origin);
for (let key in target){
    console.log("Ключ: " + key + " значение: " + target[key])
};

console.log(isEqual(target, origin));
