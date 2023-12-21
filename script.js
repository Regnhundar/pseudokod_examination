// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock

/*

När någon trycker på knappen "Räkna" anropas funktionen calculation()

function calculation()

    SET variabel sum = användarinput
    SET variabel friends = användarinput
    SET variabel tips = användarinput

    //number nedan är inte en variabel utan demonstrerar att användarinput ska vara ett number.
    IF (sum !== number || friends !== number || tips !== number)
        PRINT: Du. Vi arbetar med siffror här... gör om, gör rätt.
    END IF
    ELSE IF (sum < 1 || friends < 1)
        PRINT: Sikta högre än 0.
    END IF
    ELSE
        SET variabel share = (sum*(1+tips))/friends
        PRINT: Varje person ska betala { share }
    END ELSE

end function

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

play()

function play()

    SET variable dictionary = [..., ..., ...] // Innehåller ALLA ord i det engelska språket
    SET variable startingWord = user input
    SET variable endingWord = user input
    SET variable gameOn = false
    SET variable gameOver = false
    SET turn = 1
    
    WHILE(gameOn === false)
        IF (startingWord doesn't exist in dictionary) //Existerar i variabeln "dictionary" vill säga.
            PRINT "{ startingWord } is not in the english dictionary."
            ABORT and ask for new user input
        END IF
        ELSE IF (length of endingWord !== length of startingWord)
            PRINT "Your words need to have the same amount of letters"
            ABORT and ask for new user input
        END IF
        ELSE IF (endingWord doesn't exist in dictionary) //Existerar i variabeln "dictionary" vill säga.
            PRINT "{ endingWord } is not in the english dictionary."
            ABORT and ask for new user input
        END IF
        ELSE IF (startingWord === endingWord)
            PRINT "You need to use different words, smartass."
            ABORT and ask for new user input
        END IF
        ELSE 
            gameOn = true
        END ELSE
    END WHILE

    WHILE(gameOn === true && gameOver === false)

        SET newWord = user input

        IF (length of newWord !== length of startingWord)
            PRINT "Your words need to have the same amount of letters"
            ABORT and ask for new user input
        END IF
        ELSE IF (newWord doesn't exist in dictionary) //Existerar i variabeln "dictionary" vill säga.
            PRINT "{ newWord } is not in the english dictionary."
            ABORT and ask for new user input
        END IF
        ELSE IF (isOneLetterApart(newWord, startingWord) === false)
            PRINT "You are only allowed to change one letter at a time."
            ABORT and ask for new user input
        ELSE IF (newWord === endingWord)
            PRINT "Nicely done! Completed in round { turn }"
            gameOver = true
        END IF
        ELSE
            SET startingWord = newWord
            turn++
        END ELSE
    END WHILE

end function


function isOneLetterApart(wordOne, wordTwo)
    SET variable diffCount = 0


    return diffCount === 1 // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/