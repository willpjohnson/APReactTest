export const createSubscription = (email) => {
  return(
    $.ajax({
      method: 'POST',
      url: 'http://dev3.apppartner.com/Reactors/scripts/add-email.php',
      data: {
        "email": email
      },
      success: (data) => {
        console.log(data);
        return data;
      },
      error: () => {
        console.log("ERROR");
      }
    })
  )
}

export const createSession = (data) => {
  return(
    $.ajax({
      method: "POST",
      url: "http://dev3.apppartner.com/Reactors/scripts/user-login.php",
      data: data,
      success: (response) => {
        console.log(response);
      },
      error: () => {
        console.log("ERROR");
      }
    })
  )
}

export const createUser = (data) => {
  return(
    $.ajax({
      method: "POST",
      url: "http://dev3.apppartner.com/Reactors/scripts/user-signup.php",
      data: data,
      success: (response) => {
        console.log(response);
      },
      error: () => {
        console.log("ERROR");
      }
    })
  )
}
