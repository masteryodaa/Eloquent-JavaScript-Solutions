// Iterable groups

// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.




class Group{
    constructor(){
        this.group = [];
    }

    add(x){
        if(!this.has(x)){
            this.group.push(x);
        }
        
    }

    delete(x){
        this.group = this.group.filter(e => e !== x);
    }

    has(x){
        return this.group.includes(x);
    }

    static from(obj){
        let newgroup = new Group;
        for(let i=0; i<=obj.length-1; i++){
            newgroup.add(obj[i]);
        }
        return newgroup;
    }

    [Symbol.iterator](){
        return new GroupIterate(this)
    }
}

class GroupIterate{
    constructor(newgroup){
        this.newgroup = newgroup;
        this.position = 0;
    }

    next(){
        if(this.position>=this.newgroup.group.length){
            return {done : true};
        }
        else{
            let result = {
                value : this.newgroup.group[this.position],
                done : false
            };
            this.position++;
            return result;
        }
    }
}



for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
  // → a
  // → b
  // → c
