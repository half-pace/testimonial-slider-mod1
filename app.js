const testimonial = [
    {
        name: "Cherise G",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    },
    {
        name: "Cherise",
        photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
        text: "I would also like to say thank you to all your staff. Wow what great service, I lopve it! Apple impressed me on multiple levels."
    }
]

const img = document.querySelector("img");
const text1 = document.querySelector(".text");
const userName = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} =
    testimonial[idx];
    img.src = photoUrl;
    text1.innerText = text;
    userName.innerText = name;
    idx++;
    if(idx === testimonial.length){
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 2000);
}