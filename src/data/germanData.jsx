import React from 'react'

export const grammarSections = [
  {
    title: "1️⃣ Das Perfekt (Present Perfect)",
    content: (
      <>
        <p><strong>Definition:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            The <strong>Perfekt</strong> is the past tense most commonly used in everyday spoken German to describe actions or events that have been completed.
          </li>
          <li>
            It is formed with an auxiliary verb (<strong>haben</strong> or <strong>sein</strong>) plus the past participle (<strong>Partizip II</strong>) of the main verb.
          </li>
          <li>
            <em>Example:</em> Ich habe Deutsch gelernt. (<em>I have learned German.</em>)
          </li>
          <li>
            <strong>Tip:</strong> Although the action is in the past, the Perfekt often has a link to the present moment, making it very common in conversation.
          </li>
        </ul>
        <p><strong>Choosing the Auxiliary: "haben" vs. "sein"</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>haben</strong> is used with most verbs, especially those that do not indicate movement or a change in state (e.g., <em>gelernt, gemacht, gehört</em>).
          </li>
          <li>
            <strong>sein</strong> is used with verbs that express motion or a change of state (e.g., <em>gegangen, gefahren, gekommen</em>). Only verbs that show a clear change from one state or location to another use <strong>sein</strong>.
          </li>
          <li>
            <strong>Exceptions:</strong> Some verbs may be context-dependent, so be sure to consider the meaning in each situation.
          </li>
        </ul>
        <p><strong>Formation of the Partizip II:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Regular verbs:</strong> Add <code>ge-</code> + verb stem + <code>-(e)t</code> (e.g., <em>lernen → gelernt</em>, <em>machen → gemacht</em>).
          </li>
          <li>
            <strong>Irregular verbs:</strong> Add <code>ge-</code> + modified stem + <code>-en</code> (e.g., <em>schreiben → geschrieben</em>, <em>essen → gegessen</em>). These often have vowel changes.
          </li>
          <li>
            <strong>Separable verbs:</strong> Insert <code>ge-</code> between the prefix and the verb stem (e.g., <em>aufräumen → aufgeräumt</em>).
          </li>
          <li>
            <strong>Inseparable verbs:</strong> Do <em>not</em> add the <code>ge-</code> prefix (e.g., <em>besuchen → besucht</em>, <em>erklären → erklärt</em>).
          </li>
          <li>
            <strong>Verbs ending in -ieren:</strong> Omit the <code>ge-</code> and add <code>-t</code> (e.g., <em>studieren → studiert</em>).
          </li>
        </ul>
        <p><strong>Additional Considerations:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Time expressions (like <em>schon</em> or <em>bereits</em>) are often used with the Perfekt to emphasize completion.
          </li>
          <li>
            In regions such as Southern Germany and Austria, the Perfekt is used even in formal written contexts.
          </li>
        </ul>
      </>
    )
  },
  {
    title: "2️⃣ Das Präteritum (Simple Past)",
    content: (
      <>
        <p><strong>Definition:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            The <strong>Präteritum</strong> is primarily used in written German (narratives, literature, or news reports) to describe past events.
          </li>
          <li>
            In everyday conversation, speakers tend to use the Perfekt, except for a few high-frequency verbs.
          </li>
          <li>
            This tense helps create a formal or storytelling tone by distancing the narrative from the present.
          </li>
        </ul>
        <p><strong>Conjugation Rules:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Regular (weak) verbs:</strong> Add endings <code>-te, -test, -te, -ten, -tet, -ten</code> (e.g., <em>lernen → ich lernte, du lerntest, er/sie/es lernte</em>).
          </li>
          <li>
            <strong>Irregular (strong) verbs:</strong> Often involve a stem vowel change and have less predictable endings (e.g., <em>gehen → ich ging, du gingst, er/sie/es ging</em>).
          </li>
          <li>
            <strong>Modal verbs:</strong> Generally lose their umlaut in the Präteritum (e.g., <em>können → ich konnte, du konntest</em>).
          </li>
          <li>
            <strong>Special cases:</strong>
            <ul className="list-disc ml-6 list-inside">
              <li>
                <strong>sein:</strong> ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren
              </li>
              <li>
                <strong>haben:</strong> ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten
              </li>
            </ul>
          </li>
        </ul>
        <p><strong>When to Use Perfekt vs. Präteritum:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Everyday spoken language:</strong> Use the Perfekt (e.g., <em>Ich habe gelernt</em>).
          </li>
          <li>
            <strong>Written language and storytelling:</strong> Use the Präteritum (e.g., <em>Ich lernte</em>), especially in narratives.
          </li>
          <li>
            <strong>Note:</strong> Some verbs like <em>sein</em>, <em>haben</em>, and modal verbs often appear in the Präteritum even in conversation.
          </li>
        </ul>
      </>
    )
  },
  {
    title: "3️⃣ Strong & Weak Verb Conjugations",
    content: (
      <>
        <p><strong>Regular (Weak) Verbs (schwache Verben):</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            These verbs maintain a stable stem and use predictable endings across tenses.
          </li>
          <li>
            <em>Examples:</em> <em>lernen → ich lernte</em>; <em>glauben → er glaubte</em>.
          </li>
          <li>
            <strong>Note:</strong> Their regularity makes them easier to learn and recognize.
          </li>
        </ul>
        <p><strong>Irregular (Strong) Verbs (starke Verben):</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            These verbs often feature a vowel change (called <em>Ablaut</em>) in the stem, resulting in less predictable conjugation patterns.
          </li>
          <li>
            <em>Examples:</em> <em>gehen → ich ging</em>; <em>essen → ich aß</em>; <em>finden → wir fanden</em>.
          </li>
          <li>
            <strong>Tip:</strong> Learning the most common strong verbs helps you recognize their patterns and exceptions.
          </li>
        </ul>
        <p><strong>Mixed Verbs (Mischverben):</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Mixed verbs combine features of both strong and weak verbs: they take weak endings while undergoing a stem vowel change.
          </li>
          <li>
            <em>Examples:</em> <em>denken → ich dachte</em>; <em>bringen → ich brachte</em>.
          </li>
          <li>
            <strong>Practice:</strong> Extra practice is useful because these verbs don’t follow a single pattern.
          </li>
        </ul>
      </>
    )
  },
  {
    title: "4️⃣ Separable & Inseparable Prefix Verbs in the Past Tense",
    content: (
      <>
        <p><strong>Separable Prefix Verbs (Trennbare Verben):</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            In the Perfekt, the prefix detaches and is placed at the end of the sentence after the past participle.
          </li>
          <li>
            <em>Examples:</em> <em>aufräumen → Ich habe <strong>aufgeräumt</strong></em>; <em>abholen → Wir haben <strong>abgeholt</strong></em>.
          </li>
          <li>
            <strong>Hint:</strong> Common separable prefixes include <code>auf-, ab-, ein-, mit-</code>.
          </li>
        </ul>
        <p><strong>Inseparable Prefix Verbs (Untrennbare Verben):</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            These verbs do not add the <code>ge-</code> prefix when forming the past participle.
          </li>
          <li>
            <em>Examples:</em> <em>besuchen → Ich habe <strong>besucht</strong></em>; <em>erklären → Sie hat <strong>erklärt</strong></em>.
          </li>
          <li>
            <strong>Common inseparable prefixes:</strong> <code>be-, er-, ver-, ent-, ge-</code> (when part of the root) are typical.
          </li>
        </ul>
      </>
    )
  },
  {
    title: "5️⃣ Das Plusquamperfekt (Past Perfect)",
    content: (
      <>
        <p><strong>Definition:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            The <strong>Plusquamperfekt</strong> describes an action that was completed before another past event. It sets the stage by establishing a clear time sequence.
          </li>
          <li>
            It is formed with the simple past form of the auxiliary (<strong>hatte</strong> or <strong>war</strong>) plus the past participle of the main verb.
          </li>
          <li>
            <em>Example:</em> Ich hatte Deutsch gelernt, bevor ich nach Berlin zog. (<em>I had learned German before I moved to Berlin.</em>)
          </li>
        </ul>
        <p><strong>Key Points:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            The auxiliary verb is chosen by the same rules as in the Perfekt (based on movement or change of state).
          </li>
          <li>
            Time conjunctions such as <em>bevor</em>, <em>nachdem</em>, or <em>als</em> are often used to clearly sequence events.
          </li>
          <li>
            <strong>Usage:</strong> This tense is particularly useful in narratives to indicate which past event occurred first.
          </li>
        </ul>
      </>
    )
  },
  {
    title: "6️⃣ Reflexive Verben im Perfekt (Reflexive Verbs in the Perfect Tense)",
    content: (
      <>
        <p><strong>Definition:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Reflexive verbs are used when the subject performs an action on itself, requiring a reflexive pronoun (mich, dich, sich, etc.).
          </li>
          <li>
            In the Perfekt, these verbs typically use <strong>haben</strong> as the auxiliary verb.
          </li>
          <li>
            <em>Example:</em> Ich habe mich gefreut. (<em>I was glad / I enjoyed myself.</em>)
          </li>
        </ul>
        <p><strong>Additional Tips:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Even if the reflexive verb is separable, the reflexive pronoun must always follow the auxiliary verb (e.g., <em>Ich habe mich umgezogen</em>).
          </li>
          <li>
            Do not separate the reflexive pronoun from the main verb in the perfect tense.
          </li>
          <li>
            If used with modal verbs, make sure the structure is correctly maintained.
          </li>
        </ul>
      </>
    )
  }
];

