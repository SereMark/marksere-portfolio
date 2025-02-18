import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUpVariant, containerVariant } from '../motionVariants'
import { grammarSections, categoriesMap, knownWordsKey } from '../data/germanData'

const triggerResize = () => setTimeout(() => window.dispatchEvent(new Event('resize')), 10)

export default function GermanGrammar() {
  const [tab, setTab] = useState('grammar')
  const ref = useRef(null)
  useEffect(() => { triggerResize(); ref.current && (ref.current.scrollTop = 0) }, [tab])
  const tabs = [
    { key: 'grammar', label: 'Grammar Overview' },
    { key: 'vocabulary', label: 'Vocabulary Practice' }
  ]
  return (
    <section className="w-full min-h-screen overflow-y-auto flex flex-col items-center bg-gradient-to-r from-[#0e1622] to-[#1b2735] p-4 sm:p-8" ref={ref}>
      <motion.div variants={containerVariant} initial="hidden" animate="show" className="max-w-4xl w-full">
        <motion.h1 variants={fadeUpVariant} transition={{ duration: 0.6, ease: "easeOut" }} className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-accent text-center mb-8">
          German Past Tense & Practice Session
        </motion.h1>
        <div className="flex justify-center mb-6">
          {tabs.map((t, i) => (
            <motion.button key={t.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }} onClick={() => setTab(t.key)} className={`mx-3 px-4 py-2 rounded-full font-medium text-sm sm:text-lg transition ${tab === t.key ? 'bg-accent text-white shadow-md' : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'}`}>
              {t.label}
            </motion.button>
          ))}
        </div>
        {tab === 'grammar' ? <GrammarOverview /> : <PracticeSession />}
      </motion.div>
    </section>
  )
}

function GrammarOverview() {
  const [open, setOpen] = useState(null)
  const toggle = i => { setOpen(open === i ? null : i); triggerResize() }
  useEffect(() => { triggerResize() }, [open])
  return (
    <motion.div variants={fadeUpVariant} className="mb-12 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Grammar Overview</h2>
      <div className="space-y-6">
        {grammarSections.map((sec, i) => (
          <div key={i} className="bg-[#1b2735] p-4 sm:p-6 rounded-xl shadow-md transition hover:shadow-lg">
            <button onClick={() => toggle(i)} aria-expanded={open === i} aria-controls={`section-${i}`} className="w-full text-left font-medium text-lg sm:text-xl flex justify-between items-center focus:outline-none">
              <span>{sec.title}</span>
              <span className="text-xl sm:text-2xl">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <div id={`section-${i}`} className="mt-4 text-base text-gray-200">{sec.content}</div>}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function PracticeSession() {
  const [category, setCategory] = useState(Object.keys(categoriesMap)[0])
  const [list, setList] = useState([])
  const [originalCount, setOriginalCount] = useState(0)
  const [idx, setIdx] = useState(0)
  const [show, setShow] = useState(false)
  const [known, setKnown] = useState(new Set())
  useEffect(() => {
    const data = localStorage.getItem(knownWordsKey)
    data && setKnown(new Set(JSON.parse(data)))
  }, [])
  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }
  const load = cat => {
    const raw = categoriesMap[cat] || []
    const filtered = raw.filter(item => !known.has(item.german))
    const shuffled = shuffle([...filtered])
    setList(shuffled)
    setOriginalCount(shuffled.length)
    setIdx(0)
    setShow(false)
  }
  useEffect(() => { load(category) }, [category])
  useEffect(() => { triggerResize() }, [list, idx, show])
  const save = s => localStorage.setItem(knownWordsKey, JSON.stringify([...s]))
  return (
    <motion.div variants={fadeUpVariant} className="mb-12 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Vocabulary Practice</h2>
      <p className="text-center text-base sm:text-lg text-gray-300 mb-4">Choose a category and manage your deck.</p>
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {Object.keys(categoriesMap).map(c => (
          <button key={c} onClick={() => setCategory(c)} className={`px-4 py-2 rounded-full font-medium text-sm sm:text-base transition ${c === category ? 'bg-accent text-white shadow-md' : 'bg-[#1b2735] text-gray-200 hover:bg-accent hover:text-white'}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <button onClick={() => load(category)} className="px-4 py-2 rounded-full font-semibold bg-accent text-white hover:bg-accent-dark transition">Restart Deck</button>
        <button onClick={() => { localStorage.removeItem(knownWordsKey); setKnown(new Set()); load(category) }} className="px-4 py-2 rounded-full font-semibold bg-red-600 text-white hover:bg-red-700 transition">Reset Known Words</button>
      </div>
      <div className="bg-[#1b2735] p-4 sm:p-6 rounded-xl shadow-md min-h-[200px] transition hover:shadow-lg flex flex-col items-center">
        {list[idx] ? <>
          <motion.h3 key={list[idx].german} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="text-xl sm:text-2xl font-bold text-center mb-4 text-accent">
            {list[idx].german}
          </motion.h3>
          {show && <motion.div key={list[idx].english} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="mb-4 text-base bg-gray-800 p-4 rounded">
            <p className="mb-1"><span className="font-semibold text-accent">Meaning:</span> {list[idx].english}</p>
            {list[idx].prateritum && list[idx].prateritum !== "N/A" && <p className="mb-1"><span className="font-semibold text-accent">Präteritum:</span> {list[idx].prateritum}</p>}
            {list[idx].perfekt && list[idx].perfekt !== "N/A" && <p className="mb-1"><span className="font-semibold text-accent">Perfekt:</span> {list[idx].perfekt}</p>}
            {list[idx].example && <p className="mb-1"><span className="font-semibold text-accent">Example:</span> {list[idx].example}</p>}
            {list[idx].note && <p className="mt-1"><span className="font-semibold text-accent">Note:</span> {list[idx].note}</p>}
          </motion.div>}
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => { setShow(!show); triggerResize() }} className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition">
              {show ? 'Hide Details' : 'Show Details'}
            </button>
            <button onClick={() => { setShow(false); idx < list.length - 1 && setIdx(idx + 1) }} className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition">Next Word</button>
            <button onClick={() => {
              if (!list[idx]) return
              const upd = new Set(known)
              upd.add(list[idx].german)
              setKnown(upd)
              save(upd)
              const newList = [...list]
              newList.splice(idx, 1)
              setList(newList)
              setIdx(newList.length ? (idx >= newList.length ? newList.length - 1 : idx) : 0)
              setShow(false)
            }} className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition">Mark as Known</button>
          </div>
        </> : <div className="flex items-center justify-center min-h-[150px] text-center text-gray-200">
          <p className="text-xl">{list.length === 0 ? "All done! No more words." : "No current card. Pick a category or restart deck."}</p>
        </div>}
      </div>
      {originalCount > 0 && (
        <div className="mt-4 text-center text-xs sm:text-sm text-gray-400 w-full">
          <p>Progress: {originalCount - list.length} / {originalCount}</p>
          <progress className="w-full h-2 bg-gray-800 rounded" value={originalCount - list.length} max={originalCount} />
        </div>
      )}
    </motion.div>
  )
}