import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

const containerVariant = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const grammarSections = [
  {
    title: "1️⃣ Das Perfekt (Present Perfect)",
    content: (
      <>
        <p><strong>What it is:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>The <strong>Perfekt</strong> tense is used primarily in <strong>spoken</strong> German to refer to past events.</li>
          <li>Formed with <strong>haben</strong> or <strong>sein</strong> + <strong>Partizip II</strong>.</li>
          <li><em>Example:</em> Ich habe Deutsch gelernt. (<em>I have learned German.</em>)</li>
        </ul>
        <p><strong>When to use "haben" vs. "sein":</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>haben</strong> → used with most verbs (gelernt, gemacht, gehört).</li>
          <li><strong>sein</strong> → used with verbs showing <em>motion</em> or <em>change of state</em> (gegangen, gefahren, gekommen).</li>
        </ul>
        <p><strong>Partizip II Formation:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>Regular verbs: <strong>ge- + verb stem + -(e)t</strong> → gelernt, gemacht, gehört</li>
          <li>Irregular verbs: <strong>ge- + modified stem + -en</strong> → geschrieben, gekommen, gegessen</li>
          <li>Separable verbs: <strong>prefix + ge- + verb</strong> → weggebracht, aufgestanden</li>
          <li>Inseparable verbs: <strong>NO "ge-"</strong> → besucht, erklärt, vergessen</li>
          <li>Verbs ending in <strong>-ieren</strong>: <strong>NO "ge-" + -t</strong> → studiert, telefoniert</li>
        </ul>
      </>
    )
  },
  {
    title: "2️⃣ Das Präteritum (Simple Past)",
    content: (
      <>
        <p><strong>What it is:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>The <strong>Präteritum</strong> is mainly used in <strong>written</strong> German (e.g., stories, news, formal speech).</li>
          <li>It replaces the <strong>Perfekt</strong> in formal or narrative texts.</li>
        </ul>
        <p><strong>Conjugation Rules:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Regular (weak) verbs</strong> → verb stem + <strong>-te, -test, -te, -ten, -tet, -ten</strong> (e.g., lernte, lern-test, lern-te...)</li>
          <li><strong>Irregular (strong) verbs</strong> → vowel change + <strong>-st, -en, -t</strong> (e.g., ging, ging-st, ging-en...)</li>
          <li><strong>Modal verbs</strong> → drop umlaut (<em>konnte</em>, <em>musste</em>, etc.)</li>
          <li><strong>sein</strong> &amp; <strong>haben</strong> are irregular:
            <ul className="list-disc ml-6 list-inside">
              <li>sein → war, warst, waren, wart</li>
              <li>haben → hatte, hattest, hatten, hattet</li>
            </ul>
          </li>
        </ul>
        <p><strong>When to Use Präteritum vs. Perfekt?</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Spoken German</strong> → Perfekt (Ich habe gelernt).</li>
          <li><strong>Written German / storytelling</strong> → Präteritum (Ich lernte).</li>
          <li><strong>sein, haben, modal verbs</strong> → typically Präteritum in speech (Ich war müde).</li>
        </ul>
      </>
    )
  },
  {
    title: "3️⃣ Strong & Weak Verb Conjugations",
    content: (
      <>
        <p><strong>Regular (Weak) Verbs (schwache Verben)</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>Keep the same stem, add -te, -test, -te, -ten, -tet, -ten endings.</li>
          <li>lernen → ich lernte; glauben → er glaubte</li>
        </ul>
        <p><strong>Irregular (Strong) Verbs (starke Verben)</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>Stem changes, endings differ from weak verbs.</li>
          <li>gehen → ich ging; essen → ich aß; finden → wir fanden</li>
        </ul>
        <p><strong>Mixed Verbs (Mischverben)</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>Conjugate like weak verbs but with a stem change.</li>
          <li>denken → ich dachte; bringen → ich brachte</li>
        </ul>
      </>
    )
  },
  {
    title: "4️⃣ Separable & Inseparable Prefix Verbs in Past Tense",
    content: (
      <>
        <p><strong>Separable Prefix Verbs (Trennbare Verben)</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>Prefix is detached in Perfekt.</li>
          <li>Ich habe <strong>aufgeräumt</strong> (aufräumen).</li>
          <li>Wir haben <strong>abgeholt</strong> (abholen).</li>
        </ul>
        <p><strong>Inseparable Prefix Verbs (Untrennbare Verben)</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>No "ge-" in Perfekt.</li>
          <li>Ich habe <strong>besucht</strong> (besuchen).</li>
          <li>Sie hat <strong>verstanden</strong> (verstehen).</li>
        </ul>
      </>
    )
  },
  {
    title: "5️⃣ Das Plusquamperfekt (Past Perfect)",
    content: (
      <>
        <p><strong>What it is:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>The <strong>Plusquamperfekt</strong> (Past Perfect) describes an action that happened before another action in the past.</li>
          <li>Formed with <strong>hatte</strong> or <strong>war</strong> + <strong>Partizip II</strong>.</li>
          <li><em>Example:</em> Ich <strong>hatte</strong> Deutsch <strong>gelernt</strong>, bevor ich nach Berlin zog. (<em>I had learned German before I moved to Berlin.</em>)</li>
        </ul>
        <p><strong>Formation:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>hatte</strong> or <strong>war</strong> (im Präteritum) + Partizip II.</li>
          <li>Choice of auxiliary verb <strong>haben</strong> (hatte) vs. <strong>sein</strong> (war) follows the same motion/change-of-state rule as Perfekt.</li>
        </ul>
        <p><strong>Usage Notes:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>Often used with <em>bevor</em>, <em>nachdem</em>, <em>als</em> to express sequential actions in the past.</li>
          <li>Common in narratives to show which of two past actions occurred first.</li>
        </ul>
      </>
    )
  },
  {
    title: "6️⃣ Reflexive Verben im Perfekt (Reflexive Verbs in the Perfect Tense)",
    content: (
      <>
        <p><strong>What it is:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>Reflexive verbs are verbs used with a reflexive pronoun (mich, dich, sich, etc.).</li>
          <li>When forming the Perfekt with reflexive verbs, <strong>haben</strong> is generally used as the auxiliary.</li>
          <li><em>Example:</em> Ich <strong>habe mich gefreut</strong>. (<em>I was glad.</em>)</li>
        </ul>
        <p><strong>Tips:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>If the reflexive verb is also separable: Ich <strong>habe mich umgezogen</strong>. (umziehen - to change clothes)</li>
          <li>Never separate the reflexive pronoun from the main verb in the perfect tense. It follows immediately after the auxiliary.</li>
        </ul>
      </>
    )
  }
];