export const quizQuestions = [
  {
    question: "Which auxiliary verb is generally used with verbs indicating motion or a change of state in the Perfekt?",
    options: ["haben", "sein", "both are possible"],
    correctIndex: 1,
    explanation: "Verbs that denote movement or a change in state (e.g., 'gehen', 'kommen') are typically paired with 'sein'."
  },
  {
    question: "Which past tense is predominantly used in everyday spoken German?",
    options: ["Präteritum", "Perfekt", "Futur"],
    correctIndex: 1,
    explanation: "In spoken German, the Perfekt is favored over the Präteritum except for a few high-frequency verbs."
  },
  {
    question: "Choose the correct form for 'I went home' in everyday spoken German:",
    options: [
      "Ich bin nach Hause gegangen",
      "Ich habe nach Hause gegangen",
      "Ich war nach Hause gegangen"
    ],
    correctIndex: 0,
    explanation: "The correct form is 'Ich bin nach Hause gegangen' because the verb 'gehen' uses 'sein' as its auxiliary."
  },
  {
    question: "Which category of verbs typically drops the umlaut in the Präteritum conjugation?",
    options: ["Mixed verbs", "Modal verbs", "Separable verbs"],
    correctIndex: 1,
    explanation: "Modal verbs generally lose their umlaut when conjugated in the Präteritum."
  },
  {
    question: "What is the correct structure for forming the Plusquamperfekt (Past Perfect)?",
    options: [
      "Present auxiliary (haben/sein) + Partizip II",
      "Simple past form (hatte/war) + Partizip II",
      "Wurde + Partizip II + haben/sein"
    ],
    correctIndex: 1,
    explanation: "The Plusquamperfekt is formed with the simple past of the auxiliary (hatte/war) plus the past participle."
  },
  {
    question: "Identify the correctly formed reflexive verb in the Perfekt:",
    options: [
      "Ich habe mich gefreut",
      "Ich bin mich gefahren",
      "Ich habe dich getroffen"
    ],
    correctIndex: 0,
    explanation: "'Ich habe mich gefreut' is correct. Reflexive verbs in the Perfekt always follow the pattern: auxiliary (haben) + reflexive pronoun + Partizip II."
  },
  {
    question: "Which sentence best demonstrates the use of Plusquamperfekt to indicate that one past event occurred before another?",
    options: [
      "Ich war müde, als ich joggen ging",
      "Ich hatte gegessen, bevor ich ins Kino ging",
      "Ich ging ins Kino, wenn es regnete"
    ],
    correctIndex: 1,
    explanation: "The sentence 'Ich hatte gegessen, bevor ich ins Kino ging' clearly shows that eating occurred before going to the cinema."
  },
  {
    question: "Which of the following verbs always uses the auxiliary 'sein' in the Perfekt due to indicating movement?",
    options: ["schwimmen", "reden", "machen"],
    correctIndex: 0,
    explanation: "The verb 'schwimmen' implies movement and thus typically uses 'sein' in the Perfekt."
  }
];

export const alsWennQuestions = [
  { sentence: "_____ ich 10 Jahre alt war, zog ich um.", options: ["Als", "Wenn"], correct: 0 },
  { sentence: "_____ es regnet, bleiben wir zuhause.", options: ["Als", "Wenn"], correct: 1 },
  { sentence: "_____ ich gestern ankam, war es schon dunkel.", options: ["Als", "Wenn"], correct: 0 },
  { sentence: "_____ du immer so früh aufstehst, kannst du den Bus erwischen.", options: ["Als", "Wenn"], correct: 1 }
];

export const sentenceReorderData = [
  { correctOrder: ["weil", "der", "Regen", "heute", "stark", "fällt"] },
  { correctOrder: ["obwohl", "er", "krank", "ist", "geht", "er", "zur", "Arbeit"] }
];

