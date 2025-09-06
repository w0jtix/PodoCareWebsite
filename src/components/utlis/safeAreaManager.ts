export class SafeAreaManager {
  private static instance: SafeAreaManager;
  private metaElement: HTMLMetaElement | null = null;
  private readonly LIGHT_COLOR = '#D7D7D7';
  private readonly DARK_COLOR = '#000000';
  
  private constructor() {
    this.metaElement = document.querySelector('meta[name="msapplication-navbutton-color"]');
    if (!this.metaElement) {
      console.warn('Meta tag for msapplication-navbutton-color not found');
    }
  }

  public static getInstance(): SafeAreaManager {
    if (!SafeAreaManager.instance) {
      SafeAreaManager.instance = new SafeAreaManager();
    }
    return SafeAreaManager.instance;
  }

  public setLightMode(): void {
    this.updateColor(this.LIGHT_COLOR);
  }

  public setDarkMode(): void {
    this.updateColor(this.DARK_COLOR);
  }

  private updateColor(color: string): void {
    if (this.metaElement) {
      requestAnimationFrame(() => {
        if (this.metaElement) {
          this.metaElement.setAttribute('content', color);
        }
      });
    }
  }
}

import { useEffect } from 'react';

export const useSafeAreaColor = (isDark: boolean) => {
  useEffect(() => {
    const safeAreaManager = SafeAreaManager.getInstance();
    
    if (isDark) {
      safeAreaManager.setDarkMode();
    } else {
      safeAreaManager.setLightMode();
    }
  }, [isDark]);
};

export const useSafeAreaForPopup = (isPopupOpen: boolean) => {
  useEffect(() => {
    const safeAreaManager = SafeAreaManager.getInstance();
    
    if (isPopupOpen) {
      safeAreaManager.setDarkMode();
    } else {
      safeAreaManager.setLightMode();
    }
    
    return () => {
      if (!isPopupOpen) {
        safeAreaManager.setLightMode();
      }
    };
  }, [isPopupOpen]);
};