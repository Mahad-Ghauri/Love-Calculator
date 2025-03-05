
let pageCount = 1;
let noButton;

function nextPage(answer) {
    if (answer === 'no' && pageCount < 3) {
        pageCount++;
        if (pageCount === 2) {
            document.getElementById("page").innerHTML = `<h2>Fall in love with me ? 😟</h2>
                    <div class="buttons">
                        <button class="btn" onclick="nextPage('yes')">Yep, i love u 🥰</button>
                        <button class="btn" id="no-btn" onclick="nextPage('no')">No 😭</button>
                    </div>`;
        } else if (pageCount === 3) {
            document.getElementById("page").innerHTML = `<h2>Do u still not love me!😭😭</h2>
                    <div class="buttons">
                        <button class="btn" onclick="nextPage('yes')">Yep, i love u 🥰</button>
                        <button class="btn" id="no-btn" onmouseover="moveNoButton()">No 😭</button>
                    </div>`;
            noButton = document.getElementById('no-btn');
        }
    } else if (answer === 'yes') {
        document.getElementById("page").innerHTML = `<h2>I love you too ❤️</h2>`;
        setTimeout(() => {
            document.getElementById("page").innerHTML = `<h2>Now we will calculate our love percentage ❤️</h2>`;
        }, 1500);

        setTimeout(() => {
            showLoveCalculator();
        }, 2500);
    }
}

function moveNoButton() {
    if (noButton) {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();

        // Calculate the maximum allowed position within the container
        const maxX = containerRect.width - noButton.offsetWidth;
        const maxY = containerRect.height - noButton.offsetHeight;

        // Generate random positions within the container
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        // Ensure the button stays within the container
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }
}

function showLoveCalculator() {
    document.getElementById("page").innerHTML = `<h2>Love Calculator</h2>
                <div class="love-calculator">
                    <input type="text" id="your-name" placeholder="Your Name">
                    <input type="text" id="partner-name" placeholder="Partner's Name">
                    <button class="btn" onclick="calculateLove()">Calculate</button>
                </div>
                <div class="heart" id="heart"></div>`;
}

function calculateLove() {
    const yourName = document.getElementById('your-name').value.trim();
    const partnerName = document.getElementById('partner-name').value.trim();
    const heart = document.getElementById('heart');

    if (!yourName || !partnerName) {
        alert("Please enter both names!");
        return;
    }

    document.querySelector('.love-calculator').style.display = 'none';
    const lovePercentage = Math.floor(Math.random() * 100);
    heart.style.display = 'block';
    heart.innerHTML = `<p>${lovePercentage}% ❤️</p>`;
}

function restart() {
    pageCount = 1;
    document.getElementById("page").innerHTML = `<h2>Do you love me?</h2>
    <div class="buttons">
        <button class="btn" onclick="nextPage('yes')">Yep 🥰</button>
        <button class="btn" id="no-btn" onclick="nextPage('no')">No 😶</button>
    </div>`;
    noButton = document.getElementById('no-btn');
}
