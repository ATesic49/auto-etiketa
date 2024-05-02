"use client";
import React, { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { createStore } from "./store";
import { dodajSveUKorpu, korpaState } from "./slices/korpaSlice";

export default function ReduxProvider({ children, tags }: { tags: korpaState[], children: ReactNode }) {
    const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
    if (!storeRef.current) {
        storeRef.current = createStore();
        if (tags) {
            storeRef.current.dispatch(dodajSveUKorpu(tags));
        }
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}
