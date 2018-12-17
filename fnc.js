function toggleCourseWork() {
    var coursework = document.getElementById("coursework");
    
    if (coursework.classList.contains("hidden")) {
        console.log("bitch")
        coursework.classList.remove("hidden");
    }
    else {
        coursework.classList.add("hidden");
    }
}