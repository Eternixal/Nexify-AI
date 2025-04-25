// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (placeholder)
document.querySelector('#contact button').addEventListener('click', () => {
    alert('Message sent successfully! (This feature is under development)');
});

// Financial calculator
document.getElementById('calculate').addEventListener('click', () => {
    const income = parseFloat(document.getElementById('income').value) || 0;
    const expenses = parseFloat(document.getElementById('expenses').value) || 0;
    const savings = income - expenses;
    const result = document.getElementById('result');
    if (income === 0 && expenses === 0) {
        result.textContent = 'Please enter your income and expenses.';
    } else {
        result.textContent = `Monthly Savings: $${savings.toFixed(2)}`;
    }
});

// Financial chatbot
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const sendMessage = document.getElementById('sendMessage');

const financialResponses = {
    'budget': 'To create a budget, track your income and expenses. Allocate 50% to needs, 30% to wants, and 20% to savings or debt repayment. Would you like a detailed breakdown?',
    'investment': 'Consider diversifying investments across stocks, bonds, and real estate. Start with low-cost index funds for beginners. Want tips for risk management?',
    'savings': 'Aim to save 3-6 months of expenses for an emergency fund. High-yield savings accounts offer better returns. Need help setting savings goals?',
    'default': 'I’m here to help with financial questions! Try asking about budgeting, investments, or savings.'
};

function addMessage(text, sender, container) {
    const message = document.createElement('div');
    message.classList.add('chatbot-message', sender);
    message.textContent = text;
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
}

sendMessage.addEventListener('click', () => {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user', chatbotMessages);
        const response = financialResponses[userMessage.toLowerCase()] || financialResponses['default'];
        setTimeout(() => addMessage(response, 'bot', chatbotMessages), 500);
        chatbotInput.value = '';
    }
});

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatbotInput.value.trim()) {
        sendMessage.click();
    }
});

// Learning schedule visualizer
const learningChartCanvas = document.getElementById('learningChart');
const learningChart = new Chart(learningChartCanvas, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Hours per Week',
            data: [],
            backgroundColor: 'rgba(212, 175, 55, 0.6)',
            borderColor: 'rgba(212, 175, 55, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Hours'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Subjects'
                }
            }
        }
    }
});

document.getElementById('addSubject').addEventListener('click', () => {
    const subject = document.getElementById('subject').value.trim();
    const hours = parseFloat(document.getElementById('hours').value) || 0;
    if (subject && hours > 0) {
        learningChart.data.labels.push(subject);
        learningChart.data.datasets[0].data.push(hours);
        learningChart.update();
        document.getElementById('subject').value = '';
        document.getElementById('hours').value = '';
    } else {
        alert('Please enter a valid subject and hours.');
    }
});

// Learning chatbot
const learningChatbotMessages = document.getElementById('learningChatbotMessages');
const learningChatbotInput = document.getElementById('learningChatbotInput');
const sendLearningMessage = document.getElementById('sendLearningMessage');

const learningResponses = {
    'study tips': 'Break your study sessions into 25-minute focused intervals (Pomodoro technique) with 5-minute breaks. Summarize key points after each session. Need more techniques?',
    'schedule': 'Plan your week by allocating specific times for each subject. Prioritize difficult topics early in the day. Want help creating a schedule?',
    'motivation': 'Set small, achievable goals and reward yourself upon completion. Visualize your success to stay driven. Need specific goal-setting tips?',
    'default': 'I’m here to optimize your learning! Try asking about study tips, schedules, or motivation.'
};

sendLearningMessage.addEventListener('click', () => {
    const userMessage = learningChatbotInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user', learningChatbotMessages);
        const response = learningResponses[userMessage.toLowerCase()] || learningResponses['default'];
        setTimeout(() => addMessage(response, 'bot', learningChatbotMessages), 500);
        learningChatbotInput.value = '';
    }
});

learningChatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && learningChatbotInput.value.trim()) {
        sendLearningMessage.click();
    }
});
