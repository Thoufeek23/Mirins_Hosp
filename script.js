/*document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const url = "https://script.google.com/macros/s/AKfycbyCraSFhIbKdLOiJM8aGKEaRIis0fbhQRH5oLB-B7J5xAJwjXnvtQa2dswN3jihia8/exec"; // Replace with the correct URL.

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = {
            date: document.getElementById("date").value,
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            time: document.getElementById("time").value,
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                alert("Appointment booked successfully!");
                form.reset();
            } else {
                const errorText = await response.text();
                console.error("Server error:", errorText);
                alert("Error: Unable to book the appointment.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please check your network or try again later.");
        }
    });
});
*/