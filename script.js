function toggleContent(id) {
    var content = document.getElementById(id);
    var toggleIcon = content.previousElementSibling.querySelector('.toggle-icon');
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        toggleIcon.textContent = "[-]";
        toggleIcon.classList.add('expanded');
    } else {
        content.style.display = "none";
        toggleIcon.textContent = "[+]";
        toggleIcon.classList.remove('expanded');
    }
}
