import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { ProgressBar } from '@/components/QuizCard/ProgressBar';
import { OptionCard } from '@/components/QuizCard/OptionCard';
import { Tooltip } from '@/components/QuizCard/Tooltip';
import { motion, AnimatePresence } from "framer-motion";

export default function QuizCard() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loadingAnswer, setLoadingAnswer] = useState(false);

  const fetchQuestions = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    try {
      const response = await fetch("https://innovabcp-laboratoria.vercel.app/api/trivia/question/1", requestOptions);
      const result = await response.json();
      setQuestions(result.questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const currentQuestion = questions[currentIndex];

  const handleAnswer = async (answerId) => {

    if (!currentQuestion || loadingAnswer) return; 
    setLoadingAnswer(true);
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.question_id]: { answerId, isCorrect: null },
    }));

    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "game_session_id": 1,
        "question_id": currentQuestion.question_id,
        "answer_id": answerId
      })
    };

    try {
      const response = await fetch("https://innovabcp-laboratoria.vercel.app/api/trivia/answer", requestOptions);
      const result = await response.json();

      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestion.question_id]: { answerId, isCorrect: result.isCorrect },
      }));

      setTooltipMessage({
        isCorrect: result.isCorrect,
        message: result.message,
        advice: result.advice
      });
      setShowTooltip(true);

      if (result.isCorrect) {
        setScore(prev => prev + result.score);
      }

      setTimeout(() => {
        handleNext();
        setShowTooltip(false);
        setLoadingAnswer(false);
      }, 12000);

    } catch (error) {
      console.error('Error submitting answer:', error);
    }finally {
      setLoadingAnswer(false);
    }
  };

  const handleTooltipClose = () => {
    setShowTooltip(false);
    handleNext(); // Avanza a la siguiente pregunta inmediatamente
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
    } else {
      router.push("/learn"); // Fin del quiz
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  const handleClose = () => {
    router.push("/learn");
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (!currentQuestion) {
    return <div className="min-h-screen bg-purple-50 flex justify-center items-center">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-purple-50 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl w-full">
        <div className="flex justify-between items-center mb-4">
          <button className="text-2xl text-gray-400 cursor-pointer"  onClick={handleClose}>&times;</button>
         <ProgressBar progress={(currentIndex + 1) / questions.length * 100} />
          <div className='flex flex-col items-center'>
          <span className="text-md font-semibold">{score}</span>
            <span className='text-xs'>Puntos</span>
          </div>
        </div>
        <AnimatePresence mode="wait">
        <motion.div
            key={currentIndex} 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -50 }} 
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
                  <h2 className="text-center text-2xl font-semibold text-indigo-700 mb-6">
                  {currentQuestion.text}
                  </h2>

                  <div className="grid grid-cols-3 gap-4">
                  {currentQuestion.answers.map((answer) => {
                    const selectedAnswer = selectedAnswers[currentQuestion.question_id];
                    return (
                      <OptionCard 
                        key={answer.answer_id}
                        imageSrc="/assets/image.png" 
                        altText={answer.text}
                        description={answer.text}
                        onClick={() => handleAnswer(answer.answer_id)}
                        isSelected={selectedAnswer?.answerId === answer.answer_id}
                        isCorrect={selectedAnswer?.isCorrect}
                        loading={loadingAnswer}
                      />
                    );
                  })}
                  </div>
                  </motion.div>
        </AnimatePresence>
     

        <div className="flex justify-between mt-12 mb-0">
          <button  className={`px-4 py-2 rounded-lg text-sm h-10 
    ${currentIndex === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300 cursor-pointer"}`} onClick={handleBack}
            disabled={currentIndex === 0}>Regresar</button>
          {showTooltip && (
            <Tooltip 
              message={tooltipMessage.message}
              advice={tooltipMessage.advice}
              isCorrect={tooltipMessage.isCorrect}
              onClose={handleTooltipClose}
            />
          )}
          <button className="bg-orange-400 text-white px-4 h-10 rounded-lg" onClick={handleNext}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}
