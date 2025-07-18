declare module "firebase/auth" {
  export declare function getReactNativePersistence(
    storage: ReactNativeAsyncStorage
  ): Persistence;
  export declare const browserSessionPersistence: Persistence;
}
