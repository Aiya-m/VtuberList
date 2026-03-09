function scrollToSection(){

  const section = document.getElementById("content")

  section.scrollIntoView({behavior:"smooth"})

  setTimeout(()=>{
    section.classList.remove("translate-y-20","opacity-0")
  },300)

}