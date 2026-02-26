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

// Reload when the page/tab becomes visible again (e.g., user Alt+Tabs back)
// This will run once per session (uses `hp_reloaded_on_focus` flag) to avoid loops
try {
	if (typeof window !== "undefined") {
		const handleVisibility = () => {
			try {
				if (document.visibilityState === "hidden") {
					// record when it was hidden
					sessionStorage.setItem("hp_hidden_at", String(Date.now()));
					return;
				}

				// when visible again
				const already = sessionStorage.getItem("hp_reloaded_on_focus");
				if (already) return;

				const hiddenAt = parseInt(sessionStorage.getItem("hp_hidden_at") || "0", 10);
				const now = Date.now();
				// only reload if it was hidden for at least 200ms (avoid reload right away)
				if (hiddenAt && now - hiddenAt > 200) {
					sessionStorage.setItem("hp_reloaded_on_focus", "1");
					window.setTimeout(() => window.location.reload(), 100);
				}
			} catch (e) {
				// ignore
			}
		};

		document.addEventListener("visibilitychange", handleVisibility, false);

		// Some environments trigger focus rather than visibilitychange; add a fallback
		const onFocus = () => {
			try {
				if (sessionStorage.getItem("hp_reloaded_on_focus")) return;
				sessionStorage.setItem("hp_reloaded_on_focus", "1");
				window.setTimeout(() => window.location.reload(), 100);
			} catch (e) {
				// ignore
			}
		};

		window.addEventListener("focus", onFocus);
	}
} catch (e) {
	// ignore
}

createRoot(document.getElementById("root")!).render(<App />);
