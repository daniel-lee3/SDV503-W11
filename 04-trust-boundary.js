console.log("=== 4. The trust boundary ===\n");

function validateSignUp(input) {
    const errors = [];

    // 1) Is 'input' itself a real object?
    if (input === null || typeof input !== 'object') {
        return { ok: false, errors: ['input must be an object'] };
    }

    // 2) username: must be a string of 3 to 20 characters
    if (typeof input.username !== 'string') {
        errors.push('username must be a string');
    } else if (input.username.length < 3 || input.username.length > 20) {
        errors.push('username must be 3 to 20 characters long');
    }
}