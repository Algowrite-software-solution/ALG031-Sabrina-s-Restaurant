import React from 'react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({ label, id, ...props }) => {
  return (
    <div className="flex w-full flex-col">
      <label 
        htmlFor={id} 
        className="font-outfit text-base md:text-2xl font-normal text-left w-full mb-1"
      >
        {label}
      </label>
      <textarea 
        id={id}
        rows={4}
        {...props}
        className="font-outfit text-base md:text-2xl font-normal w-full bg-transparent border-b-2 
                   border-black focus:outline-none focus:border-deep-red py-2 placeholder:text-gray-500 resize-none"
      />
    </div>
  );
};