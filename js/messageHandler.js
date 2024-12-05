export class MessageHandler {
    constructor() {
        this.messages = [];
        this.messagesContainer = document.querySelector('.messages');
    }

    addMessage(message) {
        this.messages.unshift(message);
        this.updateDisplay();
    }

    updateDisplay() {
        if (this.messages.length === 0) {
            this.messagesContainer.innerHTML = '<p class="no-messages">Немає нових повідомлень</p>';
            return;
        }

        this.messagesContainer.innerHTML = this.messages
            .map((msg, index) => `
                <div class="message" data-id="${index}">
                    <div class="message-header">
                        <span class="from">Від: ${msg.from}</span>
                        <span class="date">${new Date(msg.date).toLocaleString('uk-UA')}</span>
                    </div>
                    <div class="subject">Тема: ${msg.subject}</div>
                    <div class="message-content">${msg.content}</div>
                </div>
            `)
            .join('');
    }

    clearMessages() {
        this.messages = [];
        this.updateDisplay();
    }
}