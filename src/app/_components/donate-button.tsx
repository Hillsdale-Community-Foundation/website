import React from 'react';

const DonateButton = () => {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_top" className="inline-block">
      <input type="hidden" name="hosted_button_id" value="QAL85Q7P9XXEE" />
      <button 
        type="submit"
        className="bg-hillsdale-blue text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm"
      >
        Donate
      </button>
      <img 
        alt="" 
        src="https://www.paypal.com/en_US/i/scr/pixel.gif" 
        width="1" 
        height="1" 
        className="border-0 hidden"
      />
    </form>
  );
};

export default DonateButton;
