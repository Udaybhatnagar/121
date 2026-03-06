import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-[#0a0c10] min-h-screen text-white">
        <Loader loading={loading} progress={progress} />
        {!loading && <AppRoutes />}
      </div>
    </BrowserRouter>
  );
}

export default App;
