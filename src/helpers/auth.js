const signupErrors = {
    EMAIL_EXISTS: 'The email address is already in use by another account',
    OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'We have blocked all requests from this device due to unusual activity. Try again later'
}

export const signupErrorParser = (error) => signupErrors[error] || error