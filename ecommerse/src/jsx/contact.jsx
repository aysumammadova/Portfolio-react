export function Contact() {
  return (
    <div className="contact">
      <div className="image">
        <img src={require("./image/contactmg.svg").default} />
      </div>
      <div className="about">
        <h1>You can reach me any time🙂</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor.
          
          Twitter:amirhwsin 

          Github: amireshoon 
          
          Dribble: amireshoon

         Telegram: GeekDreamer
          
          Email: amirhwsin@outlook.com
        </p>
        <div className="buttons">
            <div className="about">
                <button>About me</button>
            </div>
            <div className="portfolios-btn">
                <button>😮 Let’s see portfolios</button>
            </div>
        </div>
      </div>
    </div>
    
  );
}
