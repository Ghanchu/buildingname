

export const searchvalue = async (updater: Function, classroom:string) => {


  const body = {
    classroom: classroom,
  };

  fetch(
    "https://sdwn55fujf.execute-api.us-east-2.amazonaws.com/Coolstage/help",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the Lambda function
      console.log(updater(data));
    })
    .catch((error) => {
      // Handle any errors
      console.error(error.body);
    });
};




