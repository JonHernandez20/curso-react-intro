
import '../styles/Add.css'

const Add = () => {
    return(
        <button type="button" 
        onClick={ (Window) => {
            console.log('clicked');
            console.log(Window);
            console.log(Window.target);
        } }
        className="create-btn">
        +</button>
    );
}

export { Add };
