function basicDetails(account, tokens) {
    const { id, name, phone, email } = account;
    const { token } = tokens;

    return { 
        id, name, phone, email, token
    };
}

function fullUserDetails(account, tokens) {
    const { id, name, phone, email, service } = account;
    const { token } = tokens;

    return { 
        id, name, email, phone, service, token
    };
}



module.exports = { basicDetails, fullUserDetails }