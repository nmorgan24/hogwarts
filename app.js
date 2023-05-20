$(() => {
  const $container = $("#container"); 
  console.log($container); 

  const $h1 = $("<h1>").text("Hogwarts"); 
  console.log($h1);
  $container.append($h1); 

  const $h2 = $("<h2>").text("Nyijia Morgan"); 
  const $h3 = $("<h3>").text("Slytherin");
  const $h4Pet = $("<h4>").text("Beerus").addClass("pet cat");
  const $h4Wand = $("<h4>").text("Sharingan Wand");
  $container.append($h2, $h3, $h4Pet, $h4Wand);

  const $ul = $("<ul>").attr("storage", "trunk");
  const $li1 = $("<li>").text("Butter Beer"); 
  const $li2 = $("<li>").text("Invisibility Cloak").addClass("secret"); 
  const $li3 = $("<li>").text("Magic Map").addClass("secret"); 
  const $li4 = $("<li>").text("Time Turner").addClass("secret");
  const $li5 = $("<li>").text("Leash").addClass("pet cat"); 
  const $li6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans"); 

  $ul.append($li1, $li2, $li3, $li4, $li5, $li6); 
  $container.append($ul); 

  const $h5 = $("<h5>").text("Spring 2017"); 
  $container.prepend($h5); 
  const $table = $("<table>"); 
  const $thead = $("<thead>"); 

  const $th1 = $("<th>").text("Day"); 
  const $th2 = $("<th>").text("Classes"); 

  $thead.append($th1, $th2); 
  $table.append($thead); 

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];  
  const classes = [
    "Herbology",
    "Divination",
    "History of Magic",
    "Charms",
    "Potions",
    "Transfiguration",
    "Defense Against the Dark Arts",
    "Quidditch practice",
  ]; 

  for (let w = 0; w < days.length; w++) {
    const $tr = $("<tr>");
    const $td1 = $("<td>").text(days[w]); 
    const $td2 = $("<td>").text(classes[w]); 

    $tr.append($td1, $td2); 
    $table.append($tr);
  }

  $container.append($table); 

  $h4Wand.remove(); 

  $li1.remove(); 

  const $newWand = $("<h4>")
    .text("Sharingan Wand")
    .css("color", "indigo"); 
  $h4Pet.after($newWand); 

  $h4Pet.detach(); 
  $ul.append($li5); 
  $ul.children(".pet").detach();
  $container.append($h4Pet);

  $(".secret").hide("slow").delay(2000).show("slow"); 

  $(".pet.cat .leash").addClass("cabbage"); 

  $h5.text("Fall 2018"); 

  const $newLi = $("<li>").text("Butter Beer"); 
  $ul.prepend($newLi); 

  $ul.attr("storage", "chest"); 
});