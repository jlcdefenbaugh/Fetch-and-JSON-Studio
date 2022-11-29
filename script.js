//add event listener for when page loads
//in event listener, fetch API
//for each astronaut add an astronaut to the template (loop through, add dynamically)
//

window.addEventListener('load', function() {
    
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      const container = document.querySelector('#container');
      let astronauts = '';
      for (astronaut of json) {
        astronauts += `
        <div class="astronaut">
          <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li>Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills.join(", ")}</li>
            </ul>
          </div>
          <img class="avatar" src="${astronaut.picture}"/>
        </div>
        `;
      }
      container.innerHTML = astronauts;
    });
        
    })