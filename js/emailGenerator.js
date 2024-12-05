import cryptoRandomString from 'crypto-random-string';

export function generateEmail() {
    const username = cryptoRandomString({ length: 10, type: 'alphanumeric' });
    const domains = ['tempmail.com', 'quickmail.org', 'fastmail.temp'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return `${username}@${randomDomain}`;
}

export function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            showNotification('Адресу скопійовано!');
        })
        .catch(() => {
            showNotification('Помилка копіювання', 'error');
        });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}