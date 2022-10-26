class Component {
  
  constructor(config) {
    this.children = config.children;
    this.parentNodeId = config.parentNodeId;

    this.render();
  }
  
  render() {
     document.querySelector(
       this.parentNodeId ?
         this.parentNodeId: '#app' 
    )
    .innerHTML = this.children.join("")
  }
}



export default Component;

