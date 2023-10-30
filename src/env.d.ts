/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly REACT_APP_FIREBASE_API_KEY: string
  readonly REACT_APP_FIREBASE_AUTH_DOMAIN: string
  readonly REACT_APP_FIREBASE_PROJECT_ID: string
  readonly REACT_APP_FIREBASE_STORAGE_BUCKET: string
  readonly REACT_APP_FIREBASE_MESSAGING_SENDER_ID: string
  readonly REACT_APP_FIREBASE_APP_ID: string
  readonly REACT_APP_FIREBASE_MEASUREMENT_ID: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
