const correctAnswers = {
    q1: 'Paris',   
    q2: 'Mars',      
    q3: 'Pacific'     
};

function submitQuiz() {
    let score = 0;
    let totalQuestions = 3;  

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${i}`]) {
            score++;  
        }
    }

    const percentage = (score / totalQuestions) * 100;
    const resultElement = document.getElementById('result');
    if (percentage >= 70) {
        resultElement.innerHTML = `Your total score is ${score} out of ${totalQuestions}. You passed!`;
        resultElement.style.color = 'green';
    } else {
        resultElement.innerHTML = `Your total score is ${score} out of ${totalQuestions}. You did not pass.`;
        resultElement.style.color = 'red';
    }
}