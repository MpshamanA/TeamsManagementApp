import { createContext, useCallback, useState } from "react";

// set context type
type ManuContext = {
  sideToggle: boolean;
  setIsSideToggle: (isSideToggle: boolean) => void;
};
type BenefitsContext = {
  openBenefits: boolean;
  setIsOpenBenefits: (isOpenBenefits: boolean) => void;
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

// context object
export const manuContext = createContext<ManuContext>(defaultManuContext);
export const benefitsContext = createContext<BenefitsContext>(
  defaultBenefitsContext
);

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

export const SideContext: React.FC = ({ children }) => {
  return (
    <manuContext.Provider value={useSideToggle()}>
      {children}
    </manuContext.Provider>
  );
};

export const BenefitsContext: React.FC = ({ children }) => {
  return (
    <benefitsContext.Provider value={useBenefitsToggle()}>
      {children}
    </benefitsContext.Provider>
  );
};
