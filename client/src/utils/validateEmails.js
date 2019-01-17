const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => {
      // if email is valid, return true else return false
      return re.test(email) === false;
    });


  // invalidEmails[0] !== '' is making sure this function is not counting
  // trailing commas and spaces at the end of the email list as an invalid email
  if (invalidEmails.length && invalidEmails[0] !== '') {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
}