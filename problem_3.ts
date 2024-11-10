{
const countWordOccurrences = (sentence: string, word: string): number => {


    // convert the sentence to lowercase then split with spaces
    const lowerSentence = sentence.toLowerCase();
     // convert the word to lowercase 
    const lowerWord = word.toLowerCase();

    const words = lowerSentence.split(' ');
    
    return words.filter(word => word === lowerWord).length;
};

console.log(countWordOccurrences("I love typescript", "typescript")); 

}