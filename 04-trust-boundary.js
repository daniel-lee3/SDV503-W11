console.log('=== 4. The trust boundary ===\n');

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

    // 3) age: must be a number between 13 and 120
    if (typeof input.age !== 'number') {
        errors.push('age must be a number');
    } else if (input.age < 13 || input.age > 120) {
        errors.push('age must be between 13 and 120');
    }

    // 4) email: must be a string and contain "@"
    if (typeof input.email !== 'string') {
        errors.push('email must be a string');
    } else if (input.email.indexOf('@') === -1) {
        errors.push('email must contain "@"');
    }

    if (errors.length > 0) {
        return { ok: false, errors: errors };
    }
    return { ok: true, value: input };
}

// -------- Try the validator with several inputs --------
const inputs = [
    // 1) Looks fine
    { username: "Layla19", age: 19, email: "layla@example.com" },

    // 2) age is a STRING, not a number (a very common bug!)
    { username: "omar", age: '20', email: 'omar@x.com' },

    // 3) username too short, email has no "@"
    { username: 'al', age: 22, email: 'not-an-email'},

    // 4) totally the wrong type
    'just a string, not an object',

    // 5) missing fields
    {},
]

inputs.forEach((input, i) => {
    console.log(`Input: ${i + 1}:`, input);
    const result = validateSignUp(input);
    if (result.ok) {
        console.log('   accepted ->', result.value);
    } else {
        console.log(`   rejected -> ${result.errors.join('; ')}`);
    }
    console.log('');
});