const quizQuestions = [
  {
    question: "Which auxiliary do you typically use with verbs of motion in the Perfekt?",
    options: ["haben", "sein", "both possible"],
    correctIndex: 1
  },
  {
    question: "Which tense is most common in everyday spoken German?",
    options: ["Präteritum", "Perfekt", "Futur"],
    correctIndex: 1
  },
  {
    question: "Which is correct for 'I went home' in spoken German?",
    options: [
      "Ich bin nach Hause gegangen",
      "Ich habe nach Hause gegangen",
      "Ich war nach Hause gegangen"
    ],
    correctIndex: 0
  },
  {
    question: "Which verb forms typically lose their umlaut in the Präteritum?",
    options: ["Mixed verbs", "Modal verbs", "Separable verbs"],
    correctIndex: 1
  },
  {
    question: "How do you form the Plusquamperfekt?",
    options: [
      "Sein/haben (im Präsens) + Partizip II",
      "War/hatte + Partizip II",
      "Wurde + Partizip II + haben/sein"
    ],
    correctIndex: 1
  },
  {
    question: "Which is an example of a reflexive verb in the Perfekt?",
    options: [
      "Ich habe mich gefreut",
      "Ich bin mich gefahren",
      "Ich habe dich getroffen"
    ],
    correctIndex: 0
  },
  {
    question: "Which sentence best illustrates a temporal sequence in the past?",
    options: [
      "Ich war müde, als ich joggen ging",
      "Ich hatte gegessen, bevor ich ins Kino ging",
      "Ich ging ins Kino, wenn es regnete"
    ],
    correctIndex: 1
  }
];

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
  { german: "außer wenn", english: "unless", prateritum: "N/A", perfekt: "N/A", example: "Ich werde nicht gehen, außer wenn du mich darum bittest." },
  { german: "ehe", english: "before (literary)", prateritum: "N/A", perfekt: "N/A", example: "Ehe wir schlafen gehen, lesen wir noch ein Buch." },
  { german: "indes", english: "while, whereas (literary)", prateritum: "N/A", perfekt: "N/A", example: "Indes sie im Garten arbeiteten, ging die Sonne unter." }
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
  { german: "zugunsten", english: "in favor of", prateritum: "N/A", perfekt: "N/A", example: "Wir spenden Geld zugunsten der Kinderhilfe." },
  { german: "längs", english: "along (literary)", prateritum: "N/A", perfekt: "N/A", example: "Wir wanderten längs des Flusses." },
  { german: "ungeachtet", english: "regardless of", prateritum: "N/A", perfekt: "N/A", example: "Ungeachtet des Wetters gehen wir spazieren." }
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
  { german: "umsonst", english: "for free, in vain", prateritum: "N/A", perfekt: "N/A", example: "Wir konnten das Konzert umsonst besuchen." },
  { german: "gegebenenfalls", english: "if necessary, if need be", prateritum: "N/A", perfekt: "N/A", example: "Wir informieren Sie gegebenenfalls per E-Mail." },
  { german: "hin und wieder", english: "now and then", prateritum: "N/A", perfekt: "N/A", example: "Ich gehe hin und wieder ins Theater." },
  { german: "keineswegs", english: "by no means", prateritum: "N/A", perfekt: "N/A", example: "Das ist keineswegs selbstverständlich." }
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
  { german: "was für ein", english: "what kind of", prateritum: "N/A", perfekt: "N/A", example: "Was für ein Auto fährst du?" },
  { german: "woraufhin", english: "upon which, whereupon", prateritum: "N/A", perfekt: "N/A", example: "Er sagte das, woraufhin sie ging." },
  { german: "von wem", english: "by whom, from whom", prateritum: "N/A", perfekt: "N/A", example: "Von wem ist dieser Brief?" },
  { german: "mit wem", english: "with whom", prateritum: "N/A", perfekt: "N/A", example: "Mit wem gehst du ins Kino?" }
];

