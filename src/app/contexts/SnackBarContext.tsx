import React, { createContext, useState } from 'react';

export type SnackBarContextType = {
  setSnackBarState: (newState: { isOpen: boolean; message: string }) => void;
};

export const SnackBarContext = createContext<SnackBarContextType | null>(null);
