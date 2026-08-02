let username = document.querySelector('.input');
let submit = document.querySelector('.submit');
let img = document.querySelector('img');
let headingLast = document.querySelector('.heading-last');
let loginName = document.querySelector('.loginName');
let userId = document.querySelector('.userId');
let avatarURL = document.querySelector('.avatarURL');
let UserView = document.querySelector('.UserView');
let profileName = document.querySelector('.username');

submit.addEventListener('click',()=>{

  fetch(`https://api.github.com/users/${username.value.trim()}`)
  .then((user)=>{
    return user.json()
  })
  .then((user)=>{

    profileName.innerHTML = user.login.charAt(0).toUpperCase() + user.login.slice(1);
    headingLast.innerHTML = ""


    loginName.style.cssText = `
        width: auto;
        height: auto;
        background: none;
        margin-top: 5px;
    `;
    loginName.innerHTML = user.login

    userId.style.cssText = `
        width: auto;
        height: auto;
        background: none;
        margin-top: 5px;
    `;
    userId.innerHTML = user.id 

    img.src= user.avatar_url
    img.alt = "Avatar URL"

    avatarURL.innerHTML = ` <a href="${user.avatar_url}" target="_blank">
                              Open Avatar
                            </a>
                          `;
    
    avatarURL.style.cssText = `
        width: auto;
        height: auto;
        background: none;
        margin-top: 5px;
    `;
    
    const link = avatarURL.querySelector("a");

    link.style.cssText = `
        color: white;
        text-decoration: none;
        // padding: 8px 14px;
    `;

    link.addEventListener("mouseenter", () => {
      link.style.cssText = `
          color: white;
          text-decoration: underline;
      `;
    });

    link.addEventListener("mouseleave", () => {
        link.style.cssText = `
          color: white;
          text-decoration: none;
      `;
    });


    UserView.innerHTML = user.user_view_type
    UserView.style.cssText = `
        width: auto;
        height: auto;
        background: none;
        margin-top: 5px;
    `;    
    
  }).catch((err)=>{
    console.log(err);
    
  })
})

