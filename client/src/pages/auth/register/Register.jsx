import React from 'react';

import RegisterFrom from './RegisterFrom';
import RegisterDesign from './RegisterDesign';

const Register = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white font-sans overflow-hidden">
      <div className="w-full md:w-[50%] bg-[#042b1a] relative flex items-center justify-center p-6 lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0a4d2e_0%,transparent_70%)] opacity-40"></div>
      <RegisterDesign/>
      </div>
      <RegisterFrom/>
    </div>
  );
};

export default Register;