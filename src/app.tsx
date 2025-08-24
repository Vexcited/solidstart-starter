import { MetaProvider, Title } from "@solidjs/meta";
import { FileRoutes } from "@solidjs/start/router";
import { Router } from "@solidjs/router";
import { Suspense } from "solid-js";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart</Title>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
