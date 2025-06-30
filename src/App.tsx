import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { initDarkMode } from "./store/darkModeSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";

interface Notification {
  title?: string;
  message: string;
  alert_type: "success" | "error" | "info" | "warning";
}

function ShowNotification(notification?: Notification) {
  if (!notification?.message || !notification?.alert_type) return;

  toast[notification.alert_type](
    <div>
      {notification.title && <strong>{notification.title}</strong>}
      {Array.isArray(notification.message) ? (
        <ul className="list-disc pl-4">
          {notification.message.map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      ) : (
        <span>{notification.message}</span>
      )}
    </div>
  );
}

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(initDarkMode());
	}, [dispatch]);


	return (
		<BrowserRouter>
			<Router />
			<ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} transition={Bounce} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover closeButton theme="light" limit={1} toastClassName="custom-toast" />
		</BrowserRouter>
	);
}

export default App;
