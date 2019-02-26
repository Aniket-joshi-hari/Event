import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
           
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13282.280800423385!2d77.6221680895516!3d12.940626212463117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14406d28030b%3A0x680eb70e8f806125!2s20th+Cross+Rd%2C+Ejipura%2C+Bengaluru%2C+Karnataka+560047!5e0!3m2!1sen!2sin!4v1551178588810" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;