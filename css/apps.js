var tabButtons=document.querySelector(".tabContainer .buttonContainer button");
//variable will hold all the buttons togther//
var tabPanels=document.querySelector(".tabContainer .tabPanel");
// variable will hold all the panels//
function showPanel (panelIndex, colorCode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundColor="";
        node.style.color="";
    });  
}
    tabButtons[panelIndex].style.backgroundColor=colorCode; 
    tabButtons[panelIndex].style.color="black";
    function showPanel (panelIndex, colorCode) {
        tabPanels.forEach(function(node) {
            node.style.display="none";
    }); 
    tabPanels[panelIndex].style.display="block"; 
    tabPanels[panelIndex].style.backgroundColor=colorCode;    
}

showPanel(0,'#FFB6C1');