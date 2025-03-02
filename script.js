function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}

document.getElementById("colorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor()
});


document.getElementById("goToblogs").addEventListener("click", function () {
    window.location.href = "blogs.html"
});

let assignedTasks = document.getElementById("assignedTasks");
let completedTasks = document.getElementById("completedTasks");
let completeButtons = document.getElementsByClassName("completeBtn");
let clickedCount = 0;


Array.from(completeButtons).forEach(button => {
    button.addEventListener("click", function () {
        alert("Board updated successfully");

       const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
       let taskTitle = this.closest(".issueCard").querySelector(".title").textContent;

        

        let message = document.createElement("p");
        message.textContent = `You have completed the task ${taskTitle}  at ${currentTime}`;
        messages.appendChild(message);

        let assigned = parseInt(assignedTasks.textContent);
        let completed = parseInt(completedTasks.textContent);

        if (assigned > 0) {
            assignedTasks.textContent = assigned - 1;
            completedTasks.textContent = completed + 1;
            this.disabled = true;
            clickedCount++;
            if (clickedCount === completeButtons.length) {
                alert("Congrates!!! You have completed all the current tasks");
            }

        }

    });

});




let currentDate = new Date();


let options = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric'
};


let formattedDate = currentDate.toLocaleDateString('en-US', options);
document.getElementById("currentDate").textContent = formattedDate;
console.log(formattedDate);


clearHistoryBtn.addEventListener("click", function () {
    messages.innerHTML = '';
});



