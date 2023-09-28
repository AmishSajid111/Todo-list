const addform=document.querySelector('.add');
const searchForm=document.querySelector('.search input');
const list=document.querySelector('.todos');
const generateTemplate =todo =>{
    let html=`<li class="list-group-item d-flex justify-content-between align-items-center"><span> ${todo}</span>
    <i class="fa-solid fa-trash delete" style="color: #ffffff;"></i>     
            </li>`
            list.innerHTML+=html;

};
addform.addEventListener('submit',e=>
{
e.preventDefault();
const todo=addform.add.value.trim();
if(todo.length)
generateTemplate(todo);
addform.reset();


});

// Delete Todo
list.addEventListener('click',e =>
{
    if(e.target.classList.contains('delete'))
    e.target.parentElement.remove();

});
// Search todo
const filterTodos= (term)=>
{
    Array.from(list.children)
    .filter((todo)=>!todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=>todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=>todo.classList.remove('filtered'));
};
searchForm.addEventListener('keyup',()=>
{

  const term = searchForm.value.trim().toLowerCase();
  
    filterTodos(term);
    console.log(term);
  
});


