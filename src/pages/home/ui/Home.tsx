import { AppHeader } from "@/widgets/app-header";

import { SaveFileCard } from "@/widgets/save-file-card";
import { ReadFileCard } from "@/widgets/read-file-card";
import { SaveExtFileCard } from "@/widgets/save-ext-file-card";
import { LoadExtFileCard } from "@/widgets/load-ext-file-card";
import { IonContent } from "@ionic/react";
import { ReadFilePathCard } from "@/widgets/read-file-path-card";

function Home() {
  return (
    <>
      <AppHeader />
      <IonContent className={`ion-padding md content-ltr hydrated`}>
        <SaveFileCard />
        <ReadFileCard />
        <ReadFilePathCard />
        <SaveExtFileCard />
        <LoadExtFileCard />
      </IonContent>
    </>
  );
}

export default Home;