export const caseCompletionData = [
  { sentence: "Er geht ___ Schule.", options: ["in die", "in der"], correct: 0, explanation: "Movement requires the accusative case: 'in die Schule'." },
  { sentence: "Ich helfe ___ Mann.", options: ["den", "dem"], correct: 1, explanation: "The verb 'helfen' requires the dative case, so it is 'dem Mann'." },
  { sentence: "Er bringt ___ Ball.", options: ["den", "dem"], correct: 0, explanation: "The direct object of 'bringen' takes the accusative case: 'den Ball'." },
  { sentence: "Ich gebe ___ Kind ein Geschenk.", options: ["dem", "den"], correct: 0, explanation: "Giving to someone requires the dative case for the indirect object: 'dem Kind'." }
];

export const prepositionSelectData = [
  { sentence: "Sie wartet ___ den Bus.", options: ["auf", "an"], correct: 0, explanation: "The verb 'warten' in this context uses the preposition 'auf'." },
  { sentence: "Er wohnt ___ München.", options: ["in", "bei"], correct: 0, explanation: "Living in a city typically uses the preposition 'in'." },
  { sentence: "Ich gehe ___ den Supermarkt.", options: ["in den", "im"], correct: 0, explanation: "Movement to a place uses the accusative case, so 'in den Supermarkt' is correct." },
  { sentence: "Sie bleibt ___ Hause.", options: ["zu", "bei"], correct: 0, explanation: "The common phrase is 'zu Hause', meaning 'at home'." }
];

export const twoWayPrepositionData = [
  { sentence: "Ich lege das Buch ___ den Tisch.", correct: "Wohin" },
  { sentence: "Das Buch liegt ___ dem Tisch.", correct: "Wo" },
  { sentence: "Sie hängt das Bild ___ die Wand.", correct: "Wohin" },
  { sentence: "Das Bild hängt ___ der Wand.", correct: "Wo" }
];

export const verbPairData = [
  { sentence: "Ich ___ die Flasche auf den Tisch.", options: ["stelle", "steht"], correct: 0, explanation: "Movement requires the active form 'stellen': Ich stelle die Flasche auf den Tisch." },
  { sentence: "Die Flasche ___ auf dem Tisch.", options: ["steht", "stellt"], correct: 0, explanation: "For a stationary position, the verb 'stehen' is used: Die Flasche steht auf dem Tisch." },
  { sentence: "Ich ___ die Blume in den Topf.", options: ["setze", "setzt"], correct: 0, explanation: "Movement into a new position requires 'setzen' in the first person: Ich setze die Blume in den Topf." },
  { sentence: "Die Blume ___ im Topf.", options: ["sitzt", "setzt"], correct: 0, explanation: "For a stationary position, 'sitzen' is used: Die Blume sitzt im Topf." }
];

export const verbMatchingData = [
  { verb: "sehen", correct: "Akkusativ" },
  { verb: "haben", correct: "Akkusativ" },
  { verb: "lesen", correct: "Akkusativ" },
  { verb: "helfen", correct: "Dativ" },
  { verb: "danken", correct: "Dativ" },
  { verb: "schmecken", correct: "Dativ" },
  { verb: "antworten", correct: "Dativ" },
  { verb: "mögen", correct: "Akkusativ" }
];

export const conjunctions = [
  { german: "aber", english: "but", prateritum: "N/A", perfekt: "N/A", example: "Ich möchte kommen, aber ich habe keine Zeit." },
  { german: "als", english: "as/when (in the past)", prateritum: "N/A", perfekt: "N/A", example: "Als ich jung war, wohnte ich in Hamburg." },
  { german: "bevor", english: "before", prateritum: "N/A", perfekt: "N/A", example: "Bevor wir essen, decken wir den Tisch." },
  { german: "bis", english: "until", prateritum: "N/A", perfekt: "N/A", example: "Ich warte, bis du fertig bist." },
  { german: "da", english: "since, because", prateritum: "N/A", perfekt: "N/A", example: "Ich bleibe zuhause, da es stark regnet." },
  { german: "dass", english: "that", prateritum: "N/A", perfekt: "N/A", example: "Ich denke, dass wir pünktlich ankommen." },
  { german: "denn", english: "because, for", prateritum: "N/A", perfekt: "N/A", example: "Ich gehe nicht raus, denn ich bin müde." },
  { german: "doch", english: "however, yet", prateritum: "N/A", perfekt: "N/A", example: "Ich wollte helfen, doch ich hatte keine Zeit." },
  { german: "falls", english: "in case", prateritum: "N/A", perfekt: "N/A", example: "Ruf mich an, falls du Fragen hast." },
  { german: "indem", english: "by (doing)", prateritum: "N/A", perfekt: "N/A", example: "Du lernst besser, indem du viel übst." },
  { german: "nachdem", english: "after", prateritum: "N/A", perfekt: "N/A", example: "Nachdem wir gegessen haben, räumen wir auf." },
  { german: "ob", english: "whether, if", prateritum: "N/A", perfekt: "N/A", example: "Ich weiß nicht, ob das stimmt." },
  { german: "obwohl", english: "although", prateritum: "N/A", perfekt: "N/A", example: "Obwohl ich müde bin, gehe ich laufen." },
  { german: "sobald", english: "as soon as", prateritum: "N/A", perfekt: "N/A", example: "Wir fahren los, sobald du fertig bist." },
  { german: "solange", english: "as long as", prateritum: "N/A", perfekt: "N/A", example: "Solange es regnet, bleibe ich drin." },
  { german: "sowie", english: "as soon as, as well as", prateritum: "N/A", perfekt: "N/A", example: "Ich komme, sowie ich kann." },
  { german: "während", english: "while, during", prateritum: "N/A", perfekt: "N/A", example: "Während ich koche, hörst du Musik." },
  { german: "weil", english: "because", prateritum: "N/A", perfekt: "N/A", example: "Ich gehe jetzt, weil ich morgen früh raus muss." },
  { german: "wenn", english: "if, when", prateritum: "N/A", perfekt: "N/A", example: "Wenn du Zeit hast, besuch mich doch." },
  { german: "zumal", english: "especially since", prateritum: "N/A", perfekt: "N/A", example: "Ich bleibe hier, zumal das Wetter schlecht ist." },
  { german: "sodass", english: "so that", prateritum: "N/A", perfekt: "N/A", example: "Ich habe alles vorbereitet, sodass wir sofort anfangen können." },
  { german: "obgleich", english: "although", prateritum: "N/A", perfekt: "N/A", example: "Obgleich ich müde bin, arbeite ich weiter." },
  { german: "indessen", english: "meanwhile, whereas", prateritum: "N/A", perfekt: "N/A", example: "Ich putze die Küche, indessen du den Müll rausbringst." },
  { german: "als wenn", english: "as if", prateritum: "N/A", perfekt: "N/A", example: "Er tut so, als wenn er alles wüsste." },
  { german: "insofern", english: "insofar as", prateritum: "N/A", perfekt: "N/A", example: "Insofern du recht hast, will ich dir zustimmen." },
  { german: "insofern als", english: "insofar as", prateritum: "N/A", perfekt: "N/A", example: "Wir helfen dir, insofern als wir können." },
  { german: "außer dass", english: "except that", prateritum: "N/A", perfekt: "N/A", example: "Alles ist gut, außer dass es ein bisschen kalt ist." },
  { german: "obzwar", english: "although (archaic)", prateritum: "N/A", perfekt: "N/A", example: "Obzwar er krank ist, kommt er zur Arbeit." },
  { german: "statt dass", english: "instead of", prateritum: "N/A", perfekt: "N/A", example: "Statt dass du meckerst, könntest du helfen." },
  { german: "außer wenn", english: "unless", prateritum: "N/A", perfekt: "N/A", example: "Ich werde nicht gehen, außer wenn du mich darum bittest." },
  { german: "ehe", english: "before (literary)", prateritum: "N/A", perfekt: "N/A", example: "Ehe wir schlafen gehen, lesen wir noch ein Buch." },
  { german: "indes", english: "while, whereas (literary)", prateritum: "N/A", perfekt: "N/A", example: "Indes sie im Garten arbeiteten, ging die Sonne unter." }
]

