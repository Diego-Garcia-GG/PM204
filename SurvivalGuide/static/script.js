function checkAnswers(sectionNum, correct1, correct2) {
    const q1Options = document.getElementsByName(`q${sectionNum}-1`);
    const q2Options = document.getElementsByName(`q${sectionNum}-2`);
    const errorMsg = document.getElementById(`error-${sectionNum}`);

    let ans1 = null;
    let ans2 = null;

    for (const opt of q1Options) {
        if (opt.checked) ans1 = opt.value;
    }
    for (const opt of q2Options) {
        if (opt.checked) ans2 = opt.value;
    }

    if (!ans1 || !ans2) {
        errorMsg.textContent = "Debes responder ambas preguntas para continuar.";
        errorMsg.className = "error-msg";
        return;
    }

    if (ans1 === correct1 && ans2 === correct2) {
        errorMsg.textContent = "¡Respuestas correctas! Se ha habilitado el Check de Compromiso.";
        errorMsg.className = "error-msg success-msg";

        for (const opt of q1Options) opt.disabled = true;
        for (const opt of q2Options) opt.disabled = true;
        event.target.disabled = true;

        document.getElementById(`commit-${sectionNum}`).classList.remove("hidden");
    } else {
        errorMsg.textContent = "Algunas respuestas son incorrectas. Intenta de nuevo.";
        errorMsg.className = "error-msg";
    }
}

function desbloqueoNuevo(sectionNum) {
    const checkbox = document.getElementById(`check-commit-${sectionNum}`);
    if (checkbox.checked) {
        checkbox.disabled = true;
        const nextSectionNum = sectionNum + 1;
        const nextSection = document.getElementById(`section-${nextSectionNum}`);
        if (nextSection) {
            nextSection.classList.remove("locked");
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

function terminarJuego() {
    desbloqueoNuevo(4);
}
