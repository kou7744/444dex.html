import { generateEmail, copyToClipboard } from './emailGenerator.js';
import { MessageHandler } from './messageHandler.js';

class EmailApp {
    constructor() {
        this.emailInput = document.getElementById('email-address');
        this.copyBtn = document.querySelector('.copy-btn');
        this.refreshBtn = document.querySelector('.refresh-btn');
        this.messageHandler = new MessageHandler();

        this.init();
        this.setupEventListeners();
    }

    init() {
        this.currentEmail = generateEmail();
        this.emailInput.value = this.currentEmail;
        this.startEmailCheck();
    }

    setupEventListeners() {
        this.copyBtn.addEventListener('click', () => {
            copyToClipboard(this.currentEmail);
        });

        this.refreshBtn.addEventListener('click', () => {
            this.currentEmail = generateEmail();
            this.emailInput.value = this.currentEmail;
            this.messageHandler.clearMessages();
        });
    }

    startEmailCheck() {
        // Симуляція отримання повідомлень
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% шанс отримати нове повідомлення
                this.messageHandler.addMessage({
                    from: generateEmail(),
                    subject: 'Тестове повідомлення',
                    content: 'Це тестове повідомлення для демонстрації роботи сервісу.',
                    date: new Date()
                });
            }
        }, 10000);
    }
}

// Запуск додатку
document.addEventListener('DOMContentLoaded', () => {
    new EmailApp();
});