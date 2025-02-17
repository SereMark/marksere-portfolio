import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  grammarSections,
  quizQuestions,
  categoriesMap,
  knownWordsKey,
  alsWennQuestions,
  sentenceReorderData,
  caseCompletionData,
  prepositionSelectData,
  twoWayPrepositionData,
  verbPairData,
  verbMatchingData,
  scenarioExerciseData
} from '../data/germanData'
import { fadeUpVariant, containerVariant } from '../motionVariants'

const triggerResize = () => {
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'))
    window.dispatchEvent(new Event('refreshScroll'))
  }, 10)
}

function GrammarOverview() {
  const [openSectionIndex, setOpenSectionIndex] = useState(null)
  const toggleSection = index => {
    setOpenSectionIndex(prev => (prev === index ? null : index))
    triggerResize()
  }
  useEffect(() => { triggerResize() }, [openSectionIndex])
  return (
    <motion.div variants={fadeUpVariant} className="mb-12 w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">Grammar Overview</h2>
      <div className="space-y-6">
        {grammarSections.map((section, idx) => (
          <div key={idx} className="bg-[#1b2735] p-6 rounded-xl shadow-md transition hover:shadow-lg">
            <button onClick={() => toggleSection(idx)} aria-expanded={openSectionIndex === idx} aria-controls={`section-${idx}`} className="w-full text-left font-medium text-xl focus:outline-none flex justify-between items-center">
              <span>{section.title}</span>
              <span className="text-2xl">{openSectionIndex === idx ? "−" : "+"}</span>
            </button>
            {openSectionIndex === idx && (
              <div id={`section-${idx}`} className="mt-4 text-base text-gray-200">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function QuickQuiz() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)
  const [quizScore, setQuizScore] = useState(0)
  const [showQuizResult, setShowQuizResult] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState([])
  useEffect(() => { triggerResize() }, [currentQuizIndex, quizAnswers, quizScore, showQuizResult])
  const handleQuizOptionSelect = idx => setSelectedOptionIndex(idx)
  const handleQuizSubmit = () => {
    if (selectedOptionIndex === null) return
    const currentQuestion = quizQuestions[currentQuizIndex]
    const isCorrect = selectedOptionIndex === currentQuestion.correctIndex
    if (isCorrect) setQuizScore(prev => prev + 1)
    setQuizAnswers(prev => [...prev, { question: currentQuestion.question, options: currentQuestion.options, selected: selectedOptionIndex, correct: currentQuestion.correctIndex }])
    setSelectedOptionIndex(null)
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex(prev => prev + 1)
    } else {
      setShowQuizResult(true)
    }
  }
  const handleQuizRestart = () => {
    setCurrentQuizIndex(0)
    setQuizScore(0)
    setSelectedOptionIndex(null)
    setShowQuizResult(false)
    setQuizAnswers([])
    triggerResize()
  }
  return (
    <div className="bg-[#1b2735] p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Quick Quiz</h3>
      {!showQuizResult ? (
        <>
          <p className="mb-4 text-gray-200 text-lg">Question {currentQuizIndex + 1} of {quizQuestions.length}</p>
          <p className="mb-4 text-gray-200 text-lg">{quizQuestions[currentQuizIndex].question}</p>
          <div className="flex flex-col gap-3 mb-4">
            {quizQuestions[currentQuizIndex].options.map((opt, idx) => (
              <label key={idx} className="flex items-center cursor-pointer text-gray-300 text-lg">
                <input type="radio" className="mr-3" checked={selectedOptionIndex === idx} onChange={() => handleQuizOptionSelect(idx)} aria-label={`Option ${idx + 1}`} />
                {opt}
              </label>
            ))}
          </div>
          <button onClick={handleQuizSubmit} className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">
            Submit
          </button>
        </>
      ) : (
        <div className="text-center">
          <p className="text-xl mb-4 text-gray-200">You scored {quizScore} / {quizQuestions.length}</p>
          <div className="space-y-3">
            {quizAnswers.map((answer, idx) => (
              <div key={idx} className="p-4 rounded-md bg-gray-800">
                <p className="font-medium mb-2">Q{idx + 1}: {answer.question}</p>
                <ul>
                  {answer.options.map((opt, optIdx) => {
                    let classes = "text-lg "
                    if (optIdx === answer.correct) classes += "text-green-400 font-semibold"
                    if (optIdx === answer.selected && answer.selected !== answer.correct) classes += " text-red-400 font-semibold"
                    return (
                      <li key={optIdx} className={classes}>
                        {optIdx === answer.selected ? "Your answer: " : ""}
                        {opt}{optIdx === answer.correct && " (Correct)"}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
          <button onClick={handleQuizRestart} className="mt-5 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  )
}

function PracticeSession() {
  const [selectedCategory, setSelectedCategory] = useState('Conjunctions')
  const [currentList, setCurrentList] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)
  const [knownWordsSet, setKnownWordsSet] = useState(new Set())
  useEffect(() => {
    const data = localStorage.getItem(knownWordsKey)
    if (data) { try { setKnownWordsSet(new Set(JSON.parse(data))) } catch { setKnownWordsSet(new Set()) } }
  }, [])
  useEffect(() => { loadCategory(selectedCategory) }, [selectedCategory])
  useEffect(() => { triggerResize() }, [currentList, currentIndex, showMeaning])
  function saveKnownWords(updatedSet) {
    localStorage.setItem(knownWordsKey, JSON.stringify(Array.from(updatedSet)))
  }
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]] }
    return arr
  }
  function filterKnownWords(list) { return list.filter(item => !knownWordsSet.has(item.german)) }
  function loadCategory(cat) {
    const rawList = categoriesMap[cat] || []
    const filtered = filterKnownWords(rawList)
    shuffleArray(filtered)
    setCurrentList(filtered)
    setCurrentIndex(0)
    setShowMeaning(false)
  }
  function handleRestart() { loadCategory(selectedCategory) }
  function resetKnownWords() {
    localStorage.removeItem(knownWordsKey)
    const clearedSet = new Set()
    setKnownWordsSet(clearedSet)
    const rawList = categoriesMap[selectedCategory] || []
    const filtered = rawList.filter(item => !clearedSet.has(item.german))
    shuffleArray(filtered)
    setCurrentList(filtered)
    setCurrentIndex(0)
    setShowMeaning(false)
  }
  function handleNextWord() {
    setShowMeaning(false)
    if (currentIndex < currentList.length - 1) { setCurrentIndex(prev => prev + 1) } else { setCurrentIndex(currentList.length) }
    triggerResize()
  }
  function handleMarkAsKnown() {
    if (!currentList.length || currentIndex < 0) return
    const knownWord = currentList[currentIndex]
    if (!knownWord) return
    const updatedSet = new Set(knownWordsSet)
    updatedSet.add(knownWord.german)
    setKnownWordsSet(updatedSet)
    saveKnownWords(updatedSet)
    const newList = [...currentList]
    newList.splice(currentIndex, 1)
    setCurrentList(newList)
    if (currentIndex >= newList.length) setCurrentIndex(newList.length - 1)
    setShowMeaning(false)
    triggerResize()
  }
  function toggleMeaning() { setShowMeaning(prev => !prev); triggerResize() }
  const currentWordObj = currentIndex >= 0 && currentIndex < currentList.length ? currentList[currentIndex] : null
  const categoryNames = Object.keys(categoriesMap)
  return (
    <motion.div variants={fadeUpVariant} className="mb-12 w-full">
      <h2 className="text-3xl font-bold mb-4 text-center">Vocabulary Practice</h2>
      <p className="text-center text-lg text-gray-300 mb-4">Choose a category and manage your deck.</p>
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {categoryNames.map(cat => (
          <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-5 py-2 rounded-full font-medium text-base transition ${cat===selectedCategory ? 'bg-accent text-white shadow-md' : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'}`}>
            {cat}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <button onClick={handleRestart} className="px-5 py-2 rounded-full font-semibold bg-accent text-white hover:bg-accent-dark transition">Restart Deck</button>
        <button onClick={resetKnownWords} className="px-5 py-2 rounded-full font-semibold bg-red-600 text-white hover:bg-red-700 transition">Reset Known Words</button>
      </div>
      <div className="bg-[#1b2735] p-6 rounded-xl shadow-md min-h-[200px] transition hover:shadow-lg">
        {currentWordObj ? (
          <>
            <motion.h3 key={currentWordObj.german} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="text-2xl font-bold text-center mb-4 text-accent">
              {currentWordObj.german}
            </motion.h3>
            {showMeaning && (
              <motion.div key={currentWordObj.english} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="mb-4 text-base bg-gray-800 p-4 rounded">
                <p className="mb-1"><span className="font-semibold text-accent">Meaning:</span> {currentWordObj.english}</p>
                {currentWordObj.prateritum && currentWordObj.prateritum !== "N/A" && (<p className="mb-1"><span className="font-semibold text-accent">Präteritum:</span> {currentWordObj.prateritum}</p>)}
                {currentWordObj.perfekt && currentWordObj.perfekt !== "N/A" && (<p className="mb-1"><span className="font-semibold text-accent">Perfekt:</span> {currentWordObj.perfekt}</p>)}
                {currentWordObj.example && (<p className="mb-1"><span className="font-semibold text-accent">Example:</span> {currentWordObj.example}</p>)}
                {currentWordObj.note && (<p className="mt-1"><span className="font-semibold text-accent">Note:</span> {currentWordObj.note}</p>)}
              </motion.div>
            )}
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={toggleMeaning} className="px-5 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition">
                {showMeaning ? 'Hide Details' : 'Show Details'}
              </button>
              <button onClick={handleNextWord} className="px-5 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition">Next Word</button>
              <button onClick={handleMarkAsKnown} className="px-5 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition">Mark as Known</button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center min-h-[150px] text-center text-gray-200">
            {currentList.length===0 ? (<p className="text-xl">All done! No more words.</p>) : (<p className="text-xl">No current card. Pick a category or restart deck.</p>)}
          </div>
        )}
      </div>
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>Progress: {currentIndex+1} / {currentList.length}</p>
        <progress className="w-full h-2 bg-gray-800 rounded" value={currentIndex+1} max={currentList.length} />
      </div>
    </motion.div>
  )
}

function AlsWennQuiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  useEffect(() => { triggerResize() }, [current, score, showResult])
  const handleSelect = idx => setSelected(idx)
  const handleSubmit = () => {
    if (selected === null) return
    const currentQuestion = alsWennQuestions[current]
    const isCorrect = selected === currentQuestion.correct
    if (isCorrect) setScore(prev => prev + 1)
    setQuizAnswers(prev => [...prev, { question: currentQuestion.sentence, options: currentQuestion.options, selected, correct: currentQuestion.correct }])
    setSelected(null)
    if (current < alsWennQuestions.length - 1) {
      setCurrent(prev => prev + 1)
    } else {
      setShowResult(true)
    }
  }
  const handleRestart = () => {
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setQuizAnswers([])
    setShowResult(false)
  }
  return (
    <div className="bg-[#1b2735] p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Als vs. Wenn Quiz</h3>
      {!showResult ? (
        <>
          <p className="mb-4 text-gray-200 text-lg">{alsWennQuestions[current].sentence}</p>
          <div className="flex flex-col gap-3 mb-4">
            {alsWennQuestions[current].options.map((opt, idx) => (
              <label key={idx} className="flex items-center cursor-pointer text-gray-300 text-lg">
                <input type="radio" className="mr-3" checked={selected === idx} onChange={() => handleSelect(idx)} aria-label={`Option ${idx + 1}`} />
                {opt}
              </label>
            ))}
          </div>
          <button onClick={handleSubmit} className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">Submit</button>
        </>
      ) : (
        <div className="text-center">
          <p className="text-xl mb-4 text-gray-200">You scored {score} / {alsWennQuestions.length}</p>
          <div className="space-y-3">
            {quizAnswers.map((answer, idx) => (
              <div key={idx} className="p-4 rounded-md bg-gray-800">
                <p className="font-medium mb-2">Q{idx + 1}: {answer.question}</p>
                <ul>
                  {answer.options.map((opt, optIdx) => {
                    let classes = "text-lg "
                    if (optIdx === answer.correct) classes += "text-green-400 font-semibold"
                    if (optIdx === answer.selected && answer.selected !== answer.correct) classes += " text-red-400 font-semibold"
                    return (
                      <li key={optIdx} className={classes}>
                        {optIdx === answer.selected ? "Your answer: " : ""}
                        {opt}{optIdx === answer.correct && " (Correct)"}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
          <button onClick={handleRestart} className="mt-5 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">Restart Quiz</button>
        </div>
      )}
    </div>
  )
}

function SentenceReorder() {
  const { correctOrder } = sentenceReorderData[0]
  const [words, setWords] = useState([...correctOrder].sort(() => Math.random() - 0.5))
  const [draggedIndex, setDraggedIndex] = useState(null)
  const [feedback, setFeedback] = useState("")
  useEffect(() => { triggerResize() }, [words, feedback])
  const handleDragStart = index => setDraggedIndex(index)
  const handleDrop = index => {
    if (draggedIndex === null) return
    const newWords = [...words]
    ;[newWords[draggedIndex], newWords[index]] = [newWords[index], newWords[draggedIndex]]
    setWords(newWords)
    setDraggedIndex(null)
  }
  const checkOrder = () => {
    setFeedback(words.join(" ") === correctOrder.join(" ") ? "Correct order!" : "Incorrect order. Try again.")
  }
  return (
    <div className="bg-[#1b2735] p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Sentence Reordering</h3>
      <p className="mb-4 text-gray-200 text-lg">Drag and drop to form a correct sentence:</p>
      <div className="flex flex-wrap gap-3 mb-4 justify-center">
        {words.map((word, idx) => (
          <div key={idx} draggable onDragStart={() => handleDragStart(idx)} onDragOver={e => e.preventDefault()} onDrop={() => handleDrop(idx)} className="bg-gray-700 text-gray-200 px-5 py-2 rounded cursor-move text-lg transition hover:shadow-md">
            {word}
          </div>
        ))}
      </div>
      <button onClick={checkOrder} className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">Check Order</button>
      {feedback && <p className="mt-4 text-center text-lg text-gray-300">{feedback}</p>}
    </div>
  )
}

function CaseCompletion() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  useEffect(() => { triggerResize() }, [current, feedback, showFeedback])
  const handleSelect = idx => setSelected(idx)
  const handleSubmit = () => {
    if (selected === null) return
    const currentQuestion = caseCompletionData[current]
    const isCorrect = selected === currentQuestion.correct
    const fb = isCorrect ? "Correct! " + currentQuestion.explanation : "Incorrect. " + currentQuestion.explanation
    setFeedback(fb)
    setShowFeedback(true)
    setQuizAnswers(prev => [...prev, { question: currentQuestion.sentence, options: currentQuestion.options, selected, correct: currentQuestion.correct, explanation: currentQuestion.explanation }])
  }
  const handleNext = () => {
    setSelected(null)
    setFeedback("")
    setShowFeedback(false)
    if (current < caseCompletionData.length - 1) {
      setCurrent(prev => prev + 1)
    } else {
      setShowResult(true)
    }
  }
  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setFeedback("")
    setShowFeedback(false)
    setQuizAnswers([])
    setShowResult(false)
    triggerResize()
  }
  return (
    <div className="bg-[#1b2735] p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Case Completion</h3>
      {!showResult ? (
        <>
          <p className="mb-4 text-gray-200 text-lg">{caseCompletionData[current].sentence}</p>
          <div className="flex flex-col gap-3 mb-4">
            {caseCompletionData[current].options.map((opt, idx) => (
              <label key={idx} className="flex items-center cursor-pointer text-gray-300 text-lg">
                <input type="radio" className="mr-3" checked={selected === idx} onChange={() => handleSelect(idx)} aria-label={`Option ${idx + 1}`} />
                {opt}
              </label>
            ))}
          </div>
          {!showFeedback ? (
            <button onClick={handleSubmit} className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">Submit</button>
          ) : (
            <>
              <p className="mt-4 text-center text-lg text-gray-300">{feedback}</p>
              <button onClick={handleNext} className="mt-4 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">
                {current === caseCompletionData.length - 1 ? "Finish Quiz" : "Next"}
              </button>
            </>
          )}
        </>
      ) : (
        <div className="text-center">
          <p className="text-xl mb-4 text-gray-200">Quiz Completed. Review your answers:</p>
          <div className="space-y-3">
            {quizAnswers.map((answer, idx) => (
              <div key={idx} className="p-4 rounded-md bg-gray-800">
                <p className="font-medium mb-2">Q{idx+1}: {answer.question}</p>
                <ul>
                  {answer.options.map((opt, optIdx) => {
                    let classes = "text-lg "
                    if (optIdx === answer.correct) classes += "text-green-400 font-semibold"
                    if (optIdx === answer.selected && answer.selected !== answer.correct) classes += " text-red-400 font-semibold"
                    return (
                      <li key={optIdx} className={classes}>
                        {optIdx === answer.selected ? "Your answer: " : ""}
                        {opt}{optIdx === answer.correct && " (Correct)"}
                      </li>
                    )
                  })}
                </ul>
                <p className="mt-2 text-gray-400">{answer.explanation}</p>
              </div>
            ))}
          </div>
          <button onClick={handleRestart} className="mt-5 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">Restart Quiz</button>
        </div>
      )}
    </div>
  )
}

function PrepositionSelect() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  useEffect(() => { triggerResize() }, [current, feedback, showFeedback])
  const handleSelect = idx => setSelected(idx)
  const handleSubmit = () => {
    if (selected === null) return
    const currentQuestion = prepositionSelectData[current]
    const isCorrect = selected === currentQuestion.correct
    const fb = isCorrect ? "Correct! " + currentQuestion.explanation : "Incorrect. " + currentQuestion.explanation
    setFeedback(fb)
    setShowFeedback(true)
    setQuizAnswers(prev => [...prev, { question: currentQuestion.sentence, options: currentQuestion.options, selected, correct: currentQuestion.correct, explanation: currentQuestion.explanation }])
  }
  const handleNext = () => {
    setSelected(null)
    setFeedback("")
    setShowFeedback(false)
    if (current < prepositionSelectData.length - 1) { setCurrent(prev => prev + 1) } else { setShowResult(true) }
  }
  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setFeedback("")
    setShowFeedback(false)
    setQuizAnswers([])
    setShowResult(false)
    triggerResize()
  }
  return (
    <div className="bg-[#1b2735] p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Preposition Selection</h3>
      {!showResult ? (
        <>
          <p className="mb-4 text-gray-200 text-lg">{prepositionSelectData[current].sentence}</p>
          <div className="flex flex-col gap-3 mb-4">
            {prepositionSelectData[current].options.map((opt, idx) => (
              <label key={idx} className="flex items-center cursor-pointer text-gray-300 text-lg">
                <input type="radio" className="mr-3" checked={selected === idx} onChange={() => handleSelect(idx)} aria-label={`Option ${idx + 1}`} />
                {opt}
              </label>
            ))}
          </div>
          {!showFeedback ? (
            <button onClick={handleSubmit} className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">Submit</button>
          ) : (
            <>
              <p className="mt-4 text-center text-lg text-gray-300">{feedback}</p>
              <button onClick={handleNext} className="mt-4 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">
                {current === prepositionSelectData.length - 1 ? "Finish Quiz" : "Next"}
              </button>
            </>
          )}
        </>
      ) : (
        <div className="text-center">
          <p className="text-xl mb-4 text-gray-200">Quiz Completed. Review your answers:</p>
          <div className="space-y-3">
            {quizAnswers.map((answer, idx) => (
              <div key={idx} className="p-4 rounded-md bg-gray-800">
                <p className="font-medium mb-2">Q{idx+1}: {answer.question}</p>
                <ul>
                  {answer.options.map((opt, optIdx) => {
                    let classes = "text-lg "
                    if (optIdx === answer.correct) classes += "text-green-400 font-semibold"
                    if (optIdx === answer.selected && answer.selected !== answer.correct) classes += " text-red-400 font-semibold"
                    return (
                      <li key={optIdx} className={classes}>
                        {optIdx === answer.selected ? "Your answer: " : ""}
                        {opt}{optIdx === answer.correct && " (Correct)"}
                      </li>
                    )
                  })}
                </ul>
                <p className="mt-2 text-gray-400">{answer.explanation}</p>
              </div>
            ))}
          </div>
          <button onClick={handleRestart} className="mt-5 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">Restart Quiz</button>
        </div>
      )}
    </div>
  )
}

function VerbPairSelection() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  useEffect(() => { triggerResize() }, [current, feedback, showFeedback])
  const handleSelect = idx => setSelected(idx)
  const handleSubmit = () => {
    if (selected === null) return
    const currentQuestion = verbPairData[current]
    const isCorrect = selected === currentQuestion.correct
    const fb = isCorrect ? "Correct! " + currentQuestion.explanation : "Incorrect. " + currentQuestion.explanation
    setFeedback(fb)
    setShowFeedback(true)
    setQuizAnswers(prev => [...prev, { question: currentQuestion.sentence, options: currentQuestion.options, selected, correct: currentQuestion.correct, explanation: currentQuestion.explanation }])
  }
  const handleNext = () => {
    setSelected(null)
    setFeedback("")
    setShowFeedback(false)
    if (current < verbPairData.length - 1) { setCurrent(prev => prev + 1) } else { setShowResult(true) }
  }
  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setFeedback("")
    setShowFeedback(false)
    setQuizAnswers([])
    setShowResult(false)
    triggerResize()
  }
  return (
    <div className="bg-[#1b2735] p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Verb Pair Selection</h3>
      {!showResult ? (
        <>
          <p className="mb-4 text-gray-200 text-lg">{verbPairData[current].sentence}</p>
          <div className="flex flex-col gap-3 mb-4">
            {verbPairData[current].options.map((opt, idx) => (
              <label key={idx} className="flex items-center cursor-pointer text-gray-300 text-lg">
                <input type="radio" className="mr-3" checked={selected === idx} onChange={() => handleSelect(idx)} aria-label={`Option ${idx + 1}`} />
                {opt}
              </label>
            ))}
          </div>
          {!showFeedback ? (
            <button onClick={handleSubmit} className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">Submit</button>
          ) : (
            <>
              <p className="mt-4 text-center text-lg text-gray-300">{feedback}</p>
              <button onClick={handleNext} className="mt-4 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">
                {current === verbPairData.length - 1 ? "Finish Quiz" : "Next"}
              </button>
            </>
          )}
        </>
      ) : (
        <div className="text-center">
          <p className="text-xl mb-4 text-gray-200">Quiz Completed. Review your answers:</p>
          <div className="space-y-3">
            {quizAnswers.map((answer, idx) => (
              <div key={idx} className="p-4 rounded-md bg-gray-800">
                <p className="font-medium mb-2">Q{idx+1}: {answer.question}</p>
                <ul>
                  {answer.options.map((opt, optIdx) => {
                    let classes = "text-lg "
                    if (optIdx === answer.correct) classes += "text-green-400 font-semibold"
                    if (optIdx === answer.selected && answer.selected !== answer.correct) classes += " text-red-400 font-semibold"
                    return (
                      <li key={optIdx} className={classes}>
                        {optIdx === answer.selected ? "Your answer: " : ""}
                        {opt}{optIdx === answer.correct && " (Correct)"}
                      </li>
                    )
                  })}
                </ul>
                <p className="mt-2 text-gray-400">{answer.explanation}</p>
              </div>
            ))}
          </div>
          <button onClick={handleRestart} className="mt-5 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">Restart Quiz</button>
        </div>
      )}
    </div>
  )
}

function VerbMatching() {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (verb, value) => setAnswers(prev => ({ ...prev, [verb]: value }))
  const handleSubmit = () => { setSubmitted(true); triggerResize() }
  return (
    <div className="bg-[#1b2735] p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Verb Matching</h3>
      <div className="mb-4">
        {verbMatchingData.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between mb-2">
            <span className="text-gray-200 text-lg">{item.verb}</span>
            <select onChange={e => handleChange(item.verb, e.target.value)} className="bg-gray-700 text-gray-200 px-4 py-2 rounded text-lg focus:outline-none" defaultValue="" aria-label={`Select case for ${item.verb}`}>
              <option value="">Select Case</option>
              <option value="Akkusativ">Akkusativ</option>
              <option value="Dativ">Dativ</option>
            </select>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">Submit</button>
      {submitted && (
        <div className="mt-4 space-y-2">
          {verbMatchingData.map((item, idx) => (
            <div key={idx}>
              <p className="text-gray-200 text-lg">
                {item.verb}: Your answer: <span className={answers[item.verb] === item.correct ? "text-green-400" : "text-red-400"}>
                  {answers[item.verb] || "None"}
                </span> | Correct: <span className="text-green-400">{item.correct}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ScenarioExercise() {
  const [response, setResponse] = useState("")
  const [feedback, setFeedback] = useState("")
  useEffect(() => { triggerResize() }, [response, feedback])
  const handleSubmit = () => {
    const lower = response.toLowerCase()
    if (lower.includes(scenarioExerciseData.expectedKeywords[0]) && lower.includes(scenarioExerciseData.expectedKeywords[1])) {
      setFeedback("Your response is acceptable.")
    } else {
      setFeedback("Your response could be improved. Try mentioning '" + scenarioExerciseData.expectedKeywords[0] + "' and '" + scenarioExerciseData.expectedKeywords[1] + "'.")
    }
  }
  return (
    <div className="bg-[#1b2735] p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Scenario Exercise</h3>
      <p className="mb-4 text-gray-200 text-lg">{scenarioExerciseData.prompt}</p>
      <textarea value={response} onChange={e => setResponse(e.target.value)} className="w-full bg-gray-700 text-gray-200 p-4 rounded-lg mb-4 text-lg focus:outline-none" rows="4" placeholder="Type your response here" style={{ resize: 'none' }}></textarea>
      <button onClick={handleSubmit} className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">Submit</button>
      {feedback && <p className="mt-4 text-center text-lg text-gray-300">{feedback}</p>}
    </div>
  )
}

function TwoWayPrepositionDragDrop() {
  const [current, setCurrent] = useState(0)
  const [droppedZone, setDroppedZone] = useState("")
  const [feedback, setFeedback] = useState("")
  const [answeredCorrect, setAnsweredCorrect] = useState(false)
  useEffect(() => { triggerResize() }, [current, droppedZone, feedback])
  const handleDragStart = e => { e.dataTransfer.setData("text/plain", "Buch") }
  const handleDrop = (zone, e) => { e.preventDefault(); setDroppedZone(zone) }
  const handleDragOver = e => { e.preventDefault() }
  const checkDrop = () => {
    if (droppedZone === twoWayPrepositionData[current].correct) {
      setFeedback("Correct!")
      setAnsweredCorrect(true)
    } else {
      setFeedback("Incorrect. The correct zone is " + twoWayPrepositionData[current].correct + ".")
    }
  }
  const nextExercise = () => { setCurrent(prev => prev + 1); setDroppedZone(""); setFeedback(""); setAnsweredCorrect(false) }
  return (
    <div className="bg-[#1b2735] p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Two-Way Prepositions</h3>
      {current < twoWayPrepositionData.length ? (
        <>
          <p className="mb-4 text-gray-200 text-lg">{twoWayPrepositionData[current].sentence}</p>
          <div className="flex justify-center gap-4 mb-4">
            <div onDrop={e => handleDrop("Wohin", e)} onDragOver={handleDragOver} className="w-32 h-20 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-200 text-lg rounded transition hover:border-accent">
              Wohin?
            </div>
            <div onDrop={e => handleDrop("Wo", e)} onDragOver={handleDragOver} className="w-32 h-20 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-200 text-lg rounded transition hover:border-accent">
              Wo?
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <div draggable onDragStart={handleDragStart} className="bg-accent-dark text-white px-5 py-2 rounded cursor-move text-lg transition hover:shadow-md">
              Buch
            </div>
          </div>
          <div className="flex justify-center gap-3">
            {!answeredCorrect ? (
              <button onClick={checkDrop} className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">
                Check
              </button>
            ) : (
              <button onClick={nextExercise} className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-full transition">
                Next
              </button>
            )}
            {!answeredCorrect && (
              <button onClick={nextExercise} className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-5 py-2 rounded-full transition">
                Skip
              </button>
            )}
          </div>
          {feedback && <p className="mt-4 text-center text-lg text-gray-300">{feedback}</p>}
        </>
      ) : (
        <p className="text-center text-gray-200 text-lg">All exercises completed.</p>
      )}
    </div>
  )
}

function InteractiveExercises() {
  useEffect(() => { setTimeout(() => { window.dispatchEvent(new Event('refreshScroll')) }, 10) }, [])
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-6">Interactive Exercises</h2>
      <QuickQuiz />
      <AlsWennQuiz />
      <SentenceReorder />
      <CaseCompletion />
      <PrepositionSelect />
      <TwoWayPrepositionDragDrop />
      <VerbPairSelection />
      <VerbMatching />
      <ScenarioExercise />
    </div>
  )
}

function PracticeExercises() {
  const [mode, setMode] = useState("vocabulary")
  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => setMode("vocabulary")} className={`${mode==="vocabulary" ? 'bg-accent text-white shadow-md' : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'} px-6 py-3 rounded-full font-medium transition`}>
          Vocabulary Practice
        </button>
        <button onClick={() => setMode("interactive")} className={`${mode==="interactive" ? 'bg-accent text-white shadow-md' : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'} px-6 py-3 rounded-full font-medium transition`}>
          Interactive Exercises
        </button>
      </div>
      {mode==="vocabulary" ? <PracticeSession /> : <InteractiveExercises />}
    </div>
  )
}

export default function GermanGrammar() {
  const [activeTab, setActiveTab] = useState('grammar')
  const containerRef = useRef(null)
  useEffect(() => { triggerResize() }, [activeTab])
  useEffect(() => { window.dispatchEvent(new Event('refreshScroll')); if (containerRef.current) containerRef.current.scrollTop = 0 }, [activeTab])
  const tabs = [
    { key: 'grammar', label: 'Grammar Overview' },
    { key: 'practice', label: 'Practice & Exercises' }
  ]
  return (
    <section data-scroll-section className="w-full min-h-screen overflow-y-auto flex flex-col items-center bg-gradient-to-r from-[#0e1622] to-[#1b2735] p-8" ref={containerRef}>
      <motion.div variants={containerVariant} initial="hidden" animate="show" className="max-w-4xl w-full">
        <motion.h1 variants={fadeUpVariant} className="text-4xl md:text-5xl font-extrabold text-accent text-center mb-8">
          German Past Tense & Practice Session
        </motion.h1>
        <div className="flex justify-center mb-6">
          {tabs.map((tab, index) => (
            <motion.button key={tab.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} onClick={() => setActiveTab(tab.key)} className={`mx-3 px-6 py-3 rounded-full font-medium text-lg transition ${activeTab===tab.key ? 'bg-accent text-white shadow-md' : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'}`}>
              {tab.label}
            </motion.button>
          ))}
        </div>
        {activeTab==='grammar' && <GrammarOverview />}
        {activeTab==='practice' && <PracticeExercises />}
      </motion.div>
    </section>
  )
}