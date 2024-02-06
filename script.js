function showFunnyMessage() {
    const messages = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "What do you call fake spaghetti? An impasta!",
        "Why did the bicycle fall over? It was two-tired!",
        "How do you organize a space party? You planet!",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    document.getElementById("funnyMessage").innerText = randomMessage;
}
