import React from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, id, ...props }) => {
  return (
    <div className="flex w-full flex-col md:flex-row md:items-center">
      <label 
        htmlFor={id} 
        className="font-outfit text-[14px] md:text-[18px] lg:text-[21px] font-normal text-left w-full md:w-1/4 mb-1 md:mb-0"
      >
        {label}
      </label>
      <input 
        id={id}
        {...props}
        className="font-outfit text-[14px] md:text-[18px] lg:text-[21px] font-light w-full md:w-3/4 bg-transparent border-b-1 
                   border-black focus:outline-none focus:border-deep-red py-2 placeholder:text-gray-500"
      />
    </div>
  );
};