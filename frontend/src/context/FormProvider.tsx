"use client";
import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';

type FormProviderProps = {
  children: ReactNode
};

type FormData = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const defaultFormData = {
  keyword: "",
  setKeyword: () => {},
  category: "unselected",
  setCategory: () => {},
  language: "japanese",
  setLanguage: () => {},
};

export const FormContext = createContext<FormData>(defaultFormData);

const FormProvider = ({ children }: FormProviderProps) => {

  const [keyword, setKeyword] = useState<string>("");
  const [category, setCategory] = useState<string>("unselected");
  const [language, setLanguage] = useState<string>("japanese");

  return (
    <FormContext.Provider value={{keyword, setKeyword, category, setCategory, language, setLanguage}}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider;
