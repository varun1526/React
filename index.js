const elem=React.createElement("h1",{},"hello world react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);
{/* <div id="div1">
    <div className="div2">
        <h2>hello world1234</h2>
    </div>
</div> */}
const h1=React.createElement("h1",{},"hello world1234");
const div2=React.createElement("div",{className:"div2"},h1);
const div1=React.createElement("div",{id:"div1"},div2);
root.render(div1);