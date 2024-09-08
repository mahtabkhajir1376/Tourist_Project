"use client";
import { Provider } from "react-redux";
import { store } from "@/container/store";
import { ReactNode } from "react";

interface ReduxProviderProps {
  children: ReactNode;
}

export const ReduxProvider:React.FC<ReduxProviderProps>=({ children })=> {
  return <Provider store={store}>{children}</Provider>
}
