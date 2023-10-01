function newItem(){

    // adding new element
    let li = $('<li></li>');
    let inputValue= $('#input').val();
    li.text(inputValue);
  
    if (inputValue === ''){
        alert('You must write something before clicking Add button.')
    }else{
        let list = $('#list');
        list.append(li);
    }
  
    // added funtction of strike out the list of items
    function crossOut(){
        $(this).toggleClass('strike');
    }
    
    $('li').on('dblclick', crossOut);
    
    // adding delete button "X"
  
    // Create a crossOutButton element and append it to the li element
    let crossOutButton = $('<button>X</button>');
    li.append(crossOutButton);
  
    // Attach a click event listener to the crossOutButton
    crossOutButton.on("click", deleteListItem);
  
    // Add the "delete" class to the li element
    function deleteListItem() {
    li.addClass("delete");
    }
  
    
    // reordering the items
    $('#list').sortable();
  
    }
  