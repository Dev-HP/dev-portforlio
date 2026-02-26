import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Auto-reload once per session to ensure a clean recording load
// This reload runs only once per browser session to avoid infinite loops
try {
	if (typeof window !== "undefined" && !sessionStorage.getItem("hp_reloaded_once")) {
		sessionStorage.setItem("hp_reloaded_once", "1");
		// small delay to allow analytics or other scripts to initialize before reload
		window.setTimeout(() => window.location.reload(), 100);
	}
} catch (e) {
	// ignore storage errors (e.g., privacy mode)
}

createRoot(document.getElementById("root")!).render(<App />);
