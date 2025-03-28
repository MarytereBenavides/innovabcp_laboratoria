import prisma from '../config/database';

export const startTrivia = async (userId: number) => {
  //TODO: Validar si ya existe una sesion activa devolverla y no crear otra nueva
  return await prisma.game_session.create({
    data: {
      user_id: userId,
      game_id: 1,
      earned_xp: 0,
      earned_coins: 0,
      score: 0
    }
  });
};

export const getGameSession = async (gameSessionId: number) => {
  return await prisma.game_session.findUnique({
    where: { game_session_id: gameSessionId }
  });
}

export const getQuestions = async (gameId: number) => {
  return await prisma.mini_game_question.findMany({
    where: { game_id: gameId },
    include: { answers: true }
  });
};

export const checkAnswer = async (gameSessionId: number, answerId: number, question_id: number) => {
  const answer = await prisma.mini_game_answer.findUnique({
    where: { answer_id: answerId,  question_id: question_id },
    include: { question: true }
  })

  if (!answer) return null;

  const isCorrect = answer.is_correct;
  let scoreUpdate = isCorrect ? 10 : 0;

  await prisma.game_session.update({
    where: { game_session_id: gameSessionId },
    data: { score: { increment: scoreUpdate } }
  });

  return { isCorrect, scoreEarned: scoreUpdate, answer };
};

export const updateScore = async (gameSessionId: number, score: number) => {
  return await prisma.game_session.update({
    where: { game_session_id: gameSessionId },
    data: { score: { increment: Number(score) } }
  });
};

export const endTrivia = async (gameSessionId: number) => {
  return await prisma.game_session.findUnique({
    where: { game_session_id: gameSessionId }
  });
};
