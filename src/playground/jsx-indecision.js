const app = {
    title: "Indecision App",
    subtitle:"Lets decide!",
    options: ['ashu','monu']
  };
  
  const onFormSubmit =(e)=>{
      e.preventDefault();
      const option = e.target.elements.options.value;
      if(option){
          app.options.push(option);
          e.target.elements.options.value='';
          renderApp();
      }
  }
  
  const removeAll =()=>{
      app.options =[];
      renderApp();
  }
  
  const makeDecision = ()=>{
      let randomNum = Math.floor((Math.random()*app.options.length));
      const option = app.options[randomNum];
      alert(option);
  }
  
  const appRoot = document.getElementById("app");
  
  const renderApp = ()=>{
      const appTemplate = (
          <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length?`Number of Indecisions: ${app.options.length}`:'No options'}</p>
            <button disabled ={app.options.length===0} onClick={makeDecision}>What should I do</button>
           <button onClick={removeAll}>Remove All</button>
            <ol>{
              app.options.map((val)=><li key={Math.random()}>{val}</li>)
            }          
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="options"/>
            <button>Add Option</button>
            </form>
          </div>
        );
        
        ReactDOM.render(appTemplate,appRoot);
  }
  
  renderApp();
  
  
  