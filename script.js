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
    SET variable turn = 1
    
    WHILE(gameOn === false)
        IF (startingWord doesn't exist in dictionary) //Existerar i variabeln "dictionary" vill säga.
            PRINT "{ startingWord } is not in the english dictionary."
            ABORT and ask for new user input
        END IF
        ELSE IF (length of endingWord !== length of startingWord) //Om orden inte har samma längd.
            PRINT "Your words need to have the same amount of letters"
            ABORT and ask for new user input
        END IF
        ELSE IF (endingWord doesn't exist in dictionary) //Existerar i variabeln "dictionary" vill säga.
            PRINT "{ endingWord } is not in the english dictionary."
            ABORT and ask for new user input
        END IF
        ELSE IF (startingWord === endingWord) // Om användaren använt samma ord som start och slut.
            PRINT "You need to use different words, smartass."
            ABORT and ask for new user input
        END IF
        ELSE 
            gameOn = true //Triggar nästa while loop.
        END ELSE
    END WHILE

    WHILE(gameOn === true && gameOver === false)

        SET newWord = user input

        IF (length of newWord !== length of startingWord) //Om orden inte har samma längd.
            PRINT "Your words need to have the same amount of letters"
            ABORT and ask for new user input
        END IF
        ELSE IF (newWord doesn't exist in dictionary) //Existerar i variabeln "dictionary" vill säga.
            PRINT "{ newWord } is not in the english dictionary."
            ABORT and ask for new user input
        END IF
        ELSE IF (isOneLetterApart(newWord, startingWord) === false) //Anropa funktion som svarar sant om enbart en bokstav ändrats. Om den svarar falskt har alltså fler bokstäver ändrats.
            PRINT "You are only allowed to change one letter at a time."
            ABORT and ask for new user input
        ELSE IF (newWord === endingWord) // Målet av spelet är uppnått.
            PRINT "Nicely done! Completed in round { turn }"
            gameOver = true // För att stoppa loopen. (Jag valde att lägga till en ny variabel för andra loopen då jag antar att toggla "gameOn === false" skulle trigga första loopen igen.)
        END IF
        ELSE
            SET startingWord = newWord // Om du inte fått bingo så har du ett nytt ord att utgå från.
            turn++ // +1 till din försöksräknare.
        END ELSE
    END WHILE

end function


function isOneLetterApart(wordOne, wordTwo)

    SET variable diffCount = 0

    FOR(every letter in variable wordOne)
        IF (wordOne[index] !== wordTwo[index]) //Jämför bokstav för bokstav. Om de är olika öka diffCount med 1.
        diffCount++ // +1 för varje bokstav som skiljer sig.
        END IF
    END FOR

    return diffCount === 1 // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/