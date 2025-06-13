const DonateButton = () => {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="QAL85Q7P9XXEE" />      <input 
        type="image" 
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" 
        name="submit" 
        title="PayPal - The safer, easier way to pay online!" 
        alt="Donate with PayPal button"
        className="hover:opacity-80 transition-opacity border-0"
      />
      <img 
        alt="" 
        src="https://www.paypal.com/en_US/i/scr/pixel.gif" 
        width="1" 
        height="1" 
        className="border-0"
      />
    </form>
  );
};

export default DonateButton;