export const prepositions = [
  { german: "an", english: "at, on", prateritum: "N/A", perfekt: "N/A", example: "Ich warte an der Bushaltestelle." },
  { german: "auf", english: "on, upon", prateritum: "N/A", perfekt: "N/A", example: "Das Buch liegt auf dem Tisch." },
  { german: "aus", english: "out of, from", prateritum: "N/A", perfekt: "N/A", example: "Ich komme aus Bayern." },
  { german: "bei", english: "at, near, with", prateritum: "N/A", perfekt: "N/A", example: "Ich wohne bei meinen Eltern." },
  { german: "durch", english: "through", prateritum: "N/A", perfekt: "N/A", example: "Wir fahren durch den Tunnel." },
  { german: "entlang", english: "along", prateritum: "N/A", perfekt: "N/A", example: "Wir spazieren den Fluss entlang." },
  { german: "für", english: "for", prateritum: "N/A", perfekt: "N/A", example: "Das Geschenk ist für dich." },
  { german: "gegen", english: "against, around (time)", prateritum: "N/A", perfekt: "N/A", example: "Wir treffen uns gegen 20 Uhr." },
  { german: "hinter", english: "behind", prateritum: "N/A", perfekt: "N/A", example: "Das Auto steht hinter dem Haus." },
  { german: "in", english: "in, into", prateritum: "N/A", perfekt: "N/A", example: "Ich gehe in die Stadt." },
  { german: "mit", english: "with", prateritum: "N/A", perfekt: "N/A", example: "Kommst du mit mir?" },
  { german: "nach", english: "to, after", prateritum: "N/A", perfekt: "N/A", example: "Wir fahren nach Berlin." },
  { german: "neben", english: "next to, beside", prateritum: "N/A", perfekt: "N/A", example: "Ich sitze neben meiner Freundin." },
  { german: "ohne", english: "without", prateritum: "N/A", perfekt: "N/A", example: "Ich trinke Kaffee ohne Zucker." },
  { german: "seit", english: "since (time)", prateritum: "N/A", perfekt: "N/A", example: "Seit gestern ist mir kalt." },
  { german: "über", english: "over, about", prateritum: "N/A", perfekt: "N/A", example: "Wir sprechen über den Film." },
  { german: "um", english: "around, at (time)", prateritum: "N/A", perfekt: "N/A", example: "Um 7 Uhr bin ich da." },
  { german: "unter", english: "under, among", prateritum: "N/A", perfekt: "N/A", example: "Die Katze sitzt unter dem Stuhl." },
  { german: "von", english: "from, of", prateritum: "N/A", perfekt: "N/A", example: "Das ist das Buch von meinem Freund." },
  { german: "vor", english: "before, in front of", prateritum: "N/A", perfekt: "N/A", example: "Ich warte vor der Tür." },
  { german: "während", english: "during", prateritum: "N/A", perfekt: "N/A", example: "Während des Films sind alle ruhig." },
  { german: "wegen", english: "because of", prateritum: "N/A", perfekt: "N/A", example: "Wegen des Staus komme ich spät." },
  { german: "zu", english: "to, at", prateritum: "N/A", perfekt: "N/A", example: "Ich gehe zu meiner Schwester." },
  { german: "zwischen", english: "between", prateritum: "N/A", perfekt: "N/A", example: "Der Brief ist zwischen den Büchern." },
  { german: "trotz", english: "despite, in spite of", prateritum: "N/A", perfekt: "N/A", example: "Trotz des schlechten Wetters gehen wir spazieren." },
  { german: "innerhalb", english: "within", prateritum: "N/A", perfekt: "N/A", example: "Innerhalb eines Tages müssen wir fertig sein." },
  { german: "außerhalb", english: "outside of", prateritum: "N/A", perfekt: "N/A", example: "Außerhalb der Stadt ist es ruhiger." },
  { german: "entgegen", english: "contrary to, against", prateritum: "N/A", perfekt: "N/A", example: "Entgegen seinem Rat habe ich es trotzdem getan." },
  { german: "anlässlich", english: "on the occasion of", prateritum: "N/A", perfekt: "N/A", example: "Anlässlich seines Geburtstags gab es eine Party." },
  { german: "statt", english: "instead of", prateritum: "N/A", perfekt: "N/A", example: "Statt eines Kuchens habe ich Obst mitgebracht." },
  { german: "laut", english: "according to", prateritum: "N/A", perfekt: "N/A", example: "Laut der Zeitung wird es morgen schneien." },
  { german: "kraft", english: "by virtue of", prateritum: "N/A", perfekt: "N/A", example: "Kraft seines Amtes kann er Entscheidungen treffen." },
  { german: "mithilfe", english: "with the help of", prateritum: "N/A", perfekt: "N/A", example: "Mithilfe meiner Freunde habe ich das Projekt geschafft." },
  { german: "angesichts", english: "in view of, given", prateritum: "N/A", perfekt: "N/A", example: "Angesichts der Situation sollten wir vorsichtig sein." },
  { german: "bezüglich", english: "regarding, concerning", prateritum: "N/A", perfekt: "N/A", example: "Bezüglich der neuen Regelung gibt es Fragen." },
  { german: "zugunsten", english: "in favor of", prateritum: "N/A", perfekt: "N/A", example: "Wir spenden Geld zugunsten der Kinderhilfe." },
  { german: "längs", english: "along (literary)", prateritum: "N/A", perfekt: "N/A", example: "Wir wanderten längs des Flusses." },
  { german: "ungeachtet", english: "regardless of", prateritum: "N/A", perfekt: "N/A", example: "Ungeachtet des Wetters gehen wir spazieren." }
]