const verbs = [
  { german: "sein", english: "to be", prateritum: "war", perfekt: "ist gewesen", example: "Ich war gestern zu Hause. Ich bin immer pünktlich gewesen.", note: "Used both as a main verb and as an auxiliary for verbs indicating movement or a change of state. Bsp: Er ist nach Hause gegangen." },
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
  { german: "schreiben", english: "to write", prateritum: "schrieb", perfekt: "hat geschrieben", example: "Ich schrieb einen Brief. Ich habe den Aufsatz gestern schon geschrieben.", note: "Putting words on paper or a screen." },
  { german: "lesen", english: "to read", prateritum: "las", perfekt: "hat gelesen", example: "Ich las ein Buch. Ich habe viel über Geschichte gelesen.", note: "Act of interpreting written text." },
  { german: "bleiben", english: "to stay, remain", prateritum: "blieb", perfekt: "ist geblieben", example: "Ich blieb den ganzen Tag zu Hause. Ich bin den ganzen Tag dort geblieben.", note: "Indicates remaining in a place or condition." },
  { german: "bringen", english: "to bring", prateritum: "brachte", perfekt: "hat gebracht", example: "Er brachte mir ein Geschenk. Er hat es extra für mich gebracht.", note: "Transferring or delivering something." },
  { german: "helfen", english: "to help", prateritum: "half", perfekt: "hat geholfen", example: "Sie half mir bei den Hausaufgaben. Sie hat mir sehr geholfen.", note: "Providing assistance or support." },
  { german: "beginnen", english: "to begin", prateritum: "begann", perfekt: "hat begonnen", example: "Ich begann mit der Arbeit. Ich habe schon früh damit begonnen.", note: "Marks the start of an action or process." },
  { german: "gewinnen", english: "to win", prateritum: "gewann", perfekt: "hat gewonnen", example: "Wir gewannen das Spiel. Wir haben endlich gewonnen.", note: "Indicates success in a competition or challenge." },
  { german: "verlieren", english: "to lose", prateritum: "verlor", perfekt: "hat verloren", example: "Sie verlor ihre Schlüssel. Sie hat sie nirgends gefunden und verloren.", note: "Indicates failure to retain or succeed." },
  { german: "liegen", english: "to lie", prateritum: "lag", perfekt: "hat gelegen", example: "Das Buch lag auf dem Tisch. Es hat die ganze Zeit dort gelegen.", note: "Describes being in a horizontal position." },
  { german: "vergessen", english: "to forget", prateritum: "vergaß", perfekt: "hat vergessen", example: "Ich vergaß meine Tasche. Ich habe sie im Auto vergessen.", note: "Refers to failing to remember something." },
  { german: "verstehen", english: "to understand", prateritum: "verstand", perfekt: "hat verstanden", example: "Wir verstanden die Aufgabe. Wir haben es sofort verstanden.", note: "Involves comprehending or grasping meaning." },
  { german: "kennen", english: "to know (be familiar with)", prateritum: "kannte", perfekt: "hat gekannt", example: "Ich kannte ihn seit Jahren. Ich habe ihn lange gekannt.", note: "Being acquainted or familiar with someone/something." },
  { german: "erklären", english: "to explain", prateritum: "erklärte", perfekt: "hat erklärt", example: "Sie erklärte das Problem. Sie hat alles deutlich erklärt.", note: "Making something clear or understandable." },
  { german: "entscheiden", english: "to decide", prateritum: "entschied", perfekt: "hat entschieden", example: "Ich entschied mich für das rote Kleid. Ich habe mich endgültig entschieden.", note: "Making a choice or coming to a conclusion." },
  { german: "versuchen", english: "to try, attempt", prateritum: "versuchte", perfekt: "hat versucht", example: "Er versuchte, das Rätsel zu lösen. Er hat es immer wieder versucht.", note: "Making an effort to do something." },
  { german: "gefallen", english: "to please, to like", prateritum: "gefiel", perfekt: "hat gefallen", example: "Das Lied gefiel mir sehr. Es hat mir schon beim ersten Hören gefallen.", note: "Expresses a positive impression or enjoyment." },
  { german: "gehören", english: "to belong", prateritum: "gehörte", perfekt: "hat gehört", example: "Das Buch gehörte mir. Es hat mir immer gehört.", note: "Indicates ownership or association." },
  { german: "bitten", english: "to ask, request", prateritum: "bat", perfekt: "hat gebeten", example: "Ich bat ihn um Hilfe. Ich habe ihn mehrmals darum gebeten.", note: "Making a polite or earnest request." },
  { german: "empfehlen", english: "to recommend", prateritum: "empfahl", perfekt: "hat empfohlen", example: "Sie empfahl mir ein gutes Restaurant. Sie hat es mir wärmstens empfohlen.", note: "Suggests a favorable opinion or endorsement." },
  { german: "versprechen", english: "to promise", prateritum: "versprach", perfekt: "hat versprochen", example: "Ich versprach dir, pünktlich zu sein. Ich habe es fest versprochen.", note: "Indicates a commitment or assurance of an action." },
  { german: "entdecken", english: "to discover", prateritum: "entdeckte", perfekt: "hat entdeckt", example: "Wir entdeckten einen neuen Weg. Wir haben den Pfad zufällig entdeckt.", note: "Refers to finding something new or unexpected." },
  { german: "entwickeln", english: "to develop", prateritum: "entwickelte", perfekt: "hat entwickelt", example: "Die Firma entwickelte ein neues Produkt. Sie haben es in kurzer Zeit entwickelt.", note: "The process of growth or evolution, often through planning and work." },
  { german: "putzen", english: "to clean", prateritum: "putzte", perfekt: "hat geputzt", example: "Ich putzte das Fenster. Ich habe heute schon das ganze Haus geputzt.", note: "Refers to cleaning or tidying up something." },
  { german: "sich erinnern", english: "to remember (reflexive)", prateritum: "erinnerte sich", perfekt: "hat sich erinnert", example: "Ich erinnerte mich daran, den Termin wahrzunehmen. Ich habe mich rechtzeitig erinnert.", note: "Reflexive verb meaning 'to recall' or 'to keep in mind'." }
];

