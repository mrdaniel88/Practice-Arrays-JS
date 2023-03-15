// Add your code here
function lyricsGenerator(lyric) {
    let transformation = lyric.map(number => {
        if (number == 0) {
            number = 'Boom';
        } else if (number == 1) {
            number = 'Drop the base';
        }
    });
    return transformation;
}


// Don't change anything bellow this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))