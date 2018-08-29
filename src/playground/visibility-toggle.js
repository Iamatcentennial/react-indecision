const appRoot = document.getElementById('app');
let buttonAttribute ={
    buttonText:'Show Details',
    message : '',
    toggleValue:true
}

const showHideButton=(()=>{
    if(buttonAttribute.toggleValue){
        buttonAttribute.buttonText='Hide Details';
        buttonAttribute.message = 'You are in visible mode'
        buttonAttribute.toggleValue=false;
        renderApp();
    }else{
        buttonAttribute.buttonText='Show Details';
        buttonAttribute.message = ''
        buttonAttribute.toggleValue=true;
        renderApp();
    }    
})

const renderApp =()=>{
    var toggleTemplate = (
        <div>
        <h1>This is Visibility toggle</h1>
        <button onClick={showHideButton}>{buttonAttribute.buttonText}</button>
        <p>{buttonAttribute.message}</p>
        </div>
    );
    
    ReactDOM.render(toggleTemplate,appRoot);
}
renderApp();