const tenseRules = [
  { german: "Sein als Hilfsverb", english: "Usage of 'sein' as an auxiliary verb", prateritum: "war", perfekt: "ist gewesen", example: "Ich bin nach Hause gegangen.", note: "Verbs that denote movement or a change of state use 'sein' to form the perfect tense. Z.B.: Er ist eingeschlafen." },
  { german: "Haben als Hilfsverb", english: "Usage of 'haben' as an auxiliary verb", prateritum: "hatte", perfekt: "hat gehabt", example: "Ich habe das Buch gelesen.", note: "Most verbs use 'haben' to form the perfect tense, especially those that do not imply movement or change of state." },
  { german: "Bildung des Perfekts", english: "Formation of the perfect tense", prateritum: "N/A", perfekt: "N/A", example: "Hilfsverb (haben/sein) + Partizip II (z.B. gegangen, gemacht).", note: "The perfect tense is formed with an auxiliary verb and the past participle. The choice of auxiliary depends on the verb's meaning." },
  { german: "Bildung des Präteritums", english: "Formation of the simple past", prateritum: "N/A", perfekt: "N/A", example: "Regular and irregular forms must be memorized.", note: "The simple past is primarily used in written language and requires memorizing both regular and irregular forms." },
  { german: "Perfekt vs. Präteritum", english: "Usage in Spoken vs. Written Language", prateritum: "N/A", perfekt: "N/A", example: "Ich habe gegessen (spoken) vs. Ich aß (narrative writing).", note: "In everyday conversation, the Perfekt is most common, whereas the Präteritum is typically used in literature and formal writing." },
  { german: "Plusquamperfekt", english: "Usage of the Past Perfect", prateritum: "hatte/war", perfekt: "N/A", example: "Ich hatte gegessen, bevor ich wegging.", note: "Expresses an action that occurred before another past action." },
  { german: "Reflexive Verben im Perfekt", english: "Reflexive verbs in the Perfect Tense", prateritum: "N/A", perfekt: "hat sich ... ge-verb", example: "Ich habe mich geduscht.", note: "Generally use 'haben' + reflexive pronoun + Partizip II." }
];

