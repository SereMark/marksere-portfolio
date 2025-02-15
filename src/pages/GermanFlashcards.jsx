import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

const containerVariant = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const conjunctions = [
  { german: "aber", english: "but", prateritum: "N/A", perfekt: "N/A", example: "Ich möchte kommen, aber ich habe keine Zeit." },
  { german: "als", english: "as/when (past)", prateritum: "N/A", perfekt: "N/A", example: "Als ich jung war, wohnte ich in Hamburg." },
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
  { german: "außer wenn", english: "unless", prateritum: "N/A", perfekt: "N/A", example: "Ich werde nicht gehen, außer wenn du mich darum bittest." }
];

const prepositions = [
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
  { german: "zugunsten", english: "in favor of", prateritum: "N/A", perfekt: "N/A", example: "Wir spenden Geld zugunsten der Kinderhilfe." }
];

const adverbs = [
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
  { german: "umsonst", english: "for free, in vain", prateritum: "N/A", perfekt: "N/A", example: "Wir konnten das Konzert umsonst besuchen." }
];

const questions = [
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
  { german: "wieso", english: "why (colloq.)", prateritum: "N/A", perfekt: "N/A", example: "Wieso bist du so spät?" },
  { german: "weshalb", english: "why, for what reason", prateritum: "N/A", perfekt: "N/A", example: "Weshalb hast du das getan?" },
  { german: "weswegen", english: "why, for which reason", prateritum: "N/A", perfekt: "N/A", example: "Weswegen bist du umgezogen?" },
  { german: "worüber", english: "about what", prateritum: "N/A", perfekt: "N/A", example: "Worüber sprecht ihr?" },
  { german: "wozu", english: "for what purpose", prateritum: "N/A", perfekt: "N/A", example: "Wozu brauchst du das Werkzeug?" },
  { german: "wodurch", english: "by what, through what", prateritum: "N/A", perfekt: "N/A", example: "Wodurch hast du das Problem erkannt?" },
  { german: "worin", english: "in what", prateritum: "N/A", perfekt: "N/A", example: "Worin liegt der Unterschied?" },
  { german: "woraus", english: "from what", prateritum: "N/A", perfekt: "N/A", example: "Woraus besteht diese Suppe?" },
  { german: "wobei", english: "whereby, during what", prateritum: "N/A", perfekt: "N/A", example: "Wobei soll ich dir helfen?" },
  { german: "was für ein", english: "what kind of", prateritum: "N/A", perfekt: "N/A", example: "Was für ein Auto fährst du?" }
];

const verbs = [
  { german: "sein", english: "to be", prateritum: "war", perfekt: "ist gewesen", example: "Ich war gestern zu Hause. Ich bin immer pünktlich gewesen.", note: "Used both as a main verb and as an auxiliary for verbs indicating movement or a change of state. For example, 'Er ist nach Hause gegangen' uses 'sein' because of the change of location." },
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
  { german: "kommen", english: "to come", prateritum: "kam", perfekt: "ist gekommen", example: "Ich kam zu spät. Ich bin leider erst vor kurzem gekommen.", note: "Uses 'sein' as an auxiliary due to the movement towards the speaker or a location." },
  { german: "sehen", english: "to see", prateritum: "sah", perfekt: "hat gesehen", example: "Ich sah ihn gestern. Ich habe ihn lange nicht gesehen.", note: "Describes the act of perceiving visually." },
  { german: "geben", english: "to give", prateritum: "gab", perfekt: "hat gegeben", example: "Ich gab ihr das Buch. Ich habe schon viel gegeben.", note: "Involves transferring something from one person to another." },
  { german: "nehmen", english: "to take", prateritum: "nahm", perfekt: "hat genommen", example: "Ich nahm den letzten Zug. Ich habe kein Taxi genommen.", note: "Used when receiving or picking up something." },
  { german: "finden", english: "to find", prateritum: "fand", perfekt: "hat gefunden", example: "Ich fand meinen Schlüssel. Ich habe ihn lange gesucht und gefunden.", note: "Refers to discovering or coming across something." },
  { german: "denken", english: "to think", prateritum: "dachte", perfekt: "hat gedacht", example: "Ich dachte, du kommst. Ich habe es wirklich gedacht.", note: "Expresses an opinion, belief, or idea." },
  { german: "wissen", english: "to know", prateritum: "wusste", perfekt: "hat gewusst", example: "Ich wusste nichts davon. Ich habe es nie gewusst.", note: "Used when referring to factual knowledge or information." },
  { german: "glauben", english: "to believe", prateritum: "glaubte", perfekt: "hat geglaubt", example: "Ich glaubte ihm sofort. Ich habe ihm sofort geglaubt.", note: "Expresses trust or conviction." },
  { german: "sprechen", english: "to speak", prateritum: "sprach", perfekt: "hat gesprochen", example: "Ich sprach mit ihr gestern. Ich habe viel Deutsch gesprochen.", note: "Describes verbal communication." },
  { german: "arbeiten", english: "to work", prateritum: "arbeitete", perfekt: "hat gearbeitet", example: "Ich arbeitete von 9 bis 17 Uhr. Ich habe hart gearbeitet.", note: "Involves performing tasks or labor, usually in a job." },
  { german: "brauchen", english: "to need", prateritum: "brauchte", perfekt: "hat gebraucht", example: "Ich brauchte Hilfe. Ich habe sie dringend gebraucht.", note: "Indicates necessity or requirement." },
  { german: "essen", english: "to eat", prateritum: "aß", perfekt: "hat gegessen", example: "Ich aß einen Apfel. Ich habe heute schon gefrühstückt und gegessen.", note: "Refers to the act of consuming food." },
  { german: "trinken", english: "to drink", prateritum: "trank", perfekt: "hat getrunken", example: "Ich trank Tee. Ich habe heute schon viel Wasser getrunken.", note: "Describes the act of consuming liquids." },
  { german: "fahren", english: "to drive, travel", prateritum: "fuhr", perfekt: "ist gefahren", example: "Ich fuhr nach München. Ich bin gestern dorthin gefahren.", note: "Uses 'sein' as an auxiliary because it indicates movement by vehicle or travel." },
  { german: "laufen", english: "to walk, run", prateritum: "lief", perfekt: "ist gelaufen", example: "Ich lief sehr schnell. Ich bin den ganzen Weg gelaufen.", note: "Uses 'sein' as an auxiliary since it indicates self-propelled movement." },
  { german: "schlafen", english: "to sleep", prateritum: "schlief", perfekt: "hat geschlafen", example: "Ich schlief tief und fest. Ich habe sehr gut geschlafen.", note: "Refers to the act of resting or sleeping." },
  { german: "lassen", english: "to let, allow", prateritum: "ließ", perfekt: "hat gelassen", example: "Ich ließ ihn reden. Ich habe ihn einfach machen lassen.", note: "Indicates permission or allowing an action to occur." },
  { german: "stehen", english: "to stand", prateritum: "stand", perfekt: "hat gestanden", example: "Ich stand auf der Straße. Ich habe dort lange gestanden.", note: "Describes being in an upright position." },
  { german: "schreiben", english: "to write", prateritum: "schrieb", perfekt: "hat geschrieben", example: "Ich schrieb einen Brief. Ich habe den Aufsatz gestern schon geschrieben.", note: "Involves putting words on paper or a screen." },
  { german: "lesen", english: "to read", prateritum: "las", perfekt: "hat gelesen", example: "Ich las ein Buch. Ich habe viel über Geschichte gelesen.", note: "Refers to the act of interpreting written text." },
  { german: "bleiben", english: "to stay, remain", prateritum: "blieb", perfekt: "ist geblieben", example: "Ich blieb den ganzen Tag zu Hause. Ich bin den ganzen Tag dort geblieben.", note: "Indicates remaining in a place or condition." },
  { german: "bringen", english: "to bring", prateritum: "brachte", perfekt: "hat gebracht", example: "Er brachte mir ein Geschenk. Er hat es extra für mich gebracht.", note: "Refers to transferring or delivering something to someone." },
  { german: "helfen", english: "to help", prateritum: "half", perfekt: "hat geholfen", example: "Sie half mir bei den Hausaufgaben. Sie hat mir sehr geholfen.", note: "Involves providing assistance or support." },
  { german: "beginnen", english: "to begin", prateritum: "begann", perfekt: "hat begonnen", example: "Ich begann mit der Arbeit. Ich habe schon früh damit begonnen.", note: "Marks the start of an action or process." },
  { german: "gewinnen", english: "to win", prateritum: "gewann", perfekt: "hat gewonnen", example: "Wir gewannen das Spiel. Wir haben endlich gewonnen.", note: "Indicates success in a competition or challenge." },
  { german: "verlieren", english: "to lose", prateritum: "verlor", perfekt: "hat verloren", example: "Sie verlor ihre Schlüssel. Sie hat sie nirgends gefunden und verloren.", note: "Indicates failure to retain or succeed." },
  { german: "liegen", english: "to lie", prateritum: "lag", perfekt: "hat gelegen", example: "Das Buch lag auf dem Tisch. Es hat die ganze Zeit dort gelegen.", note: "Describes the state of being in a horizontal position." },
  { german: "vergessen", english: "to forget", prateritum: "vergaß", perfekt: "hat vergessen", example: "Ich vergaß meine Tasche. Ich habe sie im Auto vergessen.", note: "Refers to failing to remember something." },
  { german: "verstehen", english: "to understand", prateritum: "verstand", perfekt: "hat verstanden", example: "Wir verstanden die Aufgabe. Wir haben es sofort verstanden.", note: "Involves comprehending or grasping the meaning of something." },
  { german: "kennen", english: "to know (be familiar with)", prateritum: "kannte", perfekt: "hat gekannt", example: "Ich kannte ihn seit Jahren. Ich habe ihn lange gekannt.", note: "Refers to being acquainted with or familiar with someone or something." },
  { german: "erklären", english: "to explain", prateritum: "erklärte", perfekt: "hat erklärt", example: "Sie erklärte das Problem. Sie hat alles deutlich erklärt.", note: "Involves making something clear or understandable." },
  { german: "entscheiden", english: "to decide", prateritum: "entschied", perfekt: "hat entschieden", example: "Ich entschied mich für das rote Kleid. Ich habe mich endgültig entschieden.", note: "Indicates making a choice or coming to a conclusion." },
  { german: "versuchen", english: "to try, attempt", prateritum: "versuchte", perfekt: "hat versucht", example: "Er versuchte, das Rätsel zu lösen. Er hat es immer wieder versucht.", note: "Describes the act of making an effort to do something." },
  { german: "gefallen", english: "to please, to like", prateritum: "gefiel", perfekt: "hat gefallen", example: "Das Lied gefiel mir sehr. Es hat mir schon beim ersten Hören gefallen.", note: "Expresses a positive impression or enjoyment." },
  { german: "gehören", english: "to belong", prateritum: "gehörte", perfekt: "hat gehört", example: "Das Buch gehörte mir. Es hat mir immer gehört.", note: "Indicates ownership or association." },
  { german: "bitten", english: "to ask, request", prateritum: "bat", perfekt: "hat gebeten", example: "Ich bat ihn um Hilfe. Ich habe ihn mehrmals darum gebeten.", note: "Involves making a polite or earnest request." },
  { german: "empfehlen", english: "to recommend", prateritum: "empfahl", perfekt: "hat empfohlen", example: "Sie empfahl mir ein gutes Restaurant. Sie hat es mir wärmstens empfohlen.", note: "Suggests a favorable opinion or endorsement." },
  { german: "versprechen", english: "to promise", prateritum: "versprach", perfekt: "hat versprochen", example: "Ich versprach dir, pünktlich zu sein. Ich habe es fest versprochen.", note: "Indicates a commitment or assurance of an action." },
  { german: "entdecken", english: "to discover", prateritum: "entdeckte", perfekt: "hat entdeckt", example: "Wir entdeckten einen neuen Weg. Wir haben den Pfad zufällig entdeckt.", note: "Refers to finding something new or unexpected." },
  { german: "entwickeln", english: "to develop", prateritum: "entwickelte", perfekt: "hat entwickelt", example: "Die Firma entwickelte ein neues Produkt. Sie haben es in kurzer Zeit entwickelt.", note: "Indicates the process of growth or evolution, often through planning and work." }
];

const tenseRules = [
  { german: "Sein als Hilfsverb", english: "Usage of 'sein' as an auxiliary verb", prateritum: "war", perfekt: "ist gewesen", example: "Ich bin nach Hause gegangen.", note: "Verbs that denote movement or a change of state use 'sein' to form the perfect tense. For instance, 'Er ist eingeschlafen' indicates a change of state." },
  { german: "Haben als Hilfsverb", english: "Usage of 'haben' as an auxiliary verb", prateritum: "hatte", perfekt: "hat gehabt", example: "Ich habe das Buch gelesen.", note: "Most verbs, especially those that do not imply a movement or change, use 'haben' to form the perfect tense." },
  { german: "Bildung des Perfekts", english: "Formation of the perfect tense", prateritum: "N/A", perfekt: "N/A", example: "Hilfsverb (haben/sein) + Partizip II (z.B. gegangen, gemacht)", note: "The perfect tense is formed with an auxiliary verb and the past participle. The choice of auxiliary depends on the verb's meaning." },
  { german: "Bildung des Präteritums", english: "Formation of the simple past", prateritum: "N/A", perfekt: "N/A", example: "Regular and irregular forms must be memorized.", note: "The simple past is primarily used in written language and requires memorizing both regular and irregular forms." },
  { german: "Perfekt vs. Präteritum", english: "Usage in Spoken vs. Written Language", prateritum: "N/A", perfekt: "N/A", example: "Ich habe gegessen (spoken) vs. Ich aß (narrative writing)", note: "In everyday conversation, the Perfekt is most common, whereas the Präteritum is typically used in literature and formal writing." }
];

