import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Timer, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Play, 
  RotateCcw, 
  LayoutGrid,
  ClipboardCheck,
  Award
} from 'lucide-react';
import { questions } from './data/questions';

type AppState = 'START' | 'EXAM' | 'RESULT';

export default function App() {
  const [appState, setAppState] = useState<AppState>('START');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [isReviewMode, setIsReviewMode] = useState(false);

  const totalQuestions = questions.length;
  const answeredCount = userAnswers.filter(a => a !== null).length;

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (appState === 'EXAM' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setAppState('RESULT');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [appState, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startExam = () => {
    setUserAnswers(new Array(questions.length).fill(null));
    setCurrentQuestionIndex(0);
    setTimeLeft(60 * 60);
    setAppState('EXAM');
    setIsReviewMode(false);
  };

  const handleAnswer = (optionIndex: number) => {
    if (isReviewMode) return;
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const submitExam = () => {
    if (window.confirm('Are you sure you want to submit your exam?')) {
      setAppState('RESULT');
    }
  };

  const renderStartScreen = () => (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-xl shadow-zinc-200/50 p-8 md:p-12 border border-zinc-100"
      >
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-emerald-50 rounded-2xl">
            <ClipboardCheck className="w-12 h-12 text-emerald-600" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-4 tracking-tight">
          Civil Service Promotion Exam
        </h1>
        <p className="text-zinc-500 text-center mb-10 text-lg">
          CBT Simulation (Accounting Focus)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 text-center">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Questions</p>
            <p className="text-2xl font-bold text-zinc-800">{totalQuestions}</p>
          </div>
          <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 text-center">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Time Limit</p>
            <p className="text-2xl font-bold text-zinc-800">60 Mins</p>
          </div>
          <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 text-center">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Passing Score</p>
            <p className="text-2xl font-bold text-zinc-800">50%</p>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          <h3 className="font-semibold text-zinc-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            Instructions:
          </h3>
          <ul className="text-zinc-600 space-y-2 text-sm list-disc pl-5">
            <li>Ensure you have a stable internet connection.</li>
            <li>The timer starts immediately after you click "Start Exam".</li>
            <li>You can navigate between questions using the grid or arrows.</li>
            <li>Your progress is tracked automatically.</li>
          </ul>
        </div>

        <button 
          onClick={startExam}
          className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-semibold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/20"
        >
          <Play className="w-5 h-5 fill-current" />
          Start Exam
        </button>
      </motion.div>
    </div>
  );

  const renderExamScreen = () => {
    const q = questions[currentQuestionIndex];
    const selectedAnswer = userAnswers[currentQuestionIndex];

    return (
      <div className="min-h-screen bg-zinc-50 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-zinc-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                CBT
              </div>
              <span className="font-semibold text-zinc-800 hidden md:block">Promotion Exam Simulator</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${timeLeft < 300 ? 'bg-red-50 border-red-100 text-red-600' : 'bg-zinc-50 border-zinc-100 text-zinc-600'}`}>
                <Timer className="w-4 h-4" />
                <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
              </div>
              <button 
                onClick={submitExam}
                className="px-4 py-1.5 bg-emerald-600 text-white rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-sm"
              >
                Submit Exam
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Question Area */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div 
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-6 md:p-10"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 bg-zinc-100 text-zinc-500 rounded-full text-xs font-bold uppercase tracking-wider">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
                {selectedAnswer !== null && (
                  <span className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Answered
                  </span>
                )}
              </div>

              <h2 className="text-xl md:text-2xl font-medium text-zinc-900 leading-snug mb-10">
                {q.text}
              </h2>

              <div className="space-y-3">
                {q.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const label = String.fromCharCode(65 + idx); // A, B, C, D
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-4 group ${
                        isSelected 
                          ? 'bg-zinc-900 border-zinc-900 text-white shadow-md' 
                          : 'bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400'
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200'
                      }`}>
                        {label}
                      </span>
                      <span className="text-base font-medium">{option}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button 
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-zinc-600 hover:bg-zinc-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>
              <button 
                onClick={nextQuestion}
                disabled={currentQuestionIndex === totalQuestions - 1}
                className="flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white rounded-2xl font-semibold hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-zinc-900/10"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sidebar / Grid */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-zinc-800 flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-zinc-400" />
                  Question Navigator
                </h3>
                <span className="text-xs font-bold text-zinc-400">{answeredCount}/{totalQuestions} Answered</span>
              </div>
              
              <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-5 gap-2">
                {userAnswers.map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`aspect-square rounded-lg text-xs font-bold flex items-center justify-center transition-all border ${
                      currentQuestionIndex === idx
                        ? 'bg-zinc-900 border-zinc-900 text-white scale-110 z-10 shadow-md'
                        : answer !== null
                        ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                        : 'bg-zinc-50 border-zinc-100 text-zinc-400 hover:border-zinc-300'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <div className="w-3 h-3 rounded bg-emerald-50 border border-emerald-100"></div>
                  Answered
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <div className="w-3 h-3 rounded bg-zinc-50 border border-zinc-100"></div>
                  Unanswered
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <div className="w-3 h-3 rounded bg-zinc-900"></div>
                  Current
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    );
  };

  const renderResultScreen = () => {
    const score = calculateScore();
    const percentage = Math.round((score / totalQuestions) * 100);
    const isPassed = percentage >= 50;

    if (isReviewMode) {
      const q = questions[currentQuestionIndex];
      const userAnswer = userAnswers[currentQuestionIndex];
      const isCorrect = userAnswer === q.correctAnswer;

      return (
        <div className="min-h-screen bg-zinc-50 flex flex-col">
          <header className="bg-white border-b border-zinc-200 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsReviewMode(false)}
                  className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-zinc-600" />
                </button>
                <span className="font-semibold text-zinc-800">Review Mode</span>
              </div>
              <div className="text-sm font-bold text-zinc-400">
                Score: {score}/{totalQuestions} ({percentage}%)
              </div>
            </div>
          </header>

          <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-6">
              <motion.div 
                key={currentQuestionIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-6 md:p-10"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="px-3 py-1 bg-zinc-100 text-zinc-500 rounded-full text-xs font-bold uppercase tracking-wider">
                    Question {currentQuestionIndex + 1}
                  </span>
                  <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                    {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {isCorrect ? 'Correct' : 'Incorrect'}
                  </div>
                </div>

                <h2 className="text-xl md:text-2xl font-medium text-zinc-900 leading-snug mb-10">
                  {q.text}
                </h2>

                <div className="space-y-3">
                  {q.options.map((option, idx) => {
                    const isUserChoice = userAnswer === idx;
                    const isCorrectChoice = q.correctAnswer === idx;
                    const label = String.fromCharCode(65 + idx);
                    
                    let variant = 'default';
                    if (isCorrectChoice) variant = 'correct';
                    else if (isUserChoice && !isCorrectChoice) variant = 'incorrect';

                    return (
                      <div
                        key={idx}
                        className={`w-full p-4 rounded-2xl border flex items-center gap-4 ${
                          variant === 'correct' 
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                            : variant === 'incorrect'
                            ? 'bg-red-50 border-red-200 text-red-900'
                            : 'bg-white border-zinc-100 text-zinc-400'
                        }`}
                      >
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                          variant === 'correct' ? 'bg-emerald-600 text-white' : variant === 'incorrect' ? 'bg-red-600 text-white' : 'bg-zinc-50 text-zinc-300'
                        }`}>
                          {label}
                        </span>
                        <span className="text-base font-medium flex-1">{option}</span>
                        {variant === 'correct' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                        {variant === 'incorrect' && <XCircle className="w-5 h-5 text-red-600" />}
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <div className="flex items-center justify-between">
                <button 
                  onClick={prevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-zinc-600 hover:bg-zinc-100 disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>
                <button 
                  onClick={nextQuestion}
                  disabled={currentQuestionIndex === totalQuestions - 1}
                  className="flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white rounded-2xl font-semibold hover:bg-zinc-800 disabled:opacity-30 transition-all"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-6">
                <h3 className="font-bold text-zinc-800 mb-6 flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-zinc-400" />
                  Review Results
                </h3>
                <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-5 gap-2">
                  {userAnswers.map((answer, idx) => {
                    const correct = answer === questions[idx].correctAnswer;
                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`aspect-square rounded-lg text-xs font-bold flex items-center justify-center transition-all border ${
                          currentQuestionIndex === idx
                            ? 'ring-2 ring-zinc-900 ring-offset-2'
                            : ''
                        } ${
                          correct
                            ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                            : 'bg-red-50 border-red-100 text-red-600'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>
          </main>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-zinc-100 text-center"
        >
          <div className="flex justify-center mb-8">
            <div className={`p-6 rounded-3xl ${isPassed ? 'bg-emerald-50' : 'bg-red-50'}`}>
              <Award className={`w-16 h-16 ${isPassed ? 'text-emerald-600' : 'text-red-600'}`} />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-zinc-900 mb-2">Exam Completed!</h1>
          <p className="text-zinc-500 mb-10">Here is your performance summary</p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Final Score</p>
              <p className={`text-4xl font-black ${isPassed ? 'text-emerald-600' : 'text-red-600'}`}>
                {score} <span className="text-lg text-zinc-300 font-medium">/ {totalQuestions}</span>
              </p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Percentage</p>
              <p className={`text-4xl font-black ${isPassed ? 'text-emerald-600' : 'text-red-600'}`}>
                {percentage}%
              </p>
            </div>
          </div>

          <div className={`mb-10 p-4 rounded-2xl border ${isPassed ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-red-50 border-red-100 text-red-700'}`}>
            <p className="font-bold">
              {isPassed ? 'Congratulations! You passed the simulation.' : 'You did not reach the passing score. Keep practicing!'}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => {
                setIsReviewMode(true);
                setCurrentQuestionIndex(0);
              }}
              className="flex-1 py-4 bg-zinc-100 text-zinc-800 rounded-2xl font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              <LayoutGrid className="w-5 h-5" />
              Review Answers
            </button>
            <button 
              onClick={startExam}
              className="flex-1 py-4 bg-zinc-900 text-white rounded-2xl font-semibold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/20"
            >
              <RotateCcw className="w-5 h-5" />
              Retake Exam
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="font-sans antialiased text-zinc-900">
      {appState === 'START' && renderStartScreen()}
      {appState === 'EXAM' && renderExamScreen()}
      {appState === 'RESULT' && renderResultScreen()}
    </div>
  );
}