const categoriesMap = {
  "Conjunctions": conjunctions,
  "Prepositions": prepositions,
  "Adverbs": adverbs,
  "Question Words": questions,
  "Verbs": verbs,
  "Tense Rules": tenseRules
};

const knownWordsKey = 'knownWordsExtended';

function QuizSection() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState([]);
  useEffect(() => {
    if (showQuizResult) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    }
  }, [showQuizResult]);
  const handleQuizOptionSelect = (idx) => {
    setSelectedOptionIndex(idx);
  };
  const handleQuizSubmit = () => {
    if (selectedOptionIndex === null) return;
    const currentQuestion = quizQuestions[currentQuizIndex];
    const isCorrect = selectedOptionIndex === currentQuestion.correctIndex;
    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
    }
    setQuizAnswers((prev) => [
      ...prev,
      { question: currentQuestion.question, options: currentQuestion.options, selected: selectedOptionIndex, correct: currentQuestion.correctIndex }
    ]);
    setSelectedOptionIndex(null);
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1);
    } else {
      setShowQuizResult(true);
    }
  };
  const handleQuizRestart = () => {
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setSelectedOptionIndex(null);
    setShowQuizResult(false);
    setQuizAnswers([]);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  };
  return (
    <motion.div variants={fadeUpVariant} className="mb-10 w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Quick Tense Quiz</h2>
      {!showQuizResult ? (
        <div className="bg-[#1b2735] p-4 rounded-md shadow-md">
          <p className="text-sm md:text-base font-semibold mb-3">
            Question {currentQuizIndex + 1} of {quizQuestions.length}
          </p>
          <p className="text-sm md:text-base mb-4 text-gray-200">
            {quizQuestions[currentQuizIndex].question}
          </p>
          <div className="flex flex-col gap-2 mb-4">
            {quizQuestions[currentQuizIndex].options.map((opt, idx) => (
              <label key={idx} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="mr-2"
                  checked={selectedOptionIndex === idx}
                  onChange={() => handleQuizOptionSelect(idx)}
                />
                <span className="text-gray-300 text-sm md:text-base">{opt}</span>
              </label>
            ))}
          </div>
          <button
            onClick={handleQuizSubmit}
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="bg-[#1b2735] p-4 rounded-md shadow-md">
          <p className="text-lg font-semibold mb-4 text-center">
            You scored {quizScore} / {quizQuestions.length}
          </p>
          <div className="mb-4 space-y-4">
            {quizAnswers.map((answer, idx) => (
              <div key={idx} className="p-4 rounded-md bg-gray-800">
                <p className="font-semibold mb-2">Q{idx + 1}: {answer.question}</p>
                <ul>
                  {answer.options.map((opt, optIdx) => {
                    let classes = "text-sm md:text-base ";
                    if (optIdx === answer.correct) {
                      classes += "text-green-400 font-bold";
                    }
                    if (optIdx === answer.selected && answer.selected !== answer.correct) {
                      classes += " text-red-400 font-bold";
                    }
                    return (
                      <li key={optIdx} className={classes}>
                        {optIdx === answer.selected ? "Your answer: " : ""}
                        {opt}
                        {optIdx === answer.correct && " (Correct)"}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleQuizRestart}
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-2 rounded-md"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function GrammarOverview() {
  const [openSectionIndex, setOpenSectionIndex] = useState(null);
  const toggleSection = (index) => {
    setOpenSectionIndex((prev) => (prev === index ? null : index));
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  };
  return (
    <motion.div variants={fadeUpVariant} className="mb-10 w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Grammar Overview</h2>
      <div className="space-y-4">
        {grammarSections.map((section, idx) => (
          <div key={idx} className="bg-[#1b2735] p-4 rounded-md shadow-md">
            <button
              onClick={() => toggleSection(idx)}
              className="w-full text-left font-semibold text-lg focus:outline-none flex justify-between items-center"
            >
              <span>{section.title}</span>
              <span>{openSectionIndex === idx ? "−" : "+"}</span>
            </button>
            {openSectionIndex === idx && (
              <div className="mt-3 text-sm md:text-base text-gray-200">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PracticeSession() {
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
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 10);
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
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  }
  function toggleMeaning() {
    setShowMeaning((prev) => !prev);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  }
  const currentWordObj = currentIndex >= 0 && currentIndex < currentList.length ? currentList[currentIndex] : null;
  const categoryNames = Object.keys(categoriesMap);
  return (
    <motion.div variants={fadeUpVariant} className="mb-10 w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Practice Session</h2>
      <p className="text-center text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
        1) Choose a category · 2) Restart Deck to shuffle · 3) Show Details for more info · 4) Use Next Word or Mark as Known to manage your deck
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categoryNames.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded font-medium text-sm transition ${
              cat === selectedCategory
                ? 'bg-accent text-white shadow-lg'
                : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
      </div>
      <div className="bg-[#1b2735] rounded-lg shadow-lg p-6 min-h-[220px]">
        {currentWordObj ? (
          <>
            <motion.h3
              key={currentWordObj.german}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="text-xl md:text-2xl font-bold text-center mb-4 text-accent"
            >
              {currentWordObj.german}
            </motion.h3>
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
                {currentWordObj.prateritum && currentWordObj.prateritum !== "N/A" && (
                  <p className="mb-1">
                    <span className="font-semibold text-accent">Präteritum:</span> {currentWordObj.prateritum}
                  </p>
                )}
                {currentWordObj.perfekt && currentWordObj.perfekt !== "N/A" && (
                  <p className="mb-1">
                    <span className="font-semibold text-accent">Perfekt:</span> {currentWordObj.perfekt}
                  </p>
                )}
                {currentWordObj.example && (
                  <p className="mb-1">
                    <span className="font-semibold text-accent">Example:</span> {currentWordObj.example}
                  </p>
                )}
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
      </div>
      <div className="mt-6 text-center text-xs text-gray-400">
        <p className="mb-1">Progress: {currentIndex + 1} / {currentList.length}</p>
        <progress
          className="w-full h-3 bg-gray-800 rounded overflow-hidden"
          value={currentIndex + 1}
          max={currentList.length}
        />
      </div>
    </motion.div>
  );
}

export default function GermanLearningPage() {
  const [activeTab, setActiveTab] = useState('quiz');
  const tabs = [
    { key: 'quiz', label: 'Quiz' },
    { key: 'grammar', label: 'Grammar' },
    { key: 'practice', label: 'Practice' }
  ];
  return (
    <section
      data-scroll-section
      className="w-full min-h-screen flex flex-col items-center text-white bg-gradient-to-r from-[#0e1622] to-[#1b2735] p-4"
    >
      <motion.div variants={containerVariant} initial="hidden" animate="show" className="max-w-3xl w-full">
        <motion.h1
          variants={fadeUpVariant}
          className="text-3xl md:text-4xl font-extrabold text-accent mt-8 mb-6 text-center"
        >
          German Past Tense & Practice Session
        </motion.h1>
        <div className="flex justify-center mb-8">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setActiveTab(tab.key)}
              className={`mx-2 px-4 py-2 rounded-full font-semibold text-sm transition ${
                activeTab === tab.key
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
        {activeTab === 'quiz' && <QuizSection />}
        {activeTab === 'grammar' && <GrammarOverview />}
        {activeTab === 'practice' && <PracticeSession />}
      </motion.div>
    </section>
  );
}