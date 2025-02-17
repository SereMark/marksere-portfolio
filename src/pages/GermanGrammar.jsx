import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { grammarSections, quizQuestions, categoriesMap, knownWordsKey } from '../data/germanData';
import { fadeUpVariant, containerVariant } from '../motionVariants';

const triggerResize = () => {
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 10);
};

function QuizSection() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState([]);
  useEffect(() => {
    if (showQuizResult) {
      triggerResize();
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
    triggerResize();
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
                <input type="radio" className="mr-2" checked={selectedOptionIndex === idx} onChange={() => handleQuizOptionSelect(idx)} />
                <span className="text-gray-300 text-sm md:text-base">{opt}</span>
              </label>
            ))}
          </div>
          <button onClick={handleQuizSubmit} className="bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-2 rounded-md">
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
            <button onClick={handleQuizRestart} className="bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-2 rounded-md">
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
    triggerResize();
  };
  return (
    <motion.div variants={fadeUpVariant} className="mb-10 w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Grammar Overview</h2>
      <div className="space-y-4">
        {grammarSections.map((section, idx) => (
          <div key={idx} className="bg-[#1b2735] p-4 rounded-md shadow-md">
            <button onClick={() => toggleSection(idx)} className="w-full text-left font-semibold text-lg focus:outline-none flex justify-between items-center">
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
    const clearedSet = new Set();
    setKnownWordsSet(clearedSet);
    const rawList = categoriesMap[selectedCategory] || [];
    const filtered = rawList.filter((item) => !clearedSet.has(item.german));
    shuffleArray(filtered);
    setCurrentList(filtered);
    setCurrentIndex(0);
    setShowMeaning(false);
  }
  function handleNextWord() {
    setShowMeaning(false);
    if (currentIndex < currentList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(currentList.length);
    }
    triggerResize();
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
    triggerResize();
  }
  function toggleMeaning() {
    setShowMeaning((prev) => !prev);
    triggerResize();
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
            className={`px-3 py-1.5 rounded font-medium text-sm transition ${cat === selectedCategory ? 'bg-accent text-white shadow-lg' : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <button onClick={handleRestart} className="px-4 py-2 rounded-full font-semibold bg-accent text-white hover:bg-accent-dark transition">
          Restart Deck
        </button>
        <button onClick={resetKnownWords} className="px-4 py-2 rounded-full font-semibold bg-red-600 text-white hover:bg-red-700 transition">
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
              <button onClick={toggleMeaning} className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition">
                {showMeaning ? 'Hide Details' : 'Show Details'}
              </button>
              <button onClick={handleNextWord} className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition">
                Next Word
              </button>
              <button onClick={handleMarkAsKnown} className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition">
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
        <progress className="w-full h-3 bg-gray-800 rounded overflow-hidden" value={currentIndex + 1} max={currentList.length} />
      </div>
    </motion.div>
  );
}

export default function GermanGrammar() {
  const [activeTab, setActiveTab] = useState('quiz');
  const tabs = [
    { key: 'quiz', label: 'Quiz' },
    { key: 'grammar', label: 'Grammar' },
    { key: 'practice', label: 'Practice' }
  ];
  return (
    <section data-scroll-section className="w-full min-h-screen flex flex-col items-center text-white bg-gradient-to-r from-[#0e1622] to-[#1b2735] p-4">
      <motion.div variants={containerVariant} initial="hidden" animate="show" className="max-w-3xl w-full">
        <motion.h1 variants={fadeUpVariant} className="text-3xl md:text-4xl font-extrabold text-accent mt-8 mb-6 text-center">
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
              className={`mx-2 px-4 py-2 rounded-full font-semibold text-sm transition ${activeTab === tab.key ? 'bg-accent text-white shadow-lg' : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'}`}
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