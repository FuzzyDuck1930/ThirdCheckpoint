export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  MENU: "MENU";
};

export enum SomeActions {
  "CHANGESCREEN" = "CHANGESCREEN",
}

export interface CHANGESCREEN {
  action: SomeActions.CHANGESCREEN;
  payload: Pick<AppState, "MENU">;
}

export type Actions = CHANGESCREEN;