export const adverbs = [
  { german: "bald", english: "soon", prateritum: "N/A", perfekt: "N/A", example: "Ich werde dich bald besuchen." },
  { german: "bereits", english: "already", prateritum: "N/A", perfekt: "N/A", example: "Ich habe das Problem bereits gelöst." },
  { german: "dann", english: "then", prateritum: "N/A", perfekt: "N/A", example: "Ich esse erst und dann räume ich auf." },
  { german: "dort", english: "there", prateritum: "N/A", perfekt: "N/A", example: "Dort hinten ist ein schöner Park." },
  { german: "eben", english: "just, exactly", prateritum: "N/A", perfekt: "N/A", example: "Ich habe dir eben gesagt, was los ist." },
  { german: "eigentlich", english: "actually", prateritum: "N/A", perfekt: "N/A", example: "Eigentlich wollte ich früher gehen." },
  { german: "endlich", english: "finally", prateritum: "N/A", perfekt: "N/A", example: "Endlich ist das Wochenende da." },
  { german: "erst", english: "only, just", prateritum: "N/A", perfekt: "N/A", example: "Ich bin erst um Mitternacht ins Bett gegangen." },
  { german: "fast", english: "almost", prateritum: "N/A", perfekt: "N/A", example: "Ich wäre fast hingefallen." },
  { german: "gerade", english: "just, straight", prateritum: "N/A", perfekt: "N/A", example: "Ich habe gerade mit ihm telefoniert." },
  { german: "gestern", english: "yesterday", prateritum: "N/A", perfekt: "N/A", example: "Gestern war ich im Museum." },
  { german: "heute", english: "today", prateritum: "N/A", perfekt: "N/A", example: "Heute arbeite ich von zu Hause aus." },
  { german: "jetzt", english: "now", prateritum: "N/A", perfekt: "N/A", example: "Jetzt fange ich mit dem Lernen an." },
  { german: "leider", english: "unfortunately", prateritum: "N/A", perfekt: "N/A", example: "Leider kann ich nicht kommen." },
  { german: "manchmal", english: "sometimes", prateritum: "N/A", perfekt: "N/A", example: "Manchmal gehe ich abends spazieren." },
  { german: "meistens", english: "mostly", prateritum: "N/A", perfekt: "N/A", example: "Meistens esse ich abends warm." },
  { german: "morgen", english: "tomorrow", prateritum: "N/A", perfekt: "N/A", example: "Morgen gehe ich einkaufen." },
  { german: "nie", english: "never", prateritum: "N/A", perfekt: "N/A", example: "Ich schlafe nie vor Mitternacht." },
  { german: "noch", english: "still, yet", prateritum: "N/A", perfekt: "N/A", example: "Ich bin noch nicht fertig." },
  { german: "nur", english: "only", prateritum: "N/A", perfekt: "N/A", example: "Ich habe nur wenig Geld dabei." },
  { german: "schon", english: "already", prateritum: "N/A", perfekt: "N/A", example: "Ich habe schon gegessen." },
  { german: "sehr", english: "very", prateritum: "N/A", perfekt: "N/A", example: "Ich bin sehr froh darüber." },
  { german: "sofort", english: "immediately", prateritum: "N/A", perfekt: "N/A", example: "Bitte komm sofort herüber." },
  { german: "später", english: "later", prateritum: "N/A", perfekt: "N/A", example: "Wir sprechen später noch einmal." },
  { german: "trotzdem", english: "nevertheless", prateritum: "N/A", perfekt: "N/A", example: "Ich bin müde, trotzdem gehe ich laufen." },
  { german: "überhaupt", english: "at all", prateritum: "N/A", perfekt: "N/A", example: "Hast du überhaupt Zeit dafür?" },
  { german: "vielleicht", english: "maybe", prateritum: "N/A", perfekt: "N/A", example: "Vielleicht komme ich morgen vorbei." },
  { german: "wieder", english: "again", prateritum: "N/A", perfekt: "N/A", example: "Ich rufe dich später wieder an." },
  { german: "wirklich", english: "really", prateritum: "N/A", perfekt: "N/A", example: "Das hat wirklich Spaß gemacht." },
  { german: "zuerst", english: "first", prateritum: "N/A", perfekt: "N/A", example: "Zuerst machen wir die Hausaufgaben." },
  { german: "zum Beispiel (z.B.)", english: "for example", prateritum: "N/A", perfekt: "N/A", example: "Es gibt viele Städte hier, zum Beispiel Köln." },
  { german: "unbedingt", english: "absolutely", prateritum: "N/A", perfekt: "N/A", example: "Ich muss unbedingt lernen." },
  { german: "zufällig", english: "by chance", prateritum: "N/A", perfekt: "N/A", example: "Ich habe ihn zufällig getroffen." },
  { german: "oft", english: "often", prateritum: "N/A", perfekt: "N/A", example: "Ich gehe oft ins Kino." },
  { german: "selten", english: "rarely", prateritum: "N/A", perfekt: "N/A", example: "Ich esse nur selten Fleisch." },
  { german: "übrigens", english: "by the way", prateritum: "N/A", perfekt: "N/A", example: "Übrigens, hast du schon von der Neuigkeit gehört?" },
  { german: "allerdings", english: "however, indeed", prateritum: "N/A", perfekt: "N/A", example: "Das ist allerdings eine gute Idee." },
  { german: "durchaus", english: "absolutely, definitely", prateritum: "N/A", perfekt: "N/A", example: "Das ist durchaus möglich." },
  { german: "stets", english: "always", prateritum: "N/A", perfekt: "N/A", example: "Er ist stets freundlich zu allen." },
  { german: "kaum", english: "hardly, scarcely", prateritum: "N/A", perfekt: "N/A", example: "Ich habe kaum geschlafen." },
  { german: "schließlich", english: "finally, in the end", prateritum: "N/A", perfekt: "N/A", example: "Schließlich haben wir uns geeinigt." },
  { german: "weiterhin", english: "furthermore", prateritum: "N/A", perfekt: "N/A", example: "Ich werde weiterhin an dem Projekt arbeiten." },
  { german: "anders", english: "differently", prateritum: "N/A", perfekt: "N/A", example: "Man kann das Problem auch anders lösen." },
  { german: "demnächst", english: "soon, shortly", prateritum: "N/A", perfekt: "N/A", example: "Wir sehen uns demnächst wieder." },
  { german: "gewiss", english: "certainly", prateritum: "N/A", perfekt: "N/A", example: "Das ist gewiss kein Zufall." },
  { german: "mehrmals", english: "several times", prateritum: "N/A", perfekt: "N/A", example: "Ich habe das mehrmals versucht." },
  { german: "beinahe", english: "almost, nearly", prateritum: "N/A", perfekt: "N/A", example: "Ich hätte beinahe den Zug verpasst." },
  { german: "umsonst", english: "for free, in vain", prateritum: "N/A", perfekt: "N/A", example: "Wir konnten das Konzert umsonst besuchen." },
  { german: "gegebenenfalls", english: "if necessary, if need be", prateritum: "N/A", perfekt: "N/A", example: "Wir informieren Sie gegebenenfalls per E-Mail." },
  { german: "hin und wieder", english: "now and then", prateritum: "N/A", perfekt: "N/A", example: "Ich gehe hin und wieder ins Theater." },
  { german: "keineswegs", english: "by no means", prateritum: "N/A", perfekt: "N/A", example: "Das ist keineswegs selbstverständlich." }
]

