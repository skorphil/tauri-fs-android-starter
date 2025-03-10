import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.always.css";
import "../ui/variables.css";

import { IonApp, setupIonicReact } from "@ionic/react";
import { Home } from "@/pages/home";

setupIonicReact({ mode: "md" });

function App() {
  return (
    <IonApp>
      <Home />
    </IonApp>
  );
}

export default App;
