console.log("=== 4. The trust boundary ===\n");

function validateSignUp(input) {
    const errors = [];

    // 1) Is 'input' itself a real object?
    if (input === null || typeof input !== 'object') {
        return { ok: false, errors: ['input must be an object'] };
    }
    
}