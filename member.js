function skillsMember() {
  // Get the data from the API
  fetch("https://api.myjson.com/bins/1gqg2g")
    .then(response => response.json())
    .then(data => {
      // Get the data from the API
      let members = data.members;
      // Get the data from the API
      let skills = data.skills;
      // Get the data from the API
      let html = "";
      // Get the data from the API
      members.forEach(member => {
        // Get the data from the API
        html += `
        <div class="member">
          <div class="member__avatar">
            <img src="${member.avatar}" alt="${member.name}">
          </div>
          <h2 class="member__name">${member.name}</h2>
          <p class="member__bio">${member.bio}</p>
          <div class="member__skills">`;
        // Get the data from the API
        member.skills.forEach(id => {
          // Get the data from the API
          const skill = skills.find(skill => skill.id === id);
          // Get the data from the API
          html += `<span class="skill">${skill.name}</span>`;
        });
        // Get the data from the API
        html += `</div>
        </div>`;
      });
      // Get the data from the API
      document.querySelector(".members").innerHTML = html;
    });
}