export const questions = [
  { german: "wer", english: "who", prateritum: "N/A", perfekt: "N/A", example: "Wer hat dich angerufen?" },
  { german: "was", english: "what", prateritum: "N/A", perfekt: "N/A", example: "Was willst du essen?" },
  { german: "wo", english: "where", prateritum: "N/A", perfekt: "N/A", example: "Wo hast du das gekauft?" },
  { german: "wann", english: "when", prateritum: "N/A", perfekt: "N/A", example: "Wann fängt der Kurs an?" },
  { german: "warum", english: "why", prateritum: "N/A", perfekt: "N/A", example: "Warum lernst du Deutsch?" },
  { german: "wie", english: "how", prateritum: "N/A", perfekt: "N/A", example: "Wie geht es dir heute?" },
  { german: "welcher/welche/welches", english: "which", prateritum: "N/A", perfekt: "N/A", example: "Welches Buch liest du gerade?" },
  { german: "wessen", english: "whose", prateritum: "N/A", perfekt: "N/A", example: "Wessen Tasche ist das?" },
  { german: "womit", english: "with what", prateritum: "N/A", perfekt: "N/A", example: "Womit schreibst du, mit Kuli oder Bleistift?" },
  { german: "woher", english: "from where", prateritum: "N/A", perfekt: "N/A", example: "Woher kennst du ihn?" },
  { german: "wohin", english: "to where", prateritum: "N/A", perfekt: "N/A", example: "Wohin fährst du in den Ferien?" },
  { german: "wofür", english: "for what", prateritum: "N/A", perfekt: "N/A", example: "Wofür interessierst du dich?" },
  { german: "wieso", english: "why (colloquial)", prateritum: "N/A", perfekt: "N/A", example: "Wieso bist du so spät?" },
  { german: "weshalb", english: "why, for what reason", prateritum: "N/A", perfekt: "N/A", example: "Weshalb hast du das getan?" },
  { german: "weswegen", english: "why, for which reason", prateritum: "N/A", perfekt: "N/A", example: "Weswegen bist du umgezogen?" },
  { german: "worüber", english: "about what", prateritum: "N/A", perfekt: "N/A", example: "Worüber sprecht ihr?" },
  { german: "wozu", english: "for what purpose", prateritum: "N/A", perfekt: "N/A", example: "Wozu brauchst du das Werkzeug?" },
  { german: "wodurch", english: "by what, through what", prateritum: "N/A", perfekt: "N/A", example: "Wodurch hast du das Problem erkannt?" },
  { german: "worin", english: "in what", prateritum: "N/A", perfekt: "N/A", example: "Worin liegt der Unterschied?" },
  { german: "woraus", english: "from what", prateritum: "N/A", perfekt: "N/A", example: "Woraus besteht diese Suppe?" },
  { german: "wobei", english: "whereby, during what", prateritum: "N/A", perfekt: "N/A", example: "Wobei soll ich dir helfen?" },
  { german: "was für ein", english: "what kind of", prateritum: "N/A", perfekt: "N/A", example: "Was für ein Auto fährst du?" },
  { german: "woraufhin", english: "upon which, whereupon", prateritum: "N/A", perfekt: "N/A", example: "Er sagte das, woraufhin sie ging." },
  { german: "von wem", english: "by whom, from whom", prateritum: "N/A", perfekt: "N/A", example: "Von wem ist dieser Brief?" },
  { german: "mit wem", english: "with whom", prateritum: "N/A", perfekt: "N/A", example: "Mit wem gehst du ins Kino?" }
]

