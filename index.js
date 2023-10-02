function sendMail(){
    var params ={
        name: document.getElementById("name").value ,
        email: document.getElementById("email-field").value ,
        message: document.getElementById("message").value,
    }

  const serviceID = "service_t08rife"
  const templateID = "template_ez4hxx8"
  emailjs.send(serviceID,templateID,params)
  .then(
    res=>{
        document.getElementById("name").value=""
        document.getElementById("email-field").value=""
        document.getElementById("message").value=""
        console.log(res)
        alert(" your message sent successfull")
    }
  )
  .catch((err) => console.log(err));
}