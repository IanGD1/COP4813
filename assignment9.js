const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

// Ball properties
const ball = {
    x: 100,
    y: 100,
    radius: 22,
    dx: 3,
    dy: 2,
    color: "#00f5ff"
};

// Particles created when the ball is clicked
let particles = [];

// Colors the ball cycles through when clicked
const colors = ["#00f5ff", "#ff00ff", "#aaff00", "#ff8800"];
let colorIndex = 0;

// Match the drawing resolution to the displayed canvas size
function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const oldWidth = canvas.width;
    const oldHeight = canvas.height;

    canvas.width = rect.width;
    canvas.height = rect.height;

    // Keep the ball in a sensible position after resizing
    if (oldWidth > 0 && oldHeight > 0) {
        ball.x = Math.min(ball.x, canvas.width - ball.radius);
        ball.y = Math.min(ball.y, canvas.height - ball.radius);
    } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
    }

    ball.x = Math.max(ball.radius, ball.x);
    ball.y = Math.max(ball.radius, ball.y);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Draw the glowing ball
function drawBall() {
    ctx.save();

    ctx.shadowBlur = 25;
    ctx.shadowColor = ball.color;
    ctx.fillStyle = ball.color;

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}

// Create an explosion of colorful particles
function createExplosion() {
    for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 5;

        particles.push({
            x: ball.x,
            y: ball.y,
            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,
            radius: 2 + Math.random() * 4,
            life: 35,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
}

// Move and draw the explosion particles
function drawParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.dx;
        p.y += p.dy;
        p.life--;

        ctx.save();
        ctx.globalAlpha = p.life / 35;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    }
}

// Animate the ball and particles
function animate() {
    // Clear the previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move the ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Bounce off the left and right edges
    if (ball.x + ball.radius >= canvas.width) {
        ball.x = canvas.width - ball.radius;
        ball.dx = -Math.abs(ball.dx);
    } else if (ball.x - ball.radius <= 0) {
        ball.x = ball.radius;
        ball.dx = Math.abs(ball.dx);
    }

    // Bounce off the top and bottom edges
    if (ball.y + ball.radius >= canvas.height) {
        ball.y = canvas.height - ball.radius;
        ball.dy = -Math.abs(ball.dy);
    } else if (ball.y - ball.radius <= 0) {
        ball.y = ball.radius;
        ball.dy = Math.abs(ball.dy);
    }

    drawBall();
    drawParticles();

    // Run the animation again
    requestAnimationFrame(animate);
}

// Detect clicks on the canvas
canvas.addEventListener("click", function(event) {
    const rect = canvas.getBoundingClientRect();

    // Convert the mouse position to canvas coordinates
    const mouseX = (event.clientX - rect.left) * canvas.width / rect.width;
    const mouseY = (event.clientY - rect.top) * canvas.height / rect.height;

    // Check whether the click landed on the ball
    const distance = Math.hypot(mouseX - ball.x, mouseY - ball.y);

    if (distance <= ball.radius + 8) {
        // Change the ball's color
        colorIndex = (colorIndex + 1) % colors.length;
        ball.color = colors[colorIndex];

        // Create the particle explosion
        createExplosion();
    }
});

// Start the animation
animate();
