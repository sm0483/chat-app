import { Button } from "react-bootstrap";

const Chat = () => {
    return (
        <section className="chat-page">
        <div className="chat-head">
            <h2>Name</h2>
        </div>
        <div className="chat-area">
            <span>hello world</span>
            <span>cat</span>

        </div>
        <div className="send-area">
            <form>
                <input type="text" />
                <Button>Send</Button>
            </form>
        </div>
    </section>
      );
}
 
export default Chat;