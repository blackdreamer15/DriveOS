function basicDetails(account, tokens) {
    const { id, name, phone, email } = account;
    const { token } = tokens;

    return { 
        id, name, phone, email, token
    };
}



module.exports = { basicDetails }