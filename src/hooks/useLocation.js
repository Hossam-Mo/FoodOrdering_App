import React, { useEffect } from "react";

export default function useLocation() {
  useEffect(() => {
    const a = navigator.geolocation;

    a.getCurrentPosition(
      (pos) => {
        console.log(pos);
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  return 0;
}
