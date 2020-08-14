$("#submit-btn").on("click", (event) => {
  event.preventDefault();
  console.log("We got one!");
  var userName = $("#formGroupExampleInput").val().trim();
  var userEmail = $("#formGroupExampleInput2").val().trim();
  var userMessage = $("#exampleFormControlTextarea1").val().trim();
  if (!userName || !userEmail || !userMessage) {
    alert("You are missing a mandatory input field!");
    $(".contact-form").each(function () {
      this.reset();
    });
  } else {
    console.log(userName);
    alert(
      `Thank you ${userName} for submitting your message. We will get back to you shortly!`
    );
    $(".contact-form").each(function () {
      this.reset();
    });
  }
});
