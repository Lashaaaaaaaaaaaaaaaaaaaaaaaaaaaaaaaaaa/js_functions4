function replaceString(string, valueToReplace, valueToReplaceWith) {
    const newString = string.split(valueToReplace).join(valueToReplaceWith);
    return newString;
}


const string = "Hello, world!";
const valueToReplace = "world";
const valueToReplaceWith = "universe";

const result = replaceString(string, valueToReplace, valueToReplaceWith);
console.log(result); // "Hello, universe!"





function capitalizeWords(sentence) {
    const words = sentence.split(' ');

    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    });

    return capitalizedWords.join(' ');
}

const sentence1 = "hello world! it's a wonderful day";
console.log(capitalizeWords(sentence1)); // "Hello World! It's A Wonderful Day"






function usersAge(users) {
    return users.sort((a, b) => a.age - b.age);
}

const users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
    { name: 'Lola', age: 25 }
];

const sortedUsers = usersAge(users);
console.log(sortedUsers);
// [
//     { name: 'Saba', age: 20 },
//     { name: 'Lola', age: 25 },
//     { name: 'Lasha', age: 30 }
// ]
