const btnLogic = function(){
    //grid
    const gridCheck = document.querySelector("#grid-icon-check");
    //profile
    const profileCheck = document.querySelector("#profile-check");
    //settings
    const settingsCheck = document.querySelector("#settings-check");
    // search bar features/sections
    const micSection = document.querySelector(".search-voice");
    const camSection = document.querySelector(".search-image");
    const shortcutSection = document.querySelector(".shortcuts");
    //theme
    const themeBtn = document.querySelector(".theme-btn");

    document.addEventListener('click', function(event) {
        const target = event.target;
        const button = target.closest('.grid-btn, .profile-btn, .settings-btn, .cam-btn, .mic-btn, .search-image');
        
        if(!button) {
          profileCheck.checked = false;
          gridCheck.checked = false;
          settingsCheck.checked = false;
          micSection.style.display = "none";
          camSection.style.display = "none";
          shortcutSection.style.display = "block";
        }
      });

    document.querySelector(".close-btn").addEventListener('click', function(event) { 
        camSectionLogic()
    });

    document.querySelector(".grid-btn").addEventListener('click', function(event) { 
        profileCheck.checked = false;
        settingsCheck.checked = false;
        camSectionLogic();
    });
    document.querySelector(".profile-btn").addEventListener('click', function(event) { 
        gridCheck.checked = false;
        settingsCheck.checked = false;
        camSectionLogic();
    });
    document.querySelector(".settings-btn").addEventListener('click', function(event) { 
        profileCheck.checked = false;
        gridCheck.checked = false;
        camSectionLogic();
    });
    document.querySelector(".cam-btn").addEventListener('click', function(event) { 
        profileCheck.checked = false;
        gridCheck.checked = false;
        settingsCheck.checked = false;
    });

    const camSectionLogic = () =>{
        camSection.style.display = "none";
        shortcutSection.style.display = "block";
    };

    themeBtn.addEventListener('click', function(event){
        // TODO:
    });
}();


// 
const searchBarLogic = function(event) {
    const clearBtn = document.querySelector(".clear-btn");
    const searchBar = document.querySelector(".search-bar");

    // search bar icons
    const micSection = document.querySelector(".search-voice");
    const camSection = document.querySelector(".search-image");
    const shortcutSection = document.querySelector(".shortcuts");
    const searchBtns = document.querySelectorAll(".search-btn");

    Array.from(searchBtns).forEach((btn) => {
        btn.addEventListener("click", function() {
            searchInput()
        })
    });

    searchBar.addEventListener("keydown", function(event){
        if(event.key == "Enter"){
            searchInput();
        }
    });

    function searchInput(){
        if(searchBar.value.trim().length !== 0){
            window.open(`https://www.google.com/search?q=${searchBar.value}`, "_self")
        }
    }

    searchBar.addEventListener('input', function(event){
        if(searchBar.value == ""){
            clearBtn.style.display = "none";
        } else{
            clearBtn.style.display = "block";
        }
    });

    clearBtn.addEventListener('mousedown', function(event){
        event.preventDefault()
        searchBar.select();
        searchBar.value = "";
        clearBtn.style.display = "none";
    });

    document.querySelector(".mic-btn").addEventListener('click', function(event) { 
        camSection.style.display = "none"
        if(micSection.style.display == "block"){
            micSection.style.display = "none";
        } else{
            micSection.style.display = "block";
        }
  
    });

    document.querySelector(".cam-btn").addEventListener('click', function(event) { 
        micSection.style.display = "none"
        if(camSection.style.display == "block"){
            camSection.style.display = "none";
            shortcutSection.style.display = "block";
        } else{
            camSection.style.display = "block";
            shortcutSection.style.display = "none";
        }
    });

    document.querySelector('.fileBtn').addEventListener('click', () => { 
        document.querySelector('.inputField').click();
      })
}();


