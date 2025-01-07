import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GlobalRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let { pathname, search } = location;
    const urlParams = new URLSearchParams(search);

    if (!pathname.startsWith("/dashboard")) {
      pathname = `/dashboard${pathname}`;
    }

    if (!urlParams.has("date")) {
      urlParams.set("date", "01-01-2025");
    }

    const updatedUrl = `${pathname}?${urlParams.toString()}`;
    if (location.pathname + location.search !== updatedUrl) {
      navigate(updatedUrl, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default GlobalRedirect;