const categoriesMap = {
  "Conjunctions": conjunctions,
  "Prepositions": prepositions,
  "Adverbs": adverbs,
  "Question Words": questions,
  "Verbs": verbs,
  "Tense Rules": tenseRules,
};

const knownWordsKey = 'knownWordsExtended';

export default function GermanFlashcards() {
  const [selectedCategory, setSelectedCategory] = useState('Conjunctions');
  const [currentList, setCurrentList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [knownWordsSet, setKnownWordsSet] = useState(new Set());

  useEffect(() => {
    const data = localStorage.getItem(knownWordsKey);
    if (data) {
      try {
        const arr = JSON.parse(data);
        setKnownWordsSet(new Set(arr));
      } catch {
        setKnownWordsSet(new Set());
      }
    }
  }, []);

  useEffect(() => {
    loadCategory(selectedCategory);
  }, [selectedCategory]);

  function saveKnownWords(updatedSet) {
    localStorage.setItem(knownWordsKey, JSON.stringify(Array.from(updatedSet)));
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function filterKnownWords(list) {
    return list.filter((item) => !knownWordsSet.has(item.german));
  }

  function loadCategory(cat) {
    const rawList = categoriesMap[cat] || [];
    const filtered = filterKnownWords(rawList);
    shuffleArray(filtered);
    setCurrentList(filtered);
    setCurrentIndex(0);
    setShowMeaning(false);
  }

  function handleRestart() {
    loadCategory(selectedCategory);
  }

  function resetKnownWords() {
    localStorage.removeItem(knownWordsKey);
    setKnownWordsSet(new Set());
    loadCategory(selectedCategory);
  }

  function handleNextWord() {
    setShowMeaning(false);
    if (currentIndex < currentList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(currentList.length);
    }
  }

  function handleMarkAsKnown() {
    if (!currentList.length || currentIndex < 0) return;
    const knownWord = currentList[currentIndex];
    if (!knownWord) return;
    const updatedSet = new Set(knownWordsSet);
    updatedSet.add(knownWord.german);
    setKnownWordsSet(updatedSet);
    saveKnownWords(updatedSet);
    const newList = [...currentList];
    newList.splice(currentIndex, 1);
    setCurrentList(newList);
    if (currentIndex >= newList.length) {
      setCurrentIndex(newList.length - 1);
    }
    setShowMeaning(false);
  }

  function toggleMeaning() {
    setShowMeaning((prev) => !prev);
  }

  const currentWordObj = currentIndex >= 0 && currentIndex < currentList.length
    ? currentList[currentIndex]
    : null;

  const categoryNames = Object.keys(categoriesMap);
  const progressValue = currentIndex;
  const progressMax = Math.max(0, currentList.length - 1);

  return (
    <section
      data-scroll-section
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden text-white bg-gradient-to-r from-[#0e1622] to-[#1b2735] animate-gradientBackground bg-[length:200%]"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 overflow-hidden leading-[0] z-10 rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,321.39,56.6Z"
            className="fill-current text-[#0e1622]"
          />
        </svg>
      </div>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-2xl mx-auto px-4 py-12"
      >
        <motion.h1
          variants={fadeUpVariant}
          className="text-3xl md:text-4xl font-extrabold text-accent mb-6 text-center"
        >
          German Flashcards
        </motion.h1>
        <motion.p
          variants={fadeUpVariant}
          className="text-center text-sm md:text-base text-gray-300 mb-8 leading-relaxed"
        >
          1) Pick a category · 2) Restart the deck · 3) Show details · 4) Move on or mark as known
        </motion.p>
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {categoryNames.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded font-medium text-sm transition ${cat === selectedCategory ? 'bg-accent text-white shadow-lg' : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={handleRestart}
            className="px-4 py-2 rounded-full font-semibold bg-accent text-white hover:bg-accent-dark transition"
          >
            Restart Deck
          </button>
          <button
            onClick={resetKnownWords}
            className="px-4 py-2 rounded-full font-semibold bg-red-600 text-white hover:bg-red-700 transition"
          >
            Reset Known Words
          </button>
        </motion.div>
        <motion.div
          variants={fadeUpVariant}
          className="bg-[#1b2735] rounded-lg shadow-lg p-6 min-h-[220px]"
        >
          {currentWordObj ? (
            <>
              <motion.h2
                key={currentWordObj.german}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="text-xl md:text-2xl font-bold text-center mb-4 text-accent"
              >
                {currentWordObj.german}
              </motion.h2>
              {showMeaning && (
                <motion.div
                  key={currentWordObj.english}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="mb-6 text-sm md:text-base bg-gray-800 p-4 rounded-md"
                >
                  <p className="mb-1">
                    <span className="font-semibold text-accent">Meaning:</span> {currentWordObj.english}
                  </p>
                  <p className="mb-1">
                    <span className="font-semibold text-accent">Präteritum:</span> {currentWordObj.prateritum}
                  </p>
                  <p className="mb-1">
                    <span className="font-semibold text-accent">Perfekt:</span> {currentWordObj.perfekt}
                  </p>
                  <p className="mb-1">
                    <span className="font-semibold text-accent">Example:</span> {currentWordObj.example}
                  </p>
                  {currentWordObj.note && (
                    <p className="mt-1">
                      <span className="font-semibold text-accent">Note:</span> {currentWordObj.note}
                    </p>
                  )}
                </motion.div>
              )}
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={toggleMeaning}
                  className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition"
                >
                  {showMeaning ? 'Hide Details' : 'Show Details'}
                </button>
                <button
                  onClick={handleNextWord}
                  className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition"
                >
                  Next Word
                </button>
                <button
                  onClick={handleMarkAsKnown}
                  className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition"
                >
                  Mark as Known
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-200 flex items-center justify-center min-h-[100px]">
              {currentList.length === 0 ? (
                <p className="text-lg">All done! No more words in this deck.</p>
              ) : (
                <p className="text-lg">No current card. Pick a category or restart the deck.</p>
              )}
            </div>
          )}
        </motion.div>
        <motion.div
          variants={fadeUpVariant}
          className="mt-6 text-center text-xs text-gray-400"
        >
          <p className="mb-1">
            Progress: {progressValue} / {progressMax}
          </p>
          <progress
            className="w-full h-3 bg-gray-800 rounded overflow-hidden"
            value={progressValue}
            max={progressMax}
          />
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,321.39,56.6Z"
            className="fill-current text-[#0e1622]"
          />
        </svg>
      </div>
    </section>
  );
}