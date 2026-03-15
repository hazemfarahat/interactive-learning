// Comprehensive Quiz Question Bank for Geography Test

const quizBank = {
    // Category 1: Bundesländer und Hauptstädte (Basic)
    statesAndCapitals: [
        {
            question: "Was ist die Hauptstadt von Baden-Württemberg?",
            correctAnswer: "Stuttgart",
            wrongAnswers: ["Karlsruhe", "Mannheim", "Freiburg"],
            category: "capitals"
        },
        {
            question: "Was ist die Hauptstadt von Bayern?",
            correctAnswer: "München",
            wrongAnswers: ["Nürnberg", "Augsburg", "Regensburg"],
            category: "capitals"
        },
        {
            question: "Stuttgart ist die Hauptstadt von welchem Bundesland?",
            correctAnswer: "Baden-Württemberg",
            wrongAnswers: ["Bayern", "Hessen", "Rheinland-Pfalz"],
            category: "states"
        },
        {
            question: "München ist die Hauptstadt von welchem Bundesland?",
            correctAnswer: "Bayern",
            wrongAnswers: ["Baden-Württemberg", "Hessen", "Sachsen"],
            category: "states"
        },
        {
            question: "Was ist die Hauptstadt von Nordrhein-Westfalen?",
            correctAnswer: "Düsseldorf",
            wrongAnswers: ["Köln", "Dortmund", "Essen"],
            category: "capitals"
        },
        {
            question: "Was ist die Hauptstadt von Niedersachsen?",
            correctAnswer: "Hannover",
            wrongAnswers: ["Braunschweig", "Oldenburg", "Osnabrück"],
            category: "capitals"
        },
        {
            question: "Welche Stadt ist die Hauptstadt von Hessen?",
            correctAnswer: "Wiesbaden",
            wrongAnswers: ["Frankfurt", "Darmstadt", "Kassel"],
            category: "capitals"
        },
        {
            question: "Was ist die Hauptstadt von Sachsen?",
            correctAnswer: "Dresden",
            wrongAnswers: ["Leipzig", "Chemnitz", "Zwickau"],
            category: "capitals"
        }
    ],

    // Category 2: Stadtstaaten (City-States) - EXAM FOCUS
    cityStates: [
        {
            question: "Wie viele Stadtstaaten hat Deutschland?",
            correctAnswer: "3",
            wrongAnswers: ["2", "4", "5"],
            category: "count"
        },
        {
            question: "Welche sind die drei Stadtstaaten?",
            correctAnswer: "Berlin, Hamburg, Bremen",
            wrongAnswers: ["Berlin, Hamburg, München", "Berlin, Bremen, Köln", "Hamburg, Bremen, Frankfurt"],
            category: "identification"
        },
        {
            question: "Ist Berlin ein Stadtstaat?",
            correctAnswer: "Ja",
            wrongAnswers: ["Nein"],
            category: "true-false"
        },
        {
            question: "Ist Hamburg ein Stadtstaat?",
            correctAnswer: "Ja",
            wrongAnswers: ["Nein"],
            category: "true-false"
        },
        {
            question: "Ist Bremen ein Stadtstaat?",
            correctAnswer: "Ja",
            wrongAnswers: ["Nein"],
            category: "true-false"
        },
        {
            question: "Wie heißt der Regierungschef eines Stadtstaates?",
            correctAnswer: "Bürgermeister",
            wrongAnswers: ["Ministerpräsident", "Minister", "Oberbürgermeister"],
            category: "government"
        },
        {
            question: "Welchen Titel hat der Regierungschef von Berlin?",
            correctAnswer: "Bürgermeister",
            wrongAnswers: ["Ministerpräsident", "Bundeskanzler", "Minister"],
            category: "government"
        },
        {
            question: "Welchen Titel hat der Regierungschef von Hamburg?",
            correctAnswer: "Bürgermeister",
            wrongAnswers: ["Ministerpräsident", "Bundeskanzler", "Minister"],
            category: "government"
        }
    ],

    // Category 3: Flächenländer (Area States) - EXAM FOCUS
    areaStates: [
        {
            question: "Wie viele Flächenländer hat Deutschland?",
            correctAnswer: "13",
            wrongAnswers: ["12", "14", "15"],
            category: "count"
        },
        {
            question: "Wie heißt der Regierungschef eines Flächenlandes?",
            correctAnswer: "Ministerpräsident",
            wrongAnswers: ["Bürgermeister", "Minister", "Bundeskanzler"],
            category: "government"
        },
        {
            question: "Welchen Titel hat der Regierungschef von Bayern?",
            correctAnswer: "Ministerpräsident",
            wrongAnswers: ["Bürgermeister", "Bundeskanzler", "Minister"],
            category: "government"
        },
        {
            question: "Welchen Titel hat der Regierungschef von Baden-Württemberg?",
            correctAnswer: "Ministerpräsident",
            wrongAnswers: ["Bürgermeister", "Bundeskanzler", "Minister"],
            category: "government"
        },
        {
            question: "Ist Nordrhein-Westfalen ein Flächenland?",
            correctAnswer: "Ja",
            wrongAnswers: ["Nein"],
            category: "true-false"
        }
    ],

    // Category 4: Bundeshauptstadt - EXAM FOCUS
    capitalCity: [
        {
            question: "Was ist die Bundeshauptstadt von Deutschland?",
            correctAnswer: "Berlin",
            wrongAnswers: ["Bonn", "Hamburg", "München"],
            category: "capital"
        },
        {
            question: "Seit wann ist Berlin die Bundeshauptstadt?",
            correctAnswer: "3. Oktober 1990",
            wrongAnswers: ["1. Januar 1990", "9. November 1989", "1. Juli 1990"],
            category: "history"
        },
        {
            question: "Berlin ist seither die...?",
            correctAnswer: "Bundeshauptstadt",
            wrongAnswers: ["Landeshauptstadt", "Kreisstadt", "Bezirksstadt"],
            category: "terminology"
        }
    ],

    // Category 5: Wiedervereinigung (Reunification) - EXAM FOCUS
    reunification: [
        {
            question: "Wann vereinigten sich die Bundesrepublik und die DDR?",
            correctAnswer: "3. Oktober 1990",
            wrongAnswers: ["9. November 1989", "1. Januar 1990", "1. Juli 1990"],
            category: "date"
        },
        {
            question: "Die Bundesrepublik Deutschland besteht in ihren heutigen Grenzen seit dem...?",
            correctAnswer: "3. Oktober 1990",
            wrongAnswers: ["9. November 1989", "1990", "1991"],
            category: "date"
        },
        {
            question: "Was bedeutet DDR?",
            correctAnswer: "Deutsche Demokratische Republik",
            wrongAnswers: ["Deutsche Demokratie Regierung", "Deutscher Demokratischer Rat", "Deutsche Demokraten Republik"],
            category: "abbreviation"
        },
        {
            question: "Die DDR lag im...?",
            correctAnswer: "Osten",
            wrongAnswers: ["Westen", "Süden", "Norden"],
            category: "geography"
        },
        {
            question: "Die Bundesrepublik lag im...?",
            correctAnswer: "Westen",
            wrongAnswers: ["Osten", "Süden", "Norden"],
            category: "geography"
        },
        {
            question: "Der 3. Oktober ist unser...?",
            correctAnswer: "Nationalfeiertag",
            wrongAnswers: ["Nationalflagge", "Nationalhymne", "Nationalstaat"],
            category: "holiday"
        }
    ],

    // Category 6: National Symbols - EXAM FOCUS
    nationalSymbols: [
        {
            question: "Was hat jeder Staat in Deutschland?",
            correctAnswer: "Eine Nationalflagge, ein Nationalitätenzeichen und eine Nationalhymne",
            wrongAnswers: ["Nur eine Nationalflagge", "Nur eine Nationalhymne", "Nur ein Wappen"],
            category: "symbols"
        },
        {
            question: "Wie viele Bundesländer hat Deutschland?",
            correctAnswer: "16",
            wrongAnswers: ["15", "17", "14"],
            category: "count"
        },
        {
            question: "Jedes Bundesland hat eine...?",
            correctAnswer: "Landeshauptstadt",
            wrongAnswers: ["Bundeshauptstadt", "Kreisstadt", "Bezirksstadt"],
            category: "terminology"
        }
    ],

    // Category 7: Neighboring Countries
    neighboringCountries: [
        {
            question: "Welches Land grenzt an Deutschland im Norden?",
            correctAnswer: "Dänemark",
            wrongAnswers: ["Schweden", "Norwegen", "Polen"],
            category: "neighbors"
        },
        {
            question: "Welches Land grenzt an Deutschland im Osten?",
            correctAnswer: "Polen",
            wrongAnswers: ["Tschechien", "Russland", "Ukraine"],
            category: "neighbors"
        },
        {
            question: "Welches Land grenzt an Deutschland im Süden?",
            correctAnswer: "Österreich",
            wrongAnswers: ["Italien", "Slowenien", "Ungarn"],
            category: "neighbors"
        },
        {
            question: "Wie viele Nachbarländer hat Deutschland?",
            correctAnswer: "9",
            wrongAnswers: ["8", "10", "7"],
            category: "count"
        }
    ],

    // Category 8: Lückentext (Fill in the blanks) - EXAM FOCUS
    fillInBlanks: [
        {
            question: "Die Bundesrepublik Deutschland besteht in seinen heutigen Grenzen seit dem ___.",
            correctAnswer: "3. Oktober 1990",
            wrongAnswers: ["9. November 1989", "1. Januar 1990", "1989"],
            category: "fill-blank"
        },
        {
            question: "Damals vereinigten sich die Bundesrepublik im ___ und die DDR im Osten.",
            correctAnswer: "Westen",
            wrongAnswers: ["Süden", "Norden", "Osten"],
            category: "fill-blank"
        },
        {
            question: "Berlin ist seither die ___.",
            correctAnswer: "Bundeshauptstadt",
            wrongAnswers: ["Landeshauptstadt", "Hauptstadt", "Stadt"],
            category: "fill-blank"
        },
        {
            question: "Der 3. Oktober ist unser ___.",
            correctAnswer: "Nationalfeiertag",
            wrongAnswers: ["Feiertag", "Geburtstag", "Urlaubstag"],
            category: "fill-blank"
        },
        {
            question: "Die Bundesländer bestehen aus großen Flächenstaaten und kleinen ___.",
            correctAnswer: "Stadtstaaten",
            wrongAnswers: ["Ländern", "Städten", "Gemeinden"],
            category: "fill-blank"
        },
        {
            question: "Jedes Bundesland hat eine ___.",
            correctAnswer: "Landeshauptstadt",
            wrongAnswers: ["Bundeshauptstadt", "Hauptstadt", "Stadt"],
            category: "fill-blank"
        }
    ],

    // Category 9: Berlin Specific
    berlinSpecific: [
        {
            question: "Berlin ist gleichzeitig Bundeshauptstadt und...?",
            correctAnswer: "Stadtstaat",
            wrongAnswers: ["Flächenland", "Landkreis", "Bezirk"],
            category: "status"
        },
        {
            question: "Berlin ist die Landeshauptstadt von...?",
            correctAnswer: "Berlin",
            wrongAnswers: ["Brandenburg", "Deutschland", "Sachsen"],
            category: "capital"
        }
    ]
};

export default quizBank;
