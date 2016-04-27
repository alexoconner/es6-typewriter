
/**
 *
 * @param (word (strong), target (element), options {object}, callback)
 */
export default function typewriter(word, target, options, callback) {
    if ( word.length === 0 ) {
        console.info('No vaild word given');
    }

    const targetEl = document.getElementById(target);
    if ( targetEl === null ) {
        console.info('No vaild target given');
    }

    let letterCount = 0;
    let wordLength = word.length;

    function writeLetters() {
        let timeout = window.setTimeout( () => {
            targetEl.innerHTML = targetEl.innerHTML + word.charAt(letterCount);

            letterCount++;
            if ( word.length > letterCount) {
                writeLetters();
            }
            else {
                window.setTimeout( () => {
                    deleteLetters(targetEl.innerHTML);
                    window.clearTimeout(timeout);
                }, 3200);
            }
        }, 200);
    }

    function deleteLetters(word) {
        let timeout = window.setTimeout( () => {
            targetEl.innerHTML = word;

            wordLength--;
            if ( wordLength > 1) {
                deleteLetters( word.substr(0, wordLength - 1) );
            }
            else {
                callback();
                window.clearTimeout(timeout);
            }
        }, 50);
    }

    // kick start
    writeLetters();
}

