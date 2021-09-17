import { createEffect, createSignal } from "solid-js";

export const MOBILE: "MOBILE" = "MOBILE";
export const TABLET: "TABLET" = "TABLET";
export const DESKTOP: "DESKTOP" = "DESKTOP";

type Devices = typeof MOBILE | typeof TABLET | typeof DESKTOP;

interface ViewPort {
  width: number;
  device: Devices;
}


const getDevice = (width: number): Devices => {
  if (width < 768) return MOBILE;
  else if (width < 992) return TABLET;
  else return DESKTOP;
};

export const createViewPort = () => {
  const [viewPort, setViewport] = createSignal<ViewPort>({
    width: window.innerWidth,
    device: getDevice(window.innerWidth),
  });
  createEffect<any>(() => {
    const handleResize = () =>
      setViewport({
        width: window.innerWidth,
        device: getDevice(window.innerWidth),
      });

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerHeight, window.innerHeight]);

  return  viewPort() ;
};