export const verbs = [
  { german: "sein", english: "to be", prateritum: "war", perfekt: "ist gewesen", example: "Ich war gestern zu Hause. Ich bin immer pünktlich gewesen.", note: "Used both as a main verb and as an auxiliary for verbs indicating movement or a change of state (e.g., Er ist nach Hause gegangen)." },
  { german: "haben", english: "to have", prateritum: "hatte", perfekt: "hat gehabt", example: "Ich hatte viel zu tun. Ich habe genug Arbeit gehabt.", note: "Used as an auxiliary for most verbs that do not indicate movement or change of state." },
  { german: "werden", english: "to become", prateritum: "wurde", perfekt: "ist geworden", example: "Ich wurde müde. Ich bin richtig müde geworden.", note: "Indicates a change of state from one condition to another." },
  { german: "können", english: "can, be able to", prateritum: "konnte", perfekt: "hat gekonnt", example: "Ich konnte gut schwimmen. Ich habe es immer gekonnt.", note: "Expresses ability or possibility." },
  { german: "müssen", english: "must, have to", prateritum: "musste", perfekt: "hat gemusst", example: "Ich musste früher aufstehen. Ich habe es leider machen müssen.", note: "Indicates necessity or obligation." },
  { german: "wollen", english: "to want", prateritum: "wollte", perfekt: "hat gewollt", example: "Ich wollte lernen. Ich habe es wirklich gewollt.", note: "Expresses desire or intention." },
  { german: "sollen", english: "should", prateritum: "sollte", perfekt: "hat gesollt", example: "Ich sollte mehr trinken. Ich habe es schon immer sollen.", note: "Suggests advisability or expectation." },
  { german: "dürfen", english: "may, be allowed to", prateritum: "durfte", perfekt: "hat gedurft", example: "Ich durfte nicht rausgehen. Ich habe es nicht gedurft.", note: "Expresses permission or prohibition." },
  { german: "machen", english: "to do, make", prateritum: "machte", perfekt: "hat gemacht", example: "Ich machte meine Hausaufgaben. Ich habe alles gründlich gemacht.", note: "Refers to performing an action or creating something." },
  { german: "sagen", english: "to say", prateritum: "sagte", perfekt: "hat gesagt", example: "Ich sagte ihm die Wahrheit. Ich habe es klipp und klar gesagt.", note: "Used when expressing speech or conveying information." },
  { german: "gehen", english: "to go", prateritum: "ging", perfekt: "ist gegangen", example: "Ich ging in die Stadt. Ich bin heute viel gegangen.", note: "Uses 'sein' as an auxiliary because it indicates movement from one place to another." },
  { german: "kommen", english: "to come", prateritum: "kam", perfekt: "ist gekommen", example: "Ich kam zu spät. Ich bin leider erst vor kurzem gekommen.", note: "Uses 'sein' as an auxiliary due to the movement toward a location." },
  { german: "sehen", english: "to see", prateritum: "sah", perfekt: "hat gesehen", example: "Ich sah ihn gestern. Ich habe ihn lange nicht gesehen.", note: "Describes the act of perceiving visually." },
  { german: "geben", english: "to give", prateritum: "gab", perfekt: "hat gegeben", example: "Ich gab ihr das Buch. Ich habe schon viel gegeben.", note: "Involves transferring something from one person to another." },
  { german: "nehmen", english: "to take", prateritum: "nahm", perfekt: "hat genommen", example: "Ich nahm den letzten Zug. Ich habe kein Taxi genommen.", note: "Used when receiving or picking up something." },
  { german: "finden", english: "to find", prateritum: "fand", perfekt: "hat gefunden", example: "Ich fand meinen Schlüssel. Ich habe ihn lange gesucht und gefunden.", note: "Refers to discovering or coming across something." },
  { german: "denken", english: "to think", prateritum: "dachte", perfekt: "hat gedacht", example: "Ich dachte, du kommst. Ich habe es wirklich gedacht.", note: "Expresses an opinion, belief, or idea." },
  { german: "wissen", english: "to know (facts)", prateritum: "wusste", perfekt: "hat gewusst", example: "Ich wusste nichts davon. Ich habe es nie gewusst.", note: "Refers to factual knowledge or information." },
  { german: "glauben", english: "to believe", prateritum: "glaubte", perfekt: "hat geglaubt", example: "Ich glaubte ihm sofort. Ich habe ihm sofort geglaubt.", note: "Expresses trust or conviction." },
  { german: "sprechen", english: "to speak", prateritum: "sprach", perfekt: "hat gesprochen", example: "Ich sprach mit ihr gestern. Ich habe viel Deutsch gesprochen.", note: "Describes verbal communication." },
  { german: "arbeiten", english: "to work", prateritum: "arbeitete", perfekt: "hat gearbeitet", example: "Ich arbeitete von 9 bis 17 Uhr. Ich habe hart gearbeitet.", note: "Involves performing tasks or labor, usually in a job." },
  { german: "brauchen", english: "to need", prateritum: "brauchte", perfekt: "hat gebraucht", example: "Ich brauchte Hilfe. Ich habe sie dringend gebraucht.", note: "Indicates necessity or requirement." },
  { german: "essen", english: "to eat", prateritum: "aß", perfekt: "hat gegessen", example: "Ich aß einen Apfel. Ich habe heute schon gefrühstückt und gegessen.", note: "Refers to the act of consuming food." },
  { german: "trinken", english: "to drink", prateritum: "trank", perfekt: "hat getrunken", example: "Ich trank Tee. Ich habe heute schon viel Wasser getrunken.", note: "Describes the act of consuming liquids." },
  { german: "fahren", english: "to drive, travel", prateritum: "fuhr", perfekt: "ist gefahren", example: "Ich fuhr nach München. Ich bin gestern dorthin gefahren.", note: "Uses 'sein' as an auxiliary because it indicates travel/movement." },
  { german: "laufen", english: "to walk, run", prateritum: "lief", perfekt: "ist gelaufen", example: "Ich lief sehr schnell. Ich bin den ganzen Weg gelaufen.", note: "Uses 'sein' as an auxiliary since it indicates self-propelled movement." },
  { german: "schlafen", english: "to sleep", prateritum: "schlief", perfekt: "hat geschlafen", example: "Ich schlief tief und fest. Ich habe sehr gut geschlafen.", note: "Refers to the act of resting." },
  { german: "lassen", english: "to let, allow", prateritum: "ließ", perfekt: "hat gelassen", example: "Ich ließ ihn reden. Ich habe ihn einfach machen lassen.", note: "Indicates permission or allowing an action to occur." },
  { german: "stehen", english: "to stand", prateritum: "stand", perfekt: "hat gestanden", example: "Ich stand auf der Straße. Ich habe dort lange gestanden.", note: "Describes being in an upright position." },
  { german: "schreiben", english: "to write", prateritum: "schrieb", perfekt: "hat geschrieben", example: "Ich schrieb einen Brief. Ich habe den Aufsatz gestern schon geschrieben.", note: "Refers to putting words on paper or a screen." },
  { german: "lesen", english: "to read", prateritum: "las", perfekt: "hat gelesen", example: "Ich las ein Buch. Ich habe viel über Geschichte gelesen.", note: "The act of interpreting written text." },
  { german: "bleiben", english: "to stay, remain", prateritum: "blieb", perfekt: "ist geblieben", example: "Ich blieb den ganzen Tag zu Hause. Ich bin den ganzen Tag dort geblieben.", note: "Indicates remaining in a place or state." },
  { german: "bringen", english: "to bring", prateritum: "brachte", perfekt: "hat gebracht", example: "Er brachte mir ein Geschenk. Er hat es extra für mich gebracht.", note: "Refers to transferring or delivering something." },
  { german: "helfen", english: "to help", prateritum: "half", perfekt: "hat geholfen", example: "Sie half mir bei den Hausaufgaben. Sie hat mir sehr geholfen.", note: "Means to provide assistance or support." },
  { german: "beginnen", english: "to begin", prateritum: "begann", perfekt: "hat begonnen", example: "Ich begann mit der Arbeit. Ich habe schon früh damit begonnen.", note: "Marks the start of an action or process." },
  { german: "gewinnen", english: "to win", prateritum: "gewann", perfekt: "hat gewonnen", example: "Wir gewannen das Spiel. Wir haben endlich gewonnen.", note: "Indicates success in a competition or challenge." },
  { german: "verlieren", english: "to lose", prateritum: "verlor", perfekt: "hat verloren", example: "Sie verlor ihre Schlüssel. Sie hat sie nirgends gefunden und verloren.", note: "Indicates failure to retain or succeed." },
  { german: "liegen", english: "to lie", prateritum: "lag", perfekt: "hat gelegen", example: "Das Buch lag auf dem Tisch. Es hat die ganze Zeit dort gelegen.", note: "Describes being in a horizontal position." },
  { german: "vergessen", english: "to forget", prateritum: "vergaß", perfekt: "hat vergessen", example: "Ich vergaß meine Tasche. Ich habe sie im Auto vergessen.", note: "Refers to failing to remember something." },
  { german: "verstehen", english: "to understand", prateritum: "verstand", perfekt: "hat verstanden", example: "Wir verstanden die Aufgabe. Wir haben es sofort verstanden.", note: "Involves grasping the meaning or concept." },
  { german: "kennen", english: "to know (be familiar with)", prateritum: "kannte", perfekt: "hat gekannt", example: "Ich kannte ihn seit Jahren. Ich habe ihn lange gekannt.", note: "Means being acquainted or familiar with someone/something." },
  { german: "erklären", english: "to explain", prateritum: "erklärte", perfekt: "hat erklärt", example: "Sie erklärte das Problem. Sie hat alles deutlich erklärt.", note: "Means to make something clear or understandable." },
  { german: "entscheiden", english: "to decide", prateritum: "entschied", perfekt: "hat entschieden", example: "Ich entschied mich für das rote Kleid. Ich habe mich endgültig entschieden.", note: "Involves making a choice or coming to a conclusion." },
  { german: "versuchen", english: "to try, attempt", prateritum: "versuchte", perfekt: "hat versucht", example: "Er versuchte, das Rätsel zu lösen. Er hat es immer wieder versucht.", note: "Means to make an effort to do something." },
  { german: "gefallen", english: "to please, to like", prateritum: "gefiel", perfekt: "hat gefallen", example: "Das Lied gefiel mir sehr. Es hat mir schon beim ersten Hören gefallen.", note: "Expresses a positive impression or enjoyment." },
  { german: "gehören", english: "to belong", prateritum: "gehörte", perfekt: "hat gehört", example: "Das Buch gehörte mir. Es hat mir immer gehört.", note: "Indicates ownership or association." },
  { german: "bitten", english: "to ask, request", prateritum: "bat", perfekt: "hat gebeten", example: "Ich bat ihn um Hilfe. Ich habe ihn mehrmals darum gebeten.", note: "Means to make a polite or earnest request." },
  { german: "empfehlen", english: "to recommend", prateritum: "empfahl", perfekt: "hat empfohlen", example: "Sie empfahl mir ein gutes Restaurant. Sie hat es mir wärmstens empfohlen.", note: "Means to suggest a favorable opinion or endorsement." },
  { german: "versprechen", english: "to promise", prateritum: "versprach", perfekt: "hat versprochen", example: "Ich versprach dir, pünktlich zu sein. Ich habe es fest versprochen.", note: "Indicates a commitment or assurance." },
  { german: "entdecken", english: "to discover", prateritum: "entdeckte", perfekt: "hat entdeckt", example: "Wir entdeckten einen neuen Weg. Wir haben den Pfad zufällig entdeckt.", note: "Refers to finding something new or unexpected." },
  { german: "entwickeln", english: "to develop", prateritum: "entwickelte", perfekt: "hat entwickelt", example: "Die Firma entwickelte ein neues Produkt. Sie haben es in kurzer Zeit entwickelt.", note: "Involves a process of growth or evolution." },
  { german: "putzen", english: "to clean", prateritum: "putzte", perfekt: "hat geputzt", example: "Ich putzte das Fenster. Ich habe heute schon das ganze Haus geputzt.", note: "Means to clean or tidy up." },
  { german: "sich erinnern", english: "to remember (reflexive)", prateritum: "erinnerte sich", perfekt: "hat sich erinnert", example: "Ich erinnerte mich daran, den Termin wahrzunehmen. Ich habe mich rechtzeitig erinnert.", note: "A reflexive verb meaning 'to recall' or 'to keep in mind'." }
]

export const tenseRules = [
  { german: "Sein als Hilfsverb", english: "Usage of 'sein' as an auxiliary verb", prateritum: "war", perfekt: "ist gewesen", example: "Ich bin nach Hause gegangen.", note: "Verbs that denote movement or a change of state use 'sein' to form the Perfekt. E.g.: Er ist eingeschlafen." },
  { german: "Haben als Hilfsverb", english: "Usage of 'haben' as an auxiliary verb", prateritum: "hatte", perfekt: "hat gehabt", example: "Ich habe das Buch gelesen.", note: "Most verbs use 'haben' for the Perfekt, especially those that do not imply movement or change." },
  { german: "Bildung des Perfekts", english: "Formation of the Perfect Tense", prateritum: "N/A", perfekt: "N/A", example: "Hilfsverb (haben/sein) + Partizip II (z.B. gegangen, gemacht).", note: "The Perfekt is formed with an auxiliary verb and the past participle. The choice of auxiliary depends on the verb’s meaning." },
  { german: "Bildung des Präteritums", english: "Formation of the Simple Past", prateritum: "N/A", perfekt: "N/A", example: "Regular and irregular forms must be memorized.", note: "The Präteritum is primarily used in written language and requires memorizing both regular and irregular forms." },
  { german: "Perfekt vs. Präteritum", english: "Usage in Spoken vs. Written Language", prateritum: "N/A", perfekt: "N/A", example: "Ich habe gegessen (spoken) vs. Ich aß (written narrative).", note: "In everyday conversation, the Perfekt is most common; the Präteritum is used in literature and formal writing." },
  { german: "Plusquamperfekt", english: "Usage of the Past Perfect", prateritum: "hatte/war", perfekt: "N/A", example: "Ich hatte gegessen, bevor ich wegging.", note: "Expresses an action that occurred before another past action." },
  { german: "Reflexive Verben im Perfekt", english: "Reflexive Verbs in the Perfect Tense", prateritum: "N/A", perfekt: "hat sich ... ge-verb", example: "Ich habe mich geduscht.", note: "Generally, use 'haben' + reflexive pronoun + Partizip II. The reflexive pronoun stays immediately after the auxiliary verb." }
]

export const categoriesMap = {
  "Conjunctions": conjunctions,
  "Prepositions": prepositions,
  "Adverbs": adverbs,
  "Question Words": questions,
  "Verbs": verbs,
  "Tense Rules": tenseRules
}

export const knownWordsKey = 'knownWordsExtended'