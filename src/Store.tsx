import { createContext, useCallback, useState } from "react";

import { getAuth, User } from "firebase/auth";

// set context type
type ManuContext = {
  sideToggle: boolean;
  setIsSideToggle: (isSideToggle: boolean) => void;
};
type BenefitsContext = {
  openBenefits: boolean;
  setIsOpenBenefits: (isOpenBenefits: boolean) => void;
};

type AuthContext = {
  authData: User | null;
  setIsAuthData: (isAuth: User | null) => void;
};

// context default value
const defaultManuContext: ManuContext = {
  sideToggle: false,
  setIsSideToggle: () => {},
};
const defaultBenefitsContext: BenefitsContext = {
  openBenefits: false,
  setIsOpenBenefits: () => {},
};
const defaultAuthContext: AuthContext = {
  authData: null,
  setIsAuthData: () => {},
};

// context object
export const manuContext = createContext<ManuContext>(defaultManuContext);
export const benefitsContext = createContext<BenefitsContext>(
  defaultBenefitsContext
);
export const authContext = createContext<AuthContext>(defaultAuthContext);

// custom Hook
//ハンバーガーメニュー用
export const useSideToggle = (): ManuContext => {
  // state名はManuContext typeのプロパティに合わせる。
  const [sideToggle, setSideToggle] = useState(false);
  // 関数名はManuContext typeのプロパティに合わせる。
  const setIsSideToggle = useCallback((current: boolean): void => {
    setSideToggle(current);
  }, []);
  return {
    sideToggle,
    setIsSideToggle,
  };
};
//福利厚生サイドバーメニュー用
export const useBenefitsToggle = (): BenefitsContext => {
  const [openBenefits, setBenefitsToggle] = useState(false);

  const setIsOpenBenefits = useCallback((current: boolean): void => {
    setBenefitsToggle(current);
  }, []);
  return {
    openBenefits,
    setIsOpenBenefits,
  };
};

//auth情報を保持
export const useGetAuth = () => {
  const [authData, setAuthData] = useState<User | null>(null);

  const setIsAuthData = useCallback((current: User | null): void => {
    setAuthData(current);
  }, []);
  return {
    authData,
    setIsAuthData,
  };
};

export const ManuStoreContext: React.FC = ({ children }) => {
  return (
    <manuContext.Provider value={useSideToggle()}>
      {children}
    </manuContext.Provider>
  );
};

export const BenefitsStoreContext: React.FC = ({ children }) => {
  return (
    <benefitsContext.Provider value={useBenefitsToggle()}>
      {children}
    </benefitsContext.Provider>
  );
};

export const AuthDataStoreContext: React.FC = ({ children }) => {
  return (
    <authContext.Provider value={useGetAuth()}>{children}</authContext.Provider>
  );
};
