document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.querySelector('.back-btn');
    const importPhraseBtn = document.getElementById('import-phrase-btn');
    const socialRecoveryBtn = document.getElementById('social-recovery-btn');
    const pasteBtn = document.getElementById('paste-btn');
    const importBtn = document.querySelector('.btn.primary');
    const textarea = document.querySelector('textarea');

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (window.location.pathname.endsWith('import.html')) {
                window.location.href = 'index.html';
            } else {
                console.log('Back button clicked');
            }
        });
    }

    if (importPhraseBtn) {
        importPhraseBtn.addEventListener('click', () => {
            window.location.href = 'import.html';
        });
    }

    if (socialRecoveryBtn) {
        socialRecoveryBtn.addEventListener('click', () => {
            window.location.href = 'import.html';
        });
    }

    if (pasteBtn) {
        pasteBtn.addEventListener('click', async () => {
            try {
                const text = await navigator.clipboard.readText();
                textarea.value = text;
                console.log('Pasted from clipboard');
            } catch (err) {
                console.error('Failed to read clipboard: ', err);
            }
        });
    }

    // No manual redirection for importBtn as the form handles it via action and _next
});
