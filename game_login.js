// Create function addUser()
function addUser() {
  
  
  // Get value of user by id player1_name_input and player2_name_input
  player1_name = documentgetElementById.("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;
  
  
  // Store these values locally
  localStorage.setItem("player_1", player_1name);
  localStorage.setItem("player_2", player_2name);
 
 
  //Assign "game_page.html" to window.location
  window.location = "game_page.html"
}

