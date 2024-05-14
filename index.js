
document.addEventListener('click', function(e){

    console.log(e)

    // Close modal if click on close button
    if (e.target.classList.contains("modal-unavailable-closebtn")){
        document.getElementById("modal-unavailable").style.display = 'none';
    }

    // Display modal if click on contact button
    else if (e.target.classList.contains("btn")){
        document.getElementById("modal-unavailable").style.display = 'block';
    }

    // Close modal if click outside modal
    else if (!Boolean(e.target.id) || !Boolean(document.getElementById(e.target.id).closest('.modals'))) {
        document.getElementById("modal-unavailable").style.display = 'none';
    }

})