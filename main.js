var submitBtn=document.getElementById('submitBtn');
var itemList=document.getElementById('items');
var removeBtn=document.getElementsByClassName('delete');
var filerTxt=document.getElementById('filter');

submitBtn.addEventListener('click',addItem);
itemList.addEventListener('click',removeItem);
filerTxt.addEventListener('keyup',filterItem);

function addItem(e){
    e.preventDefault();
    //adding new item in the list
    var newItemName=document.getElementById('itemName');
    var newLI = document.createElement('li');
    var deleteBtn=document.createElement('button');


   
    newLI.appendChild(document.createTextNode(newItemName.value));
    
       //adding the delete button
       deleteBtn.className='btn btn-danger btn-sm float-right delete';
       newLI.className = 'list-group-item';
        deleteBtn.appendChild(document.createTextNode("X"));
        newLI.appendChild(deleteBtn);
        itemList.appendChild(newLI);
        newItemName.value="";
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        itemList.removeChild(e.target.parentElement);
    }
}

function filterItem(e){
    var text=e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    //convert list to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display='none'; 
        }
    });
}