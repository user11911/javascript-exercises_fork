const removeFromArray = function(...args) {
    const array = args[0];

    const eliminations = args.slice(1);

    let to_return = array;

    for (let member of to_return){
        for (let elimination of eliminations){
            if (member === elimination){
                array.splice(to_return.indexOf(member), 1);
            }
        }
    }
    
    return to_return;
};

// takes an array and after, all the things which user wants to delete from that array. returns the array less all the things which were wanted to be deleted. does so trough a for of loop in  the array and a for of loop for the required eliminations. returns a new modified array.

// Do not edit below this line
// module.exports = removeFromArray